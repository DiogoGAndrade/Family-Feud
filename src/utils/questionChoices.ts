import type { FeudGame, FeudQuestion } from "../types";
import { getEligibleQuestionsForTeam } from "./gameLogic";

export function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getRandomQuestionChoicesForTeam(
  game: FeudGame,
  teamId: string,
  maxChoices: number
): string[] {
  const eligible = getEligibleQuestionsForTeam(game, teamId);
  return shuffleArray(eligible).slice(0, maxChoices).map((q) => q.id);
}

export function rerollQuestionChoicesForAllTeams(
  game: FeudGame
): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  for (const team of game.teams) {
    result[team.id] = getRandomQuestionChoicesForTeam(
      game,
      team.id,
      game.settings.maxVisibleChoicesPerTeam
    );
  }
  return result;
}

/**
 * Returns the questions to show for a team from stored choice IDs.
 * Stale IDs (completed / no longer eligible) are dropped and refilled
 * from remaining eligible questions chosen at random.
 */
export function resolveDisplayChoices(
  game: FeudGame,
  teamId: string,
  storedChoiceIds: string[],
  maxChoices: number
): FeudQuestion[] {
  const eligible = getEligibleQuestionsForTeam(game, teamId);
  const eligibleMap = new Map(eligible.map((q) => [q.id, q]));

  const stillValid = storedChoiceIds.filter((id) => eligibleMap.has(id));

  if (stillValid.length >= maxChoices) {
    return stillValid.slice(0, maxChoices).map((id) => eligibleMap.get(id)!);
  }

  const usedIds = new Set(stillValid);
  const remaining = shuffleArray(eligible.filter((q) => !usedIds.has(q.id)));
  const filled = [...stillValid, ...remaining.map((q) => q.id)].slice(0, maxChoices);
  return filled.map((id) => eligibleMap.get(id)!).filter(Boolean);
}
