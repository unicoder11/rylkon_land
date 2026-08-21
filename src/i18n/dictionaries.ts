export type NavLink = { href: string; label: string };
export type TitleBody = { title: string; body: string };
export type FaqItem = { q: string; a: string };
export type SystemItem = { name: string; detail: string; example: string };
export type SystemGroup = { label: string; items: SystemItem[] };
export type ExampleItem = { pattern: string; lesson: string; rylkon: string };
export type KnownItem = { label: string; detail: string };
export type CompareRow = { dim: string; agency: string; rylkon: string };
export type ProcessStep = { n: string; title: string; body: string };

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  common: {
    skipToContent: string;
    language: string;
    english: string;
    spanish: string;
  };
  nav: {
    links: NavLink[];
    homeAria: string;
    contactShort: string;
    contactLong: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    close: string;
  };
  hero: {
    headlineBefore: string;
    headlineAccent: string;
    sub: string;
    cta: string;
    secondary: string;
  };
  thesis: {
    label: string;
    title: string;
    body: string;
    quote: string;
    mission: string;
    claims: TitleBody[];
  };
  approach: {
    label: string;
    title: string;
    body: string;
    pillars: TitleBody[];
  };
  mechanism: {
    label: string;
    title: string;
    body: string;
    parts: TitleBody[];
    loopLabel: string;
    loop: string[];
  };
  proof: {
    label: string;
    title: string;
    signals: TitleBody[];
  };
  systems: {
    label: string;
    title: string;
    body: string;
    mockCaption: string;
    groups: SystemGroup[];
  };
  failures: {
    label: string;
    title: string;
    body: string;
    modes: TitleBody[];
  };
  examples: {
    label: string;
    title: string;
    body: string;
    fitSignal: string;
    items: ExampleItem[];
  };
  process: {
    label: string;
    title: string;
    steps: ProcessStep[];
  };
  engagement: {
    label: string;
    title: string;
    body: string;
    known: KnownItem[];
    tableCaption: string;
    colDimension: string;
    colAgency: string;
    colRylkon: string;
    compare: CompareRow[];
  };
  midCta: {
    label: string;
    title: string;
    body: string;
    cta: string;
    book: string;
  };
  audience: {
    chapter: string;
    label: string;
    title: string;
    body: string;
    items: TitleBody[];
  };
  faq: {
    label: string;
    title: string;
    items: FaqItem[];
  };
  contact: {
    label: string;
    title: string;
    body: string;
    bookExternal: string;
    bookMail: string;
    bookHintExternal: string;
    bookHintMail: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    statusIdle: string;
    statusSending: string;
    statusReady: string;
    statusCopied: string;
    statusError: string;
    fallbackBefore: string;
    fallbackEmail: string;
    fallbackMid: string;
    fallbackCopy: string;
    fallbackCopied: string;
    fallbackOr: string;
    fallbackBook: string;
    fallbackEnd: string;
    mailSubject: string;
    callSubject: string;
    callBodyWithDraft: string;
    callBodyEmpty: string;
  };
  footer: {
    blurb: string;
    links: NavLink[];
  };
  notFound: {
    title: string;
    body: string;
    home: string;
  };
  jsonLd: {
    orgDescription: string;
    faq: FaqItem[];
  };
};

const en: Dictionary = {
  meta: {
    title: "Rylkon — Programmatic SEO that earns every URL",
    description:
      "Rylkon designs programmatic SEO systems: validated data, strong templates, and controlled indexing so long-tail pages rank — and stay indexed.",
    ogTitle: "Rylkon — Programmatic SEO",
    ogDescription:
      "Templates, structured data, and indexing discipline for organic growth that compounds.",
  },
  common: {
    skipToContent: "Skip to content",
    language: "Language",
    english: "EN",
    spanish: "ES",
  },
  nav: {
    links: [
      { href: "#thesis", label: "Thesis" },
      { href: "#mechanism", label: "How it works" },
      { href: "#systems", label: "Systems" },
      { href: "#process", label: "Process" },
      { href: "#engagement", label: "Engagement" },
      { href: "#faq", label: "FAQ" },
    ],
    homeAria: "Rylkon home",
    contactShort: "Contact",
    contactLong: "Get in touch",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    headlineBefore: "Your reliable link to effortless",
    headlineAccent: "Search Growth",
    sub: "Programmatic SEO built for clarity and scale — templates, structure, and indexing discipline that turn long-tail demand into durable traffic.",
    cta: "Get in touch",
    secondary: "See how we work",
  },
  thesis: {
    label: "Organic Growth Infrastructure",
    title: "Enterprises already have the information. They lack the publish path.",
    body: "Discoverability debt is the distance between what you know in systems of record and what search — or AI retrieval — can find, trust, and cite. Rylkon closes that gap with continuous transformation, not another content calendar.",
    quote:
      "Information should publish itself. Growth should be engineered. Knowledge should be connected. Everything intended to be public should be discoverable.",
    mission: "Mission: build the infrastructure behind organic growth.",
    claims: [
      {
        title: "Discoverability is infrastructure",
        body: "Treating it as media produces campaigns. Treating it as infrastructure produces systems that keep public knowledge converging on live enterprise data.",
      },
      {
        title: "Start from systems of record",
        body: "Catalogs, listings, providers, routes, and SKUs already exist in warehouses, PIMs, and CRMs. Blank pages invite invention. Structured data invites validation and lineage.",
      },
      {
        title: "Graphs beat keyword lists",
        body: "Keywords are retrieval hints. Entities, relations, and provenance are what classic search and generative engines can trust, cite, and keep fresh.",
      },
    ],
  },
  approach: {
    label: "The Rylkon approach",
    title: "More pages only help when each one deserves to rank.",
    body: "We build the system behind durable organic coverage: data validation, page architecture, and a rollout plan your index can absorb.",
    pillars: [
      {
        title: "Prove the data first",
        body: "If pages only swap a city name or SKU, they will not hold. We confirm real uniqueness before anything ships.",
      },
      {
        title: "Raise the template floor",
        body: "Each URL gets enough substance, structure, and internal links to satisfy intent — not just fill a slot.",
      },
      {
        title: "Scale with indexing control",
        body: "Pilot, measure, expand. Crawl budget and freshness rules keep growth from turning into a cliff.",
      },
    ],
  },
  mechanism: {
    label: "How programmatic SEO works",
    title: "One template. Distinct data. Controlled publishing.",
    body: "Programmatic SEO creates large volumes of search-targeted pages with templates, structured data, and automation — instead of writing each URL by hand. When it works, long-tail coverage compounds. When the data is thin, Google can deindex the whole effort.",
    parts: [
      {
        title: "Template",
        body: "Defines layout, modules, schema, and CTAs — the quality floor every generated URL must clear. Static chrome stays stable; dynamic slots pull from real entities.",
      },
      {
        title: "Data",
        body: "Creates uniqueness. If only a city name or SKU swaps into the same paragraph, crawlers treat it as thin. Attributes, relationships, and local context are the moat.",
      },
      {
        title: "Automation",
        body: "Publishes at the speed of inventory change. Static generation and edge delivery keep crawl efficiency high — but only after validation, canonicals, and linking rules are in place.",
      },
    ],
    loopLabel: "Rylkon loop",
    loop: [
      "Connect sources",
      "Resolve entities",
      "Materialize graph",
      "Enrich under policy",
      "Publish projections",
      "Measure & feed back",
    ],
  },
  proof: {
    label: "Why teams hire Rylkon",
    title: "Straight filters. No vanity theater.",
    signals: [
      {
        title: "Built for operators",
        body: "We work with SaaS, marketplaces, and data-rich products that already have something unique to publish — not invented inventory.",
      },
      {
        title: "What we won’t do",
        body: "No doorway farms. No city-name swaps. No mass publishing before the template and data can earn rankings.",
      },
      {
        title: "How we measure fit",
        body: "Indexation health, template quality, and query intent — before volume. Scale only after the pilot holds.",
      },
    ],
  },
  systems: {
    label: "What we build",
    title: "Page systems matched to how people search.",
    body: "One strong template. Distinct data on every URL. A publishing pace Google can keep up with.",
    mockCaption:
      "Example shape — unique data modules, schema, and internal links on every generated URL.",
    groups: [
      {
        label: "Demand",
        items: [
          {
            name: "Integration pages",
            detail:
              "“Connect A to B” libraries that meet high-intent workflow searches with real product value.",
            example: "/integrations/slack",
          },
          {
            name: "Comparison pages",
            detail:
              "“X vs Y” coverage from feature data — written to help buyers decide, not to advertise.",
            example: "/compare/pro-vs-free",
          },
          {
            name: "Use-case hubs",
            detail:
              "Template and workflow libraries that turn in-product assets into indexable demand.",
            example: "/use-cases/onboarding",
          },
        ],
      },
      {
        label: "Coverage",
        items: [
          {
            name: "Location directories",
            detail:
              "Geo × category trees for local and marketplace demand, powered by structured place data.",
            example: "/locations/austin-tx",
          },
          {
            name: "Listing SEO",
            detail:
              "Crawlable inventory with freshness rules so scale does not become index bloat.",
            example: "/listings/[sku]",
          },
          {
            name: "Data & glossary",
            detail:
              "Stats slices and definition clusters that build topical authority across the long-tail.",
            example: "/glossary/crawl-budget",
          },
        ],
      },
    ],
  },
  failures: {
    label: "Failure modes",
    title: "Most programmatic SEO fails for predictable reasons.",
    body: "Industry analyses put failure rates high when teams scale before the template and data deserve rankings. We treat these failure modes as design constraints — not postmortems after the cliff.",
    modes: [
      {
        title: "Thin content at scale",
        body: "If pages only swap a city, SKU, or competitor name into the same boilerplate, AI-era crawlers detect the pattern fast. Volume without substance accelerates distrust — not rankings.",
      },
      {
        title: "No unique data advantage",
        body: "Public datasets everyone else can scrape are not a moat. Successful libraries ride proprietary or deeply structured truth: inventory, fees, reviews, compatibility, provider graphs.",
      },
      {
        title: "Indexing & crawl cliffs",
        body: "Fifty thousand URLs without quality gates burn crawl budget. Inconsistent pages get selectively dropped. Traffic cliffs often follow unchecked scale — not “bad luck.”",
      },
      {
        title: "One-time export projects",
        body: "The first generation ships. The second generation of data changes breaks templates, schema, and internal links. Without platform ownership, programmatic SEO dies in maintenance.",
      },
    ],
  },
  examples: {
    label: "Patterns that hold",
    title: "The winners share one rule: proprietary or deeply structured data.",
    body: "Classic scale plays — currency converters, destination guides, property listings — work because each page is genuinely useful for its query. We map those patterns onto your inventory, not copy their domains.",
    fitSignal: "Fit signal",
    items: [
      {
        pattern: "Converter / calculator libraries",
        lesson:
          "Each URL serves a specific query with proprietary numbers, fees, or history — not a paragraph with two tokens swapped.",
        rylkon:
          "Use when your product produces live, query-specific computation or rates.",
      },
      {
        pattern: "Destination / things-to-do hubs",
        lesson:
          "Pages win because they aggregate irreplaceable local evidence: reviews, ratings, photos, booking context.",
        rylkon:
          "Use when place × category data is deep enough to ground each hub.",
      },
      {
        pattern: "Listing / property surfaces",
        lesson:
          "Templates stay consistent; valuations, neighborhood stats, and price history make every page substantively different.",
        rylkon:
          "Use for inventory that already has entity-level attributes and freshness SLOs.",
      },
      {
        pattern: "Integration & comparison matrices",
        lesson:
          "Buyers search “connect A to B” and “X vs Y” with high intent. Feature truth — not fluff — decides the click.",
        rylkon:
          "Use for SaaS catalogs where workflows and feature tables are governed product data.",
      },
    ],
  },
  process: {
    label: "How engagements run",
    title: "Compound traffic. Avoid the cliff.",
    steps: [
      {
        n: "01",
        title: "Validate the data source",
        body: "Confirm each page can carry genuine uniqueness before anything ships. If the data fails that test, we stop — volume will not save it.",
      },
      {
        n: "02",
        title: "Raise the template floor",
        body: "Modules, schema, intro context, and internal links so every URL meets the same quality bar as a strong manual page.",
      },
      {
        n: "03",
        title: "Pilot a test batch",
        body: "Start with tens to low hundreds of URLs. Watch indexing and engagement for weeks. Weak indexation means fix the system — don’t scale.",
      },
      {
        n: "04",
        title: "Scale in waves",
        body: "Add batches with crawl hygiene, freshness rules, and linking between related entities. Growth compounds; cliffs come from unchecked dumps.",
      },
    ],
  },
  engagement: {
    label: "Buyer clarity",
    title: "Opaque retainers hide cost. Systems should show their shape.",
    body: "Enterprise AI and SEO buyers often face quote-only pricing with unclear levers. We borrow the opposite discipline: name what is known, what drives scope, and what we will not sell — so you can sanity-check fit before a sales call.",
    known: [
      {
        label: "What you buy",
        detail:
          "A discoverability system: data validation, template architecture, schema, internal linking, and a controlled rollout — not a bag of articles.",
      },
      {
        label: "How we price conversations",
        detail:
          "Scoped engagements around opportunity audit → system design → pilot → scale. Clear deliverables and quality gates before volume expands.",
      },
      {
        label: "What moves the quote",
        detail:
          "Data complexity, number of page systems, locales, integration depth, and how fast inventory changes. More moving parts = more engineering, not more fluff.",
      },
      {
        label: "What we refuse to sell",
        detail:
          "Ranking guarantees, doorway farms, link brokerage, or “GPT pages” without lineage to source data. Those destroy domain trust.",
      },
    ],
    tableCaption: "Agency vs Rylkon — at a glance",
    colDimension: "Dimension",
    colAgency: "Typical agency",
    colRylkon: "Rylkon",
    compare: [
      {
        dim: "Primary output",
        agency: "Reports, pages, retainers",
        rylkon: "Running page systems + ops loops",
      },
      {
        dim: "Scaling model",
        agency: "Headcount and SOWs",
        rylkon: "Templates × governed data",
      },
      {
        dim: "Freshness",
        agency: "Editorial cycles",
        rylkon: "Publish when source truth changes",
      },
      {
        dim: "Success metric",
        agency: "Activity and vanity traffic",
        rylkon: "Index health, coverage, durable demand",
      },
    ],
  },
  midCta: {
    label: "Next step",
    title: "Ready for a straight read on your programmatic opportunity?",
    body: "Share the data and page types you’re considering. We’ll tell you what’s viable — and what to kill.",
    cta: "Start an audit conversation",
    book: "Or book a call",
  },
  audience: {
    chapter: "Chapter",
    label: "Who it’s for",
    title: "Best fit when you have data — and a reason to scale it into search.",
    body: "If your moat is structured truth, programmatic pages can compound. If not, we say so early.",
    items: [
      {
        title: "SaaS & platforms",
        body: "Own integration, comparison, and use-case queries where buyers are already deciding.",
      },
      {
        title: "Marketplaces",
        body: "Turn inventory and location data into crawlable coverage — without drowning the index.",
      },
      {
        title: "Data-rich products",
        body: "Publish proprietary datasets as useful pages that compound reach over time.",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Straight answers before you book time.",
    items: [
      {
        q: "What is programmatic SEO, in plain terms?",
        a: "Templates + structured data + automation that produce many search-targeted pages — each one unique enough to deserve its query. Scale without uniqueness is thin content with a fancy name.",
      },
      {
        q: "Won’t this create thin content?",
        a: "Only if the data is thin. We validate uniqueness first, raise the template floor, and refuse patterns that can’t earn rankings. City-name swaps and doorway farms are out.",
      },
      {
        q: "How is this different from an SEO agency?",
        a: "Agencies scale with people and retainers. We design page systems that publish from governed data — with freshness, schema, and indexing controls as first-class work, not afterthoughts.",
      },
      {
        q: "What is “Organic Growth Infrastructure”?",
        a: "Rylkon’s category: software and systems that turn operational data into durable discoverability — for classic search and AI retrieval — instead of perpetual page production.",
      },
      {
        q: "How long before we see signal?",
        a: "Most engagements start with a focused pilot (tens to low hundreds of URLs). You should see indexation and early ranking movement before you multiply volume. If indexing stays weak, we fix the system — we don’t scale into a cliff.",
      },
      {
        q: "What data do we need?",
        a: "Enough structured truth to make each URL distinct — product features, places, inventory, workflows, fees, compatibility, or proprietary stats. If the moat isn’t there, we say so early.",
      },
      {
        q: "How do engagements work — and what drives scope?",
        a: "Audit → system design → pilot → controlled scale. Scope moves with data complexity, page systems, locales, integrations, and inventory velocity — the same levers opaque enterprise quotes hide, but we name them up front.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No honest infrastructure vendor can. We commit to system quality: coverage, freshness, validity, crawl health, and a rollout your index can absorb.",
      },
    ],
  },
  contact: {
    label: "Start here",
    title: "Tell us what you want to rank for at scale.",
    body: "Share your data, market, and candidate page types. You’ll get a straight answer on fit — and a clear next step if we’re a match.",
    bookExternal: "Book a strategy call",
    bookMail: "Request a strategy call",
    bookHintExternal: "Opens our scheduling link.",
    bookHintMail: "Opens your email with a short call request.",
    name: "Name",
    namePlaceholder: "Alex Rivera",
    email: "Work email",
    emailPlaceholder: "alex@company.com",
    message: "What should we look at?",
    messagePlaceholder: "Integrations, locations, comparisons, listings…",
    submit: "Send message",
    submitting: "Opening mail…",
    statusIdle: "We’ll open your email app with a draft.",
    statusSending: "Preparing your message…",
    statusReady: "Draft ready — check your mail app.",
    statusCopied: "Message copied to clipboard.",
    statusError: "Something blocked the handoff. Use the fallback below.",
    fallbackBefore: "If your mail app didn’t open,",
    fallbackEmail: "tap here to email us",
    fallbackMid: ",",
    fallbackCopy: "copy your message",
    fallbackCopied: "copied",
    fallbackOr: ", or",
    fallbackBook: "book a call",
    fallbackEnd: ".",
    mailSubject: "Rylkon inquiry —",
    callSubject: "Rylkon strategy call",
    callBodyWithDraft:
      "Hi Rylkon,\n\nI'd like to book a strategy call.\n\nName: {name}\nEmail: {email}\n\nContext:\n{message}\n",
    callBodyEmpty:
      "Hi Rylkon,\n\nI'd like to book a strategy call.\n\nContext / page types:\n",
  },
  footer: {
    blurb:
      "Organic Growth Infrastructure — programmatic SEO that earns every URL.",
    links: [
      { href: "#thesis", label: "Thesis" },
      { href: "#mechanism", label: "How it works" },
      { href: "#systems", label: "Systems" },
      { href: "#engagement", label: "Engagement" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
  },
  notFound: {
    title: "This URL didn’t earn a ranking.",
    body: "The page you’re looking for isn’t here. Head home — or tell us what you were trying to find.",
    home: "Back to home",
  },
  jsonLd: {
    orgDescription:
      "Organic Growth Infrastructure: programmatic SEO systems that turn enterprise data into discoverable knowledge.",
    faq: [
      {
        q: "What is programmatic SEO, in plain terms?",
        a: "Templates plus structured data plus automation that produce many search-targeted pages — each unique enough to deserve its query.",
      },
      {
        q: "What is Organic Growth Infrastructure?",
        a: "Systems that turn operational data into durable discoverability for classic search and AI retrieval — instead of perpetual page production.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No. We commit to system quality: coverage, freshness, validity, crawl health, and a rollout your index can absorb.",
      },
    ],
  },
};

const es: Dictionary = {
  meta: {
    title: "Rylkon — SEO programático que vale cada URL",
    description:
      "Rylkon diseña sistemas de SEO programático: datos reales, plantillas sólidas e indexación controlada para que las páginas de cola larga posicionen y se mantengan en el índice.",
    ogTitle: "Rylkon — SEO programático",
    ogDescription:
      "Plantillas, datos estructurados e indexación disciplinada para un crecimiento orgánico que se sostiene en el tiempo.",
  },
  common: {
    skipToContent: "Saltar al contenido",
    language: "Idioma",
    english: "EN",
    spanish: "ES",
  },
  nav: {
    links: [
      { href: "#thesis", label: "Ideas" },
      { href: "#mechanism", label: "Cómo funciona" },
      { href: "#systems", label: "Sistemas" },
      { href: "#process", label: "Proceso" },
      { href: "#engagement", label: "Cómo contratamos" },
      { href: "#faq", label: "Preguntas" },
    ],
    homeAria: "Inicio de Rylkon",
    contactShort: "Contacto",
    contactLong: "Hablemos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menu: "Menú",
    close: "Cerrar",
  },
  hero: {
    headlineBefore: "Tu forma fiable de crecer en",
    headlineAccent: "búsqueda orgánica",
    sub: "SEO programático con criterio: plantillas claras, datos que aportan valor e indexación cuidada para convertir búsquedas de cola larga en tráfico que dura.",
    cta: "Hablemos",
    secondary: "Cómo trabajamos",
  },
  thesis: {
    label: "Infraestructura de crecimiento orgánico",
    title: "Las empresas ya tienen la información. Lo que falta es publicarla bien.",
    body: "Hay un desfase entre lo que tu negocio sabe en sus sistemas internos y lo que Google — o una IA — puede encontrar, confiar y citar. Rylkon cierra ese hueco con publicación continua desde tus datos, no con otro calendario de contenidos.",
    quote:
      "La información debería publicarse sola. El crecimiento debería diseñarse. El conocimiento debería estar conectado. Todo lo que deba ser público debería poder encontrarse.",
    mission: "Misión: construir la infraestructura del crecimiento orgánico.",
    claims: [
      {
        title: "Aparecer en búsqueda es un problema de infraestructura",
        body: "Si lo tratás como marketing, terminás en campañas. Si lo tratás como infraestructura, construís sistemas que mantienen actualizado lo que el mundo ve sobre tu negocio.",
      },
      {
        title: "Partí de donde ya vive la verdad",
        body: "Catálogos, avisos, proveedores, rutas y SKUs ya están en warehouses, PIMs y CRMs. Empezar desde una página en blanco invita a inventar. Empezar desde datos estructurados invita a validar y a trazar de dónde salió cada dato.",
      },
      {
        title: "Mejor un grafo de entidades que una lista de keywords",
        body: "Las keywords ayudan a entender la demanda. Las entidades, relaciones y el origen de cada dato son lo que la búsqueda clásica y los motores generativos pueden confiar, citar y mantener al día.",
      },
    ],
  },
  approach: {
    label: "El enfoque Rylkon",
    title: "Más páginas solo sirven si cada una merece posicionar.",
    body: "Armamos el sistema detrás de una cobertura orgánica que se sostiene: validamos los datos, diseñamos la arquitectura de páginas y definimos un ritmo de publicación que el índice pueda absorber.",
    pillars: [
      {
        title: "Primero, probar los datos",
        body: "Si cada página solo cambia el nombre de una ciudad o un SKU, no va a aguantar. Confirmamos que hay diferencia real antes de publicar nada.",
      },
      {
        title: "Después, elevar el estándar de la plantilla",
        body: "Cada URL necesita sustancia, estructura y enlaces internos suficientes para responder a la intención de búsqueda — no solo ocupar un lugar en el sitemap.",
      },
      {
        title: "Recién ahí, escalar con control",
        body: "Piloto, medición y expansión. Cuidamos el presupuesto de rastreo y la frescura de los datos para que crecer no se convierta en una caída brusca de tráfico.",
      },
    ],
  },
  mechanism: {
    label: "Cómo funciona el SEO programático",
    title: "Una plantilla. Datos distintos. Publicación con control.",
    body: "El SEO programático genera muchas páginas orientadas a búsqueda a partir de plantillas, datos estructurados y automatización — sin escribir cada URL a mano. Cuando los datos aportan valor, la cobertura de cola larga se multiplica. Cuando son pobres, Google puede sacar del índice todo el esfuerzo.",
    parts: [
      {
        title: "Plantilla",
        body: "Define la estructura, los módulos, el marcado y los llamados a la acción: el mínimo de calidad que toda URL generada tiene que cumplir. Lo fijo se mantiene estable; lo dinámico sale de entidades reales.",
      },
      {
        title: "Datos",
        body: "Son lo que hace única a cada página. Si solo cambia una ciudad o un SKU en el mismo párrafo, los rastreadores lo detectan como contenido vacío. Atributos, relaciones y contexto local son la verdadera ventaja.",
      },
      {
        title: "Automatización",
        body: "Publica al ritmo en que cambia el inventario. La generación estática y la entrega en el edge ayudan al rastreo — pero solo después de validar, definir canónicos y armar las reglas de enlazado interno.",
      },
    ],
    loopLabel: "El ciclo Rylkon",
    loop: [
      "Conectar fuentes",
      "Resolver entidades",
      "Armar el grafo",
      "Enriquecer con reglas",
      "Publicar las páginas",
      "Medir y mejorar",
    ],
  },
  proof: {
    label: "Por qué eligen Rylkon",
    title: "Filtros claros. Sin métricas de vanidad.",
    signals: [
      {
        title: "Para equipos que operan de verdad",
        body: "Trabajamos con SaaS, marketplaces y productos con datos propios que ya tienen algo único para publicar — no inventamos catálogos para “llenar” el sitio.",
      },
      {
        title: "Lo que no hacemos",
        body: "No armamos granjas de páginas vacías. No reemplazamos una ciudad por otra en el mismo texto. No publicamos a lo grande antes de que la plantilla y los datos puedan competir.",
      },
      {
        title: "Cómo sabemos si tiene sentido",
        body: "Miramos indexación, calidad de plantilla e intención de búsqueda — antes del volumen. Escalamos solo cuando el piloto se sostiene.",
      },
    ],
  },
  systems: {
    label: "Qué construimos",
    title: "Sistemas de páginas pensados como busca la gente.",
    body: "Una plantilla sólida. Datos distintos en cada URL. Un ritmo de publicación que Google pueda seguir.",
    mockCaption:
      "Ejemplo de forma: módulos de datos propios, marcado estructurado y enlaces internos en cada URL generada.",
    groups: [
      {
        label: "Demanda",
        items: [
          {
            name: "Páginas de integración",
            detail:
              "Bibliotecas de “conectar A con B” que responden búsquedas con alta intención de compra y muestran valor real del producto.",
            example: "/integrations/slack",
          },
          {
            name: "Páginas de comparación",
            detail:
              "Cobertura “X vs Y” basada en datos de producto — hechas para ayudar a decidir, no para hacer publicidad.",
            example: "/compare/pro-vs-free",
          },
          {
            name: "Centros de casos de uso",
            detail:
              "Bibliotecas de plantillas y flujos que convierten lo que ya existe en el producto en demanda que se puede indexar.",
            example: "/use-cases/onboarding",
          },
        ],
      },
      {
        label: "Cobertura",
        items: [
          {
            name: "Directorios por ubicación",
            detail:
              "Árboles de lugar × categoría para demanda local y de marketplace, apoyados en datos geográficos estructurados.",
            example: "/locations/austin-tx",
          },
          {
            name: "SEO de listados",
            detail:
              "Inventario rastreable con reglas de actualización, para que escalar no llene el índice de páginas inútiles.",
            example: "/listings/[sku]",
          },
          {
            name: "Datos y glosario",
            detail:
              "Recortes de estadísticas y clusters de definiciones que construyen autoridad temática en la cola larga.",
            example: "/glossary/crawl-budget",
          },
        ],
      },
    ],
  },
  failures: {
    label: "Por qué suele fallar",
    title: "El SEO programático falla casi siempre por las mismas razones.",
    body: "Cuando los equipos escalan antes de que la plantilla y los datos merezcan posicionar, el fracaso es frecuente. Nosotros tratamos estos riesgos como límites de diseño — no como autopsias después de perder el tráfico.",
    modes: [
      {
        title: "Contenido vacío a escala",
        body: "Si las páginas solo cambian una ciudad, un SKU o un competidor dentro del mismo texto genérico, los rastreadores actuales lo detectan enseguida. Más volumen sin sustancia genera desconfianza, no posiciones.",
      },
      {
        title: "Sin datos que te diferencien",
        body: "Un dataset público que cualquiera puede copiar no es ventaja. Los sistemas que funcionan se apoyan en información propia o muy bien estructurada: inventario, precios, reseñas, compatibilidad, directorios de proveedores.",
      },
      {
        title: "Caídas de indexación y rastreo",
        body: "Cincuenta mil URLs sin controles de calidad gastan el presupuesto de rastreo. Las páginas flojas se caen del índice de a poco. Las caídas bruscas de tráfico suelen venir de escalar sin freno — no de “mala suerte”.",
      },
      {
        title: "Proyectos de un solo export",
        body: "La primera tanda sale. Cuando los datos cambian, se rompen las plantillas, el marcado y los enlaces internos. Sin alguien dueño del sistema, el SEO programático muere en el mantenimiento.",
      },
    ],
  },
  examples: {
    label: "Patrones que sí funcionan",
    title: "Los que ganan tienen una regla: datos propios o muy bien estructurados.",
    body: "Los ejemplos clásicos — convertidores de moneda, guías de destino, fichas de propiedades — funcionan porque cada página sirve de verdad a su búsqueda. Nosotros adaptamos esos patrones a tu inventario; no copiamos sus sitios.",
    fitSignal: "Cuándo encaja",
    items: [
      {
        pattern: "Convertidores y calculadoras",
        lesson:
          "Cada URL responde a una búsqueda concreta con números, comisiones o historial propios — no con un párrafo donde se cambiaron dos palabras.",
        rylkon:
          "Tiene sentido cuando tu producto genera cálculos o tarifas en vivo según la consulta.",
      },
      {
        pattern: "Guías de destino y “qué hacer”",
        lesson:
          "Ganan porque juntan evidencia local que no se puede inventar: reseñas, ratings, fotos y contexto de reserva.",
        rylkon:
          "Tiene sentido cuando los datos de lugar × categoría son lo bastante profundos para sostener cada hub.",
      },
      {
        pattern: "Fichas de listados y propiedades",
        lesson:
          "La plantilla se mantiene; valuaciones, datos del barrio e historial de precios hacen que cada página sea distinta de verdad.",
        rylkon:
          "Tiene sentido con inventario que ya tiene atributos por entidad y reglas claras de actualización.",
      },
      {
        pattern: "Integraciones y comparativas",
        lesson:
          "Quien busca “conectar A con B” o “X vs Y” ya está cerca de decidir. Gana la verdad del producto, no el relleno.",
        rylkon:
          "Tiene sentido en catálogos SaaS donde flujos y tablas de funciones son datos de producto bien gobernados.",
      },
    ],
  },
  process: {
    label: "Cómo trabajamos juntos",
    title: "Tráfico que se suma. Sin caídas bruscas.",
    steps: [
      {
        n: "01",
        title: "Validar la fuente de datos",
        body: "Confirmamos que cada página puede ser realmente distinta antes de publicar. Si los datos no pasan esa prueba, paramos: el volumen no lo arregla.",
      },
      {
        n: "02",
        title: "Elevar el estándar de la plantilla",
        body: "Módulos, marcado, contexto introductorio y enlaces internos para que cada URL llegue al mismo nivel de calidad que una buena página escrita a mano.",
      },
      {
        n: "03",
        title: "Probar con un lote chico",
        body: "Empezamos con decenas o unos cientos de URLs. Miramos indexación y comportamiento durante semanas. Si la indexación es débil, arreglamos el sistema — no escalamos.",
      },
      {
        n: "04",
        title: "Escalar por oleadas",
        body: "Sumamos lotes cuidando el rastreo, la frescura y los enlaces entre entidades relacionadas. Así el crecimiento se acumula; las caídas vienen de publicar sin control.",
      },
    ],
  },
  engagement: {
    label: "Claridad al contratar",
    title: "Los contratos opacos esconden el costo. Un sistema debería verse claro.",
    body: "En AI y SEO enterprise es común recibir cotizaciones sin lista de precios y sin saber qué mueve el número. Nosotros hacemos lo contrario: decimos qué incluye el trabajo, qué cambia el alcance y qué no vendemos — para que puedas evaluar si encajamos antes de una reunión comercial.",
    known: [
      {
        label: "Qué estás comprando",
        detail:
          "Un sistema para aparecer en búsqueda: validación de datos, arquitectura de plantillas, marcado, enlaces internos y un rollout controlado — no un paquete de artículos sueltos.",
      },
      {
        label: "Cómo se estructura el trabajo",
        detail:
          "Proyectos acotados: auditoría de oportunidad → diseño del sistema → piloto → escala. Entregables claros y controles de calidad antes de subir el volumen.",
      },
      {
        label: "Qué hace subir o bajar el alcance",
        detail:
          "Complejidad de los datos, cantidad de tipos de página, idiomas o mercados, profundidad de integraciones y velocidad con la que cambia el inventario. Más complejidad es más ingeniería, no más relleno.",
      },
      {
        label: "Qué no vendemos",
        detail:
          "Garantías de posición, granjas de páginas vacías, compra de enlaces ni “páginas hechas con GPT” sin trazabilidad a tus datos. Eso erosiona la confianza del dominio.",
      },
    ],
    tableCaption: "Agencia vs Rylkon — de un vistazo",
    colDimension: "Dimensión",
    colAgency: "Agencia típica",
    colRylkon: "Rylkon",
    compare: [
      {
        dim: "Qué entregás",
        agency: "Reportes, páginas y honorarios mensuales",
        rylkon: "Sistemas de páginas y operación continua",
      },
      {
        dim: "Cómo escala",
        agency: "Más gente y más contratos",
        rylkon: "Plantillas × datos bien gobernados",
      },
      {
        dim: "Actualización",
        agency: "Ciclos editoriales",
        rylkon: "Se publica cuando cambia la fuente",
      },
      {
        dim: "Cómo se mide el éxito",
        agency: "Actividad y tráfico de vanidad",
        rylkon: "Salud del índice, cobertura y demanda que dura",
      },
    ],
  },
  midCta: {
    label: "Siguiente paso",
    title: "¿Querés una mirada directa a tu oportunidad programática?",
    body: "Compartí los datos y los tipos de página que estás considerando. Te decimos qué tiene sentido — y qué conviene descartar.",
    cta: "Empezar con una auditoría",
    book: "O agendar una llamada",
  },
  audience: {
    chapter: "Capítulo",
    label: "Para quién es",
    title: "Encaja cuando tenés datos — y una razón para llevarlos a la búsqueda.",
    body: "Si tu ventaja son datos estructurados, las páginas programáticas pueden multiplicarse. Si no, te lo decimos temprano.",
    items: [
      {
        title: "SaaS y plataformas",
        body: "Ganá las búsquedas de integración, comparación y casos de uso donde el comprador ya está decidiendo.",
      },
      {
        title: "Marketplaces",
        body: "Convertí inventario y ubicaciones en cobertura que Google pueda rastrear — sin saturar el índice.",
      },
      {
        title: "Productos con datos propios",
        body: "Publicá datasets exclusivos como páginas útiles que suman alcance con el tiempo.",
      },
    ],
  },
  faq: {
    label: "Preguntas frecuentes",
    title: "Respuestas claras antes de agendar una reunión.",
    items: [
      {
        q: "¿Qué es el SEO programático, en simple?",
        a: "Plantillas + datos estructurados + automatización para generar muchas páginas orientadas a búsqueda — cada una lo bastante distinta como para merecer su consulta. Escalar sin diferencia real es contenido vacío con nombre sofisticado.",
      },
      {
        q: "¿No va a generar contenido vacío?",
        a: "Solo si los datos son pobres. Primero validamos que cada URL sea distinta, elevamos el estándar de la plantilla y rechazamos patrones que no puedan competir. Cambiar solo el nombre de una ciudad o armar granjas de páginas queda fuera.",
      },
      {
        q: "¿En qué se diferencia de una agencia de SEO?",
        a: "Las agencias escalan con más gente y honorarios mensuales. Nosotros diseñamos sistemas de páginas que se publican desde datos gobernados — con actualización, marcado y control de indexación como parte central del trabajo, no como un extra.",
      },
      {
        q: "¿Qué es la “infraestructura de crecimiento orgánico”?",
        a: "La categoría de Rylkon: software y sistemas que convierten datos operativos en presencia durable en búsqueda — clásica y con IA — en lugar de producir páginas a mano sin parar.",
      },
      {
        q: "¿Cuánto tarda en verse alguna señal?",
        a: "Casi siempre arrancamos con un piloto chico (decenas o unos cientos de URLs). Deberías ver indexación y movimiento temprano de posiciones antes de multiplicar el volumen. Si la indexación sigue débil, arreglamos el sistema — no empujamos hacia una caída de tráfico.",
      },
      {
        q: "¿Qué datos hacen falta?",
        a: "Suficiente información estructurada para que cada URL sea distinta: funciones del producto, lugares, inventario, flujos, comisiones, compatibilidad o estadísticas propias. Si no hay ventaja real, te lo decimos temprano.",
      },
      {
        q: "¿Cómo es el trabajo — y qué define el alcance?",
        a: "Auditoría → diseño del sistema → piloto → escala controlada. El alcance cambia con la complejidad de los datos, los tipos de página, mercados o idiomas, integraciones y velocidad del inventario. Son las mismas variables que suelen quedar ocultas en cotizaciones opacas; nosotros las nombramos de entrada.",
      },
      {
        q: "¿Garantizan posiciones?",
        a: "Ningún proveedor serio de infraestructura puede hacerlo. Nos comprometemos con la calidad del sistema: cobertura, frescura, validez, salud de rastreo y un ritmo de publicación que tu índice pueda absorber.",
      },
    ],
  },
  contact: {
    label: "Empezá acá",
    title: "Contanos qué querés posicionar a escala.",
    body: "Compartí tus datos, tu mercado y los tipos de página que tenés en mente. Vas a recibir una respuesta directa sobre si encajamos — y un siguiente paso claro si tiene sentido seguir.",
    bookExternal: "Agendar una llamada estratégica",
    bookMail: "Pedir una llamada estratégica",
    bookHintExternal: "Abre nuestro enlace de agenda.",
    bookHintMail: "Abre tu correo con un pedido breve de llamada.",
    name: "Nombre",
    namePlaceholder: "Alex Rivera",
    email: "Email de trabajo",
    emailPlaceholder: "alex@empresa.com",
    message: "¿Qué deberíamos mirar?",
    messagePlaceholder: "Integraciones, ubicaciones, comparaciones, listados…",
    submit: "Enviar mensaje",
    submitting: "Abriendo el correo…",
    statusIdle: "Vamos a abrir tu app de correo con un borrador.",
    statusSending: "Preparando tu mensaje…",
    statusReady: "Borrador listo — revisá tu app de correo.",
    statusCopied: "Mensaje copiado al portapapeles.",
    statusError: "Algo impidió abrir el correo. Usá la alternativa de abajo.",
    fallbackBefore: "Si tu app de correo no se abrió,",
    fallbackEmail: "hacé clic acá para escribirnos",
    fallbackMid: ",",
    fallbackCopy: "copiá tu mensaje",
    fallbackCopied: "copiado",
    fallbackOr: ", o",
    fallbackBook: "agendá una llamada",
    fallbackEnd: ".",
    mailSubject: "Consulta Rylkon —",
    callSubject: "Llamada estratégica Rylkon",
    callBodyWithDraft:
      "Hola Rylkon,\n\nQuiero agendar una llamada estratégica.\n\nNombre: {name}\nEmail: {email}\n\nContexto:\n{message}\n",
    callBodyEmpty:
      "Hola Rylkon,\n\nQuiero agendar una llamada estratégica.\n\nContexto / tipos de página:\n",
  },
  footer: {
    blurb:
      "Infraestructura de crecimiento orgánico — SEO programático que vale cada URL.",
    links: [
      { href: "#thesis", label: "Ideas" },
      { href: "#mechanism", label: "Cómo funciona" },
      { href: "#systems", label: "Sistemas" },
      { href: "#engagement", label: "Cómo contratamos" },
      { href: "#faq", label: "Preguntas" },
      { href: "#contact", label: "Contacto" },
    ],
  },
  notFound: {
    title: "Esta URL no mereció un lugar en el índice.",
    body: "La página que buscás no está acá. Volvé al inicio — o contanos qué intentabas encontrar.",
    home: "Volver al inicio",
  },
  jsonLd: {
    orgDescription:
      "Infraestructura de crecimiento orgánico: sistemas de SEO programático que convierten datos empresariales en conocimiento fácil de encontrar.",
    faq: [
      {
        q: "¿Qué es el SEO programático, en simple?",
        a: "Plantillas, datos estructurados y automatización para generar muchas páginas orientadas a búsqueda — cada una lo bastante distinta como para merecer su consulta.",
      },
      {
        q: "¿Qué es la infraestructura de crecimiento orgánico?",
        a: "Sistemas que convierten datos operativos en presencia durable en búsqueda clásica y con IA — en lugar de producir páginas a mano sin parar.",
      },
      {
        q: "¿Garantizan posiciones?",
        a: "No. Nos comprometemos con la calidad del sistema: cobertura, frescura, validez, salud de rastreo y un ritmo de publicación que el índice pueda absorber.",
      },
    ],
  },
};

export const dictionaries = { en, es } as const;
