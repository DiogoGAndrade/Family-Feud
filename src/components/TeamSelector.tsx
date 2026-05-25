import type { Team } from "../types";
import { getTeamColor } from "../utils/teamColors";

interface Props {
  teams: Team[];
  activeTeamId: string | null;
  onSelect: (id: string) => void;
  isCyber?: boolean;
}

export default function TeamSelector({ teams, activeTeamId, onSelect, isCyber = false }: Props) {
  return (
    <div>
      <div className="text-sm text-muted mb-2">
        {isCyber ? "OPERADOR ATIVO" : "Equipa ativa"}
      </div>
      <div className="flex flex-col gap-1">
        {teams.map((t) => {
          const isActive = activeTeamId === t.id;
          const teamColor = isCyber ? getTeamColor(t.name) : undefined;
          return (
            <button
              key={t.id}
              onClick={() => onSelect(t.id)}
              className={`btn ${isActive ? "btn-primary" : "btn-secondary"} w-full`}
              style={{
                justifyContent: "flex-start",
                fontSize: "1rem",
                ...(isCyber && isActive && teamColor
                  ? { background: `${teamColor}22`, borderColor: teamColor, color: teamColor }
                  : isCyber && teamColor
                  ? { borderColor: `${teamColor}44`, color: teamColor }
                  : {}),
              }}
            >
              {isActive && "▶ "}
              {t.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
