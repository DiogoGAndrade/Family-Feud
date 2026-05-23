import type { Team } from "../types";
import { getSpecialCampScoreDisplay } from "../utils/gameLogic";

interface Props {
  teams: Team[];
  activeTeamId: string | null;
  onSelectTeam: (id: string) => void;
  specialCampScoring?: boolean;
}

export default function Scoreboard({ teams, activeTeamId, onSelectTeam, specialCampScoring = false }: Props) {
  const sorted = [...teams].sort((a, b) => b.score - a.score);
  return (
    <div className="scoreboard">
      {sorted.map((team) => (
        <div
          key={team.id}
          className={`score-row${activeTeamId === team.id ? " active-team" : ""}`}
          onClick={() => onSelectTeam(team.id)}
          title="Clica para selecionar equipa"
        >
          <span className="score-team-name">{team.name}</span>
          <span className="score-value">
            {specialCampScoring
              ? getSpecialCampScoreDisplay(team.normalHits ?? 0, team.rareHits ?? 0)
              : team.score}
          </span>
        </div>
      ))}
    </div>
  );
}
