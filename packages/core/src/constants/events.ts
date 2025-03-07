import { Event } from "../event";
import { Id } from "../shared";

const events: Event[] = [
  {
    id: Id.new(),
    alias: "event-fullstack",
    senha: "senha123",
    nome: "Event de Desenvolvimento Fullstack",
    data: new Date("2024-12-01T10:00:00Z"),
    local: "São Paulo, SP",
    descricao:
      "Um event completo para aprender desenvolvimento fullstack do zero.",
    imagem:
      "https://jaro-website.s3.ap-south-1.amazonaws.com/2024/04/0-cl7fc6pt1MHjIF4K.png",
    imagemBackground:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: Id.new(),
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 1,
      },
      {
        id: Id.new(),
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
      {
        id: Id.new(),
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 2,
      },
    ],
  },
  {
    id: Id.new(),
    alias: "event-js-avancado",
    senha: "js2024",
    nome: "Workshop Avançado de JavaScript",
    data: new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    descricao: "Um workshop avançado para programadores JavaScript.",
    imagem:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imagemBackground:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: Id.new(),
        nome: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
      {
        id: Id.new(),
        nome: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 1,
      },
    ],
  },
  {
    id: Id.new(),
    alias: "event-dev-frontend",
    senha: "front123",
    nome: "Bootcamp de Desenvolvimento Frontend",
    data: new Date("2024-11-15T09:00:00Z"),
    local: "Belo Horizonte, MG",
    descricao: "Aprenda a criar interfaces incríveis e responsivas.",
    imagem:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imagemBackground:
      "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    publicoEsperado: 150,
    convidados: [
      {
        id: Id.new(),
        nome: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 1,
      },
      {
        id: Id.new(),
        nome: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
      {
        id: Id.new(),
        nome: "Isabela Martins",
        email: "isabela@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
    ],
  },
  {
    id: Id.new(),
    alias: "casamento-alberto-marina",
    senha: "casamento2024",
    nome: "Casamento do Alberto e Marina",
    data: new Date("2024-11-25T16:00:00Z"),
    local: "Florianópolis, SC",
    descricao:
      "Celebração do casamento de Alberto e Marina com amigos e familiares.",
    imagem:
      "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imagemBackground:
      "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    publicoEsperado: 150,
    convidados: [
      {
        id: Id.new(),
        nome: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 1,
      },
      {
        id: Id.new(),
        nome: "Carla Mendes",
        email: "carla@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
    ],
  },
  {
    id: Id.new(),
    alias: "aniversario-joao",
    senha: "joao2024",
    nome: "Aniversário do João - 30 Anos",
    data: new Date("2024-12-05T18:00:00Z"),
    local: "Curitiba, PR",
    descricao:
      "Comemoração dos 30 anos de João com amigos próximos e familiares.",
    imagem:
      "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imagemBackground:
      "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    publicoEsperado: 80,
    convidados: [
      {
        id: Id.new(),
        nome: "Maria Souza",
        email: "maria@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 2,
      },
      {
        id: Id.new(),
        nome: "José Almeida",
        email: "jose@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
    ],
  },
  {
    id: Id.new(),
    alias: "inauguracao-loja-estrela",
    senha: "estrela2024",
    nome: "Inauguração da Loja Estrela",
    data: new Date("2024-12-10T09:00:00Z"),
    local: "Porto Alegre, RS",
    descricao:
      "Event de inauguração da nova loja Estrela com brindes e promoções.",
    imagem:
      "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imagemBackground:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    publicoEsperado: 300,
    convidados: [
      {
        id: Id.new(),
        nome: "Cláudia Lima",
        email: "claudia@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 3,
      },
      {
        id: Id.new(),
        nome: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
    ],
  },
  {
    id: Id.new(),
    alias: "reuniao-familia-oliveira",
    senha: "familia2024",
    nome: "Reunião da Família Oliveira",
    data: new Date("2024-12-15T12:00:00Z"),
    local: "Salvador, BA",
    descricao: "Reunião de fim de ano da família Oliveira.",
    imagem:
      "https://cdib.com.br/wp-content/uploads/2023/08/Tecnologia-REAC-1024x629.jpg",
    imagemBackground:
      "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    publicoEsperado: 50,
    convidados: [
      {
        id: Id.new(),
        nome: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        totalAcompanhantes: 4,
      },
      {
        id: Id.new(),
        nome: "Letícia Oliveira",
        email: "leticia@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        totalAcompanhantes: 0,
      },
    ],
  },
];

export default events;
