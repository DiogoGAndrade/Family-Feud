import type { FeudGame } from "../types";

/**
 * FEUD DOS DETETIVES — MUNDO DAS ABÓBORAS
 *
 * Individual game mode: each "team" is a single guessing character.
 * 21 questions, 12 guessers, each guesses exactly 4 questions (2 or 3 guessers per question).
 * Malévolo Dumbledores answers the underlying questionnaire for every question but never guesses live,
 * so he is intentionally not modeled as a team (would always show 0 on the scoreboard).
 * Coelhice does not appear in this game at all.
 *
 * Generated from feud_final.json — see the self-check assertions below.
 */

const TEAM_IDS: Record<string, string> = {
  "Jesus Cruz": "det-jesus-cruz",
  "Shiba": "det-shiba",
  "Siddhartha Ganda Bunda": "det-siddhartha-ganda-bunda",
  "Milla Valentina": "det-milla-valentina",
  "Ronalda McDonalda": "det-ronalda-mcdonalda",
  "Sã Joã": "det-sa-joa",
  "Fábio Coentrão": "det-fabio-coentrao",
  "Papai Claudão": "det-papai-claudao",
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
  { id: "det-papai-claudao", name: "Papai Claudão", score: 0 },
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
    respondentCount: 10,
    respondentTeamIds: [TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"]],
    completed: false,
    answers: [
      { id: "det-p1-a1", text: "O mais fofo/novo", votes: 3, points: 3, aliases: ["Levava o mais fofo, óbvio", "Levo o mais novo, é meu dever paternal", "O mais fresco de todos"], revealed: false },
      { id: "det-p1-a2", text: "O mais fraco/chato, para ganhar", votes: 2, points: 2, aliases: ["O mais chato, pra sofrer os dois", "O mais fraco, pra eu ganhar sempre"], revealed: false },
      { id: "det-p1-a3", text: "O que aguenta bem", votes: 1, points: 1, aliases: ["O que aguenta a água fria sem chorar"], revealed: false },
      { id: "det-p1-a4", text: "Ninguém, é sagrado", votes: 1, points: 1, aliases: ["Ninguém, o Bidon é sagrado"], revealed: false },
      { id: "det-p1-a5", text: "O que menos gosta", votes: 1, points: 1, aliases: ["O que menos gosta, pra ver a cara dele"], revealed: false },
      { id: "det-p1-a6", text: "O mais lendário", votes: 1, points: 1, aliases: ["O mais lendário, claro"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p1-ov1", text: "Só levo se for chique (Sainte Antoinette)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p2",
    questionType: "main",
    text: "Que moni deste campo levavas contigo para sobreviver numa ilha deserta?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Sã Joã"], TEAM_IDS["Papai Claudão"]],
    completed: false,
    answers: [
      { id: "det-p2-a1", text: "Quem souber sobreviver na prática", votes: 3, points: 3, aliases: ["Levo quem souber fazer fogo E obedecer", "Levo quem sabe pescar tipo profissional", "Levo quem souber fazer poções com o que há"], revealed: false },
      { id: "det-p2-a2", text: "Quem tiver fé/paz de espírito", votes: 2, points: 2, aliases: ["Levo quem tiver fé, resolve-se tudo", "Levo quem meditar bem, poupa recursos"], revealed: false },
      { id: "det-p2-a3", text: "Quem for prático, sem drama", votes: 2, points: 2, aliases: ["Levo quem não reclame do calor", "Levo quem for prático e não drama"], revealed: false },
      { id: "det-p2-a4", text: "Quem tiver comida escondida", votes: 1, points: 1, aliases: ["Levo o que tiver comida escondida"], revealed: false },
      { id: "det-p2-a5", text: "Quem me faça companhia com estilo", votes: 1, points: 1, aliases: ["Levo quem me faça companhia com estilo"], revealed: false },
      { id: "det-p2-a6", text: "Uma lenda, resolve tudo", votes: 1, points: 1, aliases: ["Levo uma lenda, resolve tudo sozinho"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p2-ov1", text: "Levo quem souber fazer barracas dignas (Sainte Antoinette)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p3",
    questionType: "main",
    text: "Que participante levavas contigo uma semana para casa?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"]],
    completed: false,
    answers: [
      { id: "det-p3-a1", text: "O mais bem comportado/educado", votes: 3, points: 3, aliases: ["O mais obediente", "O mais bem comportado", "O mais educado"], revealed: false },
      { id: "det-p3-a2", text: "O mais calmo/tranquilo", votes: 3, points: 3, aliases: ["O mais calmo, pra dormir a semana toda", "O mais tranquilo de espírito", "O que não me chateia"], revealed: false },
      { id: "det-p3-a3", text: "O que precisa de ajuda", votes: 1, points: 1, aliases: ["O que precisar mais de ajuda"], revealed: false },
      { id: "det-p3-a4", text: "O mais divertido", votes: 1, points: 1, aliases: ["O mais divertido, claro"], revealed: false },
      { id: "det-p3-a5", text: "O mais fominha", votes: 1, points: 1, aliases: ["O mais fominha, comemos igual"], revealed: false },
      { id: "det-p3-a6", text: "O mais novo", votes: 1, points: 1, aliases: ["O mais novo, preciso cuidar dele"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p3-ov1", text: "O mais simples, sem complicações (Cátia da Pontinha)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p4",
    questionType: "main",
    text: "Que participante escolherias para fazer a auto contagem se tivesse que acertar à primeira?",
    respondentCount: 10,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"]],
    completed: false,
    answers: [
      { id: "det-p4-a1", text: "O mais atento/organizado/responsável", votes: 3, points: 3, aliases: ["O mais responsável", "O mais atento aos detalhes", "O mais organizado"], revealed: false },
      { id: "det-p4-a2", text: "O mais concentrado/zen", votes: 2, points: 2, aliases: ["O mais concentrado do grupo", "O mais zen, não entra em pânico"], revealed: false },
      { id: "det-p4-a3", text: "Eu mesmo", votes: 1, points: 1, aliases: ["Eu mesmo, óbvio"], revealed: false },
      { id: "det-p4-a4", text: "Conta devagar mas acerta", votes: 1, points: 1, aliases: ["O que conta devagar mas acerta"], revealed: false },
      { id: "det-p4-a5", text: "O mais competitivo", votes: 1, points: 1, aliases: ["O mais competitivo, quer ganhar"], revealed: false },
      { id: "det-p4-a6", text: "Uma lenda acerta sempre", votes: 1, points: 1, aliases: ["Uma lenda acerta sempre"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p4-ov1", text: "O mais prático (Cátia da Pontinha)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p5",
    questionType: "main",
    text: "Qual moni deste campo levarias à gala com direito a conchinha?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Sainte Antoinette"]],
    completed: false,
    answers: [
      { id: "det-p5-a1", text: "O mais fofo/simpático", votes: 3, points: 3, aliases: ["O mais fofinho", "A conchinha é família, levo o mais novo", "O mais simpático"], revealed: false },
      { id: "det-p5-a2", text: "Quem tiver boa vibe/energia", votes: 2, points: 2, aliases: ["Quem tiver boa energia", "Quem aguentar dançar a noite toda"], revealed: false },
      { id: "det-p5-a3", text: "Ninguém, não danço", votes: 1, points: 1, aliases: ["Ninguém, eu não danço"], revealed: false },
      { id: "det-p5-a4", text: "Alguém à minha altura", votes: 1, points: 1, aliases: ["Alguém à altura do meu vestido"], revealed: false },
      { id: "det-p5-a5", text: "O par bem comportado", votes: 1, points: 1, aliases: ["O par mais bem comportado"], revealed: false },
      { id: "det-p5-a6", text: "Quem não pisar nos pés", votes: 1, points: 1, aliases: ["Quem não pisar nos meus pés"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p5-ov1", text: "Quem não tiver medo de mim (Salgueirita)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p5-ov2", text: "Uma lenda não precisa de par (Paulenda)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p6",
    questionType: "main",
    text: "Que moni feminina de todas levavas à lavandaria?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"]],
    playableByTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Cátia da Pontinha"]],
    completed: false,
    answers: [
      { id: "det-p6-a1", text: "A mais organizada/rápida/higiénica", votes: 3, points: 3, aliases: ["A mais organizada", "A mais rápida a dobrar roupa", "A mais higiénica"], revealed: false },
      { id: "det-p6-a2", text: "A que mais precisa de ajuda/ensino", votes: 2, points: 2, aliases: ["A que precisar mais de ajuda", "A mais nova, ensino-a"], revealed: false },
      { id: "det-p6-a3", text: "A mais suja", votes: 1, points: 1, aliases: ["A mais suja, óbvio"], revealed: false },
      { id: "det-p6-a4", text: "Eu mesma", votes: 1, points: 1, aliases: ["Eu mesma organizo isto"], revealed: false },
      { id: "det-p6-a5", text: "A que não reclama", votes: 1, points: 1, aliases: ["A que não reclama do trabalho"], revealed: false },
      { id: "det-p6-a6", text: "A mais teimosa", votes: 1, points: 1, aliases: ["A mais teimosa, faz-me companhia a resmungar"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p6-ov1", text: "Uma lenda não lava roupa (Paulenda)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p6-ov2", text: "A mais elegante mesmo a lavar roupa (Sainte Antoinette)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p7",
    questionType: "main",
    text: "Qual o material que nunca aparece quando precisas dele?",
    respondentCount: 10,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"]],
    completed: false,
    answers: [
      { id: "det-p7-a1", text: "Fita cola / tesouras / marcadores", votes: 3, points: 3, aliases: ["A fita cola", "As tesouras", "Os marcadores bons"], revealed: false },
      { id: "det-p7-a2", text: "Pilhas / kit primeiros socorros", votes: 2, points: 2, aliases: ["O kit de primeiros socorros", "As pilhas"], revealed: false },
      { id: "det-p7-a3", text: "As chaves", votes: 1, points: 1, aliases: ["As chaves da sala"], revealed: false },
      { id: "det-p7-a4", text: "A minha comida", votes: 1, points: 1, aliases: ["A minha comida"], revealed: false },
      { id: "det-p7-a5", text: "A calma de toda a gente", votes: 1, points: 1, aliases: ["A calma de toda a gente"], revealed: false },
      { id: "det-p7-a6", text: "O espelho", votes: 1, points: 1, aliases: ["O espelho"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p7-ov1", text: "A bola boa (Ronalda McDonalda)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p8",
    questionType: "main",
    text: "Qual a melhor atividade para uma tarde bombástica?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"]],
    completed: false,
    answers: [
      { id: "det-p8-a1", text: "Jogos de água", votes: 3, points: 3, aliases: ["Jogo de água, purifica a alma", "Jogos de água em família", "Jogos de água, sem dúvida"], revealed: false },
      { id: "det-p8-a2", text: "Gincana/circuito de desafios", votes: 2, points: 2, aliases: ["Uma boa gincana de castigo", "Circuito de desafios"], revealed: false },
      { id: "det-p8-a3", text: "Futebol/torneio", votes: 2, points: 2, aliases: ["Torneio de futebol", "Futebol, sempre futebol"], revealed: false },
      { id: "det-p8-a4", text: "Sesta coletiva", votes: 1, points: 1, aliases: ["Sesta coletiva, mas bombástica"], revealed: false },
      { id: "det-p8-a5", text: "Caça ao tesouro", votes: 1, points: 1, aliases: ["Caça ao tesouro"], revealed: false },
      { id: "det-p8-a6", text: "Lenda urbana ao vivo", votes: 1, points: 1, aliases: ["Uma lenda urbana ao vivo"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p8-ov1", text: "Um chá dançante (Sainte Antoinette)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p9",
    questionType: "main",
    text: "Qual a melhor frase do mural?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Sã Joã"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Fábio Coentrão"]],
    completed: false,
    answers: [
      { id: "det-p9-a1", text: "Aqui é família / ninguém fica sozinho", votes: 3, points: 3, aliases: ["Aqui ninguém fica sozinho", "Cuida de ti e dos outros", "Aqui é família"], revealed: false },
      { id: "det-p9-a2", text: "Frase motivacional (respira/brilha)", votes: 2, points: 2, aliases: ["Respira, isto passa", "Brilha sempre, mesmo suado"], revealed: false },
      { id: "det-p9-a3", text: "Aqui manda-se, obedece-se", votes: 1, points: 1, aliases: ["Aqui manda-se, obedece-se"], revealed: false },
      { id: "det-p9-a4", text: "Comer, dormir, repetir", votes: 1, points: 1, aliases: ["Comer, dormir, repetir"], revealed: false },
      { id: "det-p9-a5", text: "O caos também tem regras", votes: 1, points: 1, aliases: ["O caos também tem regras"], revealed: false },
      { id: "det-p9-a6", text: "Uma lenda nasce aqui", votes: 1, points: 1, aliases: ["Uma lenda nasce aqui"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p9-ov1", text: "Elegância até no lamaçal (Sainte Antoinette)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p9-ov2", text: "Simples e feliz, é assim (Cátia da Pontinha)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p10",
    questionType: "main",
    text: "Qual é a melhor anomalia da casa ou da Bolha?",
    respondentCount: 10,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"]],
    playableByTeamIds: [TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    completed: false,
    answers: [
      { id: "det-p10-a1", text: "Algo que range", votes: 2, points: 2, aliases: ["A cama que range", "A escada que range"], revealed: false },
      { id: "det-p10-a2", text: "Luz/torneira que falha sozinha", votes: 2, points: 2, aliases: ["A luz que pisca sozinha", "A torneira que pinga sem parar"], revealed: false },
      { id: "det-p10-a3", text: "Porta que não fecha", votes: 1, points: 1, aliases: ["A porta que não fecha certo"], revealed: false },
      { id: "det-p10-a4", text: "Eco estranho", votes: 1, points: 1, aliases: ["O eco estranho no corredor"], revealed: false },
      { id: "det-p10-a5", text: "Silêncio que não dura", votes: 1, points: 1, aliases: ["O silêncio que nunca dura"], revealed: false },
      { id: "det-p10-a6", text: "Espelho ruim", votes: 1, points: 1, aliases: ["O espelho que faz mal ao meu look"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p10-ov1", text: "O wifi que só funciona à noite (Fábio Coentrão)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p10-ov2", text: "Aquele cheiro que ninguém explica (Salgueirita)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p11",
    questionType: "main",
    text: "Qual o mini deste campo mais provável de ter de ir ao hospital, sem ser acompanhar putos?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Sã Joã"], TEAM_IDS["Papai Claudão"]],
    completed: false,
    answers: [
      { id: "det-p11-a1", text: "O mais desastrado/atrapalhado", votes: 3, points: 3, aliases: ["O mais desastrado", "O mais atrapalhado", "O que corre descalço sempre"], revealed: false },
      { id: "det-p11-a2", text: "Quem se atira demais / imprudente", votes: 2, points: 2, aliases: ["O mais imprudente nos jogos", "O que se atira demais nos jogos"], revealed: false },
      { id: "det-p11-a3", text: "O mais desobediente", votes: 1, points: 1, aliases: ["O mais desobediente"], revealed: false },
      { id: "det-p11-a4", text: "O mais azarado", votes: 1, points: 1, aliases: ["O mais azarado"], revealed: false },
      { id: "det-p11-a5", text: "O que corre sem olhar", votes: 1, points: 1, aliases: ["O que corre sem olhar"], revealed: false },
      { id: "det-p11-a6", text: "O mais dramático", votes: 1, points: 1, aliases: ["O mais dramático — a torcer o pé todos os dias"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p11-ov1", text: "O mais competitivo, faz-se mal a sério (Fábio Coentrão)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p11-ov2", text: "Uma lenda não vai ao hospital (Paulenda)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p12",
    questionType: "main",
    text: "Qual o alimento mais importante num jantar de monis?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Paulenda"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Salgueirita"], TEAM_IDS["Sainte Antoinette"]],
    completed: false,
    answers: [
      { id: "det-p12-a1", text: "Pão", votes: 2, points: 2, aliases: ["Pão, é sempre pão", "Pão e sopa, básico e bom"], revealed: false },
      { id: "det-p12-a2", text: "Batata frita / massa", votes: 2, points: 2, aliases: ["Batata frita, sempre", "Massa, dá energia"], revealed: false },
      { id: "det-p12-a3", text: "Água", votes: 1, points: 1, aliases: ["Água, sacia tudo"], revealed: false },
      { id: "det-p12-a4", text: "Qualquer coisa, muita quantidade", votes: 1, points: 1, aliases: ["Qualquer coisa, desde que seja muita"], revealed: false },
      { id: "det-p12-a5", text: "Arroz", votes: 1, points: 1, aliases: ["Arroz, base de tudo"], revealed: false },
      { id: "det-p12-a6", text: "Sobremesa", votes: 1, points: 1, aliases: ["Sobremesa, o resto é acessório"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p12-ov1", text: "Fruta, para equilibrar (Sã Joã)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p12-ov2", text: "O prato principal bem feito (Papai Claudão)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p12-ov3", text: "Uma lenda come de tudo (Paulenda)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p13",
    questionType: "main",
    text: "Qual foi a melhor atividade deste campo?",
    respondentCount: 10,
    respondentTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Fábio Coentrão"]],
    completed: false,
    answers: [
      { id: "det-p13-a1", text: "Noite temática (jogos/terror/gala)", votes: 3, points: 3, aliases: ["A noite de jogos em família", "A gala, claro", "A noite de terror"], revealed: false },
      { id: "det-p13-a2", text: "Desporto (futebol/gincana)", votes: 2, points: 2, aliases: ["A gincana que eu organizei", "O torneio de futebol"], revealed: false },
      { id: "det-p13-a3", text: "Sesta coletiva", votes: 1, points: 1, aliases: ["A sesta coletiva no relvado"], revealed: false },
      { id: "det-p13-a4", text: "Meditação em grupo", votes: 1, points: 1, aliases: ["A meditação em grupo"], revealed: false },
      { id: "det-p13-a5", text: "Caminhada matinal", votes: 1, points: 1, aliases: ["A caminhada matinal"], revealed: false },
      { id: "det-p13-a6", text: "Caça ao tesouro", votes: 1, points: 1, aliases: ["A caça ao tesouro"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p13-ov1", text: "Aquela em que eu ganhei tudo (Paulenda)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p14",
    questionType: "main",
    text: "Qual é o melhor snack do staff?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Paulenda"]],
    completed: false,
    answers: [
      { id: "det-p14-a1", text: "Bolachas", votes: 2, points: 2, aliases: ["Bolachas escondidas na mochila", "Bolachas com chá"], revealed: false },
      { id: "det-p14-a2", text: "Fruta / fruta seca", votes: 2, points: 2, aliases: ["Fruta, corpo são", "Fruta seca"], revealed: false },
      { id: "det-p14-a3", text: "Chocolate", votes: 2, points: 2, aliases: ["Chocolate, sem exceções", "Chocolate, sempre chocolate"], revealed: false },
      { id: "det-p14-a4", text: "Café", votes: 1, points: 1, aliases: ["Café, o único combustível que aceito"], revealed: false },
      { id: "det-p14-a5", text: "Batatas fritas", votes: 1, points: 1, aliases: ["Batatas fritas de saquinho"], revealed: false },
      { id: "det-p14-a6", text: "Sandes", votes: 1, points: 1, aliases: ["Sandes de fiambre"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p14-ov1", text: "O que sobrar do lanche dos putos (Papai Claudão)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p14-ov2", text: "Gomas (Salgueirita)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p15",
    questionType: "main",
    text: "Que moni é indispensável na noite de terror?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"]],
    playableByTeamIds: [TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Cátia da Pontinha"]],
    completed: false,
    answers: [
      { id: "det-p15-a1", text: "Quem cria/comanda o ambiente", votes: 3, points: 3, aliases: ["Quem grita mais alto, faz o ambiente", "Eu, óbvio, sou a temática", "Quem conta as melhores histórias"], revealed: false },
      { id: "det-p15-a2", text: "Quem não se assusta / corre rápido", votes: 2, points: 2, aliases: ["Quem corre mais rápido", "Quem não se assusta com nada"], revealed: false },
      { id: "det-p15-a3", text: "Eu, para assustar", votes: 1, points: 1, aliases: ["Eu, para assustar a sério"], revealed: false },
      { id: "det-p15-a4", text: "Quem tiver fé", votes: 1, points: 1, aliases: ["Quem tiver mais fé para não fugir"], revealed: false },
      { id: "det-p15-a5", text: "Quem trouxer lanterna", votes: 1, points: 1, aliases: ["Quem trouxer lanterna"], revealed: false },
      { id: "det-p15-a6", text: "Quem mantém a calma", votes: 1, points: 1, aliases: ["Quem mantém a calma no grupo"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p15-ov1", text: "Quem cuida dos mais pequenos com medo (Papai Claudão)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p15-ov2", text: "Uma lenda cria o terror (Paulenda)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p16",
    questionType: "main",
    text: "Qual é o melhor sítio para posto central?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Milla Valentina"]],
    completed: false,
    answers: [
      { id: "det-p16-a1", text: "No meio de tudo / para vigiar", votes: 3, points: 3, aliases: ["No meio de tudo, para controlar", "Onde consiga ver todos os putos", "O sítio mais prático, simples assim"], revealed: false },
      { id: "det-p16-a2", text: "Perto do campo/bola", votes: 2, points: 2, aliases: ["Perto do campo de futebol", "Perto da bola"], revealed: false },
      { id: "det-p16-a3", text: "Onde todos se sintam bem-vindos", votes: 1, points: 1, aliases: ["Onde toda a gente se sinta bem-vinda"], revealed: false },
      { id: "det-p16-a4", text: "Sítio calmo/boa energia", votes: 1, points: 1, aliases: ["Um sítio calmo, com boa energia"], revealed: false },
      { id: "det-p16-a5", text: "Ao ar livre com sombra", votes: 1, points: 1, aliases: ["Ao ar livre, com sombra"], revealed: false },
      { id: "det-p16-a6", text: "Com mistério", votes: 1, points: 1, aliases: ["Um sítio com mistério"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p16-ov1", text: "Onde uma lenda se sinta em casa (Paulenda)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p16-ov2", text: "Um sítio elegante, claro (Sainte Antoinette)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p17",
    questionType: "main",
    text: "Um objeto da enfermaria?",
    respondentCount: 10,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Shiba"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Papai Claudão"]],
    completed: false,
    answers: [
      { id: "det-p17-a1", text: "Ligaduras", votes: 2, points: 2, aliases: ["As ligaduras", "As ligaduras"], revealed: false },
      { id: "det-p17-a2", text: "Pensos rápidos / algodão", votes: 2, points: 2, aliases: ["Os pensos rápidos", "O algodão"], revealed: false },
      { id: "det-p17-a3", text: "Luvas", votes: 1, points: 1, aliases: ["As luvas"], revealed: false },
      { id: "det-p17-a4", text: "Gelo", votes: 1, points: 1, aliases: ["O gelo, faz milagres"], revealed: false },
      { id: "det-p17-a5", text: "Álcool gel", votes: 1, points: 1, aliases: ["O álcool gel"], revealed: false },
      { id: "det-p17-a6", text: "Espelho", votes: 1, points: 1, aliases: ["O espelho, mesmo aqui"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p17-ov1", text: "O termómetro (Salgueirita)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p17-ov2", text: "O soro (Paulenda)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p18",
    questionType: "main",
    text: "Que moni do Mundo QFS no ativo chamavas para dar uma mega picada contigo?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Salgueirita"]],
    completed: false,
    answers: [
      { id: "det-p18-a1", text: "Quem topar na hora / tiver coragem", votes: 4, points: 4, aliases: ["Quem tiver coragem de saltar comigo", "Quem topar sem pensar duas vezes", "Quem aguentar a competição", "Quem topar na hora"], revealed: false },
      { id: "det-p18-a2", text: "Quem gostar de água fria/zen", votes: 2, points: 2, aliases: ["Quem também gosta de água fria", "Quem estiver zen o suficiente"], revealed: false },
      { id: "det-p18-a3", text: "Ninguém, sozinho", votes: 1, points: 1, aliases: ["Ninguém, eu pico sozinho"], revealed: false },
      { id: "det-p18-a4", text: "Quem não estragar o look", votes: 1, points: 1, aliases: ["Quem não estragar o meu penteado"], revealed: false },
      { id: "det-p18-a5", text: "Quem precisar de incentivo", votes: 1, points: 1, aliases: ["Quem precisar de incentivo"], revealed: false },
      { id: "det-p18-a6", text: "Uma lenda pica sozinha", votes: 1, points: 1, aliases: ["Uma lenda pica sozinha"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p18-ov1", text: "Quem tiver estilo mesmo molhado (Sainte Antoinette)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p19",
    questionType: "main",
    text: "Qual é o sítio mais nojento/usado da QFS?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"]],
    completed: false,
    answers: [
      { id: "det-p19-a1", text: "A zona da lama", votes: 2, points: 2, aliases: ["A zona da lama", "A zona da lama, sem dúvida"], revealed: false },
      { id: "det-p19-a2", text: "Sítio onde ninguém limpa / cantinho escuro", votes: 2, points: 2, aliases: ["O sítio onde ninguém limpa", "O cantinho escuro que ninguém explica"], revealed: false },
      { id: "det-p19-a3", text: "O banco de toda a gente", votes: 1, points: 1, aliases: ["O banco onde toda a gente se senta"], revealed: false },
      { id: "det-p19-a4", text: "Onde a comida cai", votes: 1, points: 1, aliases: ["Onde a comida cai sempre"], revealed: false },
      { id: "det-p19-a5", text: "Não vou pensar, estraga o look", votes: 1, points: 1, aliases: ["Não vou nem pensar nisso, estraga o look"], revealed: false },
      { id: "det-p19-a6", text: "O relvado depois do jogo", votes: 1, points: 1, aliases: ["O relvado depois do jogo"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p19-ov1", text: "A zona por onde os putos passam todos (Papai Claudão)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p19-ov2", text: "Uma lenda nem repara nisso (Paulenda)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p19-ov3", text: "Prefiro não comentar, é chocante (Sainte Antoinette)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p20",
    questionType: "main",
    text: "Qual é o momento preferido do campo?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    playableByTeamIds: [TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Paulenda"]],
    completed: false,
    answers: [
      { id: "det-p20-a1", text: "A gala / último dia", votes: 2, points: 2, aliases: ["A gala, sem dúvida", "O último dia, cheio de emoção"], revealed: false },
      { id: "det-p20-a2", text: "A noite de terror", votes: 2, points: 2, aliases: ["A noite de terror", "A noite de terror, sem dúvida"], revealed: false },
      { id: "det-p20-a3", text: "Quando todos obedecem", votes: 1, points: 1, aliases: ["Quando todos obedecem sem drama"], revealed: false },
      { id: "det-p20-a4", text: "Quando o grupo se une", votes: 1, points: 1, aliases: ["Quando o grupo se une de verdade"], revealed: false },
      { id: "det-p20-a5", text: "A hora do lanche", votes: 1, points: 1, aliases: ["A hora do lanche"], revealed: false },
      { id: "det-p20-a6", text: "O jogo final", votes: 1, points: 1, aliases: ["O jogo final"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p20-ov1", text: "A caminhada da manhã (Sã Joã)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p20-ov2", text: "O jogo de futebol decisivo (Fábio Coentrão)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p20-ov3", text: "Ver os putos felizes no fim do dia (Papai Claudão)", votes: 0, points: 0, aliases: [], revealed: false },
    ],
  },
  {
    id: "det-p21",
    questionType: "main",
    text: "Qual a melhor música criada com o Suno neste campo?",
    respondentCount: 11,
    respondentTeamIds: [TEAM_IDS["Jesus Cruz"], TEAM_IDS["Shiba"], TEAM_IDS["Siddhartha Ganda Bunda"], TEAM_IDS["Milla Valentina"], TEAM_IDS["Ronalda McDonalda"], TEAM_IDS["Sã Joã"], TEAM_IDS["Fábio Coentrão"], TEAM_IDS["Papai Claudão"], TEAM_IDS["Salgueirita"], TEAM_IDS["Paulenda"]],
    playableByTeamIds: [TEAM_IDS["Sainte Antoinette"], TEAM_IDS["Cátia da Pontinha"]],
    completed: false,
    answers: [
      { id: "det-p21-a1", text: "A mais dramática/caótica", votes: 2, points: 2, aliases: ["A mais dramática, óbvio", "A mais caótica"], revealed: false },
      { id: "det-p21-a2", text: "A do hino/torneio/futebol", votes: 2, points: 2, aliases: ["O hino do torneio", "A do futebol, sem dúvida"], revealed: false },
      { id: "det-p21-a3", text: "A que tem o meu nome", votes: 1, points: 1, aliases: ["A que tem o meu nome no refrão"], revealed: false },
      { id: "det-p21-a4", text: "A que fala de união", votes: 1, points: 1, aliases: ["A que fala de união"], revealed: false },
      { id: "det-p21-a5", text: "A mais chill", votes: 1, points: 1, aliases: ["A mais chill, para dormir a sesta"], revealed: false },
      { id: "det-p21-a6", text: "A mais espiritual", votes: 1, points: 1, aliases: ["A mais espiritual"], revealed: false },
    ],
    overflowAnswers: [
      { id: "det-p21-ov1", text: "A mais animada (Sã Joã)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p21-ov2", text: "A que toca todos os anos (Papai Claudão)", votes: 0, points: 0, aliases: [], revealed: false },
      { id: "det-p21-ov3", text: "A que fala de mim, uma lenda (Paulenda)", votes: 0, points: 0, aliases: [], revealed: false },
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
  const guessCounts: Record<string, number> = {};
  for (const t of teams) guessCounts[t.id] = 0;

  if (mainQuestions.length !== 21) errors.push(`Expected 21 questions, got ${mainQuestions.length}`);

  for (const q of mainQuestions) {
    if (q.playableByTeamIds.length !== 2 && q.playableByTeamIds.length !== 3) {
      errors.push(`${q.id}: expected 2 or 3 guessers, got ${q.playableByTeamIds.length}`);
    }
    if (q.playableByTeamIds.length === 2 && q.respondentCount !== 11) {
      errors.push(`${q.id}: 2 guessers should have respondentCount 11, got ${q.respondentCount}`);
    }
    if (q.playableByTeamIds.length === 3 && q.respondentCount !== 10) {
      errors.push(`${q.id}: 3 guessers should have respondentCount 10, got ${q.respondentCount}`);
    }
    if (q.answers.length > 6) errors.push(`${q.id}: ${q.answers.length} main answers, expected at most 6`);
    for (const a of q.answers) {
      if (a.points !== a.votes) errors.push(`${q.id}: "${a.text}" points(${a.points}) != votes(${a.votes})`);
    }
    for (const id of q.playableByTeamIds) {
      if (id in guessCounts) guessCounts[id]++;
      else errors.push(`${q.id}: unknown playable team id ${id}`);
    }
    const overlap = q.respondentTeamIds.filter((id) => q.playableByTeamIds.includes(id));
    if (overlap.length > 0) errors.push(`${q.id}: team(s) both playable and respondent: ${overlap.join(", ")}`);
  }

  for (const t of teams) {
    if (guessCounts[t.id] !== 4) {
      errors.push(`${t.name}: guesses ${guessCounts[t.id]} questions, expected exactly 4`);
    }
  }

  if (teams.length !== 12) errors.push(`Expected 12 guessing teams, got ${teams.length}`);
  if (teams.some((t) => t.name === "Malévolo Dumbledores")) errors.push("Malévolo Dumbledores must not be a playable team");
  if (teams.some((t) => t.name === "Coelhice")) errors.push("Coelhice must not appear in this game");

  if (errors.length > 0) {
    console.error("[detectiveGame] Integrity check FAILED:");
    errors.forEach((e) => console.error(" •", e));
  } else {
    console.log(
      "[detectiveGame] ✓ 21 questions · 12 guessers · 4 questions/guesser · Malévolo respondent-only · Coelhice absent"
    );
  }
}

if (import.meta.env.DEV) {
  assertDetectiveGameIntegrity();
}
