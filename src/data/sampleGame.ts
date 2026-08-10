import type { FeudGame } from "../types";
import { createBonusQuestions } from "./bonusQuestions";

// t1=Amarela  t2=Azul  t3=Branca  t4=Laranja  t5=Verde  t6=Vermelha
const TEAM_IDS = ["t1", "t2", "t3", "t4", "t5", "t6"];

const mainQuestions: FeudGame["questions"] = [
  // Pair 1 (Q1-2): Playable Amarela+Azul
  {
    id: "q1", questionType: "main", text: "Que poder especial dava mais jeito num campo de férias?",
    respondentCount: 36, completed: false,
    answers: [
        { id: "q1-a1", text: "Velocidade / super velocidade", votes: 12, points: 12, aliases: ["super velocidade", "rapidez", "velocidade", "super rápido", "hiper velocidade", "poder mais rápido"], revealed: false },
        { id: "q1-a2", text: "Teletransporte", votes: 8, points: 8, aliases: ["teletransportar"], revealed: false },
        { id: "q1-a3", text: "Voar", votes: 3, points: 3, aliases: [], revealed: false },
        { id: "q1-a4", text: "Invisibilidade", votes: 3, points: 3, aliases: ["ficar invisível"], revealed: false }
    ],
    overflowAnswers: [
        { id: "q1-ov1", text: "Poder de fugir", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q1-ov2", text: "Parar o tempo para dormir", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q1-ov3", text: "Ler mentes", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q1-ov4", text: "Inteligência", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q1-ov5", text: "Telecinesia", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q1-ov6", text: "Amizade", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q1-ov7", text: "Curar-se", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q1-ov8", text: "Capa (superpoderes)", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q1-ov9", text: "Estar sempre acordada", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q1-ov10", text: "Mandar nos monitores para dormir mais", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t1", "t2"], respondentTeamIds: ["t3", "t4", "t5", "t6"],
  },
  {
    id: "q2", questionType: "main", text: "Que festividade gostavas que saísse na roleta todos os dias?",
    respondentCount: 35, completed: false,
    answers: [
        { id: "q2-a1", text: "Carnaval", votes: 9, points: 9, aliases: [], revealed: false },
        { id: "q2-a2", text: "Ano Novo", votes: 9, points: 9, aliases: [], revealed: false },
        { id: "q2-a3", text: "Natal", votes: 5, points: 5, aliases: [], revealed: false },
        { id: "q2-a4", text: "Dia de São Valentim", votes: 3, points: 3, aliases: ["São Valentim", "Dia de São Valentim"], revealed: false },
        { id: "q2-a6", text: "Santos Populares", votes: 3, points: 3, aliases: ["Santos", "São João"], revealed: false },
        { id: "q2-a5", text: "Aniversário", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q2-a7", text: "São Martinho", votes: 2, points: 2, aliases: ["Dia de São Martinho"], revealed: false },
        { id: "q2-a8", text: "Halloween", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q2-ov1", text: "25 de abril", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t1", "t2"], respondentTeamIds: ["t3", "t4", "t5", "t6"],
  },
  // Pair 2 (Q3-4): Playable Amarela+Branca
  {
    id: "q3", questionType: "main", text: "Diz uma desculpa clássica para não correr numa atividade.",
    respondentCount: 31, completed: false,
    answers: [
        { id: "q3-a1", text: "Dói o pé / perna", votes: 10, points: 10, aliases: ["doi-me o pé", "doi-me a perna", "dor no pé", "ferida no pé", "estou mal do pé", "partir um joelho"], revealed: false },
        { id: "q3-a2", text: "Dói a barriga", votes: 3, points: 3, aliases: ["doi-me a barriga", "dor de barriga"], revealed: false },
        { id: "q3-a3", text: "Estou cansado", votes: 3, points: 3, aliases: ["cansado", "estamos cansados e não conseguimos fazer nada"], revealed: false },
        { id: "q3-a4", text: "Estou a sentir-me mal", votes: 2, points: 2, aliases: ["estou-me a sentir mal", "estou mal disposto"], revealed: false },
        { id: "q3-a5", text: "Estou magoado", votes: 2, points: 2, aliases: ["magoei-me", "estou magoado"], revealed: false }
    ],
    overflowAnswers: [
        { id: "q3-ov1", text: "Tenho que ir", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q3-ov2", text: "Dores no corpo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q3-ov3", text: "Dor de músculos", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q3-ov4", text: "Dor de cabeça", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q3-ov5", text: "Acordei mal", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q3-ov6", text: "Estão na casa de banho", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q3-ov7", text: "Esqueci-me", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q3-ov8", text: "Eu não posso", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q3-ov9", text: "Não correr no piso", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q3-ov10", text: "Desculpa, invento as pernas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q3-ov11", text: "Batata frita", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t1", "t3"], respondentTeamIds: ["t2", "t4", "t5", "t6"],
  },
  {
    id: "q4", questionType: "main", text: "Que comida não podia faltar num arraial?",
    respondentCount: 33, completed: false,
    answers: [
        { id: "q4-a1", text: "Bifanas", votes: 13, points: 13, aliases: ["bifana"], revealed: false },
        { id: "q4-a2", text: "Batata frita", votes: 6, points: 6, aliases: ["batatas fritas"], revealed: false },
        { id: "q4-a3", text: "Pizza", votes: 5, points: 5, aliases: [], revealed: false },
        { id: "q4-a4", text: "Churrasco", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q4-a5", text: "Churros", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q4-a6", text: "Farturas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q4-a7", text: "Sardinha", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q4-a8", text: "Frango", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q4-ov1", text: "Pipoca", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q4-ov2", text: "Música", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q4-ov3", text: "Dança", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t1", "t3"], respondentTeamIds: ["t2", "t4", "t5", "t6"],
  },
  // Pair 3 (Q5-6): Playable Amarela+Laranja
  {
    id: "q5", questionType: "main", text: "Qual a coisa mais engraçada que podia sair de dentro do Pedregulho destruído?",
    respondentCount: 35, completed: false,
    answers: [
        { id: "q5-a1", text: "Paulenda", votes: 3, points: 3, aliases: [], revealed: false },
        { id: "q5-a2", text: "Palhaço", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q5-a3", text: "Buzina", votes: 2, points: 2, aliases: ["buzina maravilhosa"], revealed: false }
    ],
    overflowAnswers: [
        { id: "q5-ov1", text: "Pasta de dentes ambulante", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov2", text: "Monstro a tocar nas cuecas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov3", text: "Burro", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov4", text: "Cristiano Ronaldo desaparecido", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov5", text: "O tronco da mulher do tronco", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov6", text: "Bunda", votes: 1, points: 1, aliases: ["Bundinho"], revealed: false },
        { id: "q5-ov7", text: "Megafone de D. Afonso Henriques", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov8", text: "Chinelo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov9", text: "Osso gigante de pedra", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov10", text: "Dinossauro", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov11", text: "iPhone 17", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov12", text: "Pó de borracha", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov13", text: "Aparecer um cavalo", votes: 1, points: 1, aliases: ["cavalo"], revealed: false },
        { id: "q5-ov14", text: "Pinha", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov15", text: "Boxers", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov16", text: "Rivais a saltar", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov17", text: "Talheres", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov18", text: "Fumo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov19", text: "Glitter bomb", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov20", text: "Coelho", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov21", text: "Bomba", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov22", text: "Princesa Sofia", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov23", text: "Pedra", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov24", text: "Champanhe do Paulino", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov25", text: "Andar", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov26", text: "Chocolate e comida", votes: 1, points: 1, aliases: ["chocolate"], revealed: false },
        { id: "q5-ov27", text: "Paulinho", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q5-ov28", text: "Todos", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t1", "t4"], respondentTeamIds: ["t2", "t3", "t5", "t6"],
  },
  {
    id: "q6", questionType: "main", text: "Que participante é mais provável de adormecer durante uma explicação?",
    respondentCount: 33, completed: false,
    answers: [
        { id: "q6-a1", text: "Sebastião Pedro", votes: 4, points: 4, aliases: [], revealed: false },
        { id: "q6-a2", text: "Isabel Paulino", votes: 4, points: 4, aliases: ["Isabel"], revealed: false },
        { id: "q6-a3", text: "Madalena Amado", votes: 3, points: 3, aliases: [], revealed: false },
        { id: "q6-a4", text: "Tomás Henriques", votes: 3, points: 3, aliases: [], revealed: false },
        { id: "q6-a5", text: "Filipe Marcelo", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q6-a6", text: "Gonçalo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-a7", text: "Maria Francisca Sousa", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-a8", text: "Duarte Russo", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q6-ov1", text: "Pedro", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov2", text: "António Amado", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov3", text: "Vitória", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov4", text: "Pedro Cosmo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov5", text: "Helena", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov6", text: "Helena Marcelo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov7", text: "Matilde Borges", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov8", text: "Leonor Russo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov9", text: "Francisca Rodrigues", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov10", text: "Jesus", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov11", text: "Eu", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov12", text: "Participante que não dormiu nada", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov13", text: "Sono", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q6-ov14", text: "Não dormir", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t1", "t4"], respondentTeamIds: ["t2", "t3", "t5", "t6"],
  },
  // Pair 4 (Q7-8): Playable Amarela+Verde
  {
    id: "q7", questionType: "main", text: "Que personagem seria pior a guardar um segredo?",
    respondentCount: 32, completed: false,
    answers: [
        { id: "q7-a1", text: "Coelhice", votes: 6, points: 6, aliases: [], revealed: false },
        { id: "q7-a2", text: "Paulenda", votes: 5, points: 5, aliases: ["Paulinha"], revealed: false },
        { id: "q7-a3", text: "Cátia", votes: 3, points: 3, aliases: [], revealed: false },
        { id: "q7-a4", text: "Milla / Cupido", votes: 2, points: 2, aliases: ["Cupido", "Milla"], revealed: false },
        { id: "q7-a5", text: "Malévolo Dumbledores", votes: 2, points: 2, aliases: ["Malévolo"], revealed: false },
        { id: "q7-a6", text: "Gonçalo", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q7-a7", text: "Ronalda McDonalda", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q7-a8", text: "Papai Claudão", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q7-ov1", text: "Todos", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q7-ov2", text: "Santa Antónia", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q7-ov3", text: "Vicente", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q7-ov4", text: "Guita", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q7-ov5", text: "Sara", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q7-ov6", text: "Bruxa", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q7-ov7", text: "Bruxo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q7-ov8", text: "Comer arroz dos outros sem música", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t1", "t5"], respondentTeamIds: ["t2", "t3", "t4", "t6"],
  },
  {
    id: "q8", questionType: "main", text: "Diz uma coisa que se perde sempre num campo de férias.",
    respondentCount: 32, completed: false,
    answers: [
        { id: "q8-a1", text: "Chapéu", votes: 10, points: 10, aliases: [], revealed: false },
        { id: "q8-a2", text: "Meias", votes: 8, points: 8, aliases: [], revealed: false },
        { id: "q8-a3", text: "Roupa", votes: 5, points: 5, aliases: ["t-shirt"], revealed: false },
        { id: "q8-a4", text: "Cuecas", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q8-a5", text: "Anel", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q8-a6", text: "Mochila", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q8-a7", text: "Jogos", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q8-a8", text: "Pasta de dentes ambulante", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q8-ov1", text: "Comida", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q8-ov2", text: "Piso", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q8-ov3", text: "Animal", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t1", "t5"], respondentTeamIds: ["t2", "t3", "t4", "t6"],
  },
  // Pair 5 (Q9-10): Playable Amarela+Vermelha
  {
    id: "q9", questionType: "main", text: "Que personagem beberia uma poção sem perguntar o que era?",
    respondentCount: 31, completed: false,
    answers: [
        { id: "q9-a1", text: "Paulenda", votes: 12, points: 12, aliases: ["Paulinha"], revealed: false },
        { id: "q9-a2", text: "Paulino", votes: 3, points: 3, aliases: [], revealed: false },
        { id: "q9-a5", text: "Elfo / Fábio Coentrão", votes: 3, points: 3, aliases: ["Fábio", "Fábio Coentrão", "Elfo"], revealed: false },
        { id: "q9-a3", text: "Papai Claudão", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q9-a4", text: "Ronalda McDonalda", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q9-a6", text: "Salgueirita", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q9-a7", text: "Malévolo Dumbledores", votes: 1, points: 1, aliases: ["Malévolo"], revealed: false },
        { id: "q9-a8", text: "Paulinho", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q9-ov1", text: "Madalena", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q9-ov2", text: "Sara Carnaval", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q9-ov3", text: "David Paulino", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q9-ov4", text: "Menino", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q9-ov5", text: "Não trazer nada", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q9-ov6", text: "Mãe", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t1", "t6"], respondentTeamIds: ["t2", "t3", "t4", "t5"],
  },
  {
    id: "q10", questionType: "main", text: "Diz um erro que as personagens dos filmes de terror costumam fazer.",
    respondentCount: 30, completed: false,
    answers: [
        { id: "q10-a1", text: "Ir investigar sons/perigos", votes: 7, points: 7, aliases: ["ir ver o que se passa em vez de fugir", "investigar 'o que foi aquele som?'", "ir ver o que está no escuro", "ir em direção a um som no escuro", "entrar em sítios escuros", "vão investigar sons suspeitos"], revealed: false },
        { id: "q10-a2", text: "Correr/fugir mal (cair, etc.)", votes: 3, points: 3, aliases: ["correm do monstro e caem", "correr em direção ao perigo", "correr ou não fugir"], revealed: false },
        { id: "q10-a3", text: "Separar-se / não ficar juntos", votes: 2, points: 2, aliases: ["não estar com os trabalhadores", "encher em casa escondidos mesmo que diga não entrem"], revealed: false },
        { id: "q10-a4", text: "Olhar para trás", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-a5", text: "Lutar", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-a6", text: "Abrir portas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-a7", text: "Demorar", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-a8", text: "Adormecer", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q10-ov1", text: "Assustar no mato", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-ov2", text: "Drama", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-ov3", text: "Meter máscara e afinal é pessoa normal", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-ov4", text: "Ficar escuro", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-ov5", text: "Demasiado cobardes", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-ov6", text: "Ser demasiado sinistro", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-ov7", text: "Dar um soco a sério", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-ov8", text: "Matar pessoas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-ov9", text: "Atacar", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-ov10", text: "Usar telemóvel", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-ov11", text: "Assustarem-se", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-ov12", text: "Papai Claudão", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q10-ov13", text: "Não mudar de país", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t1", "t6"], respondentTeamIds: ["t2", "t3", "t4", "t5"],
  },
  // Pair 6 (Q11-12): Playable Azul+Branca
  {
    id: "q11", questionType: "main", text: "Diz uma coisa que uma equipa faz quando está a perder.",
    respondentCount: 35, completed: false,
    answers: [
        { id: "q11-a1", text: "Batota", votes: 10, points: 10, aliases: ["fazer batota a jogar", "tentar fazer batota"], revealed: false },
        { id: "q11-a2", text: "Desistir", votes: 8, points: 8, aliases: ["desiste", "desistir sentado e calar-se", "desistir do jogo", "grita e desiste"], revealed: false },
        { id: "q11-a3", text: "Começa a gritar / stressar", votes: 2, points: 2, aliases: ["começa a gritar com a equipa", "culparem-se uns aos outros"], revealed: false },
        { id: "q11-a4", text: "Andar / separar-se", votes: 2, points: 2, aliases: ["andar por aí", "separar-se"], revealed: false },
        { id: "q11-a5", text: "Bora equipa (animar)", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q11-a6", text: "Anima para ganhar", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q11-a7", text: "Lama", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q11-a8", text: "Batota + começar a bater", votes: 1, points: 1, aliases: ["começar a bater"], revealed: false }
    ],
    overflowAnswers: [
        { id: "q11-ov1", text: "Fica a ganhar", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q11-ov2", text: "Diz que o que conta é a intenção", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q11-ov3", text: "Bolota", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q11-ov4", text: "Quebrar coisas rápido", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q11-ov5", text: "Fica envergonhada", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q11-ov6", text: "Fica a morrer", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q11-ov7", text: "Não trazer nada", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q11-ov8", text: "Andar mais devagar", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q11-ov9", text: "Fazer e parar de jogar", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t2", "t3"], respondentTeamIds: ["t1", "t4", "t5", "t6"],
  },
  {
    id: "q12", questionType: "main", text: "Que presente nunca se deve dar no Dia dos Namorados?",
    respondentCount: 35, completed: false,
    answers: [
        { id: "q12-a1", text: "Cuecas", votes: 4, points: 4, aliases: ["cuecas pretas"], revealed: false },
        { id: "q12-a2", text: "Livros", votes: 3, points: 3, aliases: ["livro 'como superar o ex'"], revealed: false },
        { id: "q12-a3", text: "Uma traição", votes: 2, points: 2, aliases: ["uma caixa a dizer 'eu traí-te'"], revealed: false },
        { id: "q12-a4", text: "Cartolina", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-a5", text: "Chocolates", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-a6", text: "Escova de dentes", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-a7", text: "Meias brancas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-a8", text: "Comida", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q12-ov1", text: "Nenhum", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov2", text: "Um presente de Halloween", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov3", text: "Pode ser de tudo, o que conta é a intenção", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov4", text: "Uma mota cheia de berlindes", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov5", text: "Poemas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov6", text: "Anel de feira ainda com etiqueta de preço", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov7", text: "Um bocado", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov8", text: "Relógio partido", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov9", text: "Copo de petróleo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov10", text: "Feios", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov11", text: "Velas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov12", text: "TV", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov13", text: "Coração desenhado", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov14", text: "Um fora", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov15", text: "Arma com laser", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov16", text: "Queijo, pasta e escova de dentes", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov17", text: "Sardinhas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov18", text: "Pasta de dentes", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov19", text: "Cuecas da Maria Carreira", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov20", text: "Sabonete", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q12-ov21", text: "Buzinas", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t2", "t3"], respondentTeamIds: ["t1", "t4", "t5", "t6"],
  },
  // Pair 7 (Q13-14): Playable Azul+Laranja
  {
    id: "q13", questionType: "main", text: "Que regra do campo gostavas de abolir?",
    respondentCount: 30, completed: false,
    answers: [
        { id: "q13-a2", text: "Ter de usar chapéu", votes: 3, points: 3, aliases: ["chapéu", "ser obrigado a usar chapéu", "chapéu sempre enfiado de lado"], revealed: false },
        { id: "q13-a1", text: "Não se pode comer nos quartos", votes: 2, points: 2, aliases: ["não comer beber ou ter alimentos no quarto", "não se pode comer nos quartos"], revealed: false },
        { id: "q13-a3", text: "Obrigação de comer sopa", votes: 2, points: 2, aliases: ["obrigação de comer sopa", "sopa sempre"], revealed: false },
        { id: "q13-a4", text: "Não ir à casa de banho à noite", votes: 1, points: 1, aliases: ["não podemos ir à casa de banho à noite"], revealed: false },
        { id: "q13-a5", text: "Dormir cedo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-a6", text: "Verdade ou desafio proibido", votes: 1, points: 1, aliases: ["verdade ou desafio"], revealed: false },
        { id: "q13-a7", text: "Lavar os dentes antes do pequeno-almoço", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-a8", text: "Usar chinelos de dia", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q13-ov1", text: "Ter a polícia da PIDE", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov2", text: "Chamar a GNR", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov3", text: "Não trazer telemóvel", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov4", text: "Silêncio", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov5", text: "Ir todos os dias à piscina", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov6", text: "Não poder sair do banho de chinelos", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov7", text: "Teletransporte", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov8", text: "Sermos obrigados a comer salada", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov9", text: "Bolas no bosque", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov10", text: "Não podemos ir para onde queremos", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov11", text: "Ter fome", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov12", text: "Secar o cabelo depois do banho", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov13", text: "Molha", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov14", text: "Todos", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov15", text: "Estar sempre em silêncio", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov16", text: "Não conta aqui", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov17", text: "Tocar pouco tempo na piscina", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q13-ov18", text: "Ter sempre bónus", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t2", "t4"], respondentTeamIds: ["t1", "t3", "t5", "t6"],
  },
  {
    id: "q14", questionType: "main", text: "Onde esconderias um ovo da Páscoa no Lugar d'Além?",
    respondentCount: 36, completed: false,
    answers: [
        { id: "q14-a1", text: "Nas árvores", votes: 7, points: 7, aliases: ["árvores", "em cima de uma árvore", "nas árvores", "árvore", "árvore de Natal"], revealed: false },
        { id: "q14-a2", text: "No armário", votes: 3, points: 3, aliases: ["no meu armário", "dentro do armário"], revealed: false },
        { id: "q14-a3", text: "Nos arbustos", votes: 3, points: 3, aliases: ["arbustos do campo de minigolfe", "atrás dos arbustos", "atrás do arbusto"], revealed: false },
        { id: "q14-a4", text: "Casa de banho", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-a5", text: "Debaixo da almofada", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-a6", text: "Na piscina", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-a7", text: "No mato", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-a8", text: "No estendal", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q14-ov1", text: "Atrás da máquina de água", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov2", text: "Pátio perto dos plátanos", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov3", text: "Receção", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov4", text: "Caixa de presentes de Natal", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov5", text: "Cimo do molho das gomas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov6", text: "Estendal", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov7", text: "Caminho vermelho", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov8", text: "Caixote do lixo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov9", text: "Balde do lixo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov10", text: "Cuecas da Maria Carreira", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov11", text: "Salgueiro", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov12", text: "Cuecos do Lucas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov13", text: "Armas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov14", text: "Lençóis", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov15", text: "Casa do pão", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov16", text: "Antigo parque infantil", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov17", text: "Caixa", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q14-ov18", text: "Chapéu do elfo", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t2", "t4"], respondentTeamIds: ["t1", "t3", "t5", "t6"],
  },
  // Pair 8 (Q15-16): Playable Azul+Verde
  {
    id: "q15", questionType: "main", text: "Que coisa não podia faltar na gala final?",
    respondentCount: 34, completed: false,
    answers: [
        { id: "q15-a1", text: "Música", votes: 6, points: 6, aliases: ["música do campo", "música dos Santos Populares", "disco às 1:30"], revealed: false },
        { id: "q15-a2", text: "Passadeira para fotos", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q15-a3", text: "Comida", votes: 2, points: 2, aliases: ["comida e bebida", "comida, bebidas e música"], revealed: false },
        { id: "q15-a4", text: "Lasanha", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q15-a5", text: "Flores", votes: 2, points: 2, aliases: ["flores e velas"], revealed: false },
        { id: "q15-a6", text: "Roupa", votes: 2, points: 2, aliases: ["roupa elegante", "roupa adequada"], revealed: false },
        { id: "q15-a7", text: "Velinha", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-a8", text: "Diversão", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q15-ov1", text: "Disco às 1:30", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov2", text: "Par", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov3", text: "Festa", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov4", text: "Slow dance", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov5", text: "Pessoas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov6", text: "Cama", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov7", text: "Glitter bomb", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov8", text: "Comida e bebida", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov9", text: "Comida, bebidas e música", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov10", text: "Uma máquina", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov11", text: "Talheres", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov12", text: "Jogos aquáticos", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov13", text: "Botas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov14", text: "Som", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov15", text: "Arroz", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q15-ov16", text: "Lama", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t2", "t5"], respondentTeamIds: ["t1", "t3", "t4", "t6"],
  },
  {
    id: "q16", questionType: "main", text: "Que objeto nunca devia ficar nas mãos de alguém tão caótico como a Ronalda McDonalda?",
    respondentCount: 33, completed: false,
    answers: [
        { id: "q16-a1", text: "Buzina", votes: 7, points: 7, aliases: ["apito da São João", "apito"], revealed: false },
        { id: "q16-a2", text: "Martelo", votes: 3, points: 3, aliases: ["martelo gigante"], revealed: false },
        { id: "q16-a3", text: "Faca", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q16-a4", text: "Copo de vidro", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q16-a5", text: "Coisas que se podem partir", votes: 2, points: 2, aliases: ["coisas que se podem partir", "coisas preciosas"], revealed: false },
        { id: "q16-a6", text: "Galinha", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-a7", text: "Caneta", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-a8", text: "Garfo", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q16-ov1", text: "Vidro", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov2", text: "Telemóvel", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov3", text: "Uma mola que nunca para de saltar", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov4", text: "Portefólio da Sara", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov5", text: "Coluna", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov6", text: "Pau importante", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov7", text: "Copo de vinho", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov8", text: "Cabeça", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov9", text: "Roupa do Lidl", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov10", text: "Perna", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov11", text: "Capa de vidro", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov12", text: "Cansar-se a jogar", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov13", text: "Bíblia", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q16-ov14", text: "McDonald", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t2", "t5"], respondentTeamIds: ["t1", "t3", "t4", "t6"],
  },
  // Pair 9 (Q17-18): Playable Azul+Vermelha
  {
    id: "q17", questionType: "main", text: "Que personagem seria mais provável de chorar num discurso?",
    respondentCount: 34, completed: false,
    answers: [
        { id: "q17-a1", text: "Coelhice", votes: 12, points: 12, aliases: [], revealed: false },
        { id: "q17-a2", text: "Milla / Cupido", votes: 8, points: 8, aliases: ["Milla Valentina", "Milla", "Cupido"], revealed: false },
        { id: "q17-a3", text: "Papai Claudão", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q17-a4", text: "Paulinha / Paulenda", votes: 2, points: 2, aliases: ["Paulinha"], revealed: false },
        { id: "q17-a5", text: "Cátia", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q17-a6", text: "Bundinho", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q17-a7", text: "Paulino", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q17-a8", text: "Alice", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q17-ov1", text: "Luísa Correia", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q17-ov2", text: "Discurso sobre a Luísa", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q17-ov3", text: "Música", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q17-ov4", text: "Inês", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q17-ov5", text: "Santo António", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q17-ov6", text: "Aniversário", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t2", "t6"], respondentTeamIds: ["t1", "t3", "t4", "t5"],
  },
  {
    id: "q18", questionType: "main", text: "Que participante é mais provável de se rir num momento sério?",
    respondentCount: 34, completed: false,
    answers: [
        { id: "q18-a1", text: "Maria Francisca Sousa", votes: 4, points: 4, aliases: [], revealed: false },
        { id: "q18-a2", text: "Eu (self)", votes: 4, points: 4, aliases: [], revealed: false },
        { id: "q18-a3", text: "Madalena Amado", votes: 3, points: 3, aliases: [], revealed: false },
        { id: "q18-a4", text: "Filipe Marcelo", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q18-a5", text: "Diogo", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q18-a6", text: "Pedro", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q18-a7", text: "António Amado", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-a8", text: "Teresa Paulino", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q18-ov1", text: "Crianças competitivas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov2", text: "Si mesma", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov3", text: "Teresa", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov4", text: "Beatriz", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov5", text: "Meninas mais velhas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov6", text: "Diogo Marcelo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov7", text: "Um jato privado", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov8", text: "Beatriz e Francisca Sousa", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov9", text: "Leonor Russo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov10", text: "Palhaço", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov11", text: "Uma cena", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov12", text: "Diogo Pinto", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov13", text: "Rona Serrasqueiro", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov14", text: "Gonçalo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q18-ov15", text: "Catarina", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t2", "t6"], respondentTeamIds: ["t1", "t3", "t4", "t5"],
  },
  // Pair 10 (Q19-20): Playable Branca+Laranja
  {
    id: "q19", questionType: "main", text: "Que personagem seria melhor DJ numa festa?",
    respondentCount: 33, completed: false,
    answers: [
        { id: "q19-a1", text: "Paulenda", votes: 12, points: 12, aliases: [], revealed: false },
        { id: "q19-a2", text: "Ronalda McDonalda", votes: 5, points: 5, aliases: [], revealed: false },
        { id: "q19-a3", text: "Salgueirita", votes: 3, points: 3, aliases: [], revealed: false },
        { id: "q19-a4", text: "Papai Claudão", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q19-a5", text: "DJ Coz", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q19-a6", text: "Fábio Coentrão / Elfo", votes: 1, points: 1, aliases: ["Fábio Coentrão"], revealed: false },
        { id: "q19-a7", text: "Paulino", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q19-a8", text: "Melindrosa", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q19-ov1", text: "Pai Natal", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q19-ov2", text: "David Paulino", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q19-ov3", text: "Maria Carreira", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q19-ov4", text: "São João", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q19-ov5", text: "Paulinho", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q19-ov6", text: "Sapato", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q19-ov7", text: "Princesa", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q19-ov8", text: "Música", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t3", "t4"], respondentTeamIds: ["t1", "t2", "t5", "t6"],
  },
  {
    id: "q20", questionType: "main", text: "Diz uma coisa que imaginas a Ronalda McDonalda a partir sem querer.",
    respondentCount: 30, completed: false,
    answers: [
        { id: "q20-a1", text: "Copo / copo de vidro", votes: 6, points: 6, aliases: ["copo", "copo de vidro", "um copo", "copos de vidro", "taça de cristal"], revealed: false },
        { id: "q20-a2", text: "Buzina", votes: 3, points: 3, aliases: [], revealed: false },
        { id: "q20-a3", text: "Megafone", votes: 3, points: 3, aliases: ["microfone"], revealed: false },
        { id: "q20-a4", text: "Ovo da Páscoa", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-a5", text: "Pinha", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-a6", text: "Balão", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-a7", text: "Vaso", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-a8", text: "Garrafa", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q20-ov1", text: "Pente de cabelo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-ov2", text: "Tiro", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-ov3", text: "Cobra", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-ov4", text: "Coisa mais especial da terra do Além a cair miseravelmente", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-ov5", text: "Coisas de esquilo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-ov6", text: "Agosto", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-ov7", text: "Tocar o sino", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-ov8", text: "Máquina de água", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-ov9", text: "Pão", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-ov10", text: "Pedregulho", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-ov11", text: "Vidro", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-ov12", text: "Qualquer coisa sem ser as do Lidl", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q20-ov13", text: "Bater", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t3", "t4"], respondentTeamIds: ["t1", "t2", "t5", "t6"],
  },
  // Pair 11 (Q21-22): Playable Branca+Verde
  {
    id: "q21", questionType: "main", text: "Qual a música mais ouvida nos Santos Populares deste ano?",
    respondentCount: 31, completed: false,
    answers: [
        { id: "q21-a1", text: "Apita o comboio", votes: 19, points: 19, aliases: [], revealed: false },
        { id: "q21-a2", text: "Peitos da Cabritinha / Cabritinha", votes: 2, points: 2, aliases: ["Peitos da Cabritinha", "Cabritinha"], revealed: false },
        { id: "q21-a5", text: "Baile de verão / baile do verão", votes: 2, points: 2, aliases: ["baile de verão", "baile do verão"], revealed: false },
        { id: "q21-a3", text: "Dá-me um beijinho, dá-me um abraço", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q21-a4", text: "Frase do six seven", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q21-a6", text: "Música dos Santos Populares", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q21-a7", text: "Babosa", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q21-ov1", text: "Maria Carreira Semedo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q21-ov2", text: "Festa de Natal", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q21-ov3", text: "Luz", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q21-ov4", text: "Cheira a sabão", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t3", "t5"], respondentTeamIds: ["t1", "t2", "t4", "t6"],
  },
  {
    id: "q22", questionType: "main", text: "Que coisa levas contigo se tiveres medo à noite?",
    respondentCount: 31, completed: false,
    answers: [
        { id: "q22-a1", text: "Lanterna", votes: 21, points: 21, aliases: [], revealed: false },
        { id: "q22-a2", text: "Telemóvel", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q22-a3", text: "Peluche", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q22-a4", text: "Amigo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q22-a5", text: "Luz de presença", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q22-a6", text: "Mala", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q22-a7", text: "Bola amarela falante que responde a todas as perguntas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q22-a8", text: "Ursinhos", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q22-ov1", text: "Panquecas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q22-ov2", text: "Nora", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t3", "t5"], respondentTeamIds: ["t1", "t2", "t4", "t6"],
  },
  // Pair 12 (Q23-24): Playable Branca+Vermelha
  {
    id: "q23", questionType: "main", text: "O que pode transformar uma festa num desastre?",
    respondentCount: 30, completed: false,
    answers: [
        { id: "q23-a1", text: "Falta de música / má música", votes: 6, points: 6, aliases: ["música má", "falta de música", "má música", "parar a música", "música parvalhona", "gás da música"], revealed: false },
        { id: "q23-a2", text: "Verdade ou desafio (jogo)", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q23-a3", text: "Maria Carreira (presença)", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q23-a4", text: "Aparecimento da PIDE", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-a5", text: "Falta de comida", votes: 1, points: 1, aliases: ["falta de comida", "comida"], revealed: false },
        { id: "q23-a6", text: "Alguém discutir", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-a7", text: "Bebidas alcoólicas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-a8", text: "A festa ser arruinada", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q23-ov1", text: "Pessoas escondidas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov2", text: "Um amigo meu da sede", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov3", text: "Alguém fazer porcaria", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov4", text: "Partir um braço", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov5", text: "Ter uma traição descoberta", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov6", text: "Festa e música", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov7", text: "Dragão", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov8", text: "Noite de alguém", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov9", text: "TDE", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov10", text: "Falta de pessoas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov11", text: "Vicente Rodrigues", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov12", text: "Bola", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov13", text: "Campo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov14", text: "Pessoas não terem roupa festiva", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q23-ov15", text: "Comida", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t3", "t6"], respondentTeamIds: ["t1", "t2", "t4", "t5"],
  },
  {
    id: "q24", questionType: "main", text: "Que objeto mágico seria mais útil numa missão?",
    respondentCount: 30, completed: false,
    answers: [
        { id: "q24-a1", text: "Varinha (mágica)", votes: 17, points: 17, aliases: ["varinha", "varinha mágica", "varinha da invisibilidade", "varinha do Harry Potter", "varinha mágica do Paulenda"], revealed: false },
        { id: "q24-a2", text: "Objeto que faz voar", votes: 2, points: 2, aliases: ["sapatos de foguete", "objeto que faz voar"], revealed: false },
        { id: "q24-a3", text: "Objeto que teletransporta", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q24-a4", text: "Mala da Dora a exploradora", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q24-a5", text: "Martelo de São João", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q24-a6", text: "Óculos", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q24-a7", text: "Armas mágicas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q24-a8", text: "Livros", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q24-ov1", text: "Ventoinha", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q24-ov2", text: "Metal", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q24-ov3", text: "Boneco", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q24-ov4", text: "Eu", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q24-ov5", text: "Ovo podre atirado à cabeça", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t3", "t6"], respondentTeamIds: ["t1", "t2", "t4", "t5"],
  },
  // Pair 13 (Q25-26): Playable Laranja+Verde
  {
    id: "q25", questionType: "main", text: "Que comida te faz lembrar o Natal?",
    respondentCount: 33, completed: false,
    answers: [
        { id: "q25-a1", text: "Bacalhau", votes: 12, points: 12, aliases: ["bacalhau cozido", "bacalhau com natas", "bacalhau com batatas"], revealed: false },
        { id: "q25-a2", text: "Bolo rei", votes: 3, points: 3, aliases: [], revealed: false },
        { id: "q25-a3", text: "Arroz", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q25-a4", text: "Bolo", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q25-a5", text: "Filhoses", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q25-a6", text: "Rabanada", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q25-a7", text: "Pato assado", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q25-a8", text: "Pizza", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q25-ov1", text: "Bolachas de Natal", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q25-ov2", text: "Peixe cru", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q25-ov3", text: "Pão assado", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q25-ov4", text: "Bacalhau cozido", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q25-ov5", text: "Bacalhau com natas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q25-ov6", text: "Bacalhau com batatas", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q25-ov7", text: "Pera", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q25-ov8", text: "Bifana", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q25-ov9", text: "Chocolate quente", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q25-ov10", text: "Doi-me o pé", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t4", "t5"], respondentTeamIds: ["t1", "t2", "t3", "t6"],
  },
  {
    id: "q26", questionType: "main", text: "Que participante é mais provável de convencer a equipa a fazer disparates?",
    respondentCount: 31, completed: false,
    answers: [
        { id: "q26-a1", text: "António Amado", votes: 8, points: 8, aliases: [], revealed: false },
        { id: "q26-a2", text: "Filipe Marcelo", votes: 3, points: 3, aliases: [], revealed: false },
        { id: "q26-a3", text: "Sara", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q26-a4", text: "Mais velhos (categoria)", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q26-a5", text: "Rodrigo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-a6", text: "Marcelo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-a7", text: "Francisca Galvão", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-a8", text: "Maria Serrasqueiro", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q26-ov1", text: "Teresa Paulino", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-ov2", text: "Tomás", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-ov3", text: "Francisca Sousa", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-ov4", text: "Duarte Russo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-ov5", text: "Diogo Marcelo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-ov6", text: "Beatriz Rodrigues", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-ov7", text: "Gonçalo Henriques", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-ov8", text: "Alice", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-ov9", text: "Coelhice e elfo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-ov10", text: "Eu", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-ov11", text: "Vicente Rodrigues", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q26-ov12", text: "Chefe", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t4", "t5"], respondentTeamIds: ["t1", "t2", "t3", "t6"],
  },
  // Pair 14 (Q27-28): Playable Laranja+Vermelha
  {
    id: "q27", questionType: "main", text: "Que animal devia viver no covil do Malévolo Dumbledores?",
    respondentCount: 32, completed: false,
    answers: [
        { id: "q27-a2", text: "Gato (preto)", votes: 5, points: 5, aliases: ["gato", "gato preto"], revealed: false },
        { id: "q27-a1", text: "Corvo", votes: 4, points: 4, aliases: [], revealed: false },
        { id: "q27-a3", text: "Cão", votes: 3, points: 3, aliases: [], revealed: false },
        { id: "q27-a6", text: "Demogorgon", votes: 3, points: 3, aliases: ["Demogorgon e Vecna"], revealed: false },
        { id: "q27-a4", text: "Cobra", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q27-a5", text: "Bruxa / feiticeira", votes: 2, points: 2, aliases: ["bruxa"], revealed: false },
        { id: "q27-a7", text: "Dragão", votes: 2, points: 2, aliases: ["dragões morcegos"], revealed: false },
        { id: "q27-a8", text: "Morcego", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q27-ov1", text: "Fénix", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q27-ov2", text: "Coelho", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q27-ov3", text: "Maluco", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q27-ov4", text: "Leão", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q27-ov5", text: "Batman", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q27-ov6", text: "Aranha", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q27-ov7", text: "Rato mágico", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q27-ov8", text: "Cavalo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q27-ov9", text: "Mário Correia", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q27-ov10", text: "Pato", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t4", "t6"], respondentTeamIds: ["t1", "t2", "t3", "t5"],
  },
  {
    id: "q28", questionType: "main", text: "Qual seria o pior sítio para um pedido para a gala final?",
    respondentCount: 32, completed: false,
    answers: [
        { id: "q28-a1", text: "Casa de banho", votes: 16, points: 16, aliases: ["casa de banho dos rapazes", "em frente às casas de banho"], revealed: false },
        { id: "q28-a2", text: "Durante uma atividade", votes: 2, points: 2, aliases: ["durante uma atividade", "numa atividade"], revealed: false },
        { id: "q28-a3", text: "Balneário", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q28-a4", text: "Centro da casa", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q28-a5", text: "Anfiteatro / palco", votes: 2, points: 2, aliases: ["palco", "anfiteatro"], revealed: false },
        { id: "q28-a6", text: "Receção", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q28-a7", text: "Sítio escuro e trancado", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q28-a8", text: "Matraquilhos", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q28-ov1", text: "Parte de terror", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q28-ov2", text: "Casa", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q28-ov3", text: "Feira", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q28-ov4", text: "Caixote do lixo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q28-ov5", text: "Meio do mato", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t4", "t6"], respondentTeamIds: ["t1", "t2", "t3", "t5"],
  },
  // Pair 15 (Q29-30): Playable Verde+Vermelha
  {
    id: "q29", questionType: "main", text: "Se fosses a Cátia Margarida Inês Maria Catarina Paula Sara, o que gostavas de receber no teu aniversário?",
    respondentCount: 29, completed: false,
    answers: [
        { id: "q29-a3", text: "FC27 (videojogo)", votes: 3, points: 3, aliases: ["FC27", "PS6 com FC27"], revealed: false },
        { id: "q29-a1", text: "Dinheiro", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q29-a2", text: "iPhone 17 Pro", votes: 2, points: 2, aliases: [], revealed: false },
        { id: "q29-a4", text: "Abraço (da Milla)", votes: 2, points: 2, aliases: ["abraço", "abraço da Milla"], revealed: false },
        { id: "q29-a5", text: "Câmara fotográfica", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-a6", text: "Jogo de maquilhagem", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-a7", text: "Máquina massajadora", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-a8", text: "Telemóvel", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    overflowAnswers: [
        { id: "q29-ov1", text: "Pistas de Hot Wheels", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov2", text: "Comando novo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov3", text: "Bolo de aniversário", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov4", text: "Roupa", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov5", text: "Boneco que dispara", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov6", text: "Uma pilha de pratos", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov7", text: "Papa de ovo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov8", text: "Crachá a dizer 'é o meu aniversário!'", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov9", text: "Croché", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov10", text: "Jogar futebol e Nintendo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov11", text: "Lanterna", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov12", text: "Campo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov13", text: "Juventus", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov14", text: "Gato laranja", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov15", text: "Carinho", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q29-ov16", text: "Beijinho da Milla", votes: 1, points: 1, aliases: [], revealed: false }
    ],
    playableByTeamIds: ["t5", "t6"], respondentTeamIds: ["t1", "t2", "t3", "t4"],
  },
  {
    id: "q30", questionType: "main", text: "Que casal juntarias se fosses a Milla Valentina?",
    respondentCount: 29, completed: false,
    answers: [
        { id: "q30-a1", text: "Beatriz e Filipe", votes: 4, points: 4, aliases: ["Beatriz Rodrigues e Filipe Marcelo", "Beatriz e Filipe", "Filipe e Beatriz", "Bia e Filipe"], revealed: false },
        { id: "q30-a2", text: "Coelhice e Elfo", votes: 3, points: 3, aliases: ["Coelhice e elfo"], revealed: false },
        { id: "q30-a3", text: "André e Rita", votes: 3, points: 3, aliases: ["André e Rita", "André Duarte e Rita Almeida"], revealed: false },
        { id: "q30-a4", text: "Francisca e Duarte", votes: 3, points: 3, aliases: ["Francisca Galvão e Duarte Russo", "Duarte Russo e Francisca"], revealed: false }
    ],
    overflowAnswers: [
        { id: "q30-ov1", text: "Salgueirita e Vicente", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov2", text: "Madalena Amado e Rodrigo Pinto", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov3", text: "Francisca e António", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov4", text: "Inês e Paulino", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov5", text: "Vicente e Sofia", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov6", text: "Nenhum", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov7", text: "Maria Gonçalves e Tomás Henriques", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov8", text: "Nôno e Cid", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov9", text: "Teresa Paulino e Gonçalo Ponte", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov10", text: "Leonor Russo e António", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov11", text: "Papai Claudão", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov12", text: "Tomás Henriques e Maria Rita", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov13", text: "Luís e Gonçalo", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov14", text: "Cid", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov15", text: "Bia e André", votes: 1, points: 1, aliases: [], revealed: false },
        { id: "q30-ov16", text: "Beatriz Palma e Lourenço Barreiros", votes: 1, points: 1, aliases: [], revealed: false }
    ],
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
