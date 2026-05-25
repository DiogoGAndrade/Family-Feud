import { useState } from "react";
import type { AppView, FeudGame, QuestionBankItem } from "./types";
import { loadGames, saveGame, deleteGame, saveGames } from "./utils/storage";
import { generateId } from "./utils/idGen";
import { resetGameState, duplicateGame } from "./utils/gameLogic";
import { sampleCampGame, sampleStandardGame } from "./data/sampleGame";
import GameLibrary, { createNewGame } from "./components/GameLibrary";
import GameEditor from "./components/GameEditor";
import PlayMode from "./components/PlayMode";
import QuestionBank from "./components/QuestionBank";
import "./styles/app.css";

function initGames(): FeudGame[] {
  const saved = loadGames();
  if (saved.length > 0) return saved;
  // Pre-load sample games for first-run experience
  const initial = [sampleCampGame, sampleStandardGame];
  saveGames(initial);
  return initial;
}

export default function App() {
  const [games, setGames] = useState<FeudGame[]>(initGames);
  const [view, setView] = useState<AppView>({ type: "library" });

  const persistGame = (game: FeudGame) => {
    setGames((prev) => saveGame(game, prev));
  };

  const handleCreateNew = () => {
    const game = createNewGame();
    persistGame(game);
    setView({ type: "editor", gameId: game.id });
  };

  const handleImport = (game: FeudGame) => {
    const imported = { ...game, id: game.id || generateId() };
    persistGame(imported);
    setView({ type: "library" });
  };

  const handleDelete = (gameId: string) => {
    setGames((prev) => deleteGame(gameId, prev));
    setView({ type: "library" });
  };

  const handleEditorSave = (game: FeudGame) => {
    persistGame(game);
    setView({ type: "library" });
  };

  const handleGameUpdate = (game: FeudGame) => {
    persistGame(game);
  };

  const handleResetGame = (gameId: string) => {
    setGames((prev) => {
      const game = prev.find((g) => g.id === gameId);
      if (!game) return prev;
      return saveGame(resetGameState(game), prev);
    });
  };

  const handleDuplicateGame = (gameId: string) => {
    setGames((prev) => {
      const game = prev.find((g) => g.id === gameId);
      if (!game) return prev;
      return saveGame(duplicateGame(game), prev);
    });
  };

  const handleCreateGameFromBank = (items: QuestionBankItem[]) => {
    const game = createNewGame();
    const newQuestions = items.map((item) => ({
      id: generateId(),
      text: item.text,
      respondentCount: item.respondentCount,
      respondentTeamIds: [] as string[],
      playableByTeamIds: game.teams.map((t) => t.id),
      completed: false,
      answers: item.answers.map((a) => ({
        id: generateId(),
        text: a.text,
        votes: a.votes,
        points: a.points,
        aliases: a.aliases,
        revealed: false,
      })),
    }));
    const gameWithQuestions = { ...game, questions: newQuestions };
    persistGame(gameWithQuestions);
    setView({ type: "editor", gameId: game.id });
  };

  const handleAddBankQuestionsToGame = (gameId: string, items: QuestionBankItem[]) => {
    setGames((prev) => {
      const game = prev.find((g) => g.id === gameId);
      if (!game) return prev;
      const newQuestions = items.map((item) => ({
        id: generateId(),
        text: item.text,
        respondentCount: item.respondentCount,
        respondentTeamIds: [] as string[],
        playableByTeamIds: game.teams.map((t) => t.id),
        completed: false,
        answers: item.answers.map((a) => ({
          id: generateId(),
          text: a.text,
          votes: a.votes,
          points: a.points,
          aliases: a.aliases,
          revealed: false,
        })),
      }));
      const updated = {
        ...game,
        questions: [...game.questions, ...newQuestions],
      };
      return saveGame(updated, prev);
    });
  };

  const currentGame =
    view.type === "editor" || view.type === "play"
      ? games.find((g) => g.id === view.gameId)
      : null;

  // Play Mode — full screen, no nav bar
  if (view.type === "play" && currentGame) {
    return (
      <PlayMode
        game={currentGame}
        onGameUpdate={handleGameUpdate}
        onBack={() => setView({ type: "library" })}
      />
    );
  }

  // Editor — full screen, no nav bar
  if (view.type === "editor" && currentGame) {
    return (
      <GameEditor
        game={currentGame}
        onSave={handleEditorSave}
        onBack={() => setView({ type: "library" })}
      />
    );
  }

  // Standard shell with navigation
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-logo">
          Drive <span>do Além</span>
        </div>
        <nav>
          <button
            className={`nav-btn${view.type === "library" ? " active" : ""}`}
            onClick={() => setView({ type: "library" })}
          >
            🎮 Jogos
          </button>
          <button
            className={`nav-btn${view.type === "bank" ? " active" : ""}`}
            onClick={() => setView({ type: "bank" })}
          >
            📚 Banco
          </button>
        </nav>
      </header>

      <main className="main-content">
        {view.type === "library" && (
          <GameLibrary
            games={games}
            onOpen={(id, mode) =>
              setView(
                mode === "editor"
                  ? { type: "editor", gameId: id }
                  : { type: "play", gameId: id }
              )
            }
            onDelete={handleDelete}
            onImport={handleImport}
            onCreateNew={handleCreateNew}
            onDuplicate={handleDuplicateGame}
            onReset={handleResetGame}
          />
        )}
        {view.type === "bank" && (
          <QuestionBank
            games={games}
            onAddToGame={handleAddBankQuestionsToGame}
            onCreateGameFromBank={handleCreateGameFromBank}
          />
        )}
      </main>
    </div>
  );
}
