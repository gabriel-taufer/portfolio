export const languages = {
  en: 'English',
  pt: 'Português',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.work': 'Career',
    'nav.blog': 'Blog',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.projects': 'Projects',

    'home.greeting': "Hey, I'm Gabriel.",
    'home.intro1': "I like when things break - because that's when you learn what holds them together.",
    'home.intro2': "I'm the kind of person who takes things apart just to see how they work - and sometimes, to figure out why they don't.",
    'home.intro3': "I love writing code, but what really keeps me engaged is the bigger picture - building with intention and thinking beyond the code, communicating clearly, and making sure everyone on a team knows what they're doing (and why).",
    'home.intro4': "I believe good engineering is as much about people as it is about tech, and that the best solutions are the ones that actually make someone's day easier.",

    'home.career.title': 'Career',
    'home.career.seeAll': 'See all experience',

    'home.connect.title': "Let's Connect",
    'home.connect.text': "If you want to talk about career opportunities, discuss about leveling up professionally, or just do some networking, I'm all ears! Don't hesitate to reach out - I'm here to connect, collaborate, and share ideas with like-minded people.",

    'work.title': 'Career',

    'skills.title': 'My Skills',
    'skills.intro': 'Here are some of the main technologies I\'m experienced with',

    'contact.title': "Let's Chat",
    'contact.subtitle': 'Reach out to me through social media',
  },
  pt: {
    'nav.home': 'Início',
    'nav.work': 'Carreira',
    'nav.blog': 'Blog',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',
    'nav.projects': 'Projetos',

    'home.greeting': 'Olá, sou o Gabriel.',
    'home.intro1': 'Gosto quando as coisas quebram - porque é aí que você descobre o que realmente as mantém de pé.',
    'home.intro2': 'Sou do tipo que desmonta as coisas só para entender como funcionam - e às vezes, para descobrir por que não funcionam.',
    'home.intro3': 'Adoro escrever código, mas o que me engaja de verdade é o que vai além disso - construir com propósito, pensar além do código, comunicar com clareza e garantir que todo mundo no time saiba o que está fazendo (e por quê).',
    'home.intro4': 'Acredito que boa engenharia é tanto sobre pessoas quanto sobre tecnologia - e que as melhores soluções são aquelas que de fato facilitam o dia de alguém.',

    'home.career.title': 'Carreira',
    'home.career.seeAll': 'Ver experiência completa',

    'home.connect.title': 'Vamos Conectar',
    'home.connect.text': 'Se você quiser conversar sobre oportunidades de carreira, trocar ideias sobre crescimento profissional ou fazer networking, estou à disposição! Pode me chamar - estou aqui para conectar, colaborar e trocar ideias com pessoas que pensam de forma semelhante.',

    'work.title': 'Carreira',

    'skills.title': 'Minhas Habilidades',
    'skills.intro': 'Aqui estão algumas das principais tecnologias que eu domino',

    'contact.title': 'Vamos Conversar',
    'contact.subtitle': 'Me chame nas redes sociais',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
