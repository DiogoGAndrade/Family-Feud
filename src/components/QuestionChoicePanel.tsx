import type { FeudQuestion } from "../types";

interface Props {
  questions: FeudQuestion[];
  selectedId: string | null;
  onSelect: (q: FeudQuestion) => void;
  maxVisible: number;
}

export default function QuestionChoicePanel({
  questions,
  selectedId,
  onSelect,
  maxVisible,
}: Props) {
  const visible = questions.slice(0, maxVisible);

  if (visible.length === 0) {
    return (
      <div className="empty-state text-sm">
        Sem perguntas disponíveis para esta equipa.
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
