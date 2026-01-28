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
    'home.intro1': "I've spent the last 8 years building systems that need to work at scale and leading teams that make it happen. Right now, I'm the Technical Lead at TestBox, where I spend my days architecting integration platforms in Python and AWS—but honestly, what gets me up in the morning is helping engineers grow into the kind of developers who ship things people actually want to use.",
    'home.intro2': "My background spans full-stack development, data engineering (Airflow, Snowflake, Databricks), and cloud infrastructure. I've led migrations from legacy systems that everyone was afraid to touch, optimized data pipelines that cut our storage costs in half, and built integration platforms that customers rely on every day. But the work I'm most proud of? That's usually the conversation where a junior dev finally *gets* why we architect things a certain way.",
    'home.intro3': "I think great engineering happens at the intersection of solid technical decisions and genuine collaboration. You can write the most elegant code in the world, but if your team doesn't understand the problem you're solving or why it matters, you're just creating future tech debt. That's why I care as much about code reviews and architectural clarity as I do about shipping features.",
    'home.intro4': "I'm a big believer that the best solutions are pragmatic ones—the kind that solve real problems without over-engineering. And that the best teams are built on clear communication, mutual respect, and creating an environment where people feel safe to ask questions and challenge ideas.",

    'home.career.title': 'Career',
    'home.career.seeAll': 'See all experience',

    'home.connect.title': "Let's Connect",
    'home.connect.text': "Whether you're tackling interesting engineering problems, looking for someone who can bridge technical depth with team leadership, or just want to talk shop about Python, AWS, or what makes a great engineering culture—I'm here for it. Always up for meaningful conversations about building software that matters and teams that thrive.",

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
    'home.intro1': 'Passei os últimos 8 anos construindo sistemas que precisam funcionar em escala e liderando times que fazem isso acontecer. Atualmente sou Líder Técnico na TestBox, onde passo meus dias arquitetando plataformas de integração em Python e AWS—mas sinceramente, o que me motiva mesmo é ajudar engenheiros a crescerem e se tornarem o tipo de desenvolvedor que entrega coisas que as pessoas realmente querem usar.',
    'home.intro2': 'Minha experiência abrange desenvolvimento full-stack, engenharia de dados (Airflow, Snowflake, Databricks) e infraestrutura em nuvem. Já liderei migrações de sistemas legados que todo mundo tinha medo de mexer, otimizei pipelines de dados que reduziram nossos custos de armazenamento pela metade, e construí plataformas de integração que clientes usam todos os dias. Mas o trabalho do qual mais me orgulho? Geralmente é aquela conversa onde um desenvolvedor júnior finalmente *entende* por que arquitetamos as coisas de uma certa forma.',
    'home.intro3': 'Acredito que engenharia excelente acontece na interseção entre decisões técnicas sólidas e colaboração genuína. Você pode escrever o código mais elegante do mundo, mas se seu time não entende o problema que você está resolvendo ou por que ele importa, você está apenas criando débito técnico futuro. Por isso me importo tanto com revisões de código e clareza arquitetural quanto com entregar features.',
    'home.intro4': 'Sou um grande defensor de que as melhores soluções são as pragmáticas—aquelas que resolvem problemas reais sem over-engineering. E que os melhores times são construídos sobre comunicação clara, respeito mútuo e criar um ambiente onde as pessoas se sintam seguras para fazer perguntas e desafiar ideias.',

    'home.career.title': 'Carreira',
    'home.career.seeAll': 'Ver experiência completa',

    'home.connect.title': 'Vamos Conectar',
    'home.connect.text': 'Se você está enfrentando problemas interessantes de engenharia, procurando alguém que consiga fazer a ponte entre profundidade técnica e liderança de times, ou só quer conversar sobre Python, AWS, ou o que faz uma cultura de engenharia excelente—estou disponível. Sempre aberto para conversas significativas sobre construir software que importa e times que prosperam.',

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
