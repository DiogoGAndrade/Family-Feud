export type Team = {
  id: string;
  name: string;
  score: number;
};

export type FeudAnswer = {
  id: string;
  text: string;
  votes: number;
  points: number;
  aliases: string[];
  revealed: boolean;
};

export type FeudQuestion = {
  id: string;
  text: string;
  respondentCount: number;
  respondentTeamIds: string[];
  playableByTeamIds: string[];
  answers: FeudAnswer[];
  completed: boolean;
};

export type GameSettings = {
  maxVisibleChoicesPerTeam: number;
  manualRevealAddsPoints: boolean;
  answerSlots: 8 | 10;
  enableSounds: boolean;
};

export type FeudGame = {
  id: string;
  title: string;
  mode: "standard" | "camp";
  teams: Team[];
  questions: FeudQuestion[];
  settings: GameSettings;
};

export type QuestionBankItem = {
  id: string;
  text: string;
  respondentCount: number;
  answers: Array<{
    text: string;
    votes: number;
    points: number;
    aliases: string[];
  }>;
  tags: string[];
  source: string;
};

export type QuestionPack = {
  id: string;
  name: string;
  description: string;
  questions: QuestionBankItem[];
};

export type AppView =
  | { type: "library" }
  | { type: "editor"; gameId: string }
  | { type: "play"; gameId: string }
  | { type: "bank" };
