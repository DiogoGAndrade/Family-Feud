import type { FeudGame } from "../types";

/**
 * Sample camp game with 6 teams and 6 questions.
 * Each question was answered by 2 teams (respondentTeamIds)
 * and is playable by the other 4 (playableByTeamIds).
 *
 * In a real camp of 30 questions and 6 teams of 5 each:
 * - Each team answered 5 questions
 * - Each team can play the 25 questions answered by others
 *
 * This sample uses 6 questions for demo purposes.
 */
export const sampleCampGame: FeudGame = {
  id: "sample-camp-2024",
  title: "Jogo do Campo 2024",
  mode: "camp",
  scoringMode: "raw_votes",
  teams: [
    { id: "t1", name: "Lobos", score: 0 },
    { id: "t2", name: "Águias", score: 0 },
    { id: "t3", name: "Panteras", score: 0 },
    { id: "t4", name: "Dragões", score: 0 },
    { id: "t5", name: "Cobras", score: 0 },
    { id: "t6", name: "Leões", score: 0 },
  ],
  questions: [
    {
      id: "q1",
      text: "Diz algo que encontras sempre numa mochila de acampamento.",
      respondentCount: 100,
      respondentTeamIds: ["t1", "t2"],
      playableByTeamIds: ["t3", "t4", "t5", "t6"],
      completed: false,
      answers: [
        { id: "q1a1", text: "Cantil", votes: 38, points: 38, aliases: ["garrafa de água", "agua", "água"], revealed: false },
        { id: "q1a2", text: "Saco-cama", votes: 25, points: 25, aliases: ["sleeping bag", "saco de dormir"], revealed: false },
        { id: "q1a3", text: "Lanterna", votes: 18, points: 18, aliases: ["torch", "luz", "flash"], revealed: false },
        { id: "q1a4", text: "Mapa", votes: 10, points: 10, aliases: ["bússola", "bussola"], revealed: false },
        { id: "q1a5", text: "Comida", votes: 6, points: 6, aliases: ["snacks", "petiscos", "lanche"], revealed: false },
        { id: "q1a6", text: "Fósforos", votes: 3, points: 3, aliases: ["fosforos", "isqueiro", "lume"], revealed: false },
      ],
    },
    {
      id: "q2",
      text: "Nomeia uma atividade popular num campo de verão.",
      respondentCount: 100,
      respondentTeamIds: ["t1", "t2"],
      playableByTeamIds: ["t3", "t4", "t5", "t6"],
      completed: false,
      answers: [
        { id: "q2a1", text: "Natação", votes: 32, points: 32, aliases: ["nadar", "piscina", "banho"], revealed: false },
        { id: "q2a2", text: "Campismo", votes: 24, points: 24, aliases: ["acampar", "barraca", "tenda"], revealed: false },
        { id: "q2a3", text: "Escalada", votes: 19, points: 19, aliases: ["trepar", "parede", "climbing"], revealed: false },
        { id: "q2a4", text: "Fogueira", votes: 15, points: 15, aliases: ["fogueiro", "fogo", "lareira"], revealed: false },
        { id: "q2a5", text: "Orientação", votes: 10, points: 10, aliases: ["mapa e bussola", "orienteering"], revealed: false },
      ],
    },
    {
      id: "q3",
      text: "Diz uma palavra associada ao verão.",
      respondentCount: 83,
      respondentTeamIds: ["t3", "t4"],
      playableByTeamIds: ["t1", "t2", "t5", "t6"],
      completed: false,
      answers: [
        { id: "q3a1", text: "Praia", votes: 30, points: 30, aliases: ["mar", "areia", "onda"], revealed: false },
        { id: "q3a2", text: "Sol", votes: 22, points: 22, aliases: ["calor", "verão", "quente"], revealed: false },
        { id: "q3a3", text: "Gelado", votes: 16, points: 16, aliases: ["sorvete", "ice cream", "gelados"], revealed: false },
        { id: "q3a4", text: "Férias", votes: 10, points: 10, aliases: ["descanso", "feriado", "folga"], revealed: false },
        { id: "q3a5", text: "Piscina", votes: 5, points: 5, aliases: ["nadar", "mergulhar", "swimming pool"], revealed: false },
      ],
    },
    {
      id: "q4",
      text: "Nomeia algo que os animais fazem que as pessoas também fazem.",
      respondentCount: 54,
      respondentTeamIds: ["t3", "t4"],
      playableByTeamIds: ["t1", "t2", "t5", "t6"],
      completed: false,
      answers: [
        { id: "q4a1", text: "Dormir", votes: 20, points: 20, aliases: ["descansar", "sonhar", "hibernar"], revealed: false },
        { id: "q4a2", text: "Comer", votes: 15, points: 15, aliases: ["alimentar", "mastigar", "beber"], revealed: false },
        { id: "q4a3", text: "Correr", votes: 10, points: 10, aliases: ["fugir", "saltar", "andar"], revealed: false },
        { id: "q4a4", text: "Nadar", votes: 6, points: 6, aliases: ["mergulhar", "flutuar"], revealed: false },
        { id: "q4a5", text: "Brincar", votes: 3, points: 3, aliases: ["jogar", "divertir"], revealed: false },
      ],
    },
    {
      id: "q5",
      text: "Diz uma coisa que podes fazer à volta de uma fogueira.",
      respondentCount: 120,
      respondentTeamIds: ["t5", "t6"],
      playableByTeamIds: ["t1", "t2", "t3", "t4"],
      completed: false,
      answers: [
        { id: "q5a1", text: "Cantar", votes: 40, points: 40, aliases: ["musica", "música", "canções", "cancoes"], revealed: false },
        { id: "q5a2", text: "Contar histórias", votes: 28, points: 28, aliases: ["historias", "histórias", "contos", "lendas"], revealed: false },
        { id: "q5a3", text: "Assar marshmallows", votes: 22, points: 22, aliases: ["marshmallow", "assar", "tostar"], revealed: false },
        { id: "q5a4", text: "Dançar", votes: 18, points: 18, aliases: ["dancar", "dançar", "bailar"], revealed: false },
        { id: "q5a5", text: "Aquecer", votes: 12, points: 12, aliases: ["aquecimento", "calor", "esquentar"], revealed: false },
      ],
    },
    {
      id: "q6",
      text: "Nomeia um animal que podes encontrar numa floresta.",
      respondentCount: 90,
      respondentTeamIds: ["t5", "t6"],
      playableByTeamIds: ["t1", "t2", "t3", "t4"],
      completed: false,
      answers: [
        { id: "q6a1", text: "Urso", votes: 35, points: 35, aliases: ["bear", "ursa"], revealed: false },
        { id: "q6a2", text: "Lobo", votes: 25, points: 25, aliases: ["wolf", "lobos"], revealed: false },
        { id: "q6a3", text: "Corvo", votes: 15, points: 15, aliases: ["crow", "corvos", "pássaro negro"], revealed: false },
        { id: "q6a4", text: "Veado", votes: 10, points: 10, aliases: ["deer", "cervo", "corça"], revealed: false },
        { id: "q6a5", text: "Javali", votes: 5, points: 5, aliases: ["wild boar", "porco bravo"], revealed: false },
      ],
    },
  ],
  settings: {
    maxVisibleChoicesPerTeam: 3,
    manualRevealAddsPoints: false,
    answerSlots: 8,
    enableSounds: true,
  },
  isTemplate: true,
};

export const sampleStandardGame: FeudGame = {
  id: "sample-standard-2024",
  title: "Jogo Rápido Demo",
  mode: "standard",
  scoringMode: "raw_votes",
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
        { id: "sq2a1", text: "Frigorifico", votes: 38, points: 38, aliases: ["frigorífico", "geladeira", "frigorifico", "fridge"], revealed: false },
        { id: "sq2a2", text: "Fogão", votes: 28, points: 28, aliases: ["fogao", "coocina", "stove"], revealed: false },
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
  },
  isTemplate: true,
};
