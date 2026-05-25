import type { FeudGame, QuestionPack } from "../types";

const GAMES_KEY = "feudfactory_games";
const PACKS_KEY = "feudfactory_questionpacks";

/**
 * Applies backward-compatible migrations to a game loaded from storage or JSON.
 * Guarantees all required fields have safe defaults for old saves.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function migrateGame(raw: any): FeudGame {
  return {
    ...raw,
    scoringMode: raw.scoringMode ?? "raw_votes",
    theme: raw.theme ?? "classic",
    settings: {
      ...raw.settings,
      specialCampScoring: raw.settings?.specialCampScoring ?? (raw.mode === "camp"),
    },
    teams: (raw.teams ?? []).map((t: any) => ({
      ...t,
      normalHits: t.normalHits ?? 0,
      rareHits: t.rareHits ?? 0,
    })),
  } as FeudGame;
}

export function loadGames(): FeudGame[] {
  try {
    const raw = localStorage.getItem(GAMES_KEY);
    if (!raw) return [];
    const games = JSON.parse(raw) as FeudGame[];
    return games.map(migrateGame);
  } catch {
    return [];
  }
}

export function saveGames(games: FeudGame[]): void {
  localStorage.setItem(GAMES_KEY, JSON.stringify(games));
}

export function saveGame(game: FeudGame, games: FeudGame[]): FeudGame[] {
  const existing = games.findIndex((g) => g.id === game.id);
  const updated =
    existing === -1
      ? [...games, game]
      : games.map((g) => (g.id === game.id ? game : g));
  saveGames(updated);
  return updated;
}

export function deleteGame(gameId: string, games: FeudGame[]): FeudGame[] {
  const updated = games.filter((g) => g.id !== gameId);
  saveGames(updated);
  return updated;
}

export function loadQuestionPacks(): QuestionPack[] {
  try {
    const raw = localStorage.getItem(PACKS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as QuestionPack[];
  } catch {
    return [];
  }
}

export function saveQuestionPacks(packs: QuestionPack[]): void {
  localStorage.setItem(PACKS_KEY, JSON.stringify(packs));
}

export function exportGameToJson(game: FeudGame): void {
  const blob = new Blob([JSON.stringify(game, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${game.title.replace(/\s+/g, "_")}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importGameFromJson(
  file: File
): Promise<FeudGame> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        resolve(migrateGame(data));
      } catch {
        reject(new Error("Invalid JSON file"));
      }
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsText(file);
  });
}

export function importPackFromJson(file: File): Promise<QuestionPack> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string) as QuestionPack;
        resolve(data);
      } catch {
        reject(new Error("Invalid JSON file"));
      }
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsText(file);
  });
}
