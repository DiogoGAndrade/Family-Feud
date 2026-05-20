import type { FeudAnswer, FeudQuestion } from "../types";

interface Props {
  question: FeudQuestion;
  answerSlots: 8 | 10;
  justRevealedId: string | null;
  manualRevealAddsPoints: boolean;
  onManualReveal: (answerId: string) => void;
}

export default function AnswerBoard({
  question,
  answerSlots,
  justRevealedId,
  manualRevealAddsPoints,
  onManualReveal,
}: Props) {
  const slots = Math.min(answerSlots, question.answers.length);
  const filledAnswers = question.answers.slice(0, slots);

  return (
    <div>
      <div className="answer-board-title">{question.text}</div>
      <div
        className="answer-grid"
        style={{ marginTop: "0.75rem" }}
      >
        {filledAnswers.map((answer, idx) => (
          <AnswerSlot
            key={answer.id}
            answer={answer}
            rank={idx + 1}
            isJustRevealed={justRevealedId === answer.id}
            manualRevealAddsPoints={manualRevealAddsPoints}
            onManualReveal={() => !answer.revealed && onManualReveal(answer.id)}
          />
        ))}
      </div>
      <div
        className="text-sm text-muted"
        style={{ marginTop: "0.5rem", textAlign: "center" }}
      >
        {question.respondentCount} respondentes ·{" "}
        {filledAnswers.filter((a) => a.revealed).length}/{filledAnswers.length} reveladas
      </div>
    </div>
  );
}

function AnswerSlot({
  answer,
  rank,
  isJustRevealed,
  manualRevealAddsPoints,
  onManualReveal,
}: {
  answer: FeudAnswer;
  rank: number;
  isJustRevealed: boolean;
  manualRevealAddsPoints: boolean;
  onManualReveal: () => void;
}) {
  const className = [
    "answer-slot",
    answer.revealed ? "revealed" : "hidden",
    isJustRevealed ? "just-revealed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} onClick={answer.revealed ? undefined : onManualReveal}>
      <div className="answer-rank-badge">{rank}</div>
      {answer.revealed ? (
        <>
          <span className="answer-slot-text">{answer.text}</span>
          <span className="answer-slot-points">{answer.points}</span>
        </>
      ) : (
        <>
          <span className="answer-slot-text answer-slot-hidden-text">????</span>
          {manualRevealAddsPoints && (
            <span
              className="text-muted"
              style={{ fontSize: "0.7rem", marginLeft: "auto" }}
            >
              +pts
            </span>
          )}
        </>
      )}
    </div>
  );
}
