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
    'home.intro1': "Currently Lead Engineer at TestBox. I run the integrations team - designing architecture, building, mentoring engineers, and making sure things don't break - that much.",
    'home.intro2': "Over 8 years I've done a bit of everything: ETL pipelines, Android apps, legacy migrations. Specialized in reverse-engineering third-party APIs when the docs didn't exist - and that might be the most fun.",
    'home.intro3': "Brazilian. Remote. Top 0.001% <span onclick=\"document.getElementById('catb-embed').classList.toggle('grid-rows-[1fr]'); document.getElementById('catb-embed').classList.toggle('opacity-100'); document.getElementById('catb-embed').classList.toggle('grid-rows-[0fr]'); document.getElementById('catb-embed').classList.toggle('opacity-0');\" class=\"underline underline-offset-2 decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 hover:text-black hover:dark:text-white transition-colors duration-300 cursor-pointer\">Catfish and the Bottlemen</span> listener.",

    'home.career.title': 'Career',
    'home.career.seeAll': 'See all experience',

    'home.connect.title': "Let's Connect",
    'home.connect.text': "Reach out if you want to talk engineering, leadership, or just say hi.",

    'work.title': 'Career',

    'skills.title': 'Skills',
    'skills.intro': 'Technologies I work with regularly',

    'contact.title': "Let's Chat",
    'contact.subtitle': 'Find me on',

    'cv.title': 'Curriculum Vitae',
    'cv.summary': 'Staff Engineer with 8 years building production systems across backend, mobile, and data engineering. Experience ranges from Android apps to ETL pipelines to reverse-engineering third-party APIs without documentation. Now leading an integrations team - setting technical direction, mentoring engineers, and balancing hands-on development with architecture ownership.',
    'cv.experience': 'Experience',
    'cv.skills': 'Skills',
    'cv.print': 'Print / Save PDF',
  },
  pt: {
    'nav.home': 'Início',
    'nav.work': 'Carreira',
    'nav.blog': 'Blog',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',
    'nav.projects': 'Projetos',

    'home.greeting': 'E aí, sou o Gabriel.',
    'home.intro1': "Atualmente Lead Engineer na TestBox. Lidero o time de integrações - arquitetura, desenvolvimento, mentoria, e garantindo que nada quebre - tanto assim.",
    'home.intro2': "Em 8 anos fiz um pouco de tudo: pipelines ETL, apps Android, migrações de sistemas legados. Me especializei em engenharia reversa de APIs quando a documentação não existia - e essa talvez seja a parte mais divertida.",
    'home.intro3': "Brasileiro. Remoto. Top 0.001% ouvinte de <span onclick=\"document.getElementById('catb-embed').classList.toggle('grid-rows-[1fr]'); document.getElementById('catb-embed').classList.toggle('opacity-100'); document.getElementById('catb-embed').classList.toggle('grid-rows-[0fr]'); document.getElementById('catb-embed').classList.toggle('opacity-0');\" class=\"underline underline-offset-2 decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 hover:text-black hover:dark:text-white transition-colors duration-300 cursor-pointer\">Catfish and the Bottlemen</span>.",

    'home.career.title': 'Carreira',
    'home.career.seeAll': 'Ver experiência completa',

    'home.connect.title': 'Vamos Conectar',
    'home.connect.text': "Me chama se quiser falar sobre engenharia, liderança, ou só dar um oi.",

    'work.title': 'Carreira',

    'skills.title': 'Habilidades',
    'skills.intro': 'Tecnologias que uso regularmente',

    'contact.title': 'Vamos Conversar',
    'contact.subtitle': 'Me encontre em',

    'cv.title': 'Currículo',
    'cv.summary': 'Staff Engineer com 8 anos construindo sistemas em produção em backend, mobile e engenharia de dados. Experiência vai de apps Android a pipelines ETL até engenharia reversa de APIs de terceiros sem documentação. Atualmente liderando um time de integrações - definindo direção técnica, mentorando engenheiros e equilibrando desenvolvimento hands-on com ownership de arquitetura.',
    'cv.experience': 'Experiência',
    'cv.skills': 'Habilidades',
    'cv.print': 'Imprimir / Salvar PDF',
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
