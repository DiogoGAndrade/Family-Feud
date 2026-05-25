import type { Team } from "../types";
import { getSpecialCampScoreDisplay } from "../utils/gameLogic";
import { getTeamColor } from "../utils/teamColors";

interface Props {
  teams: Team[];
  activeTeamId: string | null;
  onSelectTeam: (id: string) => void;
  specialCampScoring?: boolean;
  isCyber?: boolean;
}

export default function Scoreboard({
  teams,
  activeTeamId,
  onSelectTeam,
  specialCampScoring = false,
  isCyber = false,
}: Props) {
  const sorted = [...teams].sort((a, b) => b.score - a.score);
  return (
    <div className="scoreboard">
      {sorted.map((team) => {
        const teamColor = isCyber ? getTeamColor(team.name) : "var(--accent)";
        const isActive = activeTeamId === team.id;
        return (
          <div
            key={team.id}
            className={`score-row${isActive ? " active-team" : ""}`}
            style={isCyber ? { borderColor: isActive ? teamColor : "rgba(255,255,255,0.08)" } : undefined}
            onClick={() => onSelectTeam(team.id)}
            title="Clica para selecionar equipa"
          >
            <span
              className="score-team-name"
              style={isCyber ? { color: teamColor } : undefined}
            >
              {team.name}
            </span>
            <span
              className="score-value"
              style={{ color: isCyber ? teamColor : "var(--accent)" }}
            >
              {specialCampScoring
                ? getSpecialCampScoreDisplay(team.normalHits ?? 0, team.rareHits ?? 0)
                : team.score}
            </span>
          </div>
        );
      })}
    </div>
  );
}
