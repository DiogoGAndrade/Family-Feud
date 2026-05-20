import type { QuestionPack } from "../types";

/**
 * Built-in question packs for the Question Bank.
 *
 * These are DEMO / TEMPLATE questions.
 * Votes and points are illustrative — edit them before using in a real game.
 *
 * Future online integration point:
 *   Replace or supplement BUILTIN_PACKS by calling:
 *     async function fetchOnlinePacks(lang: string): Promise<QuestionPack[]>
 *   from a remote API endpoint (e.g., GET /api/question-packs?lang=pt).
 *   The QuestionPack type is designed to be API-compatible.
 */

// Compact helper: [text, votes, aliases]
type A = [string, number, string[]];

function bq(
  id: string,
  text: string,
  answers: A[],
  tags: string[],
  respondentCount = 100
) {
  return {
    id,
    text,
    respondentCount,
    answers: answers.map(([t, v, al]) => ({ text: t, votes: v, points: v, aliases: al })),
    tags,
    source: "builtin",
  };
}

// ─── Pack A: Family Feud Clássico ─────────────────────────────────────────────

const packClassic: QuestionPack = {
  id: "pack-classic",
  name: "Family Feud Clássico",
  description: "Perguntas gerais para qualquer público. Ótimas para aquecer.",
  questions: [
    bq("cl01", "Nomeia um animal doméstico popular.", [
      ["Cão", 43, ["cao", "cachorro", "dog", "cadela"]],
      ["Gato", 29, ["cat", "gata", "bichano", "miau"]],
      ["Peixe", 11, ["peixinho", "fish", "aquário"]],
      ["Pássaro", 8, ["bird", "passaro", "periquito", "canário"]],
      ["Hamster", 5, ["rato", "hamsterzinho"]],
      ["Coelho", 3, ["rabbit", "coelhinho"]],
      ["Tartaruga", 1, ["turtle", "cágado"]],
    ], ["geral", "animais"]),

    bq("cl02", "Nomeia algo que encontras sempre numa cozinha.", [
      ["Frigorifico", 35, ["frigorífico", "frigorifico", "geladeira", "fridge"]],
      ["Fogão", 25, ["fogao", "stove", "cuisiniere"]],
      ["Micro-ondas", 18, ["microondas", "microwave"]],
      ["Panelas", 10, ["panela", "tacho", "pots"]],
      ["Faca", 7, ["facas", "knife", "cutelo"]],
      ["Mesa", 3, ["bancada", "table"]],
      ["Torradeira", 2, ["toast", "torrador"]],
    ], ["geral", "casa"]),

    bq("cl03", "Nomeia algo que as pessoas fazem antes de dormir.", [
      ["Lavar os dentes", 38, ["escovar dentes", "brushing teeth", "dentes"]],
      ["Ver televisão", 22, ["ver tv", "tv", "netflix", "televisao"]],
      ["Ler", 15, ["livro", "reading", "leitura"]],
      ["Tomar duche", 12, ["banho", "shower", "duche"]],
      ["Rezar", 7, ["oracao", "oração", "pray"]],
      ["Verificar o telemóvel", 4, ["telemovel", "telefone", "phone"]],
      ["Beber água", 2, ["agua", "água", "water"]],
    ], ["geral", "rotinas"]),

    bq("cl04", "Nomeia um desporto popular em Portugal.", [
      ["Futebol", 52, ["football", "bola", "soccer"]],
      ["Natação", 15, ["nadar", "piscina", "swimming"]],
      ["Ciclismo", 10, ["bicicleta", "cycling", "bike"]],
      ["Surf", 9, ["surfing", "ondas", "praia"]],
      ["Atletismo", 7, ["corrida", "running", "jogging"]],
      ["Basquetebol", 4, ["basket", "basketball"]],
      ["Ténis", 3, ["tennis", "padel"]],
    ], ["geral", "desporto"]),

    bq("cl05", "Nomeia uma fruta popular.", [
      ["Maçã", 28, ["maca", "maçã", "apple"]],
      ["Laranja", 24, ["orange", "laranjas"]],
      ["Banana", 18, ["bananeira", "platano"]],
      ["Morango", 13, ["strawberry", "morangos"]],
      ["Uva", 8, ["grape", "uvas"]],
      ["Pera", 6, ["pear", "peras"]],
      ["Melancia", 3, ["watermelon", "melao"]],
    ], ["geral", "alimentação"]),

    bq("cl06", "Nomeia um tipo de transporte.", [
      ["Carro", 38, ["automóvel", "automovel", "car", "viatura"]],
      ["Autocarro", 22, ["bus", "camioneta", "onibus"]],
      ["Comboio", 15, ["train", "metro", "bala"]],
      ["Avião", 12, ["aviao", "airplane", "plane"]],
      ["Bicicleta", 7, ["bike", "mota", "ciclismo"]],
      ["Barco", 4, ["boat", "navio", "ship"]],
      ["Mota", 2, ["motociclo", "motorcycle", "scooter"]],
    ], ["geral", "transportes"]),

    bq("cl07", "Nomeia algo que as pessoas fazem ao fim de semana.", [
      ["Descansar", 30, ["dormir", "relaxar", "rest", "relax"]],
      ["Ir às compras", 22, ["compras", "shopping", "centro comercial"]],
      ["Ir ao parque", 15, ["parque", "jardim", "passeio"]],
      ["Ver filmes", 14, ["cinema", "netflix", "filmes", "tv"]],
      ["Visitar família", 11, ["familia", "família", "avós", "visitas"]],
      ["Desporto", 5, ["sport", "exercício", "exercicio"]],
      ["Praia", 3, ["mar", "beach", "sol"]],
    ], ["geral", "lazer"]),

    bq("cl08", "Nomeia um instrumento musical.", [
      ["Guitarra", 30, ["guitar", "violão", "viola"]],
      ["Piano", 25, ["teclado", "keyboard"]],
      ["Bateria", 15, ["drums", "percussão", "percussao"]],
      ["Violino", 12, ["violin", "fiddle"]],
      ["Flauta", 8, ["flute", "pífaro"]],
      ["Saxofone", 6, ["sax", "saxophone"]],
      ["Baixo", 4, ["bass", "contrabaixo"]],
    ], ["geral", "música"]),

    bq("cl09", "Nomeia algo que encontras num quarto.", [
      ["Cama", 40, ["bed", "beliche", "colchão"]],
      ["Roupeiro", 22, ["guarda-roupa", "armário", "closet", "wardrobe"]],
      ["Secretária", 15, ["mesa", "desk", "computador"]],
      ["Televisão", 10, ["tv", "ecrã", "screen"]],
      ["Janela", 7, ["window", "vidraça", "cortinas"]],
      ["Almofada", 4, ["pillow", "travesseiro"]],
      ["Candeeiro", 2, ["luz", "lâmpada", "lampada"]],
    ], ["geral", "casa"]),

    bq("cl10", "Nomeia algo que fazes quando estás entediado.", [
      ["Ver televisão", 28, ["ver tv", "netflix", "séries", "series"]],
      ["Telemóvel", 22, ["phone", "telemovel", "redes sociais", "instagram"]],
      ["Dormir", 18, ["tirar soneca", "descansar", "nap"]],
      ["Ouvir música", 14, ["music", "spotify", "música", "musica"]],
      ["Ler", 8, ["livro", "revista", "book"]],
      ["Jogar videojogos", 7, ["games", "videogames", "playstation", "xbox"]],
      ["Comer", 3, ["petiscar", "snacks", "comer"]],
    ], ["geral", "lazer"]),

    bq("cl11", "Nomeia algo que tem rodas.", [
      ["Carro", 35, ["automóvel", "automovel", "car"]],
      ["Bicicleta", 25, ["bike", "bici"]],
      ["Autocarro", 15, ["bus", "camioneta"]],
      ["Carrinho de bebé", 10, ["pram", "stroller", "carrinho"]],
      ["Mota", 7, ["motociclo", "motorcycle"]],
      ["Comboio", 5, ["train", "metro"]],
      ["Cadeira de rodas", 3, ["wheelchair", "cadeira"]],
    ], ["geral"]),

    bq("cl12", "Nomeia uma roupa para o inverno.", [
      ["Casaco", 35, ["jacket", "coat", "blusão", "blusao"]],
      ["Camisola", 25, ["sweater", "pullover", "jersey", "malha"]],
      ["Cachecol", 15, ["scarf", "lenço", "lenco"]],
      ["Luvas", 12, ["gloves", "mittens"]],
      ["Gorro", 8, ["hat", "barrete", "touca"]],
      ["Botas", 3, ["boots", "bota"]],
      ["Calças de fato", 2, ["leggings", "calças quentes"]],
    ], ["geral", "roupa"]),

    bq("cl13", "Nomeia algo que encontras na praia.", [
      ["Areia", 32, ["sand", "area"]],
      ["Água do mar", 22, ["mar", "sea", "onda", "ondas"]],
      ["Guarda-sol", 18, ["parasol", "chapeu de sol", "chapéu de sol"]],
      ["Concha", 10, ["shell", "conchas"]],
      ["Espreguiçadeira", 8, ["deck chair", "cadeira de praia"]],
      ["Bola", 6, ["ball", "bola de praia"]],
      ["Toalha", 4, ["towel", "toalha de praia"]],
    ], ["geral", "verão"]),

    bq("cl14", "Nomeia algo que compras no supermercado.", [
      ["Pão", 28, ["bread", "baguete", "baguette", "papo seco"]],
      ["Leite", 22, ["milk", "iogurte", "dairy"]],
      ["Fruta", 18, ["frutas", "fruit", "legumes"]],
      ["Carne", 12, ["meat", "frango", "chicken", "peixe"]],
      ["Massa", 10, ["pasta", "macarrão", "esparguete", "spaghetti"]],
      ["Detergente", 6, ["limpeza", "soap", "detergentes"]],
      ["Bolachas", 4, ["biscoitos", "cookies", "snacks"]],
    ], ["geral", "compras"]),

    bq("cl15", "Nomeia um país europeu.", [
      ["Espanha", 30, ["spain", "espana", "hespanha"]],
      ["França", 22, ["france", "franca"]],
      ["Alemanha", 18, ["germany", "alemanha"]],
      ["Itália", 14, ["italy", "italia"]],
      ["Reino Unido", 8, ["UK", "england", "inglaterra", "grã-bretanha"]],
      ["Holanda", 5, ["netherlands", "paises baixos", "países baixos"]],
      ["Bélgica", 3, ["belgium", "belgica"]],
    ], ["geral", "geografia"]),

    bq("cl16", "Nomeia algo que brilha.", [
      ["Estrela", 30, ["stars", "estrelas"]],
      ["Sol", 28, ["sun", "luz do sol"]],
      ["Ouro", 18, ["gold", "jóias", "joias"]],
      ["Diamante", 10, ["diamond", "brilhante"]],
      ["Espelho", 8, ["mirror", "reflexo"]],
      ["Lanterna", 4, ["torch", "luz", "vela"]],
      ["Fogo de artifício", 2, ["fireworks", "fogo-de-artificio"]],
    ], ["geral"]),

    bq("cl17", "Nomeia algo que faz barulho.", [
      ["Trovão", 28, ["thunderstorm", "tempestade", "thunder"]],
      ["Cão a ladrar", 22, ["ladrar", "cão", "cao", "barking"]],
      ["Alarme", 18, ["alarm", "sirene", "despertador"]],
      ["Motor", 14, ["car engine", "mota", "avião", "aviao"]],
      ["Música alta", 10, ["musica", "som", "som alto"]],
      ["Criança a chorar", 5, ["choro", "bébé", "bebe"]],
      ["Campainha", 3, ["doorbell", "sino", "bell"]],
    ], ["geral"]),

    bq("cl18", "Nomeia uma profissão muito respeitada.", [
      ["Médico", 35, ["medico", "doctor", "cirurgião"]],
      ["Professor", 25, ["professora", "teacher", "educador"]],
      ["Bombeiro", 18, ["fireman", "bombeira"]],
      ["Enfermeiro", 12, ["enfermeira", "nurse"]],
      ["Engenheiro", 6, ["engineer", "engenheira"]],
      ["Juiz", 3, ["judge", "magistrado"]],
      ["Piloto", 1, ["pilot", "aviador"]],
    ], ["geral", "trabalho"]),

    bq("cl19", "Nomeia algo que se encontra num jardim.", [
      ["Flores", 32, ["flower", "rosas", "flores", "tulipas"]],
      ["Árvore", 25, ["arvore", "árvore", "tree"]],
      ["Banco", 15, ["banco de jardim", "bench"]],
      ["Lago", 12, ["lagoa", "fontenário", "pond"]],
      ["Relva", 8, ["grama", "grass", "lawn", "erva"]],
      ["Mariposas", 5, ["butterfly", "borboleta", "insectos"]],
      ["Mangueira", 3, ["hosepipe", "rega", "watering"]],
    ], ["geral", "natureza"]),

    bq("cl20", "Nomeia algo que as pessoas coleccionam.", [
      ["Selos", 28, ["stamp", "selos postais", "filatelismo"]],
      ["Moedas", 22, ["coins", "numismática", "moeda"]],
      ["Livros", 18, ["books", "livro", "biblioteca"]],
      ["Cartas de jogos", 12, ["cards", "cartas", "trading cards", "Pokemon"]],
      ["Autógrafos", 10, ["autografo", "signature", "assinaturas"]],
      ["Miniaturas", 6, ["miniature", "figuras", "action figures"]],
      ["Conchas", 4, ["shell", "concha", "souvenirs"]],
    ], ["geral"]),
  ],
};

// ─── Pack B: Campo de Verão ────────────────────────────────────────────────────

const packCamp: QuestionPack = {
  id: "pack-camp",
  name: "Campo de Verão",
  description: "Perguntas sobre acampamento, monitores e atividades ao ar livre.",
  questions: [
    bq("ca01", "Nomeia uma atividade popular num campo de verão.", [
      ["Natação", 30, ["nadar", "piscina", "swimming"]],
      ["Campismo", 20, ["acampar", "tenda", "barraca"]],
      ["Escalada", 18, ["trepar", "climbing", "parede"]],
      ["Fogueira", 15, ["fogueiro", "fire", "lareira"]],
      ["Orientação", 8, ["mapa", "orienteering", "bussola"]],
      ["Desportos em equipa", 6, ["futebol", "basquete", "andebol"]],
      ["Artes e Artesanato", 3, ["craft", "pintura", "artesanato"]],
    ], ["campo", "atividades"]),

    bq("ca02", "Nomeia o que encontras dentro de uma tenda de campismo.", [
      ["Saco-cama", 35, ["sleeping bag", "saco de dormir"]],
      ["Colchão insuflável", 20, ["almofada", "mat", "colchão", "colchao"]],
      ["Lanterna", 18, ["torch", "luz", "flash"]],
      ["Mochila", 12, ["bag", "mochila", "backpack"]],
      ["Roupas", 8, ["roupa", "clothes", "vestuário"]],
      ["Livro", 4, ["book", "revista", "leitura"]],
      ["Insetos", 3, ["mosquito", "bug", "bicho"]],
    ], ["campo"]),

    bq("ca03", "Nomeia algo que metes na mochila para acampar.", [
      ["Cantil de água", 32, ["cantil", "agua", "água", "garrafinha"]],
      ["Comida", 25, ["snacks", "petiscos", "lanche", "barras"]],
      ["Roupa extra", 18, ["roupa", "clothes", "casaco"]],
      ["Kit primeiros socorros", 12, ["pensos", "medicamentos", "first aid"]],
      ["Mapa", 7, ["bussola", "bússola", "compass", "map"]],
      ["Fósforos", 4, ["fosforos", "isqueiro", "lume"]],
      ["Impermeável", 2, ["capa de chuva", "poncho", "raincoat"]],
    ], ["campo"]),

    bq("ca04", "Nomeia um animal que podes encontrar na floresta.", [
      ["Urso", 28, ["bear", "ursa"]],
      ["Lobo", 22, ["wolf", "lobos", "alcateia"]],
      ["Veado", 18, ["deer", "corça", "cervo"]],
      ["Javali", 14, ["boar", "porco bravo", "wild boar"]],
      ["Raposa", 10, ["fox", "raposas"]],
      ["Corvo", 5, ["crow", "raven", "pássaro negro"]],
      ["Esquilo", 3, ["squirrel", "esquilos"]],
    ], ["campo", "animais"]),

    bq("ca05", "Nomeia algo que os monitores fazem num campo de verão.", [
      ["Organizar atividades", 28, ["atividades", "jogos", "actividades"]],
      ["Tomar conta das crianças", 22, ["supervisionar", "vigiar", "cuidar"]],
      ["Contar histórias", 18, ["historias", "histórias", "contos", "lendas"]],
      ["Ensinar técnicas", 14, ["ensinar", "teach", "orienteering", "survival"]],
      ["Animar o grupo", 10, ["animar", "motivar", "entusiasmar"]],
      ["Cozinhar", 6, ["cooking", "cozinha", "alimentação"]],
      ["Primeiros socorros", 2, ["first aid", "penso", "socorro"]],
    ], ["campo", "monitores"]),

    bq("ca06", "Nomeia algo que se faz à volta de uma fogueira.", [
      ["Cantar", 35, ["musica", "música", "canções", "cancoes", "songs"]],
      ["Contar histórias", 25, ["historias", "histórias", "contos"]],
      ["Assar marshmallows", 18, ["marshmallow", "tostar", "assar"]],
      ["Dançar", 12, ["dancar", "dançar", "bailar", "dance"]],
      ["Aquecer", 7, ["calor", "aquecimento", "warming up"]],
      ["Jogar jogos", 2, ["jogos", "games", "brincadeiras"]],
      ["Rezar", 1, ["oracao", "oração", "pray"]],
    ], ["campo", "fogueira"]),

    bq("ca07", "Nomeia uma comida que se faz num acampamento.", [
      ["Salsichas assadas", 32, ["salsicha", "sausages", "salsicha na brasa"]],
      ["Pão com manteiga", 20, ["pão", "bread", "torrada"]],
      ["Massa", 18, ["spaghetti", "macarrão", "pasta"]],
      ["Ovos mexidos", 12, ["ovos", "eggs", "omeleta"]],
      ["Sopa", 10, ["soup", "caldo", "canja"]],
      ["Marshmallows", 5, ["doces", "sobremesa"]],
      ["Fruta", 3, ["maçã", "banana", "fruit"]],
    ], ["campo", "comida"]),

    bq("ca08", "Nomeia algo que pode correr mal num acampamento.", [
      ["Chuva", 30, ["rain", "temporal", "tempestade", "mau tempo"]],
      ["Insetos", 22, ["mosquitos", "bug", "abelha", "bicho"]],
      ["Perder-se", 18, ["lost", "perder", "desorientar"]],
      ["Tenda a furar", 12, ["leak", "furo", "tent broken"]],
      ["Comida a estragar", 10, ["food spoilt", "comida estragada"]],
      ["Doença", 6, ["ill", "doente", "fever", "febre"]],
      ["Fogo descontrolado", 2, ["fire", "fogo", "incêndio"]],
    ], ["campo"]),

    bq("ca09", "Nomeia um jogo de equipa que se joga ao ar livre.", [
      ["Futebol", 35, ["football", "soccer", "bola"]],
      ["Apanhada", 20, ["tag", "catch me", "correr"]],
      ["Cabo de guerra", 15, ["tug of war", "cabo", "corda"]],
      ["Escondidas", 12, ["hide and seek", "esconde-esconde"]],
      ["Andebol", 10, ["handball", "handebol"]],
      ["Queimado", 5, ["dodgeball", "bola queimada"]],
      ["Vólei", 3, ["volleyball", "voleibol"]],
    ], ["campo", "jogos"]),

    bq("ca10", "Nomeia algo que os participantes guardam como recordação do campo.", [
      ["Fotos", 35, ["fotografias", "photos", "selfies"]],
      ["Pulseiras", 25, ["bracelets", "pulseira", "friendship bracelet"]],
      ["Camisola do campo", 18, ["t-shirt", "camisola", "uniforme"]],
      ["Carta de um amigo", 10, ["carta", "letter", "mensagem"]],
      ["Pedra ou concha", 7, ["pedra", "concha", "nature souvenir"]],
      ["Caderno com assinaturas", 3, ["signatures", "caderno"]],
      ["Medalha", 2, ["medal", "premio", "prémio"]],
    ], ["campo"]),

    bq("ca11", "Nomeia um inseto chato no verão.", [
      ["Mosquito", 45, ["mosca", "mosquito", "zanzara"]],
      ["Vespa", 22, ["wasp", "abelha", "bee"]],
      ["Formiga", 15, ["ant", "formigas"]],
      ["Besouro", 8, ["beetle", "bicho"]],
      ["Barata", 6, ["cockroach", "barata"]],
      ["Aranha", 3, ["spider", "aranha"]],
      ["Carraça", 1, ["tick", "caraca"]],
    ], ["campo", "animais"]),

    bq("ca12", "Nomeia algo que se ouve na floresta à noite.", [
      ["Grilos", 35, ["cricket", "grilo", "inseto"]],
      ["Coruja", 25, ["owl", "mocho", "coruja"]],
      ["Vento nas árvores", 18, ["vento", "wind", "folhas"]],
      ["Riachos", 10, ["water", "ribeiro", "riacho"]],
      ["Animais a mexer", 8, ["animais", "barulhos", "rustling"]],
      ["Pássaros", 3, ["passaros", "birds", "piar"]],
      ["Trovão", 1, ["thunder", "tempestade"]],
    ], ["campo"]),

    bq("ca13", "Nomeia algo que faz falta do conforto de casa quando estás no campo.", [
      ["Cama confortável", 30, ["cama", "bed", "colchão macio"]],
      ["Duche quente", 25, ["banho", "shower", "água quente"]],
      ["Televisão", 18, ["tv", "netflix", "telemóvel"]],
      ["Comida caseira", 15, ["comida da mãe", "comida", "food"]],
      ["WiFi", 8, ["internet", "dados", "wifi"]],
      ["Quarto próprio", 3, ["quarto", "privacidade", "privacy"]],
      ["Ar condicionado", 1, ["ac", "ventilador", "frio"]],
    ], ["campo"]),

    bq("ca14", "Nomeia algo divertido para fazer num dia de chuva no campo.", [
      ["Jogos de tabuleiro", 28, ["board games", "jogos", "xadrez"]],
      ["Contar histórias", 22, ["historias", "histórias", "storytelling"]],
      ["Filmes", 18, ["cinema", "movies", "projetor"]],
      ["Artesanato", 15, ["crafts", "pintura", "desenho"]],
      ["Cantar", 10, ["canções", "música", "music"]],
      ["Ler", 5, ["livro", "book", "reading"]],
      ["Dormir", 2, ["soneca", "nap", "descansar"]],
    ], ["campo"]),

    bq("ca15", "Nomeia o que os participantes adoram no último dia do campo.", [
      ["Gala / Festa final", 28, ["gala", "festa", "cerimónia", "party"]],
      ["Prémios e medalhas", 22, ["premios", "prémios", "medals", "troféu"]],
      ["Fotos com toda a gente", 18, ["fotos", "selfies", "grupo"]],
      ["Despedidas emocionantes", 15, ["despedida", "adeus", "goodbye"]],
      ["Discurso dos monitores", 8, ["discurso", "speech", "palavras"]],
      ["Fogueira final", 6, ["fogueira", "bonfire"]],
      ["Certificados", 3, ["certificado", "diploma", "certificate"]],
    ], ["campo"]),

    bq("ca16", "Nomeia algo que um bom monitor tem sempre consigo.", [
      ["Apito", 32, ["apito", "whistle", "sinal"]],
      ["Kit de primeiros socorros", 25, ["primeiros socorros", "first aid", "pensos"]],
      ["Telemóvel", 18, ["phone", "telemovel", "contacto"]],
      ["Mapa", 12, ["map", "bussola", "orientação"]],
      ["Energia e boa disposição", 8, ["motivação", "energia", "sorriso"]],
      ["Canivete", 3, ["penknife", "faca", "knife"]],
      ["Lista dos participantes", 2, ["lista", "names", "registos"]],
    ], ["campo", "monitores"]),

    bq("ca17", "Nomeia uma coisa que os miúdos fazem no primeiro dia de campo.", [
      ["Conhecer novos amigos", 30, ["amigos", "friends", "conhecer pessoas"]],
      ["Explorar o espaço", 22, ["explorar", "exploração", "reconhecer"]],
      ["Instalar a tenda", 18, ["tenda", "acampar", "tent"]],
      ["Atividade de boas-vindas", 15, ["icebreaker", "boas vindas", "welcome"]],
      ["Chorar de saudades", 8, ["saudades", "choro", "casa"]],
      ["Regras do campo", 5, ["regras", "rules", "regulamento"]],
      ["Escolher o grupo", 2, ["grupo", "equipa", "team"]],
    ], ["campo"]),

    bq("ca18", "Nomeia uma competência que se aprende num campo de escutismo.", [
      ["Fazer nós", 30, ["nos", "nós", "knots", "corda"]],
      ["Orientação", 22, ["mapa", "bussola", "compass", "orienteering"]],
      ["Primeiros socorros", 18, ["first aid", "socorros", "pensos"]],
      ["Acender fogo", 15, ["fire", "fosforos", "isqueiro", "fogo"]],
      ["Montagem de tenda", 8, ["tenda", "tent", "campismo"]],
      ["Cozinhar ao ar livre", 5, ["cooking", "cozinhar", "fogueira"]],
      ["Rastrear animais", 2, ["tracking", "rastrear", "pistas"]],
    ], ["campo", "escutismo"]),

    bq("ca19", "Nomeia algo que os miúdos fazem quando chegam a casa do campo.", [
      ["Dormir muito", 35, ["dormir", "sleep", "cama"]],
      ["Abraçar a família", 25, ["abraço", "familia", "família", "mãe"]],
      ["Tomar banho", 18, ["banho", "duche", "shower"]],
      ["Comer comida caseira", 12, ["comida", "food", "jantar"]],
      ["Contar histórias", 7, ["historias", "contar", "falar do campo"]],
      ["Ligar o telemóvel", 2, ["telemovel", "phone", "redes sociais"]],
      ["Chorar de saudades do campo", 1, ["saudades", "amigos", "campo"]],
    ], ["campo"]),

    bq("ca20", "Nomeia uma razão pela qual o campo de verão é especial.", [
      ["Novos amigos", 35, ["amigos", "amizades", "friends", "friendships"]],
      ["Independência", 20, ["independencia", "independência", "liberdade"]],
      ["Aventura", 18, ["aventura", "adventure", "exploração"]],
      ["Experiências únicas", 12, ["experiencias", "experiências", "moments"]],
      ["Aprender coisas novas", 8, ["aprender", "learning", "descobertas"]],
      ["Diversão constante", 5, ["diversão", "fun", "divertimento"]],
      ["Afastar dos ecrãs", 2, ["sem telemóvel", "natureza", "offline"]],
    ], ["campo"]),
  ],
};

// ─── Pack C: Escola / Turma ────────────────────────────────────────────────────

const packSchool: QuestionPack = {
  id: "pack-school",
  name: "Escola e Turma",
  description: "Perguntas sobre a vida escolar, professores, intervalos e TPC.",
  questions: [
    bq("sc01", "Nomeia uma disciplina escolar que os alunos adoram.", [
      ["Educação Física", 35, ["EF", "ginástica", "desporto", "ginastica"]],
      ["Artes", 22, ["desenho", "arts", "EVT", "educação artística"]],
      ["Matemática", 18, ["math", "algebra", "calculo", "cálculo"]],
      ["Inglês", 12, ["english", "lingua estrangeira", "língua estrangeira"]],
      ["História", 8, ["history", "historia"]],
      ["Ciências", 3, ["science", "biology", "biologia"]],
      ["Informática", 2, ["TIC", "computadores", "technology"]],
    ], ["escola"]),

    bq("sc02", "Nomeia algo que os professores dizem muito vezes em aula.", [
      ["Silêncio!", 30, ["silencio", "calam-se", "calados", "quiet"]],
      ["Abram o livro", 22, ["livro", "abrir o livro", "pagina"]],
      ["Façam os TPC", 18, ["tpc", "trabalhos de casa", "homework"]],
      ["Prestem atenção", 15, ["atencao", "atenção", "focus"]],
      ["Sentem-se", 8, ["sentado", "senta", "sit down"]],
      ["Não há teste", 5, ["teste", "avaliação", "exam"]],
      ["Muito bem!", 2, ["bravo", "parabens", "parabéns", "well done"]],
    ], ["escola", "professores"]),

    bq("sc03", "Nomeia o que os alunos fazem quando o professor sai da sala.", [
      ["Falar muito alto", 32, ["barulho", "gritar", "falar", "noise"]],
      ["Usar o telemóvel", 25, ["telemovel", "phone", "instagram"]],
      ["Levantar-se", 18, ["andar", "passear", "move around"]],
      ["Copiar o TPC de alguém", 12, ["copiar", "copy", "cola"]],
      ["Comer", 8, ["comer", "petiscar", "snacks"]],
      ["Jogar papeis", 3, ["papeis", "bolinhas de papel", "spitball"]],
      ["Sair da sala", 2, ["sair", "corredor", "escapar"]],
    ], ["escola", "alunos"]),

    bq("sc04", "Nomeia algo que sempre encontras numa mochila de escola.", [
      ["Livros", 30, ["livro", "books", "manual"]],
      ["Estojo", 22, ["pencil case", "canetas", "lápis"]],
      ["Caderno", 18, ["cadernos", "notebook", "bloco"]],
      ["Lanche", 15, ["lanche", "snack", "comida"]],
      ["Telemóvel", 10, ["phone", "telemovel", "móvel"]],
      ["Garrafinha de água", 3, ["agua", "cantil", "garrafinha"]],
      ["Calculadora", 2, ["calc", "maquina de calcular"]],
    ], ["escola"]),

    bq("sc05", "Nomeia o que os alunos fazem no intervalo.", [
      ["Correr e brincar", 28, ["brincar", "correr", "play"]],
      ["Comer o lanche", 22, ["lanche", "snack", "comer"]],
      ["Falar com amigos", 18, ["conversar", "amigos", "chat"]],
      ["Usar o telemóvel", 15, ["phone", "telemovel", "instagram"]],
      ["Jogar à bola", 10, ["futebol", "football", "bola"]],
      ["Ir à casa de banho", 4, ["wc", "toilet", "casa de banho"]],
      ["Namorar", 3, ["namorar", "boyfriend", "girlfriend"]],
    ], ["escola"]),

    bq("sc06", "Nomeia uma desculpa para não ter feito os TPC.", [
      ["Esqueci-me", 30, ["esqueci", "forgot", "nao me lembrei"]],
      ["Não percebi a matéria", 22, ["nao percebi", "não percebi", "confuso"]],
      ["Faltei à aula", 18, ["falta", "absent", "doença"]],
      ["O meu cão comeu", 15, ["cão", "dog ate", "cachorro comeu"]],
      ["Não tinha tempo", 12, ["sem tempo", "ocupado", "atividades"]],
      ["A minha mãe ficou doente", 2, ["mãe doente", "familia", "família"]],
      ["Não havia internet", 1, ["sem internet", "wifi", "computador"]],
    ], ["escola", "humor"]),

    bq("sc07", "Nomeia algo que os alunos odeiam na escola.", [
      ["Testes e exames", 35, ["testes", "exames", "avaliações", "tests"]],
      ["Acordar cedo", 25, ["acordar", "cedo", "manhã", "manha"]],
      ["TPC", 18, ["trabalhos de casa", "homework", "tpc"]],
      ["Apresentações orais", 10, ["oral", "apresentação", "apresentacao"]],
      ["Professores chatos", 7, ["professor mau", "professor chato"]],
      ["Cantina da escola", 3, ["cantina", "comida", "cafetaria"]],
      ["Limpeza da sala", 2, ["limpeza", "arrumar", "clean up"]],
    ], ["escola"]),

    bq("sc08", "Nomeia algo que acontece no primeiro dia de aulas.", [
      ["Conhecer professores novos", 28, ["professores", "teachers", "novo professor"]],
      ["Reencontrar amigos", 22, ["amigos", "friends", "reencontro"]],
      ["Lista de material", 18, ["material", "lista", "material escolar"]],
      ["Nervosismo", 15, ["nervoso", "ansiedade", "nervos"]],
      ["Nova turma", 10, ["turma", "class", "colegas novos"]],
      ["Horário", 5, ["horario", "timetable", "schedule"]],
      ["Roupa nova", 2, ["roupa nova", "farda", "uniforme"]],
    ], ["escola"]),

    bq("sc09", "Nomeia algo que os professores escrevem nos testes.", [
      ["Boa sorte", 28, ["boa sorte", "good luck", "sorte"]],
      ["Muito bem!", 22, ["very good", "bravo", "excelente"]],
      ["Tens de melhorar", 18, ["melhorar", "improve", "trabalhar mais"]],
      ["Erro de português", 12, ["erro ortográfico", "ortografia", "spelling"]],
      ["Nome e data", 10, ["nome", "data", "identificação"]],
      ["Repete o exercício", 6, ["repete", "refaz", "redo"]],
      ["Ver com encarregado", 4, ["encarregado", "parente", "parent"]],
    ], ["escola", "professores"]),

    bq("sc10", "Nomeia algo que os alunos partilham entre si na escola.", [
      ["Respostas do teste", 28, ["respostas", "answers", "cola"]],
      ["Lanche", 22, ["comida", "snacks", "lanche"]],
      ["Música no telemóvel", 18, ["musica", "música", "auscultadores"]],
      ["Segredos", 14, ["segredo", "secrets", "fofoca"]],
      ["Caneta ou lápis", 10, ["caneta", "pen", "material"]],
      ["Fotos", 6, ["fotos", "photos", "memes"]],
      ["Carregador", 2, ["carregador", "charger", "bateria"]],
    ], ["escola"]),

    bq("sc11", "Nomeia o que os alunos adoram mas os professores odeiam.", [
      ["Telemóvel na aula", 35, ["phone", "telemovel", "mobile"]],
      ["Conversar durante a aula", 25, ["conversa", "falar", "barulho"]],
      ["Dormir na aula", 18, ["dormir", "sleep", "soneca"]],
      ["Chegar atrasado", 12, ["atrasar", "late", "tarde"]],
      ["Cola nos testes", 7, ["cola", "copiar", "cheat"]],
      ["Barulho no corredor", 2, ["barulho", "corredor", "noise"]],
      ["Comer em aula", 1, ["comer", "snacks", "eating"]],
    ], ["escola", "humor"]),

    bq("sc12", "Nomeia um lugar favorito dentro da escola.", [
      ["Campo de futebol", 28, ["campo", "futebol", "football field"]],
      ["Bar da escola", 22, ["bar", "cantina", "cafetaria"]],
      ["Biblioteca", 18, ["biblioteca", "library", "livros"]],
      ["Casa de banho", 12, ["wc", "toilet", "banheiro"]],
      ["Sala de informática", 10, ["computadores", "TIC", "lab"]],
      ["Ginásio", 7, ["gym", "ginasio", "gimnosio", "desporto"]],
      ["Corredor dos cacifos", 3, ["cacifos", "locker", "corredor"]],
    ], ["escola"]),

    bq("sc13", "Nomeia uma disciplina considerada difícil.", [
      ["Matemática", 38, ["math", "algebra", "cálculo", "calculus"]],
      ["Física", 22, ["fisica", "physics", "ciências"]],
      ["Química", 18, ["quimica", "chemistry"]],
      ["Português", 10, ["português", "lingua portuguesa", "grammar"]],
      ["Inglês", 7, ["english", "inglês", "língua estrangeira"]],
      ["História", 3, ["historia", "history"]],
      ["Filosofia", 2, ["philo", "filosofia", "filosofy"]],
    ], ["escola"]),

    bq("sc14", "Nomeia algo que indica que as férias chegaram.", [
      ["Último dia de aulas", 30, ["último dia", "ultimo dia", "last day"]],
      ["Mochila mais leve", 22, ["mochila", "sem livros", "vazia"]],
      ["Não há TPC", 18, ["sem tpc", "no homework", "férias"]],
      ["Roupas de verão", 12, ["verão", "shorts", "fato de banho"]],
      ["Levantar tarde", 10, ["dormir", "acordar tarde", "sleeping in"]],
      ["Entrega das notas", 5, ["notas", "pauta", "resultados"]],
      ["Praia e piscina", 3, ["praia", "piscina", "sol"]],
    ], ["escola"]),

    bq("sc15", "Nomeia o que as turmas fazem no último dia de aulas.", [
      ["Assinatura em camisola", 28, ["camisola", "assinar", "autografos"]],
      ["Festa na turma", 22, ["festa", "party", "celebração"]],
      ["Choro e despedida", 18, ["choro", "despedida", "adeus"]],
      ["Fotos de grupo", 15, ["fotos", "grupo", "selfie"]],
      ["Não fazer nada", 10, ["descansar", "relaxar", "free time"]],
      ["Oferecer presentes ao professor", 5, ["presente", "professor", "gift"]],
      ["Troca de números", 2, ["numeros", "contactos", "contacts"]],
    ], ["escola"]),

    bq("sc16", "Nomeia algo que se come na cantina da escola.", [
      ["Sopa", 30, ["caldo", "soup", "caldo verde"]],
      ["Frango", 22, ["chicken", "frango assado", "prato do dia"]],
      ["Massa", 18, ["spaghetti", "esparguete", "pasta"]],
      ["Arroz", 14, ["rice", "arroz branco"]],
      ["Peixe", 10, ["fish", "bacalhau", "pescada"]],
      ["Fruta", 4, ["fruta", "fruit", "sobremesa"]],
      ["Gelado", 2, ["icecream", "gelado", "sobremesa"]],
    ], ["escola", "comida"]),

    bq("sc17", "Nomeia o que um aluno faz quando não sabe a resposta numa pergunta oral.", [
      ["Diz que não sabe", 28, ["nao sei", "não sei", "don't know"]],
      ["Fica em silêncio", 22, ["silêncio", "silencio", "quiet"]],
      ["Improvisa", 18, ["inventar", "improvise", "tentar"]],
      ["Pede ajuda ao colega", 15, ["colega", "amigo", "friend"]],
      ["Fica nervoso e gagueja", 12, ["nervoso", "gaguejar", "stutter"]],
      ["Faz cara de parvo", 3, ["cara de parvo", "expressão", "face"]],
      ["Ri-se", 2, ["rir", "laugh", "gargalhar"]],
    ], ["escola", "humor"]),

    bq("sc18", "Nomeia algo que as pessoas fazem numa visita de estudo.", [
      ["Tirar fotos", 30, ["fotos", "photos", "selfie"]],
      ["Fazer grupo com amigos", 22, ["grupo", "amigos", "friends"]],
      ["Perder-se do grupo", 18, ["perder", "desorientar", "lost"]],
      ["Aprender coisas novas", 14, ["aprender", "learning", "educação"]],
      ["Comer no autocarro", 10, ["comer", "autocarro", "snacks"]],
      ["Comprar souvenirs", 4, ["lembranças", "souvenirs", "recordação"]],
      ["Dormir no autocarro", 2, ["dormir", "autocarro", "sleeping"]],
    ], ["escola"]),

    bq("sc19", "Nomeia um comportamento que chateia o professor.", [
      ["Falar na aula", 30, ["conversa", "falar", "barulho", "noise"]],
      ["Usar o telemóvel", 25, ["telemovel", "phone", "mobile"]],
      ["Não fazer TPC", 18, ["tpc", "homework", "trabalhos de casa"]],
      ["Chegar atrasado", 14, ["atrasar", "tarde", "late"]],
      ["Não prestar atenção", 8, ["atencao", "atenção", "distracted"]],
      ["Responder mal", 3, ["responder mal", "rude", "atrevido"]],
      ["Adormecer", 2, ["dormir", "sleep", "soneca"]],
    ], ["escola", "professores"]),

    bq("sc20", "Nomeia o que os colegas fazem quando alguém tem aniversário na escola.", [
      ["Cantam os Parabéns", 40, ["parabens", "parabéns", "happy birthday", "cantar"]],
      ["Dão abraços", 25, ["abraço", "hug", "abracar"]],
      ["Oferecem doces", 18, ["doces", "bolo", "sweets", "bolachas"]],
      ["Escrevem na camisola", 8, ["camisola", "mensagem", "escrever"]],
      ["Mandam mensagem", 6, ["mensagem", "whatsapp", "sms"]],
      ["Atiram ao ar", 2, ["atirar ao ar", "festejo", "celebração"]],
      ["Ignoram", 1, ["ignorar", "ignore", "esquecer"]],
    ], ["escola"]),
  ],
};

// ─── Pack D: Amigos e Festas ───────────────────────────────────────────────────

const packParty: QuestionPack = {
  id: "pack-party",
  name: "Amigos e Festas",
  description: "Perguntas divertidas sobre amigos, festas e saídas. Para todos os públicos.",
  questions: [
    bq("pa01", "Nomeia algo que não pode faltar numa festa.", [
      ["Música", 30, ["musica", "música", "dj", "playlist"]],
      ["Comida", 25, ["snacks", "petiscos", "buffet", "bolo"]],
      ["Bebidas", 18, ["drinks", "sumo", "refrigerantes"]],
      ["Amigos", 14, ["amigos", "friends", "convidados"]],
      ["Decoração", 8, ["decoração", "baloes", "balloons"]],
      ["Bolo de aniversário", 3, ["bolo", "cake", "velas"]],
      ["Fotografias", 2, ["fotos", "selfies", "camera"]],
    ], ["festas", "amigos"]),

    bq("pa02", "Nomeia o que as pessoas fazem numa festa.", [
      ["Dançar", 30, ["dancar", "dançar", "dance", "bailar"]],
      ["Conversar", 22, ["falar", "conversa", "chat"]],
      ["Comer e beber", 18, ["comer", "beber", "petiscar"]],
      ["Tirar fotos", 14, ["fotos", "selfies", "photos"]],
      ["Jogar jogos", 10, ["jogos", "games", "atividades"]],
      ["Cantar", 4, ["karaoke", "cantar", "sing"]],
      ["Namorar", 2, ["namorar", "romance", "flirting"]],
    ], ["festas"]),

    bq("pa03", "Nomeia algo que podes oferecer num aniversário.", [
      ["Dinheiro", 28, ["money", "notas", "cash", "nota"]],
      ["Roupa", 22, ["t-shirt", "roupa", "clothes"]],
      ["Tecnologia", 18, ["telemóvel", "phone", "gadget", "earphones"]],
      ["Livro", 12, ["book", "livro", "leitura"]],
      ["Vale de experiência", 10, ["experiência", "vale", "voucher"]],
      ["Perfume", 7, ["perfume", "colonia", "fragrance"]],
      ["Voucher", 3, ["gift card", "cartão", "voucher"]],
    ], ["festas", "amigos"]),

    bq("pa04", "Nomeia uma coisa que os amigos fazem juntos.", [
      ["Ver filmes", 25, ["filmes", "netflix", "cinema", "séries"]],
      ["Jogar videojogos", 20, ["jogos", "games", "PlayStation", "Xbox"]],
      ["Sair para comer", 18, ["restaurante", "comer fora", "pizza", "jantar"]],
      ["Ir ao shopping", 14, ["compras", "shopping", "centro comercial"]],
      ["Desporto", 12, ["futebol", "ginásio", "sport"]],
      ["Passear", 7, ["passeio", "walk", "andar"]],
      ["Conversar", 4, ["conversa", "chat", "falar"]],
    ], ["amigos"]),

    bq("pa05", "Nomeia algo que pode correr mal numa festa.", [
      ["Música para", 22, ["musica pára", "sistema de som", "som"]],
      ["Briga entre convidados", 18, ["briga", "confusão", "fight"]],
      ["Acabar a comida", 15, ["sem comida", "food runs out"]],
      ["Cancelamento de última hora", 14, ["cancelar", "cancel", "anulação"]],
      ["Chegada de uninvited guests", 12, ["intrusos", "convidados extras", "crashers"]],
      ["Chuva numa festa ao ar livre", 10, ["chuva", "mau tempo", "rain"]],
      ["O aniversariante não aparece", 9, ["aniversariante", "atrasado"]],
    ], ["festas"]),

    bq("pa06", "Nomeia uma comida popular numa festa.", [
      ["Pizza", 30, ["pizzas", "pizza party"]],
      ["Nachos e guacamole", 18, ["nachos", "chips", "guacamole"]],
      ["Pastéis / salgados", 16, ["salgados", "pasteis", "empadas"]],
      ["Hambúrgueres", 14, ["burgers", "hamburguer"]],
      ["Frango assado", 12, ["frango", "chicken", "churrasco"]],
      ["Bolo de aniversário", 7, ["bolo", "cake", "pastelaria"]],
      ["Frutas e dips", 3, ["frutas", "salada de frutas", "fruit"]],
    ], ["festas", "comida"]),

    bq("pa07", "Nomeia algo divertido para fazer numa noite de sexta-feira.", [
      ["Ver uma série", 28, ["netflix", "series", "séries", "streaming"]],
      ["Sair com amigos", 22, ["sair", "bares", "amigos", "night out"]],
      ["Jogar videojogos", 18, ["jogos", "gaming", "PlayStation"]],
      ["Jantar fora", 14, ["restaurante", "pizza", "jantar"]],
      ["Festa em casa", 10, ["festa", "party", "casa"]],
      ["Ir ao cinema", 6, ["cinema", "filme", "movie"]],
      ["Dormir", 2, ["dormir", "cama", "descansar"]],
    ], ["amigos", "lazer"]),

    bq("pa08", "Nomeia um tipo de festa popular.", [
      ["Aniversário", 35, ["birthday", "aniversario", "anos"]],
      ["Festa de Natal", 22, ["natal", "christmas", "festas de natal"]],
      ["Despedida de solteiro/a", 15, ["despedida", "stag", "hen party"]],
      ["Festa de formatura", 12, ["formatura", "prom", "baile"]],
      ["Festa de réveillon", 8, ["reveillon", "ano novo", "new year"]],
      ["Festa surpresa", 5, ["surpresa", "surprise party"]],
      ["Casamento", 3, ["wedding", "casamento", "recepcao"]],
    ], ["festas"]),

    bq("pa09", "Nomeia algo que as pessoas esquecem de trazer para uma festa.", [
      ["Presente", 30, ["prenda", "gift", "prendinha"]],
      ["Dinheiro", 22, ["money", "carteira", "wallet"]],
      ["Telemóvel carregado", 18, ["telemovel", "bateria", "charger"]],
      ["Chave de casa", 14, ["chave", "key", "trouxas"]],
      ["Roupa adequada", 10, ["roupa", "roupas", "traje"]],
      ["Convite ou morada", 4, ["convite", "morada", "address"]],
      ["Óculos de sol", 2, ["oculos", "óculos", "sunglasses"]],
    ], ["festas", "humor"]),

    bq("pa10", "Nomeia um sinal de que a festa foi boa.", [
      ["Toda a gente ficou até tarde", 28, ["tarde", "até tarde", "madrugada"]],
      ["Toda a comida acabou", 22, ["sem comida", "comida acabou"]],
      ["Toda a gente dançou", 18, ["dança", "danças", "pista cheia"]],
      ["Fotos incríveis", 14, ["fotos", "memories", "recordações"]],
      ["As pessoas não queriam ir embora", 10, ["ficaram", "relutantes", "no one left"]],
      ["Música até ao fim", 5, ["música", "som", "playlist"]],
      ["Houve gargalhadas", 3, ["risos", "gargalhadas", "laughter"]],
    ], ["festas"]),

    bq("pa11", "Nomeia um tipo de amigo que toda a gente tem.", [
      ["O amigo engraçado", 28, ["engraçado", "funny", "palhaço"]],
      ["O amigo que chega sempre atrasado", 22, ["atrasado", "late", "sem hora"]],
      ["O amigo que come tudo", 18, ["come tudo", "comilão", "hungry"]],
      ["O amigo super organizado", 14, ["organizado", "planner", "schedules"]],
      ["O amigo drama queen", 10, ["drama", "exagerado", "dramatic"]],
      ["O amigo que sabe tudo", 5, ["sabe-tudo", "nerd", "inteligente"]],
      ["O amigo corajoso", 3, ["corajoso", "brave", "aventureiro"]],
    ], ["amigos", "humor"]),

    bq("pa12", "Nomeia algo que os amigos partilham.", [
      ["Segredos", 28, ["segredo", "secrets", "confidencias"]],
      ["Comida", 22, ["snacks", "comida", "lanche"]],
      ["Roupas", 18, ["roupa", "clothes", "shirts"]],
      ["Músicas e playlists", 14, ["musica", "playlist", "spotify"]],
      ["Piadas e memes", 10, ["piadas", "memes", "humor"]],
      ["Dinheiro", 5, ["money", "paga", "ajuda"]],
      ["Carregador do telemóvel", 3, ["carregador", "charger", "bateria"]],
    ], ["amigos"]),

    bq("pa13", "Nomeia o que fazes quando um amigo está triste.", [
      ["Ouvir", 30, ["ouvir", "listen", "escutar"]],
      ["Dar um abraço", 22, ["abraço", "hug", "abracar"]],
      ["Convidar para sair", 18, ["sair", "distrair", "distracão"]],
      ["Dar conselhos", 14, ["conselho", "advice", "conversar"]],
      ["Levar comida", 10, ["comida", "gelado", "chocolate"]],
      ["Mandar mensagem", 4, ["mensagem", "whatsapp", "sms"]],
      ["Fazer rir", 2, ["piadas", "rir", "humor"]],
    ], ["amigos"]),

    bq("pa14", "Nomeia o que se faz numa festa de aniversário.", [
      ["Cantar os parabéns", 35, ["parabens", "parabéns", "happy birthday"]],
      ["Apagar as velas", 25, ["velas", "candles", "bolo"]],
      ["Oferecer prendas", 18, ["presentes", "prendas", "gifts"]],
      ["Comer bolo", 12, ["bolo", "cake"]],
      ["Tirar fotos", 7, ["fotos", "selfie", "camera"]],
      ["Dançar", 2, ["dança", "dancar", "music"]],
      ["Fazer discurso", 1, ["discurso", "speech", "toast"]],
    ], ["festas"]),

    bq("pa15", "Nomeia algo que as pessoas fazem depois de uma grande festa.", [
      ["Dormir muito", 35, ["dormir", "sleep", "cama", "descansar"]],
      ["Limpar a casa", 22, ["limpar", "arrumação", "tidy up"]],
      ["Rever as fotos", 18, ["fotos", "photos", "memories"]],
      ["Contar como foi", 14, ["contar", "stories", "falar"]],
      ["Descansar no sofá", 8, ["sofá", "sofa", "relaxar"]],
      ["Beber água / recuperar", 2, ["agua", "água", "recuperar"]],
      ["Responder às mensagens", 1, ["mensagens", "whatsapp", "phone"]],
    ], ["festas"]),

    bq("pa16", "Nomeia o que fazer quando alguém está a fazer anos e não tens presente.", [
      ["Fingir que esqueceste", 28, ["esqueci", "forgot", "fingir"]],
      ["Prometer dar mais tarde", 22, ["promessa", "promise", "depois"]],
      ["Dar dinheiro", 18, ["dinheiro", "money", "cash"]],
      ["Fazer algo à mão", 14, ["artesanato", "handmade", "feito à mão"]],
      ["Jantar a dois", 12, ["jantar", "saída", "dinner"]],
      ["Desculpar-se muito", 4, ["desculpa", "sorry", "pedir desculpa"]],
      ["Comprar de última hora", 2, ["último minuto", "apressado", "last minute"]],
    ], ["festas", "humor"]),

    bq("pa17", "Nomeia o que o melhor amigo sabe sobre ti.", [
      ["Os teus segredos", 32, ["segredos", "secrets"]],
      ["As tuas falhas", 22, ["falhas", "defeitos", "fraquezas"]],
      ["O que te faz rir", 18, ["rir", "humor", "piadas"]],
      ["Os teus gostos", 14, ["gostos", "preferências", "favorites"]],
      ["As tuas crises passadas", 8, ["crises", "histórias", "past"]],
      ["A tua palavra-passe", 4, ["password", "segredo", "pin"]],
      ["Quando estás mal", 2, ["tristeza", "humor", "moods"]],
    ], ["amigos"]),

    bq("pa18", "Nomeia um jogo de grupo para uma festa.", [
      ["Verdade ou Consequência", 28, ["verdade ou consequência", "truth or dare"]],
      ["Pictionary", 22, ["desenho", "drawing", "pictionary"]],
      ["Quem sou eu", 18, ["quem sou eu", "who am i", "testa"]],
      ["Karaoke", 15, ["karaoke", "karaokê", "cantar"]],
      ["Among Us / jogos digitais", 10, ["among us", "digital games", "app"]],
      ["Mímica", 5, ["mimica", "charades", "acinar"]],
      ["Uno ou cartas", 2, ["uno", "cartas", "baralho"]],
    ], ["festas", "jogos"]),

    bq("pa19", "Nomeia o que os amigos fazem quando se reencontram depois de muito tempo.", [
      ["Abraço grande", 32, ["abraço", "hug", "abraçar"]],
      ["Conversa longa", 22, ["conversa", "falar", "atualizar"]],
      ["Tirar selfies", 18, ["fotos", "selfies", "camera"]],
      ["Ir a um restaurante", 14, ["comer", "jantar", "restaurante"]],
      ["Contar as novidades", 10, ["novidades", "news", "update"]],
      ["Rir das velhas histórias", 3, ["historias", "rir", "memories"]],
      ["Chorar", 1, ["chorar", "lágrimas", "emoção"]],
    ], ["amigos"]),

    bq("pa20", "Nomeia algo que as pessoas fazem para animar um amigo.", [
      ["Dar um abraço", 30, ["abraço", "hug", "conforto"]],
      ["Fazer rir", 22, ["rir", "piadas", "humor", "jokes"]],
      ["Convidar para sair", 18, ["sair", "atividade", "distrair"]],
      ["Dar conselhos", 14, ["conselho", "advice"]],
      ["Enviar mensagem carinhosa", 10, ["mensagem", "whatsapp", "texto"]],
      ["Levar surpresa", 4, ["surpresa", "presente", "surprise"]],
      ["Ouvir e apoiar", 2, ["ouvir", "apoiar", "support"]],
    ], ["amigos"]),
  ],
};

// ─── Pack E: Cultura Portuguesa ───────────────────────────────────────────────

const packPortugal: QuestionPack = {
  id: "pack-portugal",
  name: "Cultura Portuguesa",
  description: "Perguntas sobre Portugal: comida, futebol, cidades, tradições e identidade.",
  questions: [
    bq("pt01", "Nomeia uma comida típica portuguesa.", [
      ["Bacalhau", 35, ["bacalhau à brás", "bacalhau com natas", "cod"]],
      ["Pastel de Nata", 25, ["pastel de belem", "nata", "custard tart"]],
      ["Caldo verde", 15, ["caldo", "sopa", "green soup"]],
      ["Francesinha", 10, ["francesinha", "sandwich porto"]],
      ["Sardinhas", 8, ["sardinha", "sardines", "grelhadas"]],
      ["Arroz de pato", 5, ["arroz de pato", "duck rice"]],
      ["Alheira", 2, ["alheira", "sausage", "linguiça"]],
    ], ["portugal", "comida"]),

    bq("pt02", "Nomeia um clube de futebol português.", [
      ["Benfica", 38, ["SLB", "sport lisboa benfica", "águias"]],
      ["Porto", 28, ["FCP", "futebol clube do porto", "dragões"]],
      ["Sporting", 20, ["SCP", "sporting cp", "leões"]],
      ["Braga", 6, ["SC Braga", "guerreiros do minho"]],
      ["Vitória de Guimarães", 4, ["vitoria", "vitória", "conquistadores"]],
      ["Belenenses", 2, ["belenenses", "os belenenses"]],
      ["Rio Ave", 2, ["rio ave", "vila do conde"]],
    ], ["portugal", "futebol", "desporto"]),

    bq("pt03", "Nomeia uma cidade portuguesa famosa.", [
      ["Lisboa", 40, ["lisbon", "lisbonne", "capital"]],
      ["Porto", 28, ["oporto", "porto city"]],
      ["Coimbra", 12, ["coimbra", "universidade"]],
      ["Faro", 8, ["algarve", "faro"]],
      ["Braga", 6, ["braga", "cidade dos arcades"]],
      ["Évora", 4, ["evora", "alentejo"]],
      ["Sintra", 2, ["sintra", "palácio", "pena"]],
    ], ["portugal", "geografia"]),

    bq("pt04", "Nomeia algo que os portugueses adoram.", [
      ["Futebol", 30, ["football", "bola", "soccer"]],
      ["Pastel de nata", 22, ["nata", "pastelaria", "doce"]],
      ["Fado", 18, ["fado", "musica", "alma"]],
      ["Praia", 14, ["mar", "beach", "sol"]],
      ["Café", 10, ["bica", "galão", "coffee", "espresso"]],
      ["Família", 4, ["familia", "family", "convivio"]],
      ["Vinho", 2, ["wine", "vinho verde", "vinho tinto"]],
    ], ["portugal"]),

    bq("pt05", "Nomeia uma praia portuguesa famosa.", [
      ["Praia da Nazaré", 22, ["nazaré", "nazare", "ondas grandes"]],
      ["Praia do Algarve", 20, ["algarve", "sagres", "lagos", "albufeira"]],
      ["Praia de Comporta", 16, ["comporta", "alentejo"]],
      ["Praia do Guincho", 14, ["guincho", "cascais", "estoril"]],
      ["Praia de Sesimbra", 12, ["sesimbra", "arrabida", "arrábida"]],
      ["Praia de Aveiro", 10, ["aveiro", "costa nova", "laguna"]],
      ["Praia das Maçãs", 6, ["macas", "sintra", "Colares"]],
    ], ["portugal", "verão"]),

    bq("pt06", "Nomeia algo que é muito português.", [
      ["Saudade", 30, ["saudades", "nostalgia", "longing"]],
      ["Bacalhau", 20, ["bacalhau", "cod", "peixe"]],
      ["Azulejos", 18, ["azulejo", "tiles", "arte decorativa"]],
      ["Fado", 14, ["fadista", "musica", "guitarra portuguesa"]],
      ["Galo de Barcelos", 8, ["galo", "barcelos", "rooster"]],
      ["Vinho do Porto", 6, ["porto wine", "vinho", "douro"]],
      ["Natas", 4, ["pasteis", "nata", "doce"]],
    ], ["portugal", "cultura"]),

    bq("pt07", "Nomeia um doce típico português.", [
      ["Pastel de Nata", 32, ["nata", "belem", "custard tart"]],
      ["Toucinho do céu", 15, ["toucinho", "alentejo", "doce conventual"]],
      ["Arroz doce", 14, ["arroz doce", "rice pudding"]],
      ["Ovos moles de Aveiro", 12, ["ovos moles", "aveiro", "doce"]],
      ["Queijada de Sintra", 11, ["queijada", "sintra", "travesseiro"]],
      ["Bolo de mel", 8, ["bolo mel", "madeira", "cake"]],
      ["Rabanada", 8, ["rabanada", "natal", "french toast", "fatia dourada"]],
    ], ["portugal", "comida", "doces"]),

    bq("pt08", "Nomeia um prato de peixe típico português.", [
      ["Bacalhau à Brás", 30, ["bacalhau bras", "bras"]],
      ["Sardinhas grelhadas", 25, ["sardinha", "sardines", "grelhada"]],
      ["Caldeirada", 18, ["caldeirada de peixe", "fish stew"]],
      ["Polvo à lagareiro", 12, ["polvo", "lagareiro", "octopus"]],
      ["Bacalhau com natas", 8, ["bacalhau natas", "gratinado"]],
      ["Amêijoas à Bulhão Pato", 5, ["amêijoas", "ameijoas", "clams"]],
      ["Açorda de marisco", 2, ["açorda", "açordasmarisco", "marisco"]],
    ], ["portugal", "comida", "peixe"]),

    bq("pt09", "Nomeia uma tradição ou festival português.", [
      ["Festas de Santo António", 25, ["santo antonio", "marcha", "Lisboa"]],
      ["Festa de São João", 22, ["sao joao", "são joão", "Porto", "festa"]],
      ["Carnaval de Torres Vedras", 14, ["carnaval", "carnival", "Torres Vedras"]],
      ["Feiras medievais", 12, ["feira medieval", "medieval", "mercado"]],
      ["Romarias", 10, ["romaria", "procissão", "religioso"]],
      ["Queima das Fitas", 9, ["queima", "coimbra", "fitas", "universidade"]],
      ["Ovos de Páscoa", 8, ["pascoa", "páscoa", "easter"]],
    ], ["portugal", "tradições"]),

    bq("pt10", "Nomeia uma expressão portuguesa muito usada.", [
      ["Saudade", 30, ["tenho saudades", "que saudade", "saudades"]],
      ["Desenrascanço", 20, ["desenrascar", "improvise", "dar um jeito"]],
      ["Vai mas é", 15, ["vai la", "vai mas é", "go away", "imperativo"]],
      ["Estás bom?", 12, ["ola", "tudo bem", "how are you"]],
      ["Se Deus quiser", 10, ["se deus quiser", "inshallah", "talvez"]],
      ["Olha", 8, ["olha", "look", "ei"]],
      ["Pá / Ó pá", 5, ["pa", "oh pa", "dude"]],
    ], ["portugal", "língua"]),

    bq("pt11", "Nomeia algo associado ao Fado.", [
      ["Guitarra portuguesa", 30, ["guitarra", "guitar portuguesa", "guitarra"]],
      ["Saudade", 22, ["saudades", "nostalgia", "melancolia"]],
      ["Amália Rodrigues", 18, ["amalia", "amália", "rainha do fado"]],
      ["Fadista", 14, ["cantor", "fadista", "singer"]],
      ["Casas de Fado", 10, ["adega", "casa de fado", "Lisboa"]],
      ["Viola baixo", 4, ["viola", "baixo", "bass guitar"]],
      ["Xaile preto", 2, ["xaile", "shawl", "preto"]],
    ], ["portugal", "fado", "música"]),

    bq("pt12", "Nomeia um produto português famoso no mundo.", [
      ["Vinho do Porto", 30, ["porto wine", "port wine", "douro"]],
      ["Pastel de Nata", 22, ["nata", "custard tart", "pasteis de belem"]],
      ["Cortiça", 18, ["cork", "sobreiro", "cork oak"]],
      ["Azulejos", 14, ["tiles", "azulejo", "blue tiles"]],
      ["Sal de Tavira", 8, ["sal", "flor de sal", "salt"]],
      ["Cristais da Marinha Grande", 6, ["cristal", "glass", "marinha grande"]],
      ["Conservas de peixe", 2, ["conservas", "latas de atum", "canned fish"]],
    ], ["portugal", "exportações"]),

    bq("pt13", "Nomeia o que os turistas adoram em Portugal.", [
      ["Praias", 30, ["beach", "praia", "algarve", "mar"]],
      ["Pastéis de nata", 22, ["nata", "pasteis", "custard tart"]],
      ["Clima / sol", 18, ["sol", "clima", "weather", "sun"]],
      ["Monumentos históricos", 12, ["monumentos", "castelos", "museus"]],
      ["Gente simpática", 10, ["simpaticos", "friendly", "pessoas"]],
      ["Fado", 5, ["fado", "musica", "música"]],
      ["Preço acessível", 3, ["baratos", "barato", "cheap", "price"]],
    ], ["portugal", "turismo"]),

    bq("pt14", "Nomeia uma cidade no interior de Portugal.", [
      ["Évora", 28, ["evora", "alentejo"]],
      ["Bragança", 20, ["braganca", "trás-os-montes"]],
      ["Guarda", 16, ["guarda", "beira interior"]],
      ["Castelo Branco", 14, ["castelo branco", "beira baixa"]],
      ["Beja", 12, ["beja", "baixo alentejo"]],
      ["Portalegre", 7, ["portalegre", "alto alentejo"]],
      ["Viseu", 3, ["viseu", "beiras"]],
    ], ["portugal", "geografia"]),

    bq("pt15", "Nomeia um símbolo de Portugal.", [
      ["Galo de Barcelos", 28, ["galo", "barcelos", "rooster"]],
      ["Bandeira portuguesa", 22, ["bandeira", "flag", "verde e vermelho"]],
      ["Torre de Belém", 18, ["torre belem", "belém", "lisbon monument"]],
      ["Cristo Rei", 12, ["cristo rei", "almada", "statue"]],
      ["Fado", 10, ["fado", "música", "musica"]],
      ["Pastel de nata", 7, ["nata", "pastel", "custard tart"]],
      ["Sardinha", 3, ["sardinha", "festas", "sardine"]],
    ], ["portugal", "cultura"]),

    bq("pt16", "Nomeia um português famoso na história.", [
      ["Vasco da Gama", 30, ["vasco gama", "navegador", "explorer"]],
      ["Fernando Pessoa", 22, ["pessoa", "poeta", "heterónimos"]],
      ["Cristiano Ronaldo", 18, ["CR7", "ronaldo", "futebolista"]],
      ["Luís de Camões", 14, ["camoes", "camões", "os lusíadas", "poeta"]],
      ["Amália Rodrigues", 10, ["amalia", "fado", "fadista"]],
      ["D. Afonso Henriques", 4, ["afonso henriques", "primeiro rei", "fundador"]],
      ["José Saramago", 2, ["saramago", "escritor", "nobel"]],
    ], ["portugal", "história"]),

    bq("pt17", "Nomeia algo que só podes encontrar em Portugal.", [
      ["Pastel de Nata original", 25, ["belem", "nata original", "pasteis de belem"]],
      ["Bacalhau à Gomes de Sá", 20, ["bacalhau gomes sa", "gomes de sa", "bacalhau"]],
      ["Fado genuíno", 18, ["fado", "musica portuguesa", "guitarra portuguesa"]],
      ["Galo de Barcelos", 14, ["galo", "barcelos", "rooster de barcelos"]],
      ["Vinho Verde", 12, ["vinho verde", "minho", "green wine"]],
      ["Queijo da Serra", 8, ["queijo da serra", "serra da estrela", "cheese"]],
      ["Tarte de Amêndoa Algarvia", 3, ["amendoa", "algarve", "tarte"]],
    ], ["portugal"]),

    bq("pt18", "Nomeia um vinho ou região vinícola portuguesa.", [
      ["Vinho do Porto", 30, ["porto", "port wine", "douro"]],
      ["Vinho Verde", 25, ["vinho verde", "minho"]],
      ["Alentejo", 18, ["vinho alentejo", "alentejo wine"]],
      ["Douro", 12, ["douro", "duriense"]],
      ["Dão", 8, ["dão", "dao", "beiras"]],
      ["Bairrada", 5, ["bairrada", "espumante"]],
      ["Madeira", 2, ["vinho madeira", "madeira wine"]],
    ], ["portugal", "vinho"]),

    bq("pt19", "Nomeia um jogador português famoso.", [
      ["Cristiano Ronaldo", 45, ["CR7", "ronaldo", "cristiano"]],
      ["Luís Figo", 20, ["figo", "luis figo"]],
      ["Eusébio", 14, ["eusebio", "pantera negra", "black panther"]],
      ["Rui Costa", 8, ["rui costa", "ac milan"]],
      ["Pepe", 6, ["pepe", "defesa"]],
      ["Nani", 4, ["nani", "manchester united"]],
      ["Bruno Fernandes", 3, ["bruno fernandes", "manchester united"]],
    ], ["portugal", "futebol"]),

    bq("pt20", "Nomeia algo que os portugueses comem ao pequeno-almoço.", [
      ["Torrada com manteiga", 28, ["torrada", "toast", "manteiga"]],
      ["Café / Bica", 25, ["cafe", "bica", "galao", "galão", "espresso"]],
      ["Pão com manteiga", 20, ["pao", "pão", "bread"]],
      ["Cereais", 12, ["cereais", "cornflakes", "muesli"]],
      ["Iogurte com fruta", 8, ["iogurte", "yogurt", "fruta"]],
      ["Sumo de laranja", 5, ["sumo", "suco", "orange juice"]],
      ["Ovos mexidos", 2, ["ovos", "eggs", "scrambled"]],
    ], ["portugal", "comida"]),
  ],
};

export const BUILTIN_PACKS: QuestionPack[] = [
  packClassic,
  packCamp,
  packSchool,
  packParty,
  packPortugal,
];
