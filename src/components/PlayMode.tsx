import { useState, useCallback, useEffect } from "react";
import type { FeudGame, FeudQuestion } from "../types";
import { getEligibleQuestionsForTeam, submitGuess, revealAnswer, isTeamFinished } from "../utils/gameLogic";
import { playCorrectSound, playWrongSound, playCelebrationSound } from "../utils/sounds";
import Scoreboard from "./Scoreboard";
import TeamSelector from "./TeamSelector";
import QuestionChoicePanel from "./QuestionChoicePanel";
import AnswerBoard from "./AnswerBoard";
import GuessInput from "./GuessInput";

interface Props {
  game: FeudGame;
  onGameUpdate: (game: FeudGame) => void;
  onBack: () => void;
}

type Feedback = "correct" | "wrong" | null;

export default function PlayMode({ game, onGameUpdate, onBack }: Props) {
  const [activeTeamId, setActiveTeamId] = useState<string | null>(
    game.teams[0]?.id ?? null
  );
  const [selectedQuestion, setSelectedQuestion] = useState<FeudQuestion | null>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [justRevealedId, setJustRevealedId] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationTeam, setCelebrationTeam] = useState<string>("");

  // Keep selected question in sync with game state
  const currentQuestion = selectedQuestion
    ? game.questions.find((q) => q.id === selectedQuestion.id) ?? null
    : null;

  const eligibleQuestions = activeTeamId
    ? getEligibleQuestionsForTeam(game, activeTeamId)
    : [];

  // Deselect if question got completed or no longer eligible
  useEffect(() => {
    if (currentQuestion?.completed) {
      setSelectedQuestion(null);
    }
  }, [currentQuestion]);

  const triggerFeedback = (type: Feedback, duration = 800) => {
    setFeedback(type);
    setTimeout(() => setFeedback(null), duration);
  };

  const handleGuess = useCallback(
    (guess: string) => {
      if (!activeTeamId || !currentQuestion) return;

      const { game: updatedGame, result } = submitGuess(
        game,
        currentQuestion.id,
        activeTeamId,
        guess
      );

      if (result.hit) {
        if (game.settings.enableSounds) playCorrectSound();
        setJustRevealedId(result.answer.id);
        setTimeout(() => setJustRevealedId(null), 600);
        triggerFeedback("correct");
        onGameUpdate(updatedGame);

        // Check if team is now finished after the update
        if (isTeamFinished(updatedGame, activeTeamId)) {
          const team = updatedGame.teams.find((t) => t.id === activeTeamId);
          if (team) {
            setCelebrationTeam(team.name);
            setTimeout(() => {
              if (game.settings.enableSounds) playCelebrationSound();
              setShowCelebration(true);
            }, 500);
          }
        }
      } else {
        if (game.settings.enableSounds) playWrongSound();
        triggerFeedback("wrong");
      }
    },
    [game, activeTeamId, currentQuestion, onGameUpdate]
  );

  const handleManualReveal = useCallback(
    (answerId: string) => {
      if (!activeTeamId || !currentQuestion) return;
      const addPoints = game.settings.manualRevealAddsPoints;
      const { game: updatedGame, result } = revealAnswer(
        game,
        currentQuestion.id,
        answerId,
        activeTeamId,
        addPoints
      );
      if (result.hit) {
        setJustRevealedId(answerId);
        setTimeout(() => setJustRevealedId(null), 600);
        onGameUpdate(updatedGame);

        if (isTeamFinished(updatedGame, activeTeamId)) {
          const team = updatedGame.teams.find((t) => t.id === activeTeamId);
          if (team) {
            setCelebrationTeam(team.name);
            setTimeout(() => {
              if (game.settings.enableSounds) playCelebrationSound();
              setShowCelebration(true);
            }, 500);
          }
        }
      }
    },
    [game, activeTeamId, currentQuestion, onGameUpdate]
  );

  const handleSelectTeam = (id: string) => {
    setActiveTeamId(id);
    setSelectedQuestion(null);
  };

  const handleSelectQuestion = (q: FeudQuestion) => {
    setSelectedQuestion(q);
    setFeedback(null);
  };

  const activeTeam = game.teams.find((t) => t.id === activeTeamId);

  return (
    <div className="app-shell">
      {/* Feedback banner */}
      {feedback === "correct" && (
        <div className="feedback-banner correct">✓ CORRETO!</div>
      )}
      {feedback === "wrong" && (
        <div className="feedback-banner wrong">✗ ERRADO!</div>
      )}

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="celebration-overlay" onClick={() => setShowCelebration(false)}>
          <div className="celebration-box">
            <div className="celebration-text">
              🎉 PARABÉNS!<br />
              {celebrationTeam}<br />
              ACABASTE COM AS TUAS PERGUNTAS!!!
            </div>
            <button
              className="btn btn-primary btn-lg"
              style={{ marginTop: "2rem" }}
              onClick={() => setShowCelebration(false)}
            >
              Continuar
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="app-header">
        <div className="app-logo">
          Feud <span>Factory</span>
        </div>
        <span
          style={{
            color: "var(--accent)",
            fontWeight: 800,
            fontSize: "1.1rem",
            marginLeft: "0.5rem",
          }}
        >
          {game.title}
        </span>
        {game.mode === "camp" && (
          <span className="badge badge-camp">Modo Campo</span>
        )}
        <button className="btn btn-secondary btn-sm" style={{ marginLeft: "auto" }} onClick={onBack}>
          ← Sair
        </button>
      </header>

      <div className="main-content" style={{ padding: "0.75rem" }}>
        <div className="play-layout">
          {/* Left sidebar: teams + scores */}
          <div className="play-sidebar-left">
            <div className="card">
              <div className="text-sm text-muted mb-2 font-bold">PONTUAÇÃO</div>
              <Scoreboard
                teams={game.teams}
                activeTeamId={activeTeamId}
                onSelectTeam={handleSelectTeam}
              />
            </div>
            <div className="card">
              <TeamSelector
                teams={game.teams}
                activeTeamId={activeTeamId}
                onSelect={handleSelectTeam}
              />
            </div>
          </div>

          {/* Center: question board + guess input */}
          <div className="play-center">
            {currentQuestion && !currentQuestion.completed ? (
              <>
                <AnswerBoard
                  question={currentQuestion}
                  answerSlots={game.settings.answerSlots}
                  justRevealedId={justRevealedId}
                  manualRevealAddsPoints={game.settings.manualRevealAddsPoints}
                  onManualReveal={handleManualReveal}
                />
                <div className="card">
                  <GuessInput
                    onGuess={handleGuess}
                    disabled={!activeTeamId}
                    feedback={feedback}
                  />
                  <div className="text-sm text-muted mt-2">
                    Equipa ativa:{" "}
                    <strong style={{ color: "var(--accent)" }}>
                      {activeTeam?.name ?? "—"}
                    </strong>
                    {game.settings.manualRevealAddsPoints && (
                      <span
                        className="badge badge-camp"
                        style={{ marginLeft: "0.5rem" }}
                      >
                        Revelar manual = pontos
                      </span>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="card" style={{ textAlign: "center", padding: "2rem" }}>
                {eligibleQuestions.length === 0 ? (
                  <div>
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 900,
                        color: "var(--accent)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {activeTeam
                        ? `${activeTeam.name} não tem mais perguntas!`
                        : "Seleciona uma equipa"}
                    </div>
                    <div className="text-muted">
                      Escolhe outra equipa ou o jogo terminou.
                    </div>
                  </div>
                ) : (
                  <div>
                    <div
                      style={{
                        fontSize: "1.1rem",
                        color: "var(--text-muted)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      👈 Escolhe uma pergunta à esquerda para começar
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right sidebar: question choices */}
          <div className="play-sidebar-right">
            <div className="card" style={{ flex: 1 }}>
              {activeTeamId ? (
                <QuestionChoicePanel
                  questions={eligibleQuestions}
                  selectedId={currentQuestion?.id ?? null}
                  onSelect={handleSelectQuestion}
                  maxVisible={game.settings.maxVisibleChoicesPerTeam}
                />
              ) : (
                <div className="text-muted text-sm">
                  Seleciona uma equipa para ver as perguntas disponíveis.
                </div>
              )}
            </div>

            {/* Settings summary */}
            <div className="card">
              <div className="text-sm text-muted mb-2 font-bold">DEFINIÇÕES</div>
              <div className="text-sm" style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <div>
                  🃏 Slots:{" "}
                  <strong>{game.settings.answerSlots}</strong>
                </div>
                <div>
                  👁 Escolhas por equipa:{" "}
                  <strong>{game.settings.maxVisibleChoicesPerTeam}</strong>
                </div>
                <div>
                  🔊 Sons:{" "}
                  <strong>{game.settings.enableSounds ? "Ativado" : "Desativado"}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
