/**
 * Camp questionnaire plan.
 *
 * Structure:
 * - 30 questions total, organized in 15 pairs (Q1/Q2, Q3/Q4, ..., Q29/Q30)
 * - 6 teams: Branca, Amarela, Verde, Azul, Vermelha, Laranja
 * - Each team answered 10 questions (5 pairs)
 * - Each team plays the 20 questions answered by the other 4 teams (10 pairs)
 *
 * Each pair is answered by exactly 2 teams, giving:
 *   Pairs 1-2:  Branca + Amarela answered
 *   Pairs 3-4:  Branca + Verde answered
 *   Pairs 5-6:  Amarela + Azul answered
 *   Pairs 7-8:  Verde + Vermelha answered
 *   Pairs 9-10: Azul + Laranja answered
 *   Pairs 11-12: Vermelha + Laranja answered
 *   Pairs 13-14: Branca + Laranja answered  (rounds out to 10 per team)
 *   Pair 15:    Amarela + Verde answered     (rounds out to 10 per team)
 *
 * Each team's questionnaire (10 questions answered = 5 pairs):
 *   Branca:   Q1,Q2, Q3,Q4, Q25,Q26 (pairs 1,2,13)          → plays Q5-Q24, Q27-Q30
 *   Amarela:  Q1,Q2, Q9,Q10, Q29,Q30 (pairs 1,5,15)         → plays Q3-Q8, Q11-Q28
 *   Verde:    Q3,Q4, Q13,Q14, Q29,Q30 (pairs 2,7,15)        → plays Q1,Q2, Q5-Q12, Q15-Q28
 *   Azul:     Q9,Q10, Q17,Q18, Q19,Q20 (pairs 5,9,10... wait
 *
 * Simplified canonical assignment (each team answers exactly 10 Qs = 5 pairs):
 *   Teams     → Pairs they answered
 *   Branca    → 1, 2, 13
 *   Amarela   → 1, 5, 15
 *   Verde     → 2, 7, 15
 *   Azul      → 5, 9, 11
 *   Vermelha  → 7, 9, 12 (wait, need 5 pairs per team...)
 *
 * Let's use a clean balanced assignment where each pair is answered by 2 teams
 * and each team answers exactly 5 pairs (10 questions):
 *
 *   Pair  1 (Q1,Q2):   Branca, Amarela
 *   Pair  2 (Q3,Q4):   Branca, Verde
 *   Pair  3 (Q5,Q6):   Branca, Azul
 *   Pair  4 (Q7,Q8):   Branca, Vermelha
 *   Pair  5 (Q9,Q10):  Branca, Laranja
 *   Pair  6 (Q11,Q12): Amarela, Verde
 *   Pair  7 (Q13,Q14): Amarela, Azul
 *   Pair  8 (Q15,Q16): Amarela, Vermelha
 *   Pair  9 (Q17,Q18): Amarela, Laranja
 *   Pair 10 (Q19,Q20): Verde, Azul
 *   Pair 11 (Q21,Q22): Verde, Vermelha
 *   Pair 12 (Q23,Q24): Verde, Laranja
 *   Pair 13 (Q25,Q26): Azul, Vermelha
 *   Pair 14 (Q27,Q28): Azul, Laranja
 *   Pair 15 (Q29,Q30): Vermelha, Laranja
 *
 * Each team answers 5 pairs = 10 questions ✓
 * Each team plays 10 pairs = 20 questions ✓
 */

export type TeamKey = "branca" | "amarela" | "verde" | "azul" | "vermelha" | "laranja";

export type CampPair = {
  pairNumber: number;
  questionNumbers: [number, number];
  respondentTeams: [TeamKey, TeamKey];
};

export const CAMP_PAIRS: CampPair[] = [
  { pairNumber: 1,  questionNumbers: [1,  2],  respondentTeams: ["branca",   "amarela"] },
  { pairNumber: 2,  questionNumbers: [3,  4],  respondentTeams: ["branca",   "verde"]   },
  { pairNumber: 3,  questionNumbers: [5,  6],  respondentTeams: ["branca",   "azul"]    },
  { pairNumber: 4,  questionNumbers: [7,  8],  respondentTeams: ["branca",   "vermelha"]},
  { pairNumber: 5,  questionNumbers: [9,  10], respondentTeams: ["branca",   "laranja"] },
  { pairNumber: 6,  questionNumbers: [11, 12], respondentTeams: ["amarela",  "verde"]   },
  { pairNumber: 7,  questionNumbers: [13, 14], respondentTeams: ["amarela",  "azul"]    },
  { pairNumber: 8,  questionNumbers: [15, 16], respondentTeams: ["amarela",  "vermelha"]},
  { pairNumber: 9,  questionNumbers: [17, 18], respondentTeams: ["amarela",  "laranja"] },
  { pairNumber: 10, questionNumbers: [19, 20], respondentTeams: ["verde",    "azul"]    },
  { pairNumber: 11, questionNumbers: [21, 22], respondentTeams: ["verde",    "vermelha"]},
  { pairNumber: 12, questionNumbers: [23, 24], respondentTeams: ["verde",    "laranja"] },
  { pairNumber: 13, questionNumbers: [25, 26], respondentTeams: ["azul",     "vermelha"]},
  { pairNumber: 14, questionNumbers: [27, 28], respondentTeams: ["azul",     "laranja"] },
  { pairNumber: 15, questionNumbers: [29, 30], respondentTeams: ["vermelha", "laranja"] },
];

const ALL_TEAMS: TeamKey[] = ["branca", "amarela", "verde", "azul", "vermelha", "laranja"];

/** Returns which question numbers a team answered. */
export function getTeamQuestionnaire(team: TeamKey): number[] {
  return CAMP_PAIRS.filter((p) => p.respondentTeams.includes(team))
    .flatMap((p) => p.questionNumbers);
}

/** Returns which question numbers a team can play (those they did NOT answer). */
export function getTeamPlayableQuestions(team: TeamKey): number[] {
  const answered = new Set(getTeamQuestionnaire(team));
  return Array.from({ length: 30 }, (_, i) => i + 1).filter((n) => !answered.has(n));
}

/** Returns which teams answered a given question number. */
export function getQuestionRespondents(questionNumber: number): TeamKey[] {
  const pair = CAMP_PAIRS.find((p) => p.questionNumbers.includes(questionNumber as 1));
  return pair ? [...pair.respondentTeams] : [];
}

/** Returns which teams can play a given question number. */
export function getQuestionPlayableTeams(questionNumber: number): TeamKey[] {
  const respondents = new Set(getQuestionRespondents(questionNumber));
  return ALL_TEAMS.filter((t) => !respondents.has(t));
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
