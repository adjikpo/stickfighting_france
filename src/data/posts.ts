export type Locale = 'fr' | 'en';

export interface Post {
  slug: string;
  date: string; // ISO format YYYY-MM-DD
  author: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  content: Record<Locale, string>;
  summary?: Record<Locale, string>; // Brief summary for detail page
  image?: string; // Visual image path or URL for detail page
  externalUrl?: string; // If provided, link to external article
}

export const posts: Post[] = [
  {
    slug: 'bienvenue',
    date: '2025-09-01',
    author: 'France Stick Fighting',
    title: {
      fr: 'Bienvenue sur le blog France Stick Fighting',
      en: 'Welcome to the France Stick Fighting blog',
    },
    excerpt: {
      fr: "Découvrez les actualités, événements et conseils autour du Kali, Eskrima & Arnis.",
      en: "Discover news, events and tips around Kali, Eskrima & Arnis.",
    },
    content: {
      fr: `Bienvenue sur notre nouveau blog. Vous trouverez ici des annonces d'événements, des retours de compétitions et des guides pratiques pour les pratiquants.\n\nRestez connectés pour suivre la préparation du WSA European Championship 2025 et nos actions en France.`,
      en: `Welcome to our new blog. Here you'll find event announcements, competition recaps and practical guides for practitioners.\n\nStay tuned to follow the preparation for the 2025 WSA European Championship and our activities in France.`,
    },
  },
  {
    slug: 'wsa-2025-prep',
    date: '2025-09-10',
    author: 'France Stick Fighting',
    title: {
      fr: 'Préparation WSA 2025: informations clés',
      en: 'WSA 2025 preparation: key information',
    },
    excerpt: {
      fr: "Tout savoir sur l'accueil, les catégories et le déroulé du week-end.",
      en: "Everything about welcome, categories and the weekend schedule.",
    },
    content: {
      fr: `Retrouvez ici les informations pratiques (arrivée, planning, catégories).\n\nLe samedi matin : formes et couteaux rembourrés. L'après-midi : padded simple & double. Dimanche : simple bâton, double et équipe.`,
      en: `Find here practical information (arrival, schedule, categories).\n\nSaturday morning: forms and padded knives. Afternoon: padded single & double. Sunday: single stick, double and team.`,
    },
  },
  {
    slug: 'championnat-europe-arnis-kali-eskrima-cyril-nogueira',
    date: '2025-07-13',
    author: 'Guro Cyril Nogueira',
    title: {
      fr: "Championnat d’Europe Arnis Kali Eskrima avec Cyril Nogueira",
      en: "European Championship Arnis Kali Eskrima with Cyril Nogueira",
    },
    excerpt: {
      fr: "Retour d’expérience sur la compétition européenne et les enseignements tirés.",
      en: "Experience report from the European championship and key learnings.",
    },
    summary: {
      fr: "Cyril partage son retour d’expérience sur les Championnats d’Europe: préparation, apprentissages et vision de la compétition dans la pratique martiale.",
      en: "Cyril shares his experience from the European Championships: preparation, learnings and how competition fits into a broader martial practice.",
    },
    content: {
      fr: "Redirection vers l’article externe.",
      en: "Redirecting to external article.",
    },
    image: '/logo.jpg',
    externalUrl: 'https://www.dobleterapilon.com/championnat-deurope-arnis-kali-eskrima-avec-cyril-nogueira/',
  },
  {
    slug: '7-francais-medailles-championnats-europe-kali-eskrima',
    date: '2023-10-02',
    author: 'Fédération Française de Karaté',
    title: {
      fr: '7 français médaillés aux Championnats d’Europe Kali Eskrima',
      en: '7 French medalists at the European Kali Eskrima Championships',
    },
    excerpt: {
      fr: "Un record de 31 médailles pour les français lors des championnats d’Europe 2023.",
      en: "A record of 31 medals for the French team at the 2023 European Championships.",
    },
    summary: {
      fr: "Retour sur les Championnats d’Europe 2023: 7 combattants français, 31 médailles, et des perspectives encourageantes pour la discipline.",
      en: "Recap of the 2023 European Championships: 7 French fighters, 31 medals, and promising prospects for the discipline.",
    },
    content: {
      fr: "Redirection vers l’article externe.",
      en: "Redirecting to external article.",
    },
    image: '/logo.jpg',
    externalUrl: 'https://www.ffkarate.fr/7-francais-medailles-aux-championnats-deurope-kali-eskrima/',
  },
  {
    slug: 'angevin-champion-du-monde-kali',
    date: '2025-09-24',
    author: 'Ouest-France',
    title: {
      fr: "Angevin: il est sacré champion du monde de Kali – ‘J’ai décroché le graal’",
      en: "Angevin crowned Kali world champion – ‘I reached the holy grail’",
    },
    excerpt: {
      fr: "Portrait d’un champion du monde de Kali originaire d’Angers.",
      en: "Profile of a Kali world champion from Angers, France.",
    },
    summary: {
      fr: "Un athlète angevin revient sur son parcours jusqu’au titre mondial et ses ambitions pour la suite.",
      en: "An athlete from Angers looks back on his path to the world title and future ambitions.",
    },
    content: {
      fr: "Redirection vers l’article externe.",
      en: "Redirecting to external article.",
    },
    image: '/logo.jpg',
    externalUrl: 'https://www.ouest-france.fr/sport/angevin-il-est-sacre-champion-du-monde-de-kali-jai-decroche-le-graal-ed8f2106-aff1-11ef-a2d7-a442dec39760',
  },
];
