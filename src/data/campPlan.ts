/**
 * Camp questionnaire plan.
 *
 * Structure:
 * - 30 questions total, organized in 15 pairs (Q1/Q2, Q3/Q4, ..., Q29/Q30)
 * - 6 teams: Branca, Amarela, Verde, Azul, Vermelha, Laranja
 * - Each pair is PLAYABLE by exactly 2 teams (live game)
 * - Each pair is ANSWERED by the other 4 teams (questionnaire before the game)
 * - Each team answers 20 questions in the questionnaire (10 pairs as respondents)
 * - Each team plays/guesses 10 questions live (5 pairs as the playing teams)
 */

export type TeamKey = "branca" | "amarela" | "verde" | "azul" | "vermelha" | "laranja";

export type CampPair = {
  pairNumber: number;
  questionNumbers: [number, number];
  /** Teams that PLAY this pair live (can guess answers) */
  playableByTeams: [TeamKey, TeamKey];
  /** Teams that ANSWERED this pair in the questionnaire */
  respondentTeams: [TeamKey, TeamKey, TeamKey, TeamKey];
};

const ALL_TEAMS: TeamKey[] = ["branca", "amarela", "verde", "azul", "vermelha", "laranja"];

function respondentsFor(playable: [TeamKey, TeamKey]): [TeamKey, TeamKey, TeamKey, TeamKey] {
  return ALL_TEAMS.filter((t) => !playable.includes(t)) as [TeamKey, TeamKey, TeamKey, TeamKey];
}

export const CAMP_PAIRS: CampPair[] = [
  { pairNumber: 1,  questionNumbers: [1,  2],  playableByTeams: ["branca",   "amarela"],  respondentTeams: respondentsFor(["branca",   "amarela"])  },
  { pairNumber: 2,  questionNumbers: [3,  4],  playableByTeams: ["branca",   "verde"],    respondentTeams: respondentsFor(["branca",   "verde"])    },
  { pairNumber: 3,  questionNumbers: [5,  6],  playableByTeams: ["branca",   "azul"],     respondentTeams: respondentsFor(["branca",   "azul"])     },
  { pairNumber: 4,  questionNumbers: [7,  8],  playableByTeams: ["branca",   "vermelha"], respondentTeams: respondentsFor(["branca",   "vermelha"]) },
  { pairNumber: 5,  questionNumbers: [9,  10], playableByTeams: ["branca",   "laranja"],  respondentTeams: respondentsFor(["branca",   "laranja"])  },
  { pairNumber: 6,  questionNumbers: [11, 12], playableByTeams: ["amarela",  "verde"],    respondentTeams: respondentsFor(["amarela",  "verde"])    },
  { pairNumber: 7,  questionNumbers: [13, 14], playableByTeams: ["amarela",  "azul"],     respondentTeams: respondentsFor(["amarela",  "azul"])     },
  { pairNumber: 8,  questionNumbers: [15, 16], playableByTeams: ["amarela",  "vermelha"], respondentTeams: respondentsFor(["amarela",  "vermelha"]) },
  { pairNumber: 9,  questionNumbers: [17, 18], playableByTeams: ["amarela",  "laranja"],  respondentTeams: respondentsFor(["amarela",  "laranja"])  },
  { pairNumber: 10, questionNumbers: [19, 20], playableByTeams: ["verde",    "azul"],     respondentTeams: respondentsFor(["verde",    "azul"])     },
  { pairNumber: 11, questionNumbers: [21, 22], playableByTeams: ["verde",    "vermelha"], respondentTeams: respondentsFor(["verde",    "vermelha"]) },
  { pairNumber: 12, questionNumbers: [23, 24], playableByTeams: ["verde",    "laranja"],  respondentTeams: respondentsFor(["verde",    "laranja"])  },
  { pairNumber: 13, questionNumbers: [25, 26], playableByTeams: ["azul",     "vermelha"], respondentTeams: respondentsFor(["azul",     "vermelha"]) },
  { pairNumber: 14, questionNumbers: [27, 28], playableByTeams: ["azul",     "laranja"],  respondentTeams: respondentsFor(["azul",     "laranja"])  },
  { pairNumber: 15, questionNumbers: [29, 30], playableByTeams: ["vermelha", "laranja"],  respondentTeams: respondentsFor(["vermelha", "laranja"])  },
];

/** Returns which question numbers a team answered in the questionnaire (20 per team). */
export function getTeamQuestionnaire(team: TeamKey): number[] {
  return CAMP_PAIRS.filter((p) => p.respondentTeams.includes(team))
    .flatMap((p) => p.questionNumbers)
    .sort((a, b) => a - b);
}

/** Returns which question numbers a team can play live (10 per team). */
export function getTeamPlayableQuestions(team: TeamKey): number[] {
  return CAMP_PAIRS.filter((p) => p.playableByTeams.includes(team))
    .flatMap((p) => p.questionNumbers)
    .sort((a, b) => a - b);
}

/** Returns which teams answered a given question number (4 per question). */
export function getQuestionRespondents(questionNumber: number): TeamKey[] {
  const pair = CAMP_PAIRS.find((p) => p.questionNumbers.includes(questionNumber as never));
  return pair ? [...pair.respondentTeams] : [];
}

/** Returns which teams can play a given question number live (2 per question). */
export function getQuestionPlayableTeams(questionNumber: number): TeamKey[] {
  const pair = CAMP_PAIRS.find((p) => p.questionNumbers.includes(questionNumber as never));
  return pair ? [...pair.playableByTeams] : [];
}

/** Human-readable summary of each team's questionnaire plan. */
export const TEAM_QUESTIONNAIRE_SUMMARY: Record<TeamKey, { answered: number[]; plays: number[] }> = {
  branca:   { answered: getTeamQuestionnaire("branca"),   plays: getTeamPlayableQuestions("branca")   },
  amarela:  { answered: getTeamQuestionnaire("amarela"),  plays: getTeamPlayableQuestions("amarela")  },
  verde:    { answered: getTeamQuestionnaire("verde"),    plays: getTeamPlayableQuestions("verde")    },
  azul:     { answered: getTeamQuestionnaire("azul"),     plays: getTeamPlayableQuestions("azul")     },
  vermelha: { answered: getTeamQuestionnaire("vermelha"), plays: getTeamPlayableQuestions("vermelha") },
  laranja:  { answered: getTeamQuestionnaire("laranja"),  plays: getTeamPlayableQuestions("laranja")  },
};

// ── Self-validating assertions (run at module load in dev) ────────────────────

function assertCampPlanIntegrity() {
  const errors: string[] = [];
  const allQNums = Array.from({ length: 30 }, (_, i) => i + 1);

  // Every question must appear in exactly one pair
  const coveredQs = new Set(CAMP_PAIRS.flatMap((p) => p.questionNumbers));
  for (const n of allQNums) {
    if (!coveredQs.has(n)) errors.push(`Q${n} not covered by any pair`);
  }

  for (const pair of CAMP_PAIRS) {
    // Each pair: exactly 2 playable teams
    if (pair.playableByTeams.length !== 2)
      errors.push(`Pair ${pair.pairNumber}: expected 2 playable teams, got ${pair.playableByTeams.length}`);

    // Each pair: exactly 4 respondent teams
    if (pair.respondentTeams.length !== 4)
      errors.push(`Pair ${pair.pairNumber}: expected 4 respondent teams, got ${pair.respondentTeams.length}`);

    // No overlap between playable and respondent
    for (const t of pair.playableByTeams) {
      if (pair.respondentTeams.includes(t))
        errors.push(`Pair ${pair.pairNumber}: ${t} is in both playable and respondent lists`);
    }

    // Together they cover all 6 teams
    const combined = new Set([...pair.playableByTeams, ...pair.respondentTeams]);
    if (combined.size !== 6)
      errors.push(`Pair ${pair.pairNumber}: playable+respondent does not cover all 6 teams`);
  }

  for (const team of ALL_TEAMS) {
    const plays = getTeamPlayableQuestions(team);
    const answered = getTeamQuestionnaire(team);

    if (plays.length !== 10)
      errors.push(`${team}: expected 10 playable questions, got ${plays.length}`);
    if (answered.length !== 20)
      errors.push(`${team}: expected 20 answered questions, got ${answered.length}`);

    // No question appears in both lists
    const overlap = plays.filter((q) => answered.includes(q));
    if (overlap.length > 0)
      errors.push(`${team}: questions in both playable and answered: ${overlap.join(", ")}`);

    // Together they cover all 30 questions
    const all = new Set([...plays, ...answered]);
    if (all.size !== 30)
      errors.push(`${team}: playable+answered does not cover all 30 questions`);
  }

  if (errors.length > 0) {
    console.error("[campPlan] Integrity check FAILED:");
    errors.forEach((e) => console.error(" •", e));
  } else {
    console.log("[campPlan] Integrity check passed ✓ (15 pairs, 30 Qs, 6 teams, 2 playable / 4 respondents per pair, 10 plays / 20 answered per team)");
  }
}

if (import.meta.env.DEV) {
  assertCampPlanIntegrity();
}
