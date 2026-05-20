import type { FeudGame } from "../types";
import { exportGameToJson } from "../utils/storage";
import ImportExportPanel from "./ImportExportPanel";
import { generateId } from "../utils/idGen";

interface Props {
  games: FeudGame[];
  onOpen: (gameId: string, mode: "editor" | "play") => void;
  onDelete: (gameId: string) => void;
  onImport: (game: FeudGame) => void;
  onCreateNew: () => void;
}

export default function GameLibrary({
  games,
  onOpen,
  onDelete,
  onImport,
  onCreateNew,
}: Props) {
  const handleDeleteConfirm = (game: FeudGame) => {
    if (confirm(`Tens a certeza que queres eliminar "${game.title}"?`)) {
      onDelete(game.id);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <div>
          <div className="section-title">Biblioteca de Jogos</div>
          <div className="section-sub">Cria e gere os teus jogos de Family Feud.</div>
        </div>
        <div className="flex gap-2">
          <ImportExportPanel onImport={onImport} />
          <button className="btn btn-primary btn-lg" onClick={onCreateNew}>
            + Novo Jogo
          </button>
        </div>
      </div>

      {games.length === 0 ? (
        <div className="empty-state" style={{ marginTop: "2rem", padding: "3rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🎮</div>
          <div style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Sem jogos ainda
          </div>
          <div className="text-muted mb-3">
            Cria um novo jogo ou importa um ficheiro JSON.
          </div>
          <button className="btn btn-primary btn-lg" onClick={onCreateNew}>
            Criar primeiro jogo
          </button>
        </div>
      ) : (
        <div className="library-grid">
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onEdit={() => onOpen(game.id, "editor")}
              onPlay={() => onOpen(game.id, "play")}
              onDelete={() => handleDeleteConfirm(game)}
              onExport={() => exportGameToJson(game)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function GameCard({
  game,
  onEdit,
  onPlay,
  onDelete,
  onExport,
}: {
  game: FeudGame;
  onEdit: () => void;
  onPlay: () => void;
  onDelete: () => void;
  onExport: () => void;
}) {
  const completedCount = game.questions.filter((q) => q.completed).length;
  const totalAnswers = game.questions.reduce((s, q) => s + q.answers.length, 0);
  const leadTeam = [...game.teams].sort((a, b) => b.score - a.score)[0];

  return (
    <div className="game-card">
      <div>
        <div className="flex items-center gap-1 mb-1">
          <span className={`badge ${game.mode === "camp" ? "badge-camp" : "badge-standard"}`}>
            {game.mode === "camp" ? "Campo" : "Standard"}
          </span>
        </div>
        <div className="game-card-title">{game.title}</div>
        <div className="game-card-meta">
          <span>👥 {game.teams.length} equipas</span>
          <span>❓ {game.questions.length} perguntas</span>
          <span>✅ {completedCount} completas</span>
          <span>💬 {totalAnswers} respostas</span>
        </div>
        {leadTeam && leadTeam.score > 0 && (
          <div className="text-sm mt-1" style={{ color: "var(--accent)" }}>
            🏆 {leadTeam.name}: {leadTeam.score} pts
          </div>
        )}
      </div>
      <div className="game-card-actions">
        <button className="btn btn-primary btn-sm" onClick={onPlay}>▶ Jogar</button>
        <button className="btn btn-secondary btn-sm" onClick={onEdit}>✏️ Editar</button>
        <button className="btn btn-secondary btn-sm" onClick={onExport}>📤</button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>🗑</button>
      </div>
    </div>
  );
}

export function createNewGame(): FeudGame {
  return {
    id: generateId(),
    title: "Novo Jogo",
    mode: "standard",
    teams: [
      { id: generateId(), name: "Equipa A", score: 0 },
      { id: generateId(), name: "Equipa B", score: 0 },
    ],
    questions: [],
    settings: {
      maxVisibleChoicesPerTeam: 3,
      manualRevealAddsPoints: false,
      answerSlots: 8,
      enableSounds: true,
    },
  };
}
