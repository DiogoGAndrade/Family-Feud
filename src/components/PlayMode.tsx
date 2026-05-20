import { useState, useCallback, useEffect } from "react";
import type { FeudGame, FeudQuestion } from "../types";
import {
  getEligibleQuestionsForTeam,
  submitGuess,
  revealAnswer,
  isTeamFinished,
  resetGameState,
} from "../utils/gameLogic";
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

  // Deselect completed questions automatically
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

  const handleReset = () => {
    if (
      confirm(
        "Tens a certeza que queres reiniciar este jogo?\nAs pontuações e respostas reveladas vão voltar a zero."
      )
    ) {
      const reset = resetGameState(game);
      onGameUpdate(reset);
      setSelectedQuestion(null);
      setFeedback(null);
    }
  };

  const activeTeam = game.teams.find((t) => t.id === activeTeamId);
  const questionIsActive = !!(currentQuestion && !currentQuestion.completed);

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
        <div className="app-logo">Feud <span>Factory</span></div>
        <span style={{ color: "var(--accent)", fontWeight: 800, fontSize: "1.1rem", marginLeft: "0.5rem" }}>
          {game.title}
        </span>
        {game.mode === "camp" && (
          <span className="badge badge-camp" style={{ marginLeft: "0.4rem" }}>Modo Campo</span>
        )}
        <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem" }}>
          <button className="btn btn-danger btn-sm" onClick={handleReset} title="Reiniciar jogo">
            ↺ Reiniciar
          </button>
          <button className="btn btn-secondary btn-sm" onClick={onBack}>
            ← Sair
          </button>
        </div>
      </header>

      <div className="main-content" style={{ padding: "0.75rem" }}>
        <div className="play-layout">

          {/* Left sidebar: scores + team selector */}
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

          {/* Center: question selection (large) OR answer board */}
          <div className="play-center">
            {questionIsActive ? (
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
                      <span className="badge badge-camp" style={{ marginLeft: "0.5rem" }}>
                        Revelar manual = pontos
                      </span>
                    )}
                  </div>
                </div>
              </>
            ) : activeTeamId && eligibleQuestions.length > 0 ? (
              /* Large question choice panel when no active question */
              <div className="card-lg" style={{ flex: 1 }}>
                <QuestionChoicePanel
                  questions={eligibleQuestions}
                  selectedId={null}
                  onSelect={handleSelectQuestion}
                  maxVisible={game.settings.maxVisibleChoicesPerTeam}
                  large
                />
              </div>
            ) : (
              <div className="card" style={{ textAlign: "center", padding: "2.5rem" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--accent)", marginBottom: "0.5rem" }}>
                  {!activeTeamId
                    ? "← Seleciona uma equipa para começar"
                    : `${activeTeam?.name} não tem mais perguntas!`}
                </div>
                <div className="text-muted">
                  {!activeTeamId
                    ? "Clica numa equipa à esquerda."
                    : "Seleciona outra equipa ou reinicia o jogo."}
                </div>
              </div>
            )}
          </div>

          {/* Right sidebar: small question list (when active) + settings */}
          <div className="play-sidebar-right">
            {questionIsActive && activeTeamId && eligibleQuestions.length > 0 && (
              <div className="card">
                <QuestionChoicePanel
                  questions={eligibleQuestions}
                  selectedId={currentQuestion?.id ?? null}
                  onSelect={handleSelectQuestion}
                  maxVisible={game.settings.maxVisibleChoicesPerTeam}
                />
              </div>
            )}
            <div className="card">
              <div className="text-sm text-muted mb-2 font-bold">DEFINIÇÕES</div>
              <div className="text-sm" style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <div>🃏 Slots: <strong>{game.settings.answerSlots}</strong></div>
                <div>👁 Escolhas: <strong>{game.settings.maxVisibleChoicesPerTeam}</strong></div>
                <div>🔊 Sons: <strong>{game.settings.enableSounds ? "On" : "Off"}</strong></div>
                <div>✋ Manual+pts: <strong>{game.settings.manualRevealAddsPoints ? "Sim" : "Não"}</strong></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
