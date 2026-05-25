export const CYBER_TEAM_COLORS: Record<string, string> = {
  branca:   "#e2e8f0",
  amarela:  "#fde68a",
  verde:    "#6ee7b7",
  azul:     "#60a5fa",
  vermelha: "#f87171",
  laranja:  "#fb923c",
};

export function getTeamColor(name: string): string {
  return CYBER_TEAM_COLORS[name.toLowerCase()] ?? "var(--accent)";
}
