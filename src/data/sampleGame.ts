import type { FeudGame } from "../types";
import { createBonusQuestions } from "./bonusQuestions";

// t1=Amarela  t2=Azul  t3=Branca  t4=Laranja  t5=Verde  t6=Vermelha
const TEAM_IDS = ["t1", "t2", "t3", "t4", "t5", "t6"];

const mainQuestions: FeudGame["questions"] = [
  // Pair 1 (Q1-2): Playable Amarela+Azul
  {
    id: "q1", questionType: "main", text: "Que poder especial dava mais jeito num campo de férias?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t1", "t2"], respondentTeamIds: ["t3", "t4", "t5", "t6"],
  },
  {
    id: "q2", questionType: "main", text: "Que festividade gostavas que saísse na roleta todos os dias?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t1", "t2"], respondentTeamIds: ["t3", "t4", "t5", "t6"],
  },
  // Pair 2 (Q3-4): Playable Amarela+Branca
  {
    id: "q3", questionType: "main", text: "Diz uma desculpa clássica para não correr numa atividade.",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t1", "t3"], respondentTeamIds: ["t2", "t4", "t5", "t6"],
  },
  {
    id: "q4", questionType: "main", text: "Que comida não podia faltar num arraial?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t1", "t3"], respondentTeamIds: ["t2", "t4", "t5", "t6"],
  },
  // Pair 3 (Q5-6): Playable Amarela+Laranja
  {
    id: "q5", questionType: "main", text: "Qual a coisa mais engraçada que podia sair de dentro do Pedregulho destruído?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t1", "t4"], respondentTeamIds: ["t2", "t3", "t5", "t6"],
  },
  {
    id: "q6", questionType: "main", text: "Que participante é mais provável de adormecer durante uma explicação?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t1", "t4"], respondentTeamIds: ["t2", "t3", "t5", "t6"],
  },
  // Pair 4 (Q7-8): Playable Amarela+Verde
  {
    id: "q7", questionType: "main", text: "Que personagem seria pior a guardar um segredo?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t1", "t5"], respondentTeamIds: ["t2", "t3", "t4", "t6"],
  },
  {
    id: "q8", questionType: "main", text: "Diz uma coisa que se perde sempre num campo de férias.",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t1", "t5"], respondentTeamIds: ["t2", "t3", "t4", "t6"],
  },
  // Pair 5 (Q9-10): Playable Amarela+Vermelha
  {
    id: "q9", questionType: "main", text: "Que personagem beberia uma poção sem perguntar o que era?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t1", "t6"], respondentTeamIds: ["t2", "t3", "t4", "t5"],
  },
  {
    id: "q10", questionType: "main", text: "Diz um erro que as personagens dos filmes de terror costumam fazer.",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t1", "t6"], respondentTeamIds: ["t2", "t3", "t4", "t5"],
  },
  // Pair 6 (Q11-12): Playable Azul+Branca
  {
    id: "q11", questionType: "main", text: "Diz uma coisa que uma equipa faz quando está a perder.",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t2", "t3"], respondentTeamIds: ["t1", "t4", "t5", "t6"],
  },
  {
    id: "q12", questionType: "main", text: "Que presente nunca se deve dar no Dia dos Namorados?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t2", "t3"], respondentTeamIds: ["t1", "t4", "t5", "t6"],
  },
  // Pair 7 (Q13-14): Playable Azul+Laranja
  {
    id: "q13", questionType: "main", text: "Que regra do campo gostavas de abolir?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t2", "t4"], respondentTeamIds: ["t1", "t3", "t5", "t6"],
  },
  {
    id: "q14", questionType: "main", text: "Onde esconderias um ovo da Páscoa no Lugar d'Além?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t2", "t4"], respondentTeamIds: ["t1", "t3", "t5", "t6"],
  },
  // Pair 8 (Q15-16): Playable Azul+Verde
  {
    id: "q15", questionType: "main", text: "Que coisa não podia faltar na gala final?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t2", "t5"], respondentTeamIds: ["t1", "t3", "t4", "t6"],
  },
  {
    id: "q16", questionType: "main", text: "Que objeto nunca devia ficar nas mãos de alguém tão caótico como a Ronalda McDonalda?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t2", "t5"], respondentTeamIds: ["t1", "t3", "t4", "t6"],
  },
  // Pair 9 (Q17-18): Playable Azul+Vermelha
  {
    id: "q17", questionType: "main", text: "Que personagem seria mais provável de chorar num discurso?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t2", "t6"], respondentTeamIds: ["t1", "t3", "t4", "t5"],
  },
  {
    id: "q18", questionType: "main", text: "Que participante é mais provável de se rir num momento sério?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t2", "t6"], respondentTeamIds: ["t1", "t3", "t4", "t5"],
  },
  // Pair 10 (Q19-20): Playable Branca+Laranja
  {
    id: "q19", questionType: "main", text: "Que personagem seria melhor DJ numa festa?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t3", "t4"], respondentTeamIds: ["t1", "t2", "t5", "t6"],
  },
  {
    id: "q20", questionType: "main", text: "Diz uma coisa que imaginas a Ronalda McDonalda a partir sem querer.",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t3", "t4"], respondentTeamIds: ["t1", "t2", "t5", "t6"],
  },
  // Pair 11 (Q21-22): Playable Branca+Verde
  {
    id: "q21", questionType: "main", text: "Qual a música mais ouvida nos Santos Populares deste ano?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t3", "t5"], respondentTeamIds: ["t1", "t2", "t4", "t6"],
  },
  {
    id: "q22", questionType: "main", text: "Que coisa levas contigo se tiveres medo à noite?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t3", "t5"], respondentTeamIds: ["t1", "t2", "t4", "t6"],
  },
  // Pair 12 (Q23-24): Playable Branca+Vermelha
  {
    id: "q23", questionType: "main", text: "O que pode transformar uma festa num desastre?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t3", "t6"], respondentTeamIds: ["t1", "t2", "t4", "t5"],
  },
  {
    id: "q24", questionType: "main", text: "Que objeto mágico seria mais útil numa missão?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t3", "t6"], respondentTeamIds: ["t1", "t2", "t4", "t5"],
  },
  // Pair 13 (Q25-26): Playable Laranja+Verde
  {
    id: "q25", questionType: "main", text: "Que comida te faz lembrar o Natal?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t4", "t5"], respondentTeamIds: ["t1", "t2", "t3", "t6"],
  },
  {
    id: "q26", questionType: "main", text: "Que participante é mais provável de convencer a equipa a fazer disparates?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t4", "t5"], respondentTeamIds: ["t1", "t2", "t3", "t6"],
  },
  // Pair 14 (Q27-28): Playable Laranja+Vermelha
  {
    id: "q27", questionType: "main", text: "Que animal devia viver no covil do Malévolo Dumbledores?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t4", "t6"], respondentTeamIds: ["t1", "t2", "t3", "t5"],
  },
  {
    id: "q28", questionType: "main", text: "Qual seria o pior sítio para um pedido para a gala final?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t4", "t6"], respondentTeamIds: ["t1", "t2", "t3", "t5"],
  },
  // Pair 15 (Q29-30): Playable Verde+Vermelha
  {
    id: "q29", questionType: "main", text: "Se fosses a Cátia Margarida Inês Maria Catarina Paula Sara, o que gostavas de receber no teu aniversário?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t5", "t6"], respondentTeamIds: ["t1", "t2", "t3", "t4"],
  },
  {
    id: "q30", questionType: "main", text: "Que casal juntarias se fosses a Milla Valentina?",
    respondentCount: 0, completed: false, answers: [],
    playableByTeamIds: ["t5", "t6"], respondentTeamIds: ["t1", "t2", "t3", "t4"],
  },
];

export const sampleCampGame: FeudGame = {
  id: "sample-camp-2024",
  title: "Loja de Informáticos ao Domicílio",
  mode: "camp",
  scoringMode: "raw_votes",
  theme: "cyber",
  teams: [
    { id: "t1", name: "Amarela",  score: 0, normalHits: 0, rareHits: 0 },
    { id: "t2", name: "Azul",     score: 0, normalHits: 0, rareHits: 0 },
    { id: "t3", name: "Branca",   score: 0, normalHits: 0, rareHits: 0 },
    { id: "t4", name: "Laranja",  score: 0, normalHits: 0, rareHits: 0 },
    { id: "t5", name: "Verde",    score: 0, normalHits: 0, rareHits: 0 },
    { id: "t6", name: "Vermelha", score: 0, normalHits: 0, rareHits: 0 },
  ],
  questions: [
    ...mainQuestions,
    ...createBonusQuestions(TEAM_IDS),
  ],
  settings: {
    maxVisibleChoicesPerTeam: 3,
    manualRevealAddsPoints: false,
    answerSlots: 8,
    enableSounds: true,
    specialCampScoring: true,
  },
  isTemplate: true,
};

export const sampleStandardGame: FeudGame = {
  id: "sample-standard-2024",
  title: "Jogo Rápido Demo",
  mode: "standard",
  scoringMode: "raw_votes",
  theme: "classic",
  teams: [
    { id: "s1", name: "Equipa A", score: 0 },
    { id: "s2", name: "Equipa B", score: 0 },
  ],
  questions: [
    {
      id: "sq1",
      text: "100 pessoas disseram: Nomeia um animal doméstico popular.",
      respondentCount: 100,
      respondentTeamIds: [],
      playableByTeamIds: ["s1", "s2"],
      completed: false,
      answers: [
        { id: "sq1a1", text: "Cão", votes: 45, points: 45, aliases: ["cachorro", "dog", "cadela"], revealed: false },
        { id: "sq1a2", text: "Gato", votes: 30, points: 30, aliases: ["cat", "gata", "bichano"], revealed: false },
        { id: "sq1a3", text: "Peixe", votes: 12, points: 12, aliases: ["peixinho", "fish"], revealed: false },
        { id: "sq1a4", text: "Pássaro", votes: 8, points: 8, aliases: ["bird", "periquito", "canário"], revealed: false },
        { id: "sq1a5", text: "Hamster", votes: 5, points: 5, aliases: ["rato", "hamsterzinho"], revealed: false },
      ],
    },
    {
      id: "sq2",
      text: "100 pessoas disseram: Nomeia uma coisa que encontras numa cozinha.",
      respondentCount: 100,
      respondentTeamIds: [],
      playableByTeamIds: ["s1", "s2"],
      completed: false,
      answers: [
        { id: "sq2a1", text: "Frigorifico", votes: 38, points: 38, aliases: ["frigorífico", "geladeira", "fridge"], revealed: false },
        { id: "sq2a2", text: "Fogão", votes: 28, points: 28, aliases: ["fogao", "stove"], revealed: false },
        { id: "sq2a3", text: "Micro-ondas", votes: 18, points: 18, aliases: ["microondas", "microwave"], revealed: false },
        { id: "sq2a4", text: "Panela", votes: 10, points: 10, aliases: ["pot", "tacho", "caçarola"], revealed: false },
        { id: "sq2a5", text: "Facas", votes: 6, points: 6, aliases: ["faca", "knife", "cutelo"], revealed: false },
      ],
    },
  ],
  settings: {
    maxVisibleChoicesPerTeam: 3,
    manualRevealAddsPoints: false,
    answerSlots: 8,
    enableSounds: true,
    specialCampScoring: false,
  },
  isTemplate: true,
};
