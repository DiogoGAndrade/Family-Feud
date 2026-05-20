import type { FeudGame, FeudQuestion, FeudAnswer } from "../types";
import { normalizeText } from "./normalizeText";

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
  const pointsToAdd = addPoints ? revealedAnswer.points : 0;

  const teams = game.teams.map((t) => {
    if (t.id !== activeTeamId) return t;
    return { ...t, score: t.score + pointsToAdd };
  });

  const updatedGame = { ...game, questions, teams };
  const result: GuessResult = {
    hit: true,
    answer: revealedAnswer,
    questionCompleted: updatedQuestion.completed,
  };

  return { game: updatedGame, result };
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
