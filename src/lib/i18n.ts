export type Locale = "pt-BR" | "en-US"

type ProjectItem = {
  name: string
  description: string
  tags: string[]
  url?: string
}

export const translations = {
  "pt-BR": {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      stack: "Stack",
    },
    hero: {
      role: "Desenvolvedor Full Stack & Engenheiro de Dados",
      location: "Minas Gerais, Brasil",
      bio: "Desenvolvedor Full Stack Jr. na 4mti, estudante de Engenharia de Sistemas na UFMG. Experiência em Python, TypeScript, AWS e pipelines de dados. Construo aplicações web escaláveis e soluções orientadas a dados.",
      contact: "Contato",
      resume: "Currículo",
    },
    experience: {
      title: "Experiência",
      items: [
        {
          role: "Desenvolvedor Full Stack Junior",
          company: "4mti Soluções",
          period: "Set 2025 - Atual",
          description:
            "Desenvolvimento de aplicação web e APIs REST para microsserviços. Python, JavaScript, PostgreSQL, AWS (Lambda, S3, SNS, SQS) e Redis. Code review, treinamento e melhorias no desenho da arquitetura do sistema.",
        },
        {
          role: "Estagiário Desenvolvedor Full Stack",
          company: "4mti Soluções",
          period: "Mar 2025 - Ago 2025",
          description:
            "Desenvolvimento full stack de aplicação web e APIs REST de distribuição de dados. Front-end (Jinja, LESS, JavaScript) e back-end (Python, Flask, PostgreSQL).",
        },
        {
          role: "Desenvolvedor Freelance",
          company: "Autônomo",
          period: "Nov 2023 - Nov 2024",
          description:
            "Desenvolvimento full stack de aplicações incluindo integração de APIs e recursos de visão computacional. Python, TypeScript e C++.",
        },
      ],
    },
    projects: {
      title: "Projetos",
      items: [
        {
          name: "Sentinela",
          description:
            "Pipeline de dados para coleta, processamento e análise de sentimento de posts, compondo o monitoramento completo e personalizável de imagem de marcas em redes sociais.",
          tags: ["Python", "Selenium", "SQLAlchemy", "ETL", "Análise de Sentimento"]
        },
        {
          name: "DeRole",
          description:
            "Projeto PWA mobile-first para marcar rolês e dividir despesas compartilhadas entre amigos.",
          tags: ["TypeScript", "PWA", "Mobile-first"]
        },
        {
          name: "LibrasController",
          description:
            "Software que reconhece gestos de Libras e gestos customizados, transformando-os em inputs de teclado ou mouse.",
          tags: ["Python", "OpenCV", "Electron", "React", "TypeScript"],
          url: "https://github.com/ofelipelucca/LibrasController",
        },
        {
          name: "EldenRing na Vida Real",
          description:
            "Aplicação em Python usando OpenCV e MediaPipe para detectar movimentos do usuário e jogar Elden Ring.",
          tags: ["Python", "OpenCV", "MediaPipe", "PySide6"],
          url: "https://github.com/ofelipelucca/EldenRing-Rolando-na-Vida-Real",
        },
        {
          name: "Voz do Atleticano",
          description:
            "Frontend de aplicação web para torcedores, com visualização de dados e integração com APIs REST.",
          tags: ["React", "Next.js", "TypeScript", "Recharts"]
        },
        {
          name: "JumpKing na Vida Real",
          description:
            "Aplicação que captura movimentos via webcam para controlar jogos. Criado com C++ e OpenCV.",
          tags: ["C++", "OpenCV", "Visão Computacional"],
          url: "https://github.com/ofelipelucca/JumpKing-Jumping-in-Real-Life",
        },
      ] as ProjectItem[],
    },
    stack: {
      title: "Stack",
      categories: [
        {
          name: "Linguagens",
          items: ["Python", "TypeScript", "JavaScript", "C", "C++", "SQL"],
        },
        {
          name: "Frameworks & Libs",
          items: ["Flask", "Node.js", "React", "Next.js", "Electron", "Selenium", "SQLAlchemy", "Pandas", "NumPy"],
        },
        {
          name: "Dados & Banco",
          items: ["PostgreSQL", "Redis", "ETL/ELT", "Modelagem de Dados", "Análise de Sentimento"],
        },
        {
          name: "Cloud & DevOps",
          items: ["AWS Lambda", "AWS S3", "AWS SNS/SQS", "Azure", "Git"],
        },
        {
          name: "Outros",
          items: ["OpenCV", "MediaPipe", "REST APIs", "Arquitetura de Software"],
        },
      ],
    },
    education: {
      title: "Formação",
      degree: "Engenharia de Sistemas",
      school: "UFMG",
      period: "Mar 2023 - Dez 2028",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  "en-US": {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stack: "Stack",
    },
    hero: {
      role: "Full Stack Developer & Data Engineer",
      location: "Minas Gerais, Brazil",
      bio: "Full Stack Jr. Developer at 4mti, Systems Engineering student at UFMG. Experience with Python, TypeScript, AWS and data pipelines. I build scalable web applications and data-driven solutions.",
      contact: "Contact",
      resume: "Resume",
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Junior Full Stack Developer",
          company: "4mti Solutions",
          period: "Sep 2025 - Present",
          description:
            "Web application and REST API development for microservices. Python, JavaScript, PostgreSQL, AWS (Lambda, S3, SNS, SQS) and Redis. Code review, training, and system architecture improvements.",
        },
        {
          role: "Full Stack Developer Intern",
          company: "4mti Solutions",
          period: "Mar 2025 - Aug 2025",
          description:
            "Full stack development of web application and REST APIs for data distribution. Front-end (Jinja, LESS, JavaScript) and back-end (Python, Flask, PostgreSQL).",
        },
        {
          role: "Freelance Developer",
          company: "Self-employed",
          period: "Nov 2023 - Nov 2024",
          description:
            "Full stack development of applications including API integration and computer vision features. Python, TypeScript and C++.",
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "Sentinela",
          description:
            "Data pipeline for collecting, processing and sentiment analysis of social media posts, enabling comprehensive and customizable brand image monitoring.",
          tags: ["Python", "Selenium", "SQLAlchemy", "ETL", "Sentiment Analysis"],
          url: "https://github.com/ofelipelucca/Sentinela",
        },
        {
          name: "DeRole",
          description:
            "Mobile-first PWA for scheduling hangouts and splitting shared expenses among friends.",
          tags: ["TypeScript", "PWA", "Mobile-first"],
          url: "https://github.com/ofelipelucca/DeRole",
        },
        {
          name: "LibrasController",
          description:
            "Software that recognizes Brazilian Sign Language gestures and custom gestures, converting them into keyboard or mouse inputs.",
          tags: ["Python", "OpenCV", "Electron", "React", "TypeScript"],
          url: "https://github.com/ofelipelucca/LibrasController",
        },
        {
          name: "EldenRing in Real Life",
          description:
            "Python application using OpenCV and MediaPipe to detect user movements and play Elden Ring.",
          tags: ["Python", "OpenCV", "MediaPipe", "PySide6"],
          url: "https://github.com/ofelipelucca/EldenRing-Rolando-na-Vida-Real",
        },
        {
          name: "Voz do Atleticano",
          description:
            "Web application frontend for fans, featuring data visualization and REST API integration.",
          tags: ["React", "Next.js", "TypeScript", "Recharts"],
          url: "https://github.com/ofelipelucca/voz-do-atleticano-web",
        },
        {
          name: "JumpKing in Real Life",
          description:
            "Application that captures movements via webcam to control games. Built with C++ and OpenCV.",
          tags: ["C++", "OpenCV", "Computer Vision"],
          url: "https://github.com/ofelipelucca/JumpKing-Jumping-in-Real-Life",
        },
      ] as ProjectItem[],
    },
    stack: {
      title: "Stack",
      categories: [
        {
          name: "Languages",
          items: ["Python", "TypeScript", "JavaScript", "C", "C++", "SQL"],
        },
        {
          name: "Frameworks & Libs",
          items: ["Flask", "Node.js", "React", "Next.js", "Electron", "Selenium", "SQLAlchemy", "Pandas", "NumPy"],
        },
        {
          name: "Data & Databases",
          items: ["PostgreSQL", "Redis", "ETL/ELT", "Data Modeling", "Sentiment Analysis"],
        },
        {
          name: "Cloud & DevOps",
          items: ["AWS Lambda", "AWS S3", "AWS SNS/SQS", "Azure", "Git"],
        },
        {
          name: "Other",
          items: ["OpenCV", "MediaPipe", "REST APIs", "Software Architecture"],
        },
      ],
    },
    education: {
      title: "Education",
      degree: "Systems Engineering",
      school: "UFMG",
      period: "Mar 2023 - Dec 2028",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const
