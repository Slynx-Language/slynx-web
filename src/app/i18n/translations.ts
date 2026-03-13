export const locales = ['en', 'pt'] as const
export type Locale = typeof locales[number]

export const translations = {
  en: {
    hero: {
      title: "Customizable, Fast, & Efficient",
      getStarted: "Get Started",
    },
    whatIs: {
      title: "What is Slynx?",
      performance: { title: "Performatic Language", description: "Optimized for modern hardware with lightning-fast execution times and zero-cost abstractions." },
      trust: { title: "A Result You Can Trust", description: "Deterministic behavior ensures your code runs exactly as expected across every environment." },
      safety: { title: "Safety at Scale", description: "Built-in safety features that catch bugs at compile-time before they reach your users." },
    },
    cards: {
      getStarted: "Get",
      started: "started",
      handbrook: { title: "Handbrook", description: "Learn the language" },
      playground: { title: "Playground", description: "Try in your browser" },
      download: { title: "Download", description: "Install Slynx" },
    },
    why: {
      title: "Why",
      description: "Experience a syntax that feels natural, a compiler that guides you, and performance that scales with your ambitions.",
      simple: "Simple",
      performance: "Performance",
      dataOriented: "Data Oriented",
    },
    testimonials: {
      title: "Slynx Testimonials",
      subtitle: "Developer Approved and production ready.",
    },
    capabilities: {
      title: "What's possible with",
      items: [
        { title: "Modern UI", description: "Build optimized and stylish interfaces with our engine" },
        { title: "Modern UI", description: "Build optimized and stylish interfaces with our engine" },
        { title: "Modern UI", description: "Build optimized and stylish interfaces with our engine" },
        { title: "Modern UI", description: "Build optimized and stylish interfaces with our engine" },
        { title: "Modern UI", description: "Build optimized and stylish interfaces with our engine" },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        { question: "Is it ready for production?", answer: "No, the language is experimental and has a lot to improve." },
        { question: "Is it ready for production?", answer: "No, the language is experimental and has a lot to improve." },
        { question: "Is it ready for production?", answer: "No, the language is experimental and has a lot to improve." },
      ],
    },
    nav: {
      docs: "Docs", apiReference: "API Reference", features: "Features",
      useCases: "Use Cases", getStarted: "Get Started",
    },
    footer: {
      whySlynx: "Why Slynx", useCases: "Use Cases", caseStudies: "Case Studies",
      getStarted: "Get Started", download: "Download", docs: "Docs",
      codeExamples: "Code Examples", help: "Help", packages: "Packages",
      stdLibrary: "Std Library", registry: "Registry", social: "Social",
      maintainedBy: "Maintained by Slynx Team",
    },
  },
  pt: {
    hero: {
      title: "Customizável, Rápido e Eficiente",
      getStarted: "Começar",
    },
    whatIs: {
      title: "O que é Slynx?",
      performance: { title: "Linguagem Performática", description: "Otimizada para hardware moderno com tempos de execução ultrarrápidos e abstrações de custo zero." },
      trust: { title: "Um Resultado em que Você Confia", description: "Comportamento determinístico garante que seu código rode exatamente como esperado em qualquer ambiente." },
      safety: { title: "Segurança em Escala", description: "Recursos de segurança embutidos que detectam bugs em tempo de compilação antes de chegarem aos seus usuários." },
    },
    cards: {
      getStarted: "Comece",
      started: "agora",
      handbrook: { title: "Handbook", description: "Aprenda a linguagem" },
      playground: { title: "Playground", description: "Teste no navegador" },
      download: { title: "Download", description: "Instale o Slynx" },
    },
    why: {
      title: "Por que",
      description: "Experimente uma sintaxe natural, um compilador que te guia e performance que escala com suas ambições.",
      simple: "Simples",
      performance: "Performance",
      dataOriented: "Orientado a Dados",
    },
    testimonials: {
      title: "Depoimentos sobre Slynx",
      subtitle: "Aprovado por desenvolvedores e pronto para produção.",
    },
    capabilities: {
      title: "O que é possível com",
      items: [
        { title: "UIs Modernas", description: "Crie interfaces otimizadas e estilosas com a nossa engine" },
        { title: "UIs Modernas", description: "Crie interfaces otimizadas e estilosas com a nossa engine" },
        { title: "UIs Modernas", description: "Crie interfaces otimizadas e estilosas com a nossa engine" },
        { title: "UIs Modernas", description: "Crie interfaces otimizadas e estilosas com a nossa engine" },
        { title: "UIs Modernas", description: "Crie interfaces otimizadas e estilosas com a nossa engine" },
      ],
    },
    faq: {
      title: "Perguntas Frequentes",
      items: [
        { question: "Está pronto para produção?", answer: "Não, a linguagem é experimental e ainda tem muito a melhorar." },
        { question: "Está pronto para produção?", answer: "Não, a linguagem é experimental e ainda tem muito a melhorar." },
        { question: "Está pronto para produção?", answer: "Não, a linguagem é experimental e ainda tem muito a melhorar." },
      ],
    },
    nav: {
      docs: "Documentação", apiReference: "Referência da API", features: "Funcionalidades",
      useCases: "Casos de Uso", getStarted: "Começar",
    },
    footer: {
      whySlynx: "Por que Slynx", useCases: "Casos de Uso", caseStudies: "Estudos de Caso",
      getStarted: "Começar", download: "Baixar", docs: "Documentação",
      codeExamples: "Exemplos de Código", help: "Ajuda", packages: "Pacotes",
      stdLibrary: "Biblioteca Padrão", registry: "Registro", social: "Redes Sociais",
      maintainedBy: "Mantido pela Equipe Slynx",
    },
  },
} satisfies Record<Locale, unknown>
