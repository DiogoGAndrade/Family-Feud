import type { Team } from "../types";

interface Props {
  teams: Team[];
  activeTeamId: string | null;
  onSelectTeam: (id: string) => void;
}

export default function Scoreboard({ teams, activeTeamId, onSelectTeam }: Props) {
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
          <span className="score-value">{team.score}</span>
        </div>
      ))}
    </div>
  );
}
