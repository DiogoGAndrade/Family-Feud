/**
 * Camp questionnaire plan — alphabetical team order.
 *
 * Teams (alphabetical): Amarela, Azul, Branca, Laranja, Verde, Vermelha
 * 30 questions / 15 pairs / 6 teams
 *
 * Each pair:  playable by 2 teams, answered by the other 4.
 * Each team:  plays 10 questions (5 pairs), answers 20 questions (10 pairs).
 *
 * Team IDs in the sample game:
 *   t1 = Amarela  t2 = Azul  t3 = Branca
 *   t4 = Laranja  t5 = Verde  t6 = Vermelha
 */

export type TeamKey = "amarela" | "azul" | "branca" | "laranja" | "verde" | "vermelha";

export type CampPair = {
  pairNumber: number;
  questionNumbers: [number, number];
  /** The 2 teams that PLAY this pair live (can guess answers). */
  playableByTeams: [TeamKey, TeamKey];
  /** The 4 teams that ANSWERED this pair in the questionnaire. */
  respondentTeams: [TeamKey, TeamKey, TeamKey, TeamKey];
};

const ALL_TEAMS: TeamKey[] = ["amarela", "azul", "branca", "laranja", "verde", "vermelha"];

function respondentsFor(
  playable: [TeamKey, TeamKey]
): [TeamKey, TeamKey, TeamKey, TeamKey] {
  return ALL_TEAMS.filter((t) => !playable.includes(t)) as [
    TeamKey,
    TeamKey,
    TeamKey,
    TeamKey,
  ];
}

export const CAMP_PAIRS: CampPair[] = [
  { pairNumber: 1,  questionNumbers: [1,  2],  playableByTeams: ["amarela",  "azul"],     respondentTeams: respondentsFor(["amarela",  "azul"])     },
  { pairNumber: 2,  questionNumbers: [3,  4],  playableByTeams: ["amarela",  "branca"],   respondentTeams: respondentsFor(["amarela",  "branca"])   },
  { pairNumber: 3,  questionNumbers: [5,  6],  playableByTeams: ["amarela",  "laranja"],  respondentTeams: respondentsFor(["amarela",  "laranja"])  },
  { pairNumber: 4,  questionNumbers: [7,  8],  playableByTeams: ["amarela",  "verde"],    respondentTeams: respondentsFor(["amarela",  "verde"])    },
  { pairNumber: 5,  questionNumbers: [9,  10], playableByTeams: ["amarela",  "vermelha"], respondentTeams: respondentsFor(["amarela",  "vermelha"]) },
  { pairNumber: 6,  questionNumbers: [11, 12], playableByTeams: ["azul",     "branca"],   respondentTeams: respondentsFor(["azul",     "branca"])   },
  { pairNumber: 7,  questionNumbers: [13, 14], playableByTeams: ["azul",     "laranja"],  respondentTeams: respondentsFor(["azul",     "laranja"])  },
  { pairNumber: 8,  questionNumbers: [15, 16], playableByTeams: ["azul",     "verde"],    respondentTeams: respondentsFor(["azul",     "verde"])    },
  { pairNumber: 9,  questionNumbers: [17, 18], playableByTeams: ["azul",     "vermelha"], respondentTeams: respondentsFor(["azul",     "vermelha"]) },
  { pairNumber: 10, questionNumbers: [19, 20], playableByTeams: ["branca",   "laranja"],  respondentTeams: respondentsFor(["branca",   "laranja"])  },
  { pairNumber: 11, questionNumbers: [21, 22], playableByTeams: ["branca",   "verde"],    respondentTeams: respondentsFor(["branca",   "verde"])    },
  { pairNumber: 12, questionNumbers: [23, 24], playableByTeams: ["branca",   "vermelha"], respondentTeams: respondentsFor(["branca",   "vermelha"]) },
  { pairNumber: 13, questionNumbers: [25, 26], playableByTeams: ["laranja",  "verde"],    respondentTeams: respondentsFor(["laranja",  "verde"])    },
  { pairNumber: 14, questionNumbers: [27, 28], playableByTeams: ["laranja",  "vermelha"], respondentTeams: respondentsFor(["laranja",  "vermelha"]) },
  { pairNumber: 15, questionNumbers: [29, 30], playableByTeams: ["verde",    "vermelha"], respondentTeams: respondentsFor(["verde",    "vermelha"]) },
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
  const pair = CAMP_PAIRS.find((p) =>
    p.questionNumbers.includes(questionNumber as never)
  );
  return pair ? [...pair.respondentTeams] : [];
}

/** Returns which teams can play a given question number live (2 per question). */
export function getQuestionPlayableTeams(questionNumber: number): TeamKey[] {
  const pair = CAMP_PAIRS.find((p) =>
    p.questionNumbers.includes(questionNumber as never)
  );
  return pair ? [...pair.playableByTeams] : [];
}

/** Human-readable summary of each team's questionnaire plan. */
export const TEAM_QUESTIONNAIRE_SUMMARY: Record<
  TeamKey,
  { answered: number[]; plays: number[] }
> = {
  amarela:  { answered: getTeamQuestionnaire("amarela"),  plays: getTeamPlayableQuestions("amarela")  },
  azul:     { answered: getTeamQuestionnaire("azul"),     plays: getTeamPlayableQuestions("azul")     },
  branca:   { answered: getTeamQuestionnaire("branca"),   plays: getTeamPlayableQuestions("branca")   },
  laranja:  { answered: getTeamQuestionnaire("laranja"),  plays: getTeamPlayableQuestions("laranja")  },
  verde:    { answered: getTeamQuestionnaire("verde"),    plays: getTeamPlayableQuestions("verde")    },
  vermelha: { answered: getTeamQuestionnaire("vermelha"), plays: getTeamPlayableQuestions("vermelha") },
};

// ── Self-validating assertions (DEV only) ─────────────────────────────────────

function assertCampPlanIntegrity() {
  const errors: string[] = [];
  const allQNums = Array.from({ length: 30 }, (_, i) => i + 1);

  const coveredQs = new Set(CAMP_PAIRS.flatMap((p) => p.questionNumbers));
  for (const n of allQNums) {
    if (!coveredQs.has(n)) errors.push(`Q${n} not covered by any pair`);
  }

  for (const pair of CAMP_PAIRS) {
    if (pair.playableByTeams.length !== 2)
      errors.push(`Pair ${pair.pairNumber}: expected 2 playable teams`);
    if (pair.respondentTeams.length !== 4)
      errors.push(`Pair ${pair.pairNumber}: expected 4 respondent teams`);
    for (const t of pair.playableByTeams) {
      if (pair.respondentTeams.includes(t))
        errors.push(`Pair ${pair.pairNumber}: ${t} in both playable and respondent`);
    }
    const combined = new Set([...pair.playableByTeams, ...pair.respondentTeams]);
    if (combined.size !== 6)
      errors.push(`Pair ${pair.pairNumber}: does not cover all 6 teams`);
  }

  for (const team of ALL_TEAMS) {
    const plays = getTeamPlayableQuestions(team);
    const answered = getTeamQuestionnaire(team);
    if (plays.length !== 10)
      errors.push(`${team}: expected 10 playable, got ${plays.length}`);
    if (answered.length !== 20)
      errors.push(`${team}: expected 20 answered, got ${answered.length}`);
    const overlap = plays.filter((q) => answered.includes(q));
    if (overlap.length > 0)
      errors.push(`${team}: questions in both lists: ${overlap.join(", ")}`);
    if (new Set([...plays, ...answered]).size !== 30)
      errors.push(`${team}: playable+answered does not cover all 30 questions`);
  }

  if (errors.length > 0) {
    console.error("[campPlan] Integrity check FAILED:");
    errors.forEach((e) => console.error(" •", e));
  } else {
    console.log(
      "[campPlan] ✓ 15 pairs · 30 Qs · 6 teams · 2 playable / 4 respondents per pair · 10 plays / 20 answered per team"
    );
  }
}

if (import.meta.env.DEV) {
  assertCampPlanIntegrity();
}
