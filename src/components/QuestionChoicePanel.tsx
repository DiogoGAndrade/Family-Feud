import type { FeudQuestion, ScoringMode } from "../types";

interface Props {
  questions: FeudQuestion[];
  selectedId: string | null;
  onSelect: (q: FeudQuestion) => void;
  maxVisible: number;
  large?: boolean;
  scoringMode?: ScoringMode;
}

export default function QuestionChoicePanel({
  questions,
  selectedId,
  onSelect,
  maxVisible,
  large = false,
  scoringMode = "raw_votes",
}: Props) {
  const visible = questions.slice(0, maxVisible);

  if (visible.length === 0) {
    return (
      <div className="empty-state text-sm">
        Sem perguntas disponíveis para esta equipa.
      </div>
    );
  }

  if (large) {
    return (
      <div>
        <div
          className="text-muted font-bold"
          style={{ fontSize: "1rem", marginBottom: "1rem", letterSpacing: "0.05em" }}
        >
          ESCOLHE UMA PERGUNTA ({visible.length} disponível{visible.length !== 1 ? "s" : ""})
        </div>
        <div className="question-choices-large">
          {visible.map((q, i) => {
            const totalPoints = q.answers
              .filter((a) => !a.revealed)
              .reduce((sum, a) => sum + a.points, 0);
            const revealedCount = q.answers.filter((a) => a.revealed).length;
            const isSelected = selectedId === q.id;

            return (
              <button
                key={q.id}
                className={`question-choice-large${isSelected ? " selected" : ""}`}
                onClick={() => onSelect(q)}
              >
                <div className="question-choice-large-num">Pergunta {i + 1}</div>
                <div className="question-choice-large-text">{q.text}</div>
                <div className="question-choice-large-meta">
                  {revealedCount > 0 && (
                    <span style={{ color: "var(--correct)" }}>
                      {revealedCount} revelada{revealedCount !== 1 ? "s" : ""} ·{" "}
                    </span>
                  )}
                  <span>
                    {totalPoints} pts disponíveis
                    {scoringMode === "normalized_100" && " · escala 100"}
                    {" · "}
                    {q.respondentCount} participantes
                    {" · "}
                    {q.answers.length} resposta{q.answers.length !== 1 ? "s" : ""}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="question-choices">
      <div className="text-sm text-muted mb-2">
        Perguntas disponíveis ({visible.length})
      </div>
      {visible.map((q, i) => (
        <button
          key={q.id}
          className={`question-choice-btn${selectedId === q.id ? " selected" : ""}`}
          onClick={() => onSelect(q)}
        >
          <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
            #{i + 1}
          </span>{" "}
          {q.text}
        </button>
      ))}
    </div>
  );
}
