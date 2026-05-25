import { useState, useMemo } from "react";
import type { FeudGame, FeudQuestion, FeudAnswer, Team, ScoringMode } from "../types";
import { generateId } from "../utils/idGen";
import { recalculateGamePoints, validateGame } from "../utils/gameLogic";
import { CAMP_PAIRS, TEAM_QUESTIONNAIRE_SUMMARY } from "../data/campPlan";
import type { TeamKey } from "../data/campPlan";

interface Props {
  game: FeudGame;
  onSave: (game: FeudGame) => void;
  onBack: () => void;
}

function emptyAnswer(): FeudAnswer {
  return { id: generateId(), text: "", votes: 0, points: 0, aliases: [], revealed: false };
}

function emptyQuestion(game: FeudGame): FeudQuestion {
  return {
    id: generateId(),
    text: "",
    respondentCount: 100,
    respondentTeamIds: [],
    playableByTeamIds: game.teams.map((t) => t.id),
    answers: [emptyAnswer()],
    completed: false,
  };
}

export default function GameEditor({ game, onSave, onBack }: Props) {
  const [draft, setDraft] = useState<FeudGame>(JSON.parse(JSON.stringify(game)));
  const [selectedQId, setSelectedQId] = useState<string | null>(
    draft.questions[0]?.id ?? null
  );
  const [activeTab, setActiveTab] = useState<"questions" | "teams" | "settings" | "campplan">("questions");

  const update = (fn: (g: FeudGame) => FeudGame) => setDraft((g) => fn(g));

  const updateQ = (qId: string, fn: (q: FeudQuestion) => FeudQuestion) => {
    update((g) => ({
      ...g,
      questions: g.questions.map((q) => (q.id === qId ? fn(q) : q)),
    }));
  };

  const selectedQ = draft.questions.find((q) => q.id === selectedQId) ?? null;

  const addQuestion = () => {
    const q = emptyQuestion(draft);
    update((g) => ({ ...g, questions: [...g.questions, q] }));
    setSelectedQId(q.id);
  };

  const deleteQuestion = (qId: string) => {
    update((g) => ({ ...g, questions: g.questions.filter((q) => q.id !== qId) }));
    if (selectedQId === qId) setSelectedQId(draft.questions[0]?.id ?? null);
  };

  const addAnswer = (qId: string) => {
    updateQ(qId, (q) => ({ ...q, answers: [...q.answers, emptyAnswer()] }));
  };

  const deleteAnswer = (qId: string, aId: string) => {
    updateQ(qId, (q) => ({
      ...q,
      answers: q.answers.filter((a) => a.id !== aId),
    }));
  };

  const updateAnswer = (qId: string, aId: string, patch: Partial<FeudAnswer>) => {
    updateQ(qId, (q) => ({
      ...q,
      answers: q.answers.map((a) => (a.id === aId ? { ...a, ...patch } : a)),
    }));
  };

  const moveAnswer = (qId: string, aId: string, dir: -1 | 1) => {
    updateQ(qId, (q) => {
      const idx = q.answers.findIndex((a) => a.id === aId);
      if (idx < 0) return q;
      const next = idx + dir;
      if (next < 0 || next >= q.answers.length) return q;
      const answers = [...q.answers];
      [answers[idx], answers[next]] = [answers[next], answers[idx]];
      return { ...q, answers };
    });
  };

  const toggleTeamId = (
    qId: string,
    teamId: string,
    field: "respondentTeamIds" | "playableByTeamIds"
  ) => {
    updateQ(qId, (q) => {
      const arr = q[field];
      const next = arr.includes(teamId)
        ? arr.filter((id) => id !== teamId)
        : [...arr, teamId];
      return { ...q, [field]: next };
    });
  };

  const addTeam = () => {
    const t: Team = { id: generateId(), name: `Equipa ${draft.teams.length + 1}`, score: 0 };
    update((g) => ({ ...g, teams: [...g.teams, t] }));
  };

  const updateTeam = (id: string, patch: Partial<Team>) => {
    update((g) => ({
      ...g,
      teams: g.teams.map((t) => (t.id === id ? { ...t, ...patch } : t)),
    }));
  };

  const deleteTeam = (id: string) => {
    update((g) => ({ ...g, teams: g.teams.filter((t) => t.id !== id) }));
  };

  const handleSave = () => onSave(draft);

  const handleScoringModeChange = (mode: ScoringMode) => {
    setDraft((g) => recalculateGamePoints({ ...g, scoringMode: mode }));
  };

  // Validation warnings are computed lazily — only shown in the settings tab
  const validationWarnings = useMemo(() => validateGame(draft), [draft]);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-logo">Drive <span>do Além</span></div>
        <span style={{ color: "var(--accent)", fontWeight: 800, fontSize: "1.1rem" }}>Editor</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem" }}>
          <button className="btn btn-secondary btn-sm" onClick={onBack}>← Voltar</button>
          <button className="btn btn-primary" onClick={handleSave}>💾 Guardar</button>
        </div>
      </header>

      <div className="main-content">
        {/* Game title & mode */}
        <div className="card mb-3">
          <div className="field-row">
            <div className="field" style={{ flex: 2 }}>
              <label>Título do Jogo</label>
              <input
                type="text"
                value={draft.title}
                onChange={(e) => update((g) => ({ ...g, title: e.target.value }))}
              />
            </div>
            <div className="field">
              <label>Modo</label>
              <select
                value={draft.mode}
                onChange={(e) =>
                  update((g) => ({ ...g, mode: e.target.value as "standard" | "camp" }))
                }
              >
                <option value="standard">Standard</option>
                <option value="camp">Campo</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-3">
          {(["questions", "teams", "settings", ...(draft.mode === "camp" ? ["campplan"] : [])] as const).map((tab) => (
            <button
              key={tab}
              className={`btn btn-secondary${activeTab === tab ? " btn-primary" : ""}`}
              onClick={() => setActiveTab(tab as typeof activeTab)}
            >
              {tab === "questions" ? "📋 Perguntas"
                : tab === "teams" ? "👥 Equipas"
                : tab === "settings" ? "⚙️ Definições"
                : "🗺️ Plano Campo"}
            </button>
          ))}
        </div>

        {activeTab === "questions" && (
          <div className="editor-layout">
            {/* Sidebar: question list */}
            <div className="editor-sidebar">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted font-bold">PERGUNTAS ({draft.questions.length})</span>
                <button className="btn btn-primary btn-sm" onClick={addQuestion}>+ Adicionar</button>
              </div>
              <div className="scroll-y" style={{ maxHeight: "calc(100vh - 220px)" }}>
                {draft.questions.map((q, idx) => (
                  <div
                    key={q.id}
                    className={`question-list-item${selectedQId === q.id ? " active" : ""}`}
                    onClick={() => setSelectedQId(q.id)}
                  >
                    <div className="question-list-item-num">#{idx + 1}</div>
                    <div className="question-list-item-text">
                      {q.text || <span className="text-muted">(sem texto)</span>}
                    </div>
                    <div className="text-sm text-muted mt-1">{q.answers.length} respostas</div>
                  </div>
                ))}
                {draft.questions.length === 0 && (
                  <div className="empty-state text-sm">Sem perguntas. Adiciona uma!</div>
                )}
              </div>
            </div>

            {/* Main: question editor */}
            <div className="editor-main">
              {selectedQ ? (
                <QuestionEditor
                  question={selectedQ}
                  teams={draft.teams}
                  onUpdateQ={(fn) => updateQ(selectedQ.id, fn)}
                  onDelete={() => deleteQuestion(selectedQ.id)}
                  onAddAnswer={() => addAnswer(selectedQ.id)}
                  onDeleteAnswer={(aId) => deleteAnswer(selectedQ.id, aId)}
                  onUpdateAnswer={(aId, patch) => updateAnswer(selectedQ.id, aId, patch)}
                  onMoveAnswer={(aId, dir) => moveAnswer(selectedQ.id, aId, dir)}
                  onToggleTeam={(teamId, field) => toggleTeamId(selectedQ.id, teamId, field)}
                />
              ) : (
                <div className="empty-state">
                  Seleciona uma pergunta ou cria uma nova.
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "teams" && (
          <div className="card-lg">
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-bold text-accent">Equipas</span>
              <button className="btn btn-primary btn-sm" onClick={addTeam}>+ Adicionar</button>
            </div>
            <div className="flex flex-col gap-2">
              {draft.teams.map((team) => (
                <div key={team.id} className="field-row">
                  <div className="field" style={{ flex: 1 }}>
                    <input
                      type="text"
                      value={team.name}
                      onChange={(e) => updateTeam(team.id, { name: e.target.value })}
                      placeholder="Nome da equipa"
                    />
                  </div>
                  <div className="field" style={{ width: 100 }}>
                    <input
                      type="number"
                      value={team.score}
                      onChange={(e) => updateTeam(team.id, { score: Number(e.target.value) })}
                      placeholder="Pontos"
                    />
                  </div>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteTeam(team.id)}>✕</button>
                </div>
              ))}
              {draft.teams.length === 0 && <div className="empty-state">Sem equipas.</div>}
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="card-lg">
            <div className="text-lg font-bold text-accent mb-3">Definições do Jogo</div>

            {/* Scoring mode */}
            <div className="card mb-3" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="text-sm font-bold text-muted mb-2">MODO DE PONTUAÇÃO</div>
              <div className="flex gap-2" style={{ flexWrap: "wrap" }}>
                <button
                  className={`btn ${draft.scoringMode === "raw_votes" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => handleScoringModeChange("raw_votes")}
                >
                  Votos = Pontos
                </button>
                <button
                  className={`btn ${draft.scoringMode === "normalized_100" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => handleScoringModeChange("normalized_100")}
                >
                  Escala até 100
                </button>
              </div>
              <div className="text-sm text-muted mt-2">
                {draft.scoringMode === "raw_votes" ? (
                  <>
                    <strong>Votos = Pontos:</strong> cada resposta vale exatamente os seus votos.
                    {draft.mode === "camp" && (
                      <span style={{ color: "var(--correct)", marginLeft: "0.4rem" }}>
                        ✓ Recomendado para modo campo.
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <strong>Escala até 100:</strong> pontos = round(votos / respondentes × 100).
                    O total por pergunta é aproximadamente 100 pts.
                  </>
                )}
              </div>
            </div>

            {/* Validation warnings */}
            {validationWarnings.length > 0 && (
              <div className="mb-3">
                {validationWarnings.slice(0, 5).map((w, i) => (
                  <div
                    key={i}
                    className="demo-notice"
                    style={{
                      marginBottom: "0.3rem",
                      color: w.level === "error" ? "#fca5a5" : "#fbbf24",
                      borderColor: w.level === "error" ? "rgba(252,165,165,0.3)" : undefined,
                    }}
                  >
                    {w.level === "error" ? "⚠️" : "ℹ️"} {w.message}
                  </div>
                ))}
                {validationWarnings.length > 5 && (
                  <div className="text-sm text-muted">
                    +{validationWarnings.length - 5} mais avisos...
                  </div>
                )}
              </div>
            )}

            {/* Theme */}
            <div className="card mb-3" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="text-sm font-bold text-muted mb-2">TEMA VISUAL</div>
              <div className="flex gap-2">
                <button
                  className={`btn ${draft.theme === "cyber" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => update((g) => ({ ...g, theme: "cyber" as const }))}
                >
                  🖥️ Cyber
                </button>
                <button
                  className={`btn ${draft.theme === "classic" || !draft.theme ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => update((g) => ({ ...g, theme: "classic" as const }))}
                >
                  🎮 Classic
                </button>
              </div>
              <div className="text-sm text-muted mt-2">
                {draft.theme === "cyber"
                  ? "Modo cyber: visual terminal, vocabulário de desencriptação, cores por equipa."
                  : "Modo classic: aparência e vocabulário standard."}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className="field">
                <label>Escolhas visíveis por equipa (maxVisibleChoicesPerTeam)</label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={draft.settings.maxVisibleChoicesPerTeam}
                  onChange={(e) =>
                    update((g) => ({
                      ...g,
                      settings: { ...g.settings, maxVisibleChoicesPerTeam: Number(e.target.value) },
                    }))
                  }
                />
              </div>
              <div className="field">
                <label>Slots de resposta (8 ou 10)</label>
                <select
                  value={draft.settings.answerSlots}
                  onChange={(e) =>
                    update((g) => ({
                      ...g,
                      settings: { ...g.settings, answerSlots: Number(e.target.value) as 8 | 10 },
                    }))
                  }
                >
                  <option value={8}>8</option>
                  <option value={10}>10</option>
                </select>
              </div>
              <div className="field">
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    checked={draft.settings.manualRevealAddsPoints}
                    onChange={(e) =>
                      update((g) => ({
                        ...g,
                        settings: { ...g.settings, manualRevealAddsPoints: e.target.checked },
                      }))
                    }
                  />
                  Revelar manual adiciona pontos (manualRevealAddsPoints)
                </label>
              </div>
              <div className="field">
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    checked={draft.settings.enableSounds}
                    onChange={(e) =>
                      update((g) => ({
                        ...g,
                        settings: { ...g.settings, enableSounds: e.target.checked },
                      }))
                    }
                  />
                  Ativar sons (enableSounds)
                </label>
              </div>
              <div className="field">
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    checked={draft.settings.specialCampScoring}
                    onChange={(e) =>
                      update((g) => ({
                        ...g,
                        settings: { ...g.settings, specialCampScoring: e.target.checked },
                      }))
                    }
                  />
                  Pontuação especial campo (normalHits + raras×2)
                </label>
                {draft.settings.specialCampScoring && (
                  <div className="text-sm text-muted mt-1">
                    Resposta rara = 1 voto. Fórmula: normal + rara×2. Ex: "2+3x2" = 8 pts.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === "campplan" && draft.mode === "camp" && (
          <CampPlanTab teams={draft.teams} />
        )}
      </div>
    </div>
  );
}

// ── Sub-component: CampPlanTab ────────────────────────────────────────────────

function CampPlanTab({ teams }: { teams: Team[] }) {
  const TEAM_KEYS: TeamKey[] = ["branca", "amarela", "verde", "azul", "vermelha", "laranja"];
  const TEAM_LABELS: Record<TeamKey, string> = {
    branca: "Branca", amarela: "Amarela", verde: "Verde",
    azul: "Azul", vermelha: "Vermelha", laranja: "Laranja",
  };
  const TEAM_COLORS: Record<TeamKey, string> = {
    branca: "#e5e7eb", amarela: "#fde68a", verde: "#6ee7b7",
    azul: "#93c5fd", vermelha: "#fca5a5", laranja: "#fdba74",
  };

  return (
    <div>
      <div className="card-lg mb-3">
        <div className="text-lg font-bold text-accent mb-1">🗺️ Plano do Campo (30 Perguntas / 6 Equipas)</div>
        <div className="text-sm text-muted mb-3">
          15 pares de perguntas. Cada par é jogado por 2 equipas e respondido pelas outras 4.
          Cada equipa responde a <strong>20 perguntas</strong> no questionário e joga <strong>10 perguntas</strong> ao vivo.
        </div>

        {/* Pairs table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th style={{ textAlign: "left", padding: "0.4rem 0.6rem", color: "var(--text-muted)" }}>Par</th>
                <th style={{ textAlign: "left", padding: "0.4rem 0.6rem", color: "var(--text-muted)" }}>Qs</th>
                {TEAM_KEYS.map((k) => (
                  <th key={k} style={{ padding: "0.4rem 0.5rem", color: TEAM_COLORS[k] }}>
                    {TEAM_LABELS[k]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CAMP_PAIRS.map((pair) => (
                <tr key={pair.pairNumber} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "0.35rem 0.6rem", color: "var(--text-muted)" }}>Par {pair.pairNumber}</td>
                  <td style={{ padding: "0.35rem 0.6rem" }}>Q{pair.questionNumbers[0]}, Q{pair.questionNumbers[1]}</td>
                  {TEAM_KEYS.map((k) => {
                    const isPlayable = pair.playableByTeams.includes(k);
                    return (
                      <td key={k} style={{ padding: "0.35rem 0.5rem", textAlign: "center" }}>
                        {isPlayable ? (
                          <span style={{ color: TEAM_COLORS[k], fontWeight: 700 }} title="Joga ao vivo">✓</span>
                        ) : (
                          <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }} title="Respondeu no questionário">R</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-sm text-muted mt-2">
          <strong style={{ color: "var(--accent)" }}>✓</strong> = Joga ao vivo (2 equipas por par) &nbsp;
          <strong style={{ color: "var(--text-muted)" }}>R</strong> = Respondeu no questionário (4 equipas por par)
        </div>
      </div>

      {/* Per-team questionnaire summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.75rem" }}>
        {TEAM_KEYS.map((k) => {
          const summary = TEAM_QUESTIONNAIRE_SUMMARY[k];
          const matchingTeam = teams.find((t) => t.name.toLowerCase() === k);
          return (
            <div key={k} className="card" style={{ borderTop: `3px solid ${TEAM_COLORS[k]}` }}>
              <div style={{ fontWeight: 800, color: TEAM_COLORS[k], marginBottom: "0.4rem" }}>
                {TEAM_LABELS[k]}
                {matchingTeam && (
                  <span className="text-muted" style={{ fontWeight: 400, fontSize: "0.8rem", marginLeft: "0.4rem" }}>
                    ({matchingTeam.name})
                  </span>
                )}
              </div>
              <div className="text-sm text-muted mb-1">
                Respondem no questionário ({summary.answered.length}):{" "}
                <span style={{ color: "var(--text)" }}>Q{summary.answered.join(", Q")}</span>
              </div>
              <div className="text-sm text-muted">
                Jogam ao vivo ({summary.plays.length}):{" "}
                <span style={{ color: "var(--accent)" }}>Q{summary.plays.join(", Q")}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Sub-component: QuestionEditor ────────────────────────────────────────────

interface QEditorProps {
  question: FeudQuestion;
  teams: Team[];
  onUpdateQ: (fn: (q: FeudQuestion) => FeudQuestion) => void;
  onDelete: () => void;
  onAddAnswer: () => void;
  onDeleteAnswer: (aId: string) => void;
  onUpdateAnswer: (aId: string, patch: Partial<FeudAnswer>) => void;
  onMoveAnswer: (aId: string, dir: -1 | 1) => void;
  onToggleTeam: (teamId: string, field: "respondentTeamIds" | "playableByTeamIds") => void;
}

function QuestionEditor({
  question,
  teams,
  onUpdateQ,
  onDelete,
  onAddAnswer,
  onDeleteAnswer,
  onUpdateAnswer,
  onMoveAnswer,
  onToggleTeam,
}: QEditorProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-bold">Editar Pergunta</span>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>🗑 Eliminar</button>
      </div>

      <div className="card mb-2">
        <div className="field">
          <label>Texto da Pergunta</label>
          <input
            type="text"
            value={question.text}
            onChange={(e) => onUpdateQ((q) => ({ ...q, text: e.target.value }))}
            placeholder="Ex: 100 pessoas disseram... Nomeia um animal doméstico."
          />
        </div>
        <div className="field-row">
          <div className="field" style={{ width: 160 }}>
            <label>Nº de Respondentes</label>
            <input
              type="number"
              min={1}
              value={question.respondentCount}
              onChange={(e) =>
                onUpdateQ((q) => ({ ...q, respondentCount: Number(e.target.value) }))
              }
            />
          </div>
        </div>
      </div>

      {/* Team membership */}
      {teams.length > 0 && (
        <div className="card mb-2">
          <div className="text-sm font-bold mb-2" style={{ color: "var(--text-muted)" }}>
            EQUIPAS
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            <div>
              <div className="text-sm text-muted mb-1">Respondentes (quem respondeu)</div>
              {teams.map((t) => (
                <label key={t.id} style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.25rem", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={question.respondentTeamIds.includes(t.id)}
                    onChange={() => onToggleTeam(t.id, "respondentTeamIds")}
                  />
                  <span className="text-sm">{t.name}</span>
                </label>
              ))}
            </div>
            <div>
              <div className="text-sm text-muted mb-1">Podem jogar</div>
              {teams.map((t) => (
                <label key={t.id} style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.25rem", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={question.playableByTeamIds.includes(t.id)}
                    onChange={() => onToggleTeam(t.id, "playableByTeamIds")}
                  />
                  <span className="text-sm">{t.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Answers */}
      <div className="card">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold" style={{ color: "var(--text-muted)" }}>
            RESPOSTAS ({question.answers.length})
          </span>
          <button className="btn btn-primary btn-sm" onClick={onAddAnswer} disabled={question.answers.length >= 10}>
            + Resposta
          </button>
        </div>

        {/* Header row */}
        <div className="answer-row text-sm text-muted mb-1" style={{ fontSize: "0.72rem" }}>
          <span>#</span>
          <span>Resposta</span>
          <span>Votos</span>
          <span>Pontos</span>
          <span>Aliases (separar por ",")</span>
          <span></span>
        </div>

        {question.answers.map((a, idx) => (
          <div key={a.id} className="answer-row">
            <div className="answer-rank">{idx + 1}</div>
            <input
              type="text"
              value={a.text}
              onChange={(e) => onUpdateAnswer(a.id, { text: e.target.value })}
              placeholder="Resposta"
            />
            <input
              type="number"
              min={0}
              value={a.votes}
              onChange={(e) => onUpdateAnswer(a.id, { votes: Number(e.target.value) })}
            />
            <input
              type="number"
              min={0}
              value={a.points}
              onChange={(e) => onUpdateAnswer(a.id, { points: Number(e.target.value) })}
            />
            <input
              type="text"
              value={a.aliases.join(", ")}
              onChange={(e) =>
                onUpdateAnswer(a.id, {
                  aliases: e.target.value
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean),
                })
              }
              placeholder="Ex: mae, mãe, mom"
            />
            <div className="flex gap-1">
              <button className="btn btn-secondary btn-icon btn-sm" onClick={() => onMoveAnswer(a.id, -1)} disabled={idx === 0} title="Mover cima">↑</button>
              <button className="btn btn-secondary btn-icon btn-sm" onClick={() => onMoveAnswer(a.id, 1)} disabled={idx === question.answers.length - 1} title="Mover baixo">↓</button>
              <button className="btn btn-danger btn-icon btn-sm" onClick={() => onDeleteAnswer(a.id)} disabled={question.answers.length <= 1} title="Eliminar">✕</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
