import type { Team } from "../types";

interface Props {
  teams: Team[];
  activeTeamId: string | null;
  onSelect: (id: string) => void;
}

export default function TeamSelector({ teams, activeTeamId, onSelect }: Props) {
  return (
    <div>
      <div className="text-sm text-muted mb-2">Equipa ativa</div>
      <div className="flex flex-col gap-1">
        {teams.map((t) => (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            className={`btn ${activeTeamId === t.id ? "btn-primary" : "btn-secondary"} w-full`}
            style={{ justifyContent: "flex-start", fontSize: "1rem" }}
          >
            {activeTeamId === t.id && "▶ "}
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
}
