import { useRef, useState, useEffect } from "react";
import type { KeyboardEvent } from "react";

interface Props {
  onGuess: (text: string) => void;
  disabled?: boolean;
  feedback: "correct" | "wrong" | null;
  placeholder?: string;
}

export default function GuessInput({ onGuess, disabled, feedback, placeholder }: Props) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when enabled
  useEffect(() => {
    if (!disabled) inputRef.current?.focus();
  }, [disabled]);

  // Clear input on feedback
  useEffect(() => {
    if (feedback) setValue("");
  }, [feedback]);

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      onGuess(value.trim());
    }
  };

  const inputClass = [
    "guess-input",
    feedback === "wrong" ? "shake" : "",
    feedback === "correct" ? "glow-green" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="guess-input-area">
      <input
        ref={inputRef}
        type="text"
        className={inputClass}
        placeholder={placeholder ?? "Escreve uma resposta e prime Enter..."}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
        disabled={disabled}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />
      <button
        className="btn btn-primary"
        disabled={disabled || !value.trim()}
        onClick={() => value.trim() && onGuess(value.trim())}
      >
        ↵
      </button>
    </div>
  );
}
