import type { FeudGame } from "../types";

/**
 * FEUD DOS DETETIVES — MUNDO DAS ABÓBORAS (V4 REV1 — respostas reais)
 *
 * Individual game mode: each "team" is a single guessing character.
 * 22 questions, 11 guessers, 3 guessers / 9 respondents per question.
 * Malévolo Dumbledores answers the underlying questionnaire for every question but never guesses live,
 * so he is intentionally not modeled as a team (would always show 0 on the scoreboard, and this also
 * guarantees he can never be picked as a guesser in the in-game guesser editor).
 * Papai Claudão and Coelhice are excluded entirely from this game.
 *
 * Generated from feud_detetives_v4_respostas_reais_REV1.json — see the self-check assertions below.
 */

const TEAM_IDS: Record<string, string> = {
  "Jesus Cruz": "det-jesus-cruz",
  "Shiba": "det-shiba",
  "Siddhartha Ganda Bunda": "det-siddhartha-ganda-bunda",
  "Milla Valentina": "det-milla-valentina",
  "Ronalda McDonalda": "det-ronalda-mcdonalda",
  "Sã Joã": "det-sa-joa",
  "Fábio Coentrão": "det-fabio-coentrao",
  "Salgueirita": "det-salgueirita",
  "Paulenda": "det-paulenda",
  "Sainte Antoinette": "det-sainte-antoinette",
  "Cátia da Pontinha": "det-catia-da-pontinha",
};

const teams: FeudGame["teams"] = [
  { id: "det-jesus-cruz", name: "Jesus Cruz", score: 0 },
  { id: "det-shiba", name: "Shiba", score: 0 },
  { id: "det-siddhartha-ganda-bunda", name: "Siddhartha Ganda Bunda", score: 0 },
  { id: "det-milla-valentina", name: "Milla Valentina", score: 0 },
  { id: "det-ronalda-mcdonalda", name: "Ronalda McDonalda", score: 0 },
  { id: "det-sa-joa", name: "Sã Joã", score: 0 },
  { id: "det-fabio-coentrao", name: "Fábio Coentrão", score: 0 },
  { id: "det-salgueirita", name: "Salgueirita", score: 0 },
  { id: "det-paulenda", name: "Paulenda", score: 0 },
  { id: "det-sainte-antoinette", name: "Sainte Antoinette", score: 0 },
  { id: "det-catia-da-pontinha", name: "Cátia da Pontinha", score: 0 },
];

const mainQuestions: FeudGame["questions"] = [
  {
    id: "det-p1",
    questionType: "main",
    text: "Que moni masculino de todos levavas ao Bidon?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Milla Valentina"]],
    completed: false,
    answers: [
      { id: "det-p1-a1", text: "Paulenda", votes: 4, points: 4, aliases: ["Paulenda"], revealed: false },
      { id: "det-p1-a2", text: "Tomás Ramalhete", votes: 2, points: 2, aliases: ["Tomás Ramalhete", "Ramalhete", "Tomas Ramalhete"], revealed: false },
      { id: "det-p1-a3", text: "Rodrigo Esaguy", votes: 2, points: 2, aliases: ["Rodrigo Esaguy", "Esaguy"], revealed: false },
      { id: "det-p1-a4", text: "Fábio Coentrão", votes: 1, points: 1, aliases: ["Fábio Coentrão"], revealed: false },
    ],
  },
  {
    id: "det-p2",
    questionType: "main",
    text: "Que moni deste campo levavas contigo para sobreviver numa ilha deserta?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Ronalda McDonalda"]],
    completed: false,
    answers: [
      { id: "det-p2-a1", text: "Jesus Cruz", votes: 2, points: 2, aliases: ["Jesus Cruz", "Jesus cruz"], revealed: false },
      { id: "det-p2-a2", text: "Ricardo Cruz", votes: 1, points: 1, aliases: ["Ricardo Cruz"], revealed: false },
      { id: "det-p2-a3", text: "Queiroz", votes: 1, points: 1, aliases: ["Queiroz"], revealed: false },
      { id: "det-p2-a4", text: "salgueirita", votes: 1, points: 1, aliases: ["salgueirita"], revealed: false },
      { id: "det-p2-a5", text: "Diana", votes: 1, points: 1, aliases: ["Diana"], revealed: false },
      { id: "det-p2-a6", text: "Casti", votes: 1, points: 1, aliases: ["Casti"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p2-ov1", text: "Gonçalo Carvalho", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p2-ov2", text: "Shiba", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p3",
    questionType: "main",
    text: "Que participante levavas contigo uma semana para casa?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Sã Joã"]],
    completed: false,
    answers: [
      { id: "det-p3-a1", text: "Dadu", votes: 3, points: 3, aliases: ["Dadu"], revealed: false },
      { id: "det-p3-a2", text: "Vicente", votes: 2, points: 2, aliases: ["Vicente"], revealed: false },
      { id: "det-p3-a3", text: "Filipe Marcelo", votes: 1, points: 1, aliases: ["Filipe Marcelo"], revealed: false },
      { id: "det-p3-a4", text: "Pedro", votes: 1, points: 1, aliases: ["Pedro"], revealed: false },
      { id: "det-p3-a5", text: "Kika Serrasqueiro", votes: 1, points: 1, aliases: ["Kika Serrasqueiro"], revealed: false },
      { id: "det-p3-a6", text: "Duarte Russo", votes: 1, points: 1, aliases: ["Duarte Russo"], revealed: false },
    ],
  },
  {
    id: "det-p4",
    questionType: "main",
    text: "Que participante escolherias para fazer a auto contagem se tivesse que acertar à primeira?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Fábio Coentrão"]],
    completed: false,
    answers: [
      { id: "det-p4-a1", text: "Leonor Russo", votes: 3, points: 3, aliases: ["Leonor Russo", "Leonor russo"], revealed: false },
      { id: "det-p4-a2", text: "António Amado", votes: 2, points: 2, aliases: ["António Amado", "Antonio Amado"], revealed: false },
      { id: "det-p4-a3", text: "Vicente", votes: 2, points: 2, aliases: ["Vicente"], revealed: false },
      { id: "det-p4-a4", text: "Teresa", votes: 1, points: 1, aliases: ["Teresa"], revealed: false },
      { id: "det-p4-a5", text: "Isabel Paulino", votes: 1, points: 1, aliases: ["Isabel Paulino"], revealed: false },
    ],
  },
  {
    id: "det-p5",
    questionType: "main",
    text: "Qual moni deste campo levarias à gala com direito a conchinha?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Salgueirita"]],
    completed: false,
    answers: [
      { id: "det-p5-a1", text: "Salgueirita", votes: 2, points: 2, aliases: ["Salgueirita", "salgueirita"], revealed: false },
      { id: "det-p5-a2", text: "Lucas Alves", votes: 1, points: 1, aliases: ["Lucas Alves"], revealed: false },
      { id: "det-p5-a3", text: "Paulino", votes: 1, points: 1, aliases: ["Paulino"], revealed: false },
      { id: "det-p5-a4", text: "Casti", votes: 1, points: 1, aliases: ["Casti"], revealed: false },
      { id: "det-p5-a5", text: "Papai Claudão", votes: 1, points: 1, aliases: ["Papai Claudão"], revealed: false },
      { id: "det-p5-a6", text: "Diana", votes: 1, points: 1, aliases: ["Diana"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p5-ov1", text: "Inês Castelhano", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p5-ov2", text: "Ronalda", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p6",
    questionType: "main",
    text: "Que moni feminina de todas levavas à lavandaria?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Salgueirita"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Paulenda"]],
    completed: false,
    answers: [
      { id: "det-p6-a1", text: "Salgueirita", votes: 3, points: 3, aliases: ["Salgueirita", "salgueirita"], revealed: false },
      { id: "det-p6-a2", text: "Milla", votes: 3, points: 3, aliases: ["Milla"], revealed: false },
      { id: "det-p6-a3", text: "Xana Califórnia", votes: 1, points: 1, aliases: ["Xana Califórnia"], revealed: false },
      { id: "det-p6-a4", text: "Inês", votes: 1, points: 1, aliases: ["Inês"], revealed: false },
      { id: "det-p6-a5", text: "Luísa", votes: 1, points: 1, aliases: ["Luísa", "Luisa"], revealed: false },
    ],
  },
  {
    id: "det-p7",
    questionType: "main",
    text: "Qual o material que nunca aparece quando precisas dele?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Paulenda"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Sainte Antoinette"]],
    completed: false,
    answers: [
      { id: "det-p7-a1", text: "Tesouras", votes: 3, points: 3, aliases: ["Tesouras", "TESOURA", "TESOURAS"], revealed: false },
      { id: "det-p7-a2", text: "Tape", votes: 2, points: 2, aliases: ["Tape"], revealed: false },
      { id: "det-p7-a3", text: "Agrafo", votes: 1, points: 1, aliases: ["Agrafo"], revealed: false },
      { id: "det-p7-a4", text: "Caneta", votes: 1, points: 1, aliases: ["Caneta"], revealed: false },
      { id: "det-p7-a5", text: "Alice", votes: 1, points: 1, aliases: ["Alice"], revealed: false },
      { id: "det-p7-a6", text: "Aristo", votes: 1, points: 1, aliases: ["Aristo"], revealed: false },
    ],
  },
  {
    id: "det-p8",
    questionType: "main",
    text: "Qual a melhor atividade para uma tarde bombástica?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Sainte Antoinette"]],
    playableByTeamIds: [TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Cátia da Pontinha"]],
    completed: false,
    answers: [
      { id: "det-p8-a1", text: "Luta/Guerra de balões de água", votes: 2, points: 2, aliases: ["Luta/Guerra de balões de água", "Guerra de balões de água", "Luta de baloes de agua"], revealed: false },
      { id: "det-p8-a2", text: "Chase", votes: 1, points: 1, aliases: ["Chase"], revealed: false },
      { id: "det-p8-a3", text: "Tarde relax", votes: 1, points: 1, aliases: ["Tarde relax"], revealed: false },
      { id: "det-p8-a4", text: "Batalha campal", votes: 1, points: 1, aliases: ["Batalha campal"], revealed: false },
      { id: "det-p8-a5", text: "Entrada dos putos 10h30", votes: 1, points: 1, aliases: ["Entrada dos putos 10h30"], revealed: false },
      { id: "det-p8-a6", text: "sirumbada", votes: 1, points: 1, aliases: ["sirumbada"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p8-ov1", text: "Mega torneios", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p8-ov2", text: "Madness", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p9",
    questionType: "main",
    text: "Qual a melhor frase do mural?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"]],
    completed: false,
    answers: [
      { id: "det-p9-a1", text: "Qual mural? / Que mural?", votes: 2, points: 2, aliases: ["Qual mural? / Que mural?", "Que mural?", "qual mural?"], revealed: false },
      { id: "det-p9-a2", text: "Tenho saudades do meu pau", votes: 2, points: 2, aliases: ["Tenho saudades do meu pau", "Tenho saudades do meu pau :("], revealed: false },
      { id: "det-p9-a3", text: "Eu confio na insparya, confia tu também!", votes: 1, points: 1, aliases: ["Eu confio na insparya, confia tu também!"], revealed: false },
      { id: "det-p9-a4", text: "Nao sei", votes: 1, points: 1, aliases: ["Nao sei"], revealed: false },
      { id: "det-p9-a5", text: "Alvarez", votes: 1, points: 1, aliases: ["Alvarez"], revealed: false },
      { id: "det-p9-a6", text: "Malta, preciso mesmo mesmo de saber as horas para gerir aqui a questão das drogas.", votes: 1, points: 1, aliases: ["Malta, preciso mesmo mesmo de saber as horas para gerir aqui a questão das drogas."], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p9-ov1", text: "“a dinamica entre criativos correu bem” - alice, dia 11", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p10",
    questionType: "main",
    text: "Qual é a melhor anomalia da casa ou da Bolha?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"]],
    playableByTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    completed: false,
    answers: [
      { id: "det-p10-a1", text: "Garrafeira/frigorífico não abre", votes: 2, points: 2, aliases: ["Garrafeira/frigorífico não abre", "A porta da garrafeira", "Frigorífico não abre"], revealed: false },
      { id: "det-p10-a2", text: "Sanita/autoclismo estragado", votes: 2, points: 2, aliases: ["Sanita/autoclismo estragado", "Sanita estragada", "o autoclismo da minha sanita"], revealed: false },
      { id: "det-p10-a3", text: "Alice", votes: 1, points: 1, aliases: ["Alice"], revealed: false },
      { id: "det-p10-a4", text: "Porta de emergência não abrir", votes: 1, points: 1, aliases: ["Porta de emergência não abrir", "A porta de emergência nao abrir em emergências"], revealed: false },
      { id: "det-p10-a5", text: "Mosqueteiras", votes: 1, points: 1, aliases: ["Mosqueteiras"], revealed: false },
      { id: "det-p10-a6", text: "Cadeado da disco", votes: 1, points: 1, aliases: ["Cadeado da disco", "Cadeado Disco"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p10-ov1", text: "Chuveiro estragado", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p11",
    questionType: "main",
    text: "Qual o mini deste campo mais provável de ter de ir ao hospital, sem ser acompanhar putos?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"]],
    playableByTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Cátia da Pontinha"]],
    completed: false,
    answers: [
      { id: "det-p11-a1", text: "Jesus Cruz", votes: 4, points: 4, aliases: ["Jesus Cruz", "Cruz", "Cruzzzz", "jesus cruz"], revealed: false },
      { id: "det-p11-a2", text: "Rita Alves", votes: 2, points: 2, aliases: ["Rita Alves", "Eu (Rita)"], revealed: false },
      { id: "det-p11-a3", text: "David Paulino", votes: 1, points: 1, aliases: ["David Paulino"], revealed: false },
      { id: "det-p11-a4", text: "Alice Lagido", votes: 1, points: 1, aliases: ["Alice Lagido"], revealed: false },
      { id: "det-p11-a5", text: "Fábio", votes: 1, points: 1, aliases: ["Fábio"], revealed: false },
    ],
  },
  {
    id: "det-p12",
    questionType: "main",
    text: "Qual o alimento mais importante num jantar de monis?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Sã Joã"]],
    completed: false,
    answers: [
      { id: "det-p12-a1", text: "Camarão", votes: 2, points: 2, aliases: ["Camarão", "Camarao"], revealed: false },
      { id: "det-p12-a2", text: "Álcool", votes: 2, points: 2, aliases: ["Álcool", "Alcool"], revealed: false },
      { id: "det-p12-a3", text: "ovos com farinheira", votes: 1, points: 1, aliases: ["ovos com farinheira"], revealed: false },
      { id: "det-p12-a4", text: "Croquetes", votes: 1, points: 1, aliases: ["Croquetes"], revealed: false },
      { id: "det-p12-a5", text: "Pao recheado", votes: 1, points: 1, aliases: ["Pao recheado"], revealed: false },
      { id: "det-p12-a6", text: "Salgadinhos- rissois", votes: 1, points: 1, aliases: ["Salgadinhos- rissois"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p12-ov1", text: "Piscina, comida boa", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p13",
    questionType: "main",
    text: "Qual foi a melhor atividade deste campo?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Fábio Coentrão"]],
    completed: false,
    answers: [
      { id: "det-p13-a1", text: "Noite de terror", votes: 3, points: 3, aliases: ["Noite de terror", "Noite do terror"], revealed: false },
      { id: "det-p13-a2", text: "Disco / Carnavrau disco", votes: 2, points: 2, aliases: ["Disco / Carnavrau disco", "Carnavrau disco", "Disco"], revealed: false },
      { id: "det-p13-a3", text: "Bolo de bolacha", votes: 1, points: 1, aliases: ["Bolo de bolacha"], revealed: false },
      { id: "det-p13-a4", text: "Sirumba", votes: 1, points: 1, aliases: ["Sirumba"], revealed: false },
      { id: "det-p13-a5", text: "Phase 10", votes: 1, points: 1, aliases: ["Phase 10"], revealed: false },
      { id: "det-p13-a6", text: "Dormir ate as 11h", votes: 1, points: 1, aliases: ["Dormir ate as 11h"], revealed: false },
    ],
  },
  {
    id: "det-p14",
    questionType: "main",
    text: "Qual é o melhor snack do staff?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Salgueirita"]],
    completed: false,
    answers: [
      { id: "det-p14-a1", text: "Chiquilin", votes: 1, points: 1, aliases: ["Chiquilin"], revealed: false },
      { id: "det-p14-a2", text: "Aqueles chocolates com amendoim congelados", votes: 1, points: 1, aliases: ["Aqueles chocolates com amendoim congelados"], revealed: false },
      { id: "det-p14-a3", text: "Gomas", votes: 1, points: 1, aliases: ["Gomas"], revealed: false },
      { id: "det-p14-a4", text: "colher de Nutella", votes: 1, points: 1, aliases: ["colher de Nutella"], revealed: false },
      { id: "det-p14-a5", text: "Gran Pavesi", votes: 1, points: 1, aliases: ["Gran Pavesi"], revealed: false },
      { id: "det-p14-a6", text: "Napolitana Baunilha", votes: 1, points: 1, aliases: ["Napolitana Baunilha"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p14-ov1", text: "Ruffle Ketchup", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p14-ov2", text: "Reeses", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p14-ov3", text: "Bolicao", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p15",
    questionType: "main",
    text: "Que moni é indispensável na noite de terror?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Milla Valentina"], TEAM_IDS["Sã Joã"], TEAM_IDS["Paulenda"]],
    completed: false,
    answers: [
      { id: "det-p15-a1", text: "Lucas Alves", votes: 2, points: 2, aliases: ["Lucas Alves"], revealed: false },
      { id: "det-p15-a2", text: "Raquel silva/sisi", votes: 1, points: 1, aliases: ["Raquel silva/sisi"], revealed: false },
      { id: "det-p15-a3", text: "Rita", votes: 1, points: 1, aliases: ["Rita"], revealed: false },
      { id: "det-p15-a4", text: "Cruz", votes: 1, points: 1, aliases: ["Cruz"], revealed: false },
      { id: "det-p15-a5", text: "Alice", votes: 1, points: 1, aliases: ["Alice"], revealed: false },
      { id: "det-p15-a6", text: "Xana", votes: 1, points: 1, aliases: ["Xana"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p15-ov1", text: "Gonçalo Cardoso", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p15-ov2", text: "Bundha", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p16",
    questionType: "main",
    text: "Qual é o melhor sítio para posto central?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Sã Joã"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Sainte Antoinette"]],
    completed: false,
    answers: [
      { id: "det-p16-a1", text: "Disco/Discoteca", votes: 4, points: 4, aliases: ["Disco/Discoteca", "Disco", "Discoteca"], revealed: false },
      { id: "det-p16-a2", text: "Redondel", votes: 2, points: 2, aliases: ["Redondel"], revealed: false },
      { id: "det-p16-a3", text: "Não as mesas do WC do poli, mas as outras mais perto", votes: 1, points: 1, aliases: ["Não as mesas do WC do poli, mas as outras mais perto"], revealed: false },
      { id: "det-p16-a4", text: "Carrinha, bue facil de depois arrumar tudo", votes: 1, points: 1, aliases: ["Carrinha, bue facil de depois arrumar tudo"], revealed: false },
      { id: "det-p16-a5", text: "centro da casa", votes: 1, points: 1, aliases: ["centro da casa"], revealed: false },
    ],
  },
  {
    id: "det-p17",
    questionType: "main",
    text: "Um objeto da enfermaria?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"]],
    playableByTeamIds: [TEAM_IDS["Sã Joã"], TEAM_IDS["Salgueirita"], TEAM_IDS["Cátia da Pontinha"]],
    completed: false,
    answers: [
      { id: "det-p17-a1", text: "Asas", votes: 4, points: 4, aliases: ["Asas", "Asas de borboleta", "Asas de fada", "Asas gigantes", "asas de fada"], revealed: false },
      { id: "det-p17-a2", text: "Tridente", votes: 2, points: 2, aliases: ["Tridente"], revealed: false },
      { id: "det-p17-a3", text: "Cinzeiro", votes: 1, points: 1, aliases: ["Cinzeiro"], revealed: false },
      { id: "det-p17-a4", text: "Material de enfermagem", votes: 1, points: 1, aliases: ["Material de enfermagem"], revealed: false },
      { id: "det-p17-a5", text: "Óculos de sol", votes: 1, points: 1, aliases: ["Óculos de sol"], revealed: false },
    ],
  },
  {
    id: "det-p18",
    questionType: "main",
    text: "Que moni do Mundo QFS no ativo chamavas para dar uma mega picada contigo?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Salgueirita"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Paulenda"]],
    completed: false,
    answers: [
      { id: "det-p18-a1", text: "Rodrigo Esaguy", votes: 1, points: 1, aliases: ["Rodrigo Esaguy"], revealed: false },
      { id: "det-p18-a2", text: "Lila", votes: 1, points: 1, aliases: ["Lila"], revealed: false },
      { id: "det-p18-a3", text: "Catalão", votes: 1, points: 1, aliases: ["Catalão"], revealed: false },
      { id: "det-p18-a4", text: "Sainte Antoinette", votes: 1, points: 1, aliases: ["Sainte Antoinette", "saintte antoinette"], revealed: false },
      { id: "det-p18-a5", text: "André Santos", votes: 1, points: 1, aliases: ["André Santos"], revealed: false },
      { id: "det-p18-a6", text: "Inês gomes", votes: 1, points: 1, aliases: ["Inês gomes"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p18-ov1", text: "Gonçalo", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p18-ov2", text: "Bundha", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p18-ov3", text: "Ricardo castelhano", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p19",
    questionType: "main",
    text: "Qual é o sítio mais nojento/usado da QFS?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Paulenda"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Salgueirita"], TEAM_IDS["Sainte Antoinette"]],
    completed: false,
    answers: [
      { id: "det-p19-a1", text: "Bidon", votes: 4, points: 4, aliases: ["Bidon", "bidons"], revealed: false },
      { id: "det-p19-a2", text: "Sofá", votes: 2, points: 2, aliases: ["Sofá", "Sofa", "Sofá enfermaria", "Sofa enfermaria", "Sofá da enfermaria", "Sofa da enfermaria"], revealed: false },
      { id: "det-p19-a3", text: "Maca", votes: 1, points: 1, aliases: ["Maca", "Maca da enfermaria", "Maca enfermaria"], revealed: false },
      { id: "det-p19-a4", text: "Enfermaria", votes: 1, points: 1, aliases: ["Enfermaria"], revealed: false },
      { id: "det-p19-a5", text: "Aqui e agora", votes: 1, points: 1, aliases: ["Aqui e agora"], revealed: false },
    ],
  },
  {
    id: "det-p20",
    questionType: "main",
    text: "Qual é o momento preferido do campo?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Sainte Antoinette"]],
    playableByTeamIds: [TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Paulenda"], TEAM_IDS["Cátia da Pontinha"]],
    completed: false,
    answers: [
      { id: "det-p20-a1", text: "Salada do Azar morre", votes: 1, points: 1, aliases: ["Salada do Azar morre"], revealed: false },
      { id: "det-p20-a2", text: "Viagens de carrinha matinais no dia 12", votes: 1, points: 1, aliases: ["Viagens de carrinha matinais no dia 12"], revealed: false },
      { id: "det-p20-a3", text: "Pedro nas fofas", votes: 1, points: 1, aliases: ["Pedro nas fofas"], revealed: false },
      { id: "det-p20-a4", text: "ser pedida á gala pelo vicente", votes: 1, points: 1, aliases: ["ser pedida á gala pelo vicente"], revealed: false },
      { id: "det-p20-a5", text: "Dinâmica do pré campo", votes: 1, points: 1, aliases: ["Dinâmica do pré campo"], revealed: false },
      { id: "det-p20-a6", text: "Mouriscos malandros", votes: 1, points: 1, aliases: ["Mouriscos malandros"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p20-ov1", text: "Pedro sem escova de dentes", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p20-ov2", text: "Rir com diana fora da disco ao ver duas pessoas a correr", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p20-ov3", text: "Na disco com o Pedro", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p21",
    questionType: "main",
    text: "Qual a melhor música criada com o Suno neste campo?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Sainte Antoinette"]],
    completed: false,
    answers: [
      { id: "det-p21-a1", text: "20 mil HC", votes: 3, points: 3, aliases: ["20 mil HC", "20 mil HCs", "20 mil hc’s"], revealed: false },
      { id: "det-p21-a2", text: "Banho de cadeira", votes: 2, points: 2, aliases: ["Banho de cadeira", "Banho de cadeira (versao alice)"], revealed: false },
      { id: "det-p21-a3", text: "Malévolo Dumbledores", votes: 2, points: 2, aliases: ["Malévolo Dumbledores", "Malévolo", "Malévolo dumbledores, ele ouve, ele vem"], revealed: false },
      { id: "det-p21-a4", text: "Nenhuma", votes: 1, points: 1, aliases: ["Nenhuma"], revealed: false },
      { id: "det-p21-a5", text: "Bebe bebe só bebemos no feriado", votes: 1, points: 1, aliases: ["Bebe bebe só bebemos no feriado"], revealed: false },
    ],
  },
  {
    id: "det-p22",
    questionType: "main",
    text: "Qual foi o momento mais caótico deste campo?",
    respondentCount: 9,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"]],
    playableByTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Cátia da Pontinha"]],
    completed: false,
    answers: [
      { id: "det-p22-a1", text: "Chapadas / bofas", votes: 3, points: 3, aliases: ["Chapadas / bofas", "Chapada na Lu", "Estalada na cátia", "Luísa levar bofa"], revealed: false },
      { id: "det-p22-a2", text: "Slide & Splash", votes: 2, points: 2, aliases: ["Slide & Splash", "Epá, entrada no slide & splash", "Final do slide and splash (pistas brandas)"], revealed: false },
      { id: "det-p22-a3", text: "Fazer malas", votes: 2, points: 2, aliases: ["Fazer malas", "Fazer malas para a saída com as piriris", "fazer malas das + novas"], revealed: false },
      { id: "det-p22-a4", text: "O campo", votes: 1, points: 1, aliases: ["O campo"], revealed: false },
      { id: "det-p22-a5", text: "👯‍♂️👯‍♂️", votes: 1, points: 1, aliases: ["👯‍♂️👯‍♂️"], revealed: false },
    ],
  },
];

export const detectiveGame: FeudGame = {
  id: "detective-abobora-2026",
  title: "FEUD DOS DETETIVES — MUNDO DAS ABÓBORAS",
  mode: "standard",
  scoringMode: "raw_votes",
  theme: "classic",
  teams,
  questions: mainQuestions,
  settings: {
    maxVisibleChoicesPerTeam: 4,
    manualRevealAddsPoints: true,
    answerSlots: 8,
    enableSounds: true,
    specialCampScoring: false,
  },
  isTemplate: true,
};

// ── Self-validating assertions (DEV only) ─────────────────────────────────────

function assertDetectiveGameIntegrity() {
  const errors: string[] = [];

  if (mainQuestions.length !== 22) errors.push(`Expected 22 questions, got ${mainQuestions.length}`);

  for (const q of mainQuestions) {
    if (q.playableByTeamIds.length !== 3) {
      errors.push(`${q.id}: expected exactly 3 guessers, got ${q.playableByTeamIds.length}`);
    }
    if (q.respondentCount !== 9) {
      errors.push(`${q.id}: expected respondentCount 9, got ${q.respondentCount}`);
    }
    for (const a of q.answers) {
      if (a.points !== a.votes) errors.push(`${q.id}: "${a.text}" points(${a.points}) != votes(${a.votes})`);
    }
    for (const id of q.playableByTeamIds) {
      if (!teams.some((t) => t.id === id)) errors.push(`${q.id}: unknown playable team id ${id}`);
    }
    const overlap = q.respondentTeamIds.filter((id) => q.playableByTeamIds.includes(id));
    if (overlap.length > 0) errors.push(`${q.id}: team(s) both playable and respondent: ${overlap.join(", ")}`);
  }

  if (teams.length !== 11) errors.push(`Expected 11 guessing teams, got ${teams.length}`);
  if (teams.some((t) => t.name === "Malévolo Dumbledores")) errors.push("Malévolo Dumbledores must not be a playable team");
  if (teams.some((t) => t.name === "Papai Claudão")) errors.push("Papai Claudão must not appear in this game");
  if (teams.some((t) => t.name === "Coelhice")) errors.push("Coelhice must not appear in this game");

  if (errors.length > 0) {
    console.error("[detectiveGame] Integrity check FAILED:");
    errors.forEach((e) => console.error(" •", e));
  } else {
    console.log(
      "[detectiveGame] ✓ 22 questions · 11 guessers · 3 guessers/9 respondents per question · Malévolo respondent-only · Papai Claudão/Coelhice absent"
    );
  }
}

if (import.meta.env.DEV) {
  assertDetectiveGameIntegrity();
}
