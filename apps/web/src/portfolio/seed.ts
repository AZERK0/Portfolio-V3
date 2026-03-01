import type {
  ExperienceDocument,
  PortfolioStatDocument,
  ProfileDocument,
  ProjectDocument,
  SkillDocument,
  StudyDocument,
} from "./model";

const profileId = "raphael-charpentier";

export const profileSeed: ProfileDocument = {
  id: profileId,
  slug: "raphael-charpentier",
  locale: "fr",
  firstName: "Raphael",
  lastName: "Charpentier",
  fullName: "Raphael Charpentier",
  title: "Software Engineer",
  headline: "Developpeur Full-Stack en cursus Expert en Ingenierie Logicielle",
  heroTitle: "Developpeur Full-Stack.",
  city: "Lyon",
  country: "France",
  portraitUrl: "/portrait.JPG",
  availability: "Disponible pour missions freelance",
  aboutShort:
    "Developpeur Full-Stack axe produit, architecture scalable et experiences web performantes.",
  aboutLong:
    "Passionne d'informatique depuis 2017, je construis des applications Full-Stack modernes autour de TypeScript, Nuxt et AdonisJS.",
  email: "raphael.charpentier@epitech.eu",
  phone: "+33 6 26 65 53 91",
  links: [
    {
      id: "linkedin",
      label: "LinkedIn",
      type: "linkedin",
      url: "https://www.linkedin.com/",
      openInNewTab: true,
    },
    {
      id: "contact",
      label: "Me contacter",
      type: "contact",
      url: "?contactPopup=true",
    },
  ],
  status: "published",
};

export const studiesSeed: StudyDocument[] = [
  {
    id: "epitech-2023",
    profileId,
    school: "Epitech Lyon",
    degree: "Programme en 5 ans - Expert en technologies de l'information",
    degreeLevel: "RNCP niveau 7",
    period: {
      start: { value: "2023", precision: "year" },
      end: { value: "2028", precision: "year" },
      isCurrent: true,
      label: "2023 - Maintenant",
    },
    highlights: [
      "Pedagogie projet",
      "Ingenierie logicielle",
      "Developpement Full-Stack",
    ],
    status: "published",
    order: 1,
  },
  {
    id: "bac-2023",
    profileId,
    school: "Lycee",
    degree:
      "Baccalaureat general - Mention Bien, Mention Euro, Maths/NSI/Physique-Chimie",
    period: {
      start: { value: "2020", precision: "year" },
      end: { value: "2023", precision: "year" },
      label: "2020 - 2023",
    },
    status: "published",
    order: 2,
  },
];

export const experiencesSeed: ExperienceDocument[] = [
  {
    id: "visiativ-2025-2026",
    profileId,
    company: "Visiativ",
    role: "Developpeur Fullstack",
    type: "internship",
    period: {
      start: { value: "2025-11", precision: "month" },
      end: { value: "2026-02", precision: "month" },
      label: "Nov. 2025 - Fevr. 2026",
    },
    location: "Lyon, France",
    locationMode: "on-site",
    summary:
      "Developpement Angular/NGRX, backend Java Spring/JPA et tests Jest pour une solution PLM industrielle.",
    achievements: [
      "Traduction maquettes Figma en composants reutilisables",
      "Couverture de tests > 80%",
      "Participation workshops design thinking",
    ],
    stack: ["Angular", "NGRX", "Java", "Spring", "Jest"],
    status: "published",
    order: 1,
  },
  {
    id: "visiativ-2024",
    profileId,
    company: "Visiativ",
    role: "Developpeur Fullstack",
    type: "internship",
    period: {
      start: { value: "2024-07", precision: "month" },
      end: { value: "2024-12", precision: "month" },
      label: "Juill. 2024 - Dec. 2024",
    },
    location: "Lyon, France",
    locationMode: "on-site",
    summary:
      "Developpement de l'interface Visiativ PLM et fonctionnalites backend connectees a la base de donnees.",
    stack: ["Angular", "NGRX", "Java", "Spring", "JPA"],
    status: "published",
    order: 2,
  },
  {
    id: "freelance-2023",
    profileId,
    company: "Freelance",
    role: "Developpeur Fullstack",
    type: "freelance",
    period: {
      start: { value: "2023", precision: "year" },
      isCurrent: true,
      label: "Depuis 2023",
    },
    locationMode: "remote",
    summary:
      "Conception et livraison de produits SaaS et sites vitrines avec stack Nuxt + AdonisJS.",
    achievements: [
      "Finvio (plateforme SaaS de gestion de patrimoine)",
      "Amazon Analyzer (SaaS + extension avec agent IA)",
      "Atelier Sophie Sylvestre (site vitrine SEO)",
    ],
    stack: ["Nuxt", "AdonisJS", "TypeScript", "OpenAI", "Keepa API"],
    status: "published",
    order: 3,
  },
];

export const skillsSeed: SkillDocument[] = [
  {
    id: "typescript",
    profileId,
    name: "TypeScript",
    category: "language",
    level: "expert",
    order: 1,
    highlighted: true,
    status: "published",
  },
  {
    id: "python",
    profileId,
    name: "Python",
    category: "language",
    level: "advanced",
    order: 2,
    highlighted: true,
    status: "published",
  },
  {
    id: "java",
    profileId,
    name: "Java",
    category: "language",
    level: "advanced",
    order: 3,
    status: "published",
  },
  {
    id: "angular",
    profileId,
    name: "Angular",
    category: "frontend",
    level: "advanced",
    order: 4,
    highlighted: true,
    status: "published",
  },
  {
    id: "react",
    profileId,
    name: "React",
    category: "frontend",
    level: "advanced",
    order: 5,
    status: "published",
  },
  {
    id: "nuxt",
    profileId,
    name: "Nuxt.js",
    category: "frontend",
    level: "expert",
    order: 6,
    highlighted: true,
    status: "published",
  },
  {
    id: "adonis",
    profileId,
    name: "AdonisJS",
    category: "backend",
    level: "advanced",
    order: 7,
    status: "published",
  },
  {
    id: "spring",
    profileId,
    name: "Spring",
    category: "backend",
    level: "intermediate",
    order: 8,
    status: "published",
  },
  {
    id: "postgresql",
    profileId,
    name: "PostgreSQL",
    category: "data",
    level: "advanced",
    order: 9,
    status: "published",
  },
  {
    id: "mysql",
    profileId,
    name: "MySQL",
    category: "data",
    level: "advanced",
    order: 10,
    status: "published",
  },
];

export const projectsSeed: ProjectDocument[] = [
  {
    id: "atelier-sophie-sylvestre",
    profileId,
    slug: "atelier-sophie-sylvestre",
    title: "Atelier Sophie Sylvestre",
    shortDescription:
      "Site vitrine Nuxt avec CMS pour galerie et formulaire de contact.",
    longDescription:
      "Conception d'un site pour restauratrice de tableaux avec mise a jour autonome de la galerie via content management.",
    category: "freelance",
    period: {
      start: { value: "2024-12", precision: "month" },
      end: { value: "2024-12", precision: "month" },
      label: "Dec. 2024",
    },
    stack: ["Nuxt.js", "Contentful"],
    cover: {
      kind: "image",
      alt: "Atelier Sophie Sylvestre homepage",
      url: "/projects/atelier-sophie-sylvestre/home.webp",
    },
    gallery: [
      {
        kind: "image",
        alt: "Atelier gallery",
        url: "/projects/atelier-sophie-sylvestre/gallery.webp",
      },
    ],
    badge: { label: "Freelance", tone: "yellow" },
    links: [
      {
        id: "atelier-site",
        label: "Voir le site",
        type: "website",
        url: "https://atelier-sophie-sylvestre.fr",
        openInNewTab: true,
      },
    ],
    featured: true,
    featuredRank: 1,
    status: "published",
  },
  {
    id: "grossify",
    profileId,
    slug: "grossify",
    title: "Grossify",
    shortDescription:
      "Marketplace IA pour connecter restaurateurs et grossistes selon besoins et prix.",
    category: "personal",
    period: {
      start: { value: "2024-08", precision: "month" },
      isCurrent: true,
      label: "Aout 2024 - Aujourd'hui",
    },
    stack: ["Nuxt.js", "Adonis.js"],
    cover: {
      kind: "image",
      alt: "Grossify homepage",
      url: "/projects/grossify/home.webp",
    },
    badge: { label: "Nouveau", tone: "green" },
    alert: {
      title: "En cours de developpement",
      description: "Le site est en cours de developpement.",
      tone: "yellow",
    },
    featured: true,
    featuredRank: 2,
    status: "published",
  },
  {
    id: "amazon-analyzer",
    profileId,
    slug: "amazon-analyzer",
    title: "Amazon Analyzer",
    shortDescription:
      "SaaS + extension pour analyser la rentabilite e-commerce avec agent IA et donnees Keepa.",
    longDescription:
      "Creation d'un produit SaaS Full-Stack pour l'analyse de rentabilite Amazon avec analyse concurrentielle assistee par IA.",
    category: "freelance",
    period: {
      start: { value: "2025", precision: "year" },
      end: { value: "2025", precision: "year" },
      label: "2025",
    },
    stack: ["Nuxt.js", "AdonisJS", "OpenAI", "Keepa API"],
    cover: {
      kind: "image",
      alt: "Amazon Analyzer visual",
      url: "/projects/amazon-analyzer/home.webp",
    },
    badge: { label: "Freelance", tone: "yellow" },
    featured: true,
    featuredRank: 3,
    status: "published",
  },
  {
    id: "finvio",
    profileId,
    slug: "finvio",
    title: "Finvio",
    shortDescription:
      "Plateforme SaaS de gestion de patrimoine en architecture monorepo Full-Stack.",
    longDescription:
      "Developpement d'une solution SaaS avec front Nuxt et backend AdonisJS, orientee produit et performance.",
    category: "freelance",
    period: {
      start: { value: "2025", precision: "year" },
      end: { value: "2025", precision: "year" },
      label: "2025",
    },
    stack: ["Nuxt.js", "AdonisJS", "TypeScript", "Turborepo"],
    cover: {
      kind: "image",
      alt: "Finvio visual",
      url: "/projects/finvio/home.webp",
    },
    badge: { label: "Freelance", tone: "yellow" },
    featured: true,
    featuredRank: 4,
    status: "published",
  },
  {
    id: "finalyzing",
    profileId,
    slug: "finalyzing",
    title: "Finalyzing",
    shortDescription:
      "Suite d'outils d'analyse financiere: marches, macro-economie et portefeuilles.",
    longDescription:
      "Plateforme finance developpee avec Angular et Flask, connectee a des sources de donnees de marche internationales.",
    category: "personal",
    period: {
      start: { value: "2022-07", precision: "month" },
      end: { value: "2024-02", precision: "month" },
      label: "Jul. 2022 - Fev. 2024",
    },
    stack: ["Angular", "Flask"],
    cover: {
      kind: "image",
      alt: "Finalyzing homepage",
      url: "/projects/finalyzing/home.webp",
    },
    links: [
      {
        id: "finalyzing-site",
        label: "Voir le site",
        type: "website",
        url: "https://finalyzing.com",
        openInNewTab: true,
      },
    ],
    alert: {
      title: "Acces restreint",
      description:
        "Pour des raisons de couts de maintenance, l'acces est limite et certains chargements peuvent etre incomplets.",
      tone: "red",
    },
    gallery: [
      {
        kind: "image",
        alt: "Finalyzing markets",
        url: "/projects/finalyzing/markets.webp",
      },
      {
        kind: "image",
        alt: "Finalyzing portfolios",
        url: "/projects/finalyzing/portfolios.webp",
      },
      {
        kind: "image",
        alt: "Finalyzing macro",
        url: "/projects/finalyzing/macro.webp",
      },
      {
        kind: "video",
        alt: "Finalyzing demo video",
        url: "/projects/finalyzing/demo.mp4",
      },
    ],
    featured: false,
    featuredRank: 5,
    status: "published",
  },
  {
    id: "gt3-event",
    profileId,
    slug: "gt3-event",
    title: "GT3 Event - 10K joueurs",
    shortDescription:
      "Evenements de course hebdomadaires automatises pour une communaute Assetto Corsa de 10 000 joueurs.",
    longDescription:
      "Script Python pour organiser les votes de piste, gerer les inscriptions et suivre les resultats de courses.",
    category: "personal",
    period: {
      start: { value: "2024-10", precision: "month" },
      end: { value: "2024-10", precision: "month" },
      label: "Oct. 2024",
    },
    stack: ["Python", "Discord API"],
    cover: {
      kind: "image",
      alt: "GT3 event cover",
      url: "/projects/assetto-corsa-event/gt3-grand-prix.webp",
    },
    gallery: [
      {
        kind: "image",
        alt: "GT3 event server",
        url: "/projects/assetto-corsa-event/server.webp",
      },
    ],
    badge: { label: "Perso", tone: "blue" },
    links: [
      {
        id: "gt3-discord",
        label: "Acceder au Discord",
        type: "discord",
        url: "https://discord.gg/BHUFmjJUTN",
        openInNewTab: true,
      },
    ],
    featured: false,
    featuredRank: 6,
    status: "published",
  },
  {
    id: "minishell",
    profileId,
    slug: "minishell",
    title: "MiniShell",
    shortDescription:
      "Implementation en C d'un interpreteur de commandes Unix avec pipes, redirections et variables d'environnement.",
    longDescription:
      "Projet Epitech bas niveau autour de la gestion des processus, des entrees/sorties et de la composition de commandes shell.",
    category: "school",
    period: {
      start: { value: "2024-03", precision: "month" },
      end: { value: "2024-03", precision: "month" },
      label: "Mars 2024",
    },
    stack: ["C", "Unix"],
    cover: {
      kind: "image",
      alt: "MiniShell visual",
      url: "/projects/mysh/demo.webp",
    },
    badge: { label: "Epitech", tone: "red" },
    featured: false,
    featuredRank: 7,
    status: "published",
  },
  {
    id: "neurastock-ai",
    profileId,
    slug: "neurastock-ai",
    title: "NeuraStock A.I.",
    shortDescription:
      "IA finance entrainee sur 10 000 cotations boursieres avec pipeline de traitement, modele Transformer et backtests.",
    longDescription:
      "Projet fondateur melant data engineering, TensorFlow/Keras et evaluation de strategies d'investissement.",
    category: "personal",
    period: {
      start: { value: "2020-05", precision: "month" },
      end: { value: "2021-09", precision: "month" },
      label: "Mai 2020 - Sept. 2021",
    },
    stack: ["Python", "TensorFlow", "PostgreSQL"],
    cover: {
      kind: "image",
      alt: "NeuraStock visual",
      url: "/projects/neurastock/benefit.webp",
    },
    badge: { label: "Perso", tone: "blue" },
    featured: false,
    featuredRank: 8,
    status: "published",
  },
];

export const statsSeed: PortfolioStatDocument[] = [
  {
    id: "years",
    profileId,
    label: "Annees de pratique",
    value: "8+",
    order: 1,
    status: "published",
  },
  {
    id: "projects",
    profileId,
    label: "Projets Full-Stack",
    value: "15+",
    order: 2,
    status: "published",
  },
  {
    id: "internships",
    profileId,
    label: "Stages en entreprise",
    value: "2",
    order: 3,
    status: "published",
  },
  {
    id: "toeic",
    profileId,
    label: "TOEIC",
    value: "750/990",
    order: 4,
    status: "published",
  },
];
