import { useState, useCallback, useEffect } from "react";
import type { FeudGame, FeudQuestion } from "../types";
import {
  submitGuess,
  revealAnswer,
  isTeamFinished,
  resetGameState,
} from "../utils/gameLogic";
import {
  rerollQuestionChoicesForAllTeams,
  resolveDisplayChoices,
  getRandomQuestionChoicesForTeam,
} from "../utils/questionChoices";
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
  const [presentationMode, setPresentationMode] = useState(false);

  // Randomized question choices per team — rerolled on every game event
  const [questionChoicesByTeam, setQuestionChoicesByTeam] = useState<Record<string, string[]>>(
    () => rerollQuestionChoicesForAllTeams(game)
  );

  const isCyber = game.theme === "cyber";

  // Keep selected question in sync with game state
  const currentQuestion = selectedQuestion
    ? game.questions.find((q) => q.id === selectedQuestion.id) ?? null
    : null;

  // Deselect completed questions automatically
  useEffect(() => {
    if (currentQuestion?.completed) {
      setSelectedQuestion(null);
    }
  }, [currentQuestion]);

  // Sync fullscreen exit (Escape key) back to state
  useEffect(() => {
    const onFsChange = () => {
      if (!document.fullscreenElement) setPresentationMode(false);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const enterPresentation = async () => {
    try {
      await document.documentElement.requestFullscreen();
    } catch { /* browser may not support it */ }
    setPresentationMode(true);
  };

  const exitPresentation = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setPresentationMode(false);
  };

  // Compute the display choices for the active team from stored state
  const storedChoiceIds = activeTeamId ? (questionChoicesByTeam[activeTeamId] ?? []) : [];
  const displayChoices = activeTeamId
    ? resolveDisplayChoices(game, activeTeamId, storedChoiceIds, game.settings.maxVisibleChoicesPerTeam)
    : [];

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
        setQuestionChoicesByTeam(rerollQuestionChoicesForAllTeams(updatedGame));

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
        // Reroll even on wrong guess
        setQuestionChoicesByTeam(rerollQuestionChoicesForAllTeams(game));
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
        setQuestionChoicesByTeam(rerollQuestionChoicesForAllTeams(updatedGame));

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
    // Generate choices if this team doesn't have any stored yet
    if (!questionChoicesByTeam[id]?.length) {
      setQuestionChoicesByTeam((prev) => ({
        ...prev,
        [id]: getRandomQuestionChoicesForTeam(game, id, game.settings.maxVisibleChoicesPerTeam),
      }));
    }
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
      setQuestionChoicesByTeam(rerollQuestionChoicesForAllTeams(reset));
    }
  };

  const activeTeam = game.teams.find((t) => t.id === activeTeamId);
  const questionIsActive = !!(currentQuestion && !currentQuestion.completed);

  // Cyber-conditional wording
  const feedbackCorrectText = isCyber ? "✓ FRAGMENTO DESBLOQUEADO" : "✓ CORRETO!";
  const feedbackWrongText   = isCyber ? "✗ ACESSO NEGADO"           : "✗ ERRADO!";
  const guessPlaceholder    = isCyber ? "Introduz uma tentativa de password..." : "Escreve uma resposta e prime Enter...";
  const articleLabel        = isCyber ? "UM FICHEIRO" : "UMA PERGUNTA";
  const itemLabel           = isCyber ? "Ficheiro" : "Pergunta";
  const celebrationTitle    = isCyber ? "💾 SISTEMA COMPROMETIDO!" : "🎉 PARABÉNS!";
  const celebrationBody     = isCyber ? "DESCOBRISTE TODAS AS TUAS PASSWORDS!!!" : "ACABASTE COM AS TUAS PERGUNTAS!!!";
  const scoreboardLabel     = isCyber ? "ACCESS NODES" : "PONTUAÇÃO";
  const noQuestionsMsg      = !activeTeamId
    ? (isCyber ? "← SELECIONA UM NODO PARA INICIAR" : "← Seleciona uma equipa para começar")
    : (isCyber ? `[${activeTeam?.name}] SEM FICHEIROS DISPONÍVEIS` : `${activeTeam?.name} não tem mais perguntas!`);
  const noQuestionsHint     = !activeTeamId
    ? (isCyber ? "Clica num nodo à esquerda." : "Clica numa equipa à esquerda.")
    : (isCyber ? "Seleciona outro nodo ou reinicia o sistema." : "Seleciona outra equipa ou reinicia o jogo.");

  return (
    <div className={`app-shell${presentationMode ? " pres" : ""}`}>
      {/* Feedback banner */}
      {feedback === "correct" && (
        <div className="feedback-banner correct">{feedbackCorrectText}</div>
      )}
      {feedback === "wrong" && (
        <div className="feedback-banner wrong">{feedbackWrongText}</div>
      )}

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="celebration-overlay" onClick={() => setShowCelebration(false)}>
          <div className={`celebration-box${isCyber ? " cyber" : ""}`}>
            <div className="celebration-text">
              {celebrationTitle}<br />
              {celebrationTeam}<br />
              {celebrationBody}
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
        <div className="app-logo">Drive <span>do Além</span></div>
        <span style={{ color: "var(--accent)", fontWeight: 800, fontSize: "1.1rem", marginLeft: "0.5rem", fontFamily: "monospace" }}>
          {game.title}
        </span>
        {game.mode === "camp" && (
          <span className="badge badge-camp" style={{ marginLeft: "0.4rem" }}>
            {isCyber ? "MODO CYBER" : "Modo Campo"}
          </span>
        )}
        <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem" }}>
          {presentationMode ? (
            <button className="btn btn-secondary btn-sm" onClick={exitPresentation}>
              ✕ Sair Apresentação
            </button>
          ) : (
            <>
              <button className="btn btn-secondary btn-sm" onClick={enterPresentation} title="Modo apresentação / ecrã inteiro">
                ⛶ Apresentação
              </button>
              <button className="btn btn-danger btn-sm" onClick={handleReset} title="Reiniciar jogo">
                ↺ Reiniciar
              </button>
              <button className="btn btn-secondary btn-sm" onClick={onBack}>
                ← Sair
              </button>
            </>
          )}
        </div>
      </header>

      <div className="main-content" style={{ padding: "0.75rem" }}>
        <div className={`play-layout${presentationMode ? " pres" : ""}`}>

          {/* Left sidebar: scores + team selector */}
          <div className="play-sidebar-left">
            <div className="card">
              <div className="text-sm text-muted mb-2 font-bold">{scoreboardLabel}</div>
              <Scoreboard
                teams={game.teams}
                activeTeamId={activeTeamId}
                onSelectTeam={handleSelectTeam}
                specialCampScoring={game.settings.specialCampScoring}
                isCyber={isCyber}
              />
            </div>
            <div className="card">
              <TeamSelector
                teams={game.teams}
                activeTeamId={activeTeamId}
                onSelect={handleSelectTeam}
                isCyber={isCyber}
              />
            </div>
          </div>

          {/* Center: question selection or answer board */}
          <div className="play-center">
            {questionIsActive ? (
              <>
                <AnswerBoard
                  question={currentQuestion}
                  answerSlots={game.settings.answerSlots}
                  justRevealedId={justRevealedId}
                  manualRevealAddsPoints={game.settings.manualRevealAddsPoints}
                  onManualReveal={handleManualReveal}
                  playableNames={currentQuestion.playableByTeamIds
                    .map((id) => game.teams.find((t) => t.id === id)?.name)
                    .filter((name): name is string => !!name)}
                />
                <div className="card">
                  <GuessInput
                    onGuess={handleGuess}
                    disabled={!activeTeamId}
                    feedback={feedback}
                    placeholder={guessPlaceholder}
                  />
                  <div className="text-sm text-muted mt-2">
                    {isCyber ? "OPERADOR ATIVO: " : "Equipa ativa: "}
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
            ) : activeTeamId && displayChoices.length > 0 ? (
              <div className="card-lg" style={{ flex: 1 }}>
                <QuestionChoicePanel
                  questions={displayChoices}
                  selectedId={null}
                  onSelect={handleSelectQuestion}
                  maxVisible={game.settings.maxVisibleChoicesPerTeam}
                  scoringMode={game.scoringMode}
                  large
                  articleLabel={articleLabel}
                  itemLabel={itemLabel}
                />
              </div>
            ) : (
              <div className="card" style={{ textAlign: "center", padding: "2.5rem" }}>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: "var(--accent)",
                    marginBottom: "0.5rem",
                    fontFamily: isCyber ? "monospace" : undefined,
                  }}
                >
                  {noQuestionsMsg}
                </div>
                <div className="text-muted">{noQuestionsHint}</div>
              </div>
            )}
          </div>

          {/* Right sidebar — hidden in presentation mode */}
          {!presentationMode && (
            <div className="play-sidebar-right">
              {questionIsActive && activeTeamId && displayChoices.length > 0 && (
                <div className="card">
                  <QuestionChoicePanel
                    questions={displayChoices}
                    selectedId={currentQuestion?.id ?? null}
                    onSelect={handleSelectQuestion}
                    maxVisible={game.settings.maxVisibleChoicesPerTeam}
                    articleLabel={articleLabel}
                    itemLabel={itemLabel}
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
          )}

        </div>
      </div>
    </div>
  );
}
