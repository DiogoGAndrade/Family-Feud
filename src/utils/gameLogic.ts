import type { FeudGame, FeudQuestion, FeudAnswer, ScoringMode } from "../types";
import { normalizeText } from "./normalizeText";
import { generateId } from "./idGen";

/**
 * Returns eligible questions for a team.
 *
 * Rules:
 * - Exclude completed questions
 * - Include only if playableByTeamIds contains teamId
 * - Exclude if respondentTeamIds contains teamId
 *   (unless playableByTeamIds explicitly contains teamId, which overrides for camp mode)
 * - In camp mode, playableByTeamIds always wins over respondentTeamIds
 * - Return in original question order
 */
export function getEligibleQuestionsForTeam(
  game: FeudGame,
  teamId: string
): FeudQuestion[] {
  return game.questions.filter((q) => {
    if (q.completed) return false;
    const isPlayable = q.playableByTeamIds.includes(teamId);
    if (!isPlayable) return false;

    // In camp mode, being explicitly listed in playableByTeamIds overrides respondentTeamIds
    if (game.mode === "camp") return true;

    // In standard mode, exclude if team was a respondent
    const wasRespondent = q.respondentTeamIds.includes(teamId);
    return !wasRespondent;
  });
}

/**
 * Returns how many questions a team still has to play.
 */
export function getTeamRemainingQuestions(
  game: FeudGame,
  teamId: string
): FeudQuestion[] {
  return getEligibleQuestionsForTeam(game, teamId);
}

/**
 * Returns true if a team has no more questions to play.
 */
export function isTeamFinished(game: FeudGame, teamId: string): boolean {
  return getEligibleQuestionsForTeam(game, teamId).length === 0;
}

/**
 * Attempts to match a guess against all unrevealed answers (including aliases).
 * Returns the matched answer or null.
 */
export function findMatchingAnswer(
  question: FeudQuestion,
  guess: string
): FeudAnswer | null {
  const normalizedGuess = normalizeText(guess);
  for (const answer of question.answers) {
    if (answer.revealed) continue;
    const texts = [answer.text, ...answer.aliases];
    for (const t of texts) {
      if (normalizeText(t) === normalizedGuess) {
        return answer;
      }
    }
  }
  return null;
}

export type GuessResult =
  | { hit: true; answer: FeudAnswer; questionCompleted: boolean }
  | { hit: false };

/**
 * Pure function: given a game state, a question ID, a team ID, and a guess,
 * returns an updated game and a result indicating hit/miss.
 *
 * Does NOT mutate the input game.
 */
export function submitGuess(
  game: FeudGame,
  questionId: string,
  activeTeamId: string,
  guess: string
): { game: FeudGame; result: GuessResult } {
  const qIndex = game.questions.findIndex((q) => q.id === questionId);
  if (qIndex === -1) return { game, result: { hit: false } };

  const question = game.questions[qIndex];
  const matched = findMatchingAnswer(question, guess);
  if (!matched) return { game, result: { hit: false } };

  return revealAnswer(game, questionId, matched.id, activeTeamId, true);
}

/**
 * Pure function: reveals a specific answer by ID.
 * Adds points to activeTeamId's score if addPoints is true.
 * Marks the question as completed if all answers are revealed.
 *
 * Does NOT mutate the input game.
 */
export function revealAnswer(
  game: FeudGame,
  questionId: string,
  answerId: string,
  activeTeamId: string,
  addPoints: boolean
): { game: FeudGame; result: GuessResult } {
  const questions = game.questions.map((q) => {
    if (q.id !== questionId) return q;

    let revealedAnswer: FeudAnswer | null = null;
    const updatedAnswers = q.answers.map((a) => {
      if (a.id !== answerId) return a;
      revealedAnswer = a;
      return { ...a, revealed: true };
    });

    if (!revealedAnswer) return q;

    const allRevealed = updatedAnswers.every((a) => a.revealed);
    return { ...q, answers: updatedAnswers, completed: allRevealed };
  });

  const updatedQuestion = questions.find((q) => q.id === questionId)!;
  const revealedAnswer = updatedQuestion.answers.find((a) => a.id === answerId)!;

  let teams: typeof game.teams;
  if (addPoints && game.settings.specialCampScoring) {
    const rare = isRareAnswer(revealedAnswer);
    teams = game.teams.map((t) => {
      if (t.id !== activeTeamId) return t;
      const normalHits = (t.normalHits ?? 0) + (rare ? 0 : 1);
      const rareHits = (t.rareHits ?? 0) + (rare ? 1 : 0);
      return {
        ...t,
        normalHits,
        rareHits,
        score: getSpecialCampScoreValue(normalHits, rareHits),
      };
    });
  } else {
    const pointsToAdd = addPoints ? revealedAnswer.points : 0;
    teams = game.teams.map((t) => {
      if (t.id !== activeTeamId) return t;
      return { ...t, score: t.score + pointsToAdd };
    });
  }

  const updatedGame = { ...game, questions, teams };
  const result: GuessResult = {
    hit: true,
    answer: revealedAnswer,
    questionCompleted: updatedQuestion.completed,
  };

  return { game: updatedGame, result };
}

/**
 * Resets a game to its initial play state.
 * Clears all scores, unreveals all answers, marks all questions incomplete.
 * Pure function — does NOT mutate the input.
 */
export function resetGameState(game: FeudGame): FeudGame {
  return {
    ...game,
    teams: game.teams.map((t) => ({ ...t, score: 0, normalHits: 0, rareHits: 0 })),
    questions: game.questions.map((q) => ({
      ...q,
      completed: false,
      answers: q.answers.map((a) => ({ ...a, revealed: false })),
    })),
  };
}

/**
 * Creates a full copy of a game with fresh IDs, reset scores, and unrevealed answers.
 * Team IDs are remapped so respondentTeamIds/playableByTeamIds stay consistent.
 * Pure function.
 */
export function duplicateGame(game: FeudGame): FeudGame {
  const teamIdMap: Record<string, string> = {};
  const teams = game.teams.map((t) => {
    const newId = generateId();
    teamIdMap[t.id] = newId;
    return { ...t, id: newId, score: 0, normalHits: 0, rareHits: 0 };
  });

  const questions = game.questions.map((q) => ({
    ...q,
    id: generateId(),
    completed: false,
    respondentTeamIds: q.respondentTeamIds.map((id) => teamIdMap[id] ?? id),
    playableByTeamIds: q.playableByTeamIds.map((id) => teamIdMap[id] ?? id),
    answers: q.answers.map((a) => ({ ...a, id: generateId(), revealed: false })),
  }));

  return {
    ...game,
    id: generateId(),
    title: `${game.title} (Cópia)`,
    teams,
    questions,
    isTemplate: false,
  };
}

/**
 * Marks a question as completed if all its answers are revealed.
 * Pure function.
 */
export function markQuestionCompletedIfNeeded(
  game: FeudGame,
  questionId: string
): FeudGame {
  const questions = game.questions.map((q) => {
    if (q.id !== questionId) return q;
    const allRevealed = q.answers.every((a) => a.revealed);
    return { ...q, completed: allRevealed };
  });
  return { ...game, questions };
}

// ── Special camp scoring ──────────────────────────────────────────────────────

/** Rare = answer with exactly 1 vote. */
export function isRareAnswer(answer: FeudAnswer): boolean {
  return answer.votes === 1;
}

/**
 * Returns the display string for a team's camp score.
 * Examples: 0,0→"0"  4,0→"4"  0,2→"2x2"  2,3→"2+3x2"
 */
export function getSpecialCampScoreDisplay(normalHits: number, rareHits: number): string {
  if (normalHits === 0 && rareHits === 0) return "0";
  if (rareHits === 0) return `${normalHits}`;
  if (normalHits === 0) return `${rareHits}x2`;
  return `${normalHits}+${rareHits}x2`;
}

/** Calculated total for ranking: normalHits + rareHits × 2. */
export function getSpecialCampScoreValue(normalHits: number, rareHits: number): number {
  return normalHits + rareHits * 2;
}

// ── Scoring utilities ─────────────────────────────────────────────────────────

/**
 * Calculates points for a single answer given its votes, the question's
 * respondentCount, and the active scoring mode.
 *
 * raw_votes:       points = votes   (default, camp-safe)
 * normalized_100:  points = round((votes / respondentCount) * 100)
 *                  Falls back to raw_votes if respondentCount is 0/invalid.
 */
export function calculateAnswerPoints(
  answerVotes: number,
  respondentCount: number,
  scoringMode: ScoringMode
): number {
  if (scoringMode === "normalized_100" && respondentCount > 0) {
    return Math.round((answerVotes / respondentCount) * 100);
  }
  return answerVotes;
}

/**
 * Recalculates all answer.points for a question based on the scoring mode.
 * Does NOT change answer.votes. Pure function.
 */
export function recalculateQuestionPoints(
  question: FeudQuestion,
  scoringMode: ScoringMode
): FeudQuestion {
  return {
    ...question,
    answers: question.answers.map((a) => ({
      ...a,
      points: calculateAnswerPoints(a.votes, question.respondentCount, scoringMode),
    })),
  };
}

/**
 * Recalculates points for every question in the game using game.scoringMode.
 * Call this whenever scoringMode changes. Pure function.
 */
export function recalculateGamePoints(game: FeudGame): FeudGame {
  return {
    ...game,
    questions: game.questions.map((q) =>
      recalculateQuestionPoints(q, game.scoringMode)
    ),
  };
}

// ── Validation ────────────────────────────────────────────────────────────────

export type ValidationWarning = {
  level: "error" | "warning";
  message: string;
  questionId?: string;
};

/**
 * Returns a list of validation warnings for a game.
 * Does not mutate anything — just inspects and reports.
 */
export function validateGame(game: FeudGame): ValidationWarning[] {
  const warnings: ValidationWarning[] = [];

  if (!game.scoringMode) {
    warnings.push({
      level: "warning",
      message: "scoringMode não definido — a usar raw_votes por padrão.",
    });
  }

  if (game.mode === "camp" && game.teams.length !== 6) {
    warnings.push({
      level: "warning",
      message: `Modo Campo normalmente usa 6 equipas, mas este jogo tem ${game.teams.length}.`,
    });
  }

  for (const q of game.questions) {
    const overlap = q.respondentTeamIds.filter((id) =>
      q.playableByTeamIds.includes(id)
    );
    if (overlap.length > 0) {
      const names = overlap
        .map((id) => game.teams.find((t) => t.id === id)?.name ?? id)
        .join(", ");
      warnings.push({
        level: "warning",
        message: `"${q.text.slice(0, 50)}": equipas em respondentes E jogáveis: ${names}.`,
        questionId: q.id,
      });
    }
  }

  for (const q of game.questions) {
    const mode: ScoringMode = game.scoringMode ?? "raw_votes";

    if (mode === "normalized_100" && (!q.respondentCount || q.respondentCount <= 0)) {
      warnings.push({
        level: "error",
        message: `"${q.text.slice(0, 50)}": respondentCount inválido para o modo normalizado.`,
        questionId: q.id,
      });
    }

    for (const a of q.answers) {
      if (mode === "raw_votes" && a.points !== a.votes) {
        warnings.push({
          level: "warning",
          message: `"${a.text}": pontos (${a.points}) ≠ votos (${a.votes}) em modo Votos=Pontos.`,
          questionId: q.id,
        });
      }
      if (mode === "normalized_100" && q.respondentCount > 0) {
        const expected = Math.round((a.votes / q.respondentCount) * 100);
        if (a.points !== expected) {
          warnings.push({
            level: "warning",
            message: `"${a.text}": pontos (${a.points}) ≠ esperado (${expected}) para normalizado.`,
            questionId: q.id,
          });
        }
      }
    }
  }

  return warnings;
}
