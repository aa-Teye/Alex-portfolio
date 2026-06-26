export const faqs = [
  // ── HIRING ──────────────────────────────────────────────────────
  {
    id: 'hire',
    question: 'How do I hire Alex?',
    keywords: ['hire', 'contract', 'freelance', 'available', 'engage', 'book', 'onboard', 'recruit'],
    answer: "Alex is currently available for freelance and contract work. Email him at alexteyeametepey@gmail.com with your project details, tech stack, and timeline — he typically replies within a few hours. You can also reach him instantly on WhatsApp.",
  },
  {
    id: 'rate',
    question: 'What are his rates?',
    keywords: ['rate', 'price', 'cost', 'charge', 'salary', 'pay', 'fee', 'budget', 'quote', 'invoice'],
    answer: "Rates depend on the scope, duration, and complexity of the project. Alex works on hourly, weekly, and fixed-project contracts. Email alexteyeametepey@gmail.com with your requirements and he'll send a tailored proposal.",
  },
  {
    id: 'remote',
    question: 'Is he available for remote work?',
    keywords: ['remote', 'online', 'international', 'timezone', 'offshore', 'distributed', 'async'],
    answer: "Yes — Alex works fully remotely and collaborates with teams across different time zones. He's experienced with async communication and tools like Jira, GitHub, Slack, and Notion. Based in Accra, Ghana (GMT), he aligns well with European and US East Coast hours.",
  },
  {
    id: 'why_hire',
    question: 'Why should I hire Alex?',
    keywords: ['why', 'reason', 'benefit', 'value', 'unique', 'different', 'choose', 'special', 'advantage'],
    answer: "Alex is rare in that he bridges three worlds: production-grade backend engineering (high concurrency, distributed systems), active AI/ML research (Graph Neural Networks, spatio-temporal models), and media systems (live broadcast, WebRTC). Most engineers are strong in one area. Alex ships across all three — and he teaches what he builds.",
  },
  {
    id: 'team',
    question: 'Can he work in a team?',
    keywords: ['team', 'collaborate', 'agile', 'scrum', 'sprint', 'coworker', 'colleague', 'together', 'cross-functional'],
    answer: "Absolutely. Alex has worked in agile teams at AreteForge (Git Workflow, Jira, code reviews, sprint planning) and Meditel Inc. (cross-functional squad with mobile devs, designers, and doctors). He's also led the media & IT team at Overcomers Nation Church and supervised junior developers.",
  },
  {
    id: 'process',
    question: 'What is his development process?',
    keywords: ['process', 'workflow', 'methodology', 'approach', 'how', 'work', 'deliver', 'method'],
    answer: "Alex follows a research-first approach: understand the bottleneck deeply, design for the worst case, then build iteratively. For backend work he starts with schema design and API contracts, builds with tests in mind, containerises early with Docker, and deploys via CI/CD. He documents as he goes — not after.",
  },
  {
    id: 'deadline',
    question: 'How does he handle deadlines?',
    keywords: ['deadline', 'timeline', 'on time', 'late', 'delivery', 'schedule', 'fast', 'quick', 'speed'],
    answer: "Alex scopes tasks honestly upfront and flags risks early rather than promising what isn't achievable. He uses sprint-based delivery so clients see working software incrementally — not just at the end. His active concurrent roles (research, teaching, commercial dev) mean he's disciplined about time management.",
  },
  {
    id: 'leadership',
    question: 'Has he led teams?',
    keywords: ['lead', 'leader', 'manage', 'senior', 'mentor', 'supervise', 'head', 'director', 'tech lead'],
    answer: "Yes. Alex is Head of Media Systems & IT at Overcomers Nation Church, where he leads broadcast operations and manages the entire tech infrastructure. He's also led backend architecture decisions at Meditel Inc. on StrokeNet and mentors students through his DATS education venture and the UoG Applied AI course he teaches.",
  },

  // ── PROJECTS ────────────────────────────────────────────────────
  {
    id: 'projects',
    question: 'What projects has he built?',
    keywords: ['project', 'built', 'portfolio', 'made', 'created', 'product', 'system', 'app', 'application'],
    answer: "Major systems: StrokeNet (real-time medical alert network), VelocityPass (10k+ concurrent ticketing), UG SmartWallet (campus ledger), Dominion Media API (async audio streaming), QuantData Pipeline (financial ticks to TimescaleDB), Fraud Detection (Kafka under 50ms), Symptom Checker (Celery/RabbitMQ AI microservice), ONC Media Automation Hub. Plus 7 client websites (ONC, Korbly, PropCollect, Roar Ladies and more).",
  },
  {
    id: 'strokenet',
    question: 'Tell me about StrokeNet',
    keywords: ['strokenet', 'stroke', 'medical', 'health', 'meditel', 'hospital', 'ambulance', 'patient'],
    answer: "StrokeNet is a cross-platform real-time stroke response network connecting patients, doctors, and ambulances across Web, Mobile, Desktop, and Smartwatches. Alex built the entire backend as Lead Developer at Meditel Inc. using WebRTC + Socket.IO for sub-second communication, FastAPI + Celery + AWS S3 for AI imaging pipeline, and a multi-channel alert broadcast system that notifies the nearest available emergency responder automatically.",
  },
  {
    id: 'velocitypass',
    question: 'Tell me about VelocityPass',
    keywords: ['velocitypass', 'velocity', 'ticket', 'ticketing', 'event', 'concurrent', 'race condition'],
    answer: "VelocityPass is a high-throughput event ticketing engine designed to handle 10,000+ simultaneous users without selling the same ticket twice. Alex solved the race condition problem with Redis distributed locks + PostgreSQL SELECT FOR UPDATE row-level locking and a Unit of Work pattern for atomic transactions. The entire service is containerised with multi-stage non-root Dockerfiles and scales horizontally with Docker Compose.",
  },
  {
    id: 'smartwallet',
    question: 'Tell me about UG SmartWallet',
    keywords: ['smartwallet', 'wallet', 'campus', 'ledger', 'payment', 'finance', 'qr', 'double entry'],
    answer: "UG SmartWallet is a campus payment ecosystem for the University of Ghana. Alex built a double-entry ledger ensuring zero money is ever created or destroyed in a transaction — critical for financial integrity. Idempotency keys prevent double-spending from network retries and duplicate QR scans. Pydantic v2 enforces strict validation before anything touches the database.",
  },
  {
    id: 'dominion',
    question: 'Tell me about Dominion Media API',
    keywords: ['dominion', 'audio', 'streaming', 'media', 'music', 'broadcast', 'stream', 's3', 'cloudfront'],
    answer: "Dominion Media API is an audio streaming service that handles thousands of concurrent listeners without exhausting server resources. Alex used Python async generators with FastAPI StreamingResponse for memory-efficient chunked delivery, offloaded heavy bandwidth to AWS S3 + CloudFront via presigned URLs, and decoupled the media architecture so bandwidth ops never block the API workers.",
  },
  {
    id: 'fraud',
    question: 'Tell me about the Fraud Detection system',
    keywords: ['fraud', 'detection', 'kafka', 'transaction', 'real-time', 'financial', 'ml', 'model'],
    answer: "The Fraud Detection system processes financial transactions in under 50ms using Kafka event streams. A Redis caching layer holds pre-computed features so model predictions happen without database round-trips. An async FastAPI microservice exposes the model as a non-blocking endpoint, keeping detection latency low even during traffic bursts.",
  },
  {
    id: 'symptom',
    question: 'Tell me about the Symptom Checker',
    keywords: ['symptom', 'checker', 'celery', 'rabbitmq', 'inference', 'ai', 'health', 'microservice', 'queue'],
    answer: "The Symptom Checker is an AI inference microservice that decouples heavy model prediction from the main API using Celery workers and a RabbitMQ message queue. This prevents pool exhaustion and gateway timeouts under burst traffic. Workers retry failed jobs automatically, Redis manages state, and the architecture allows independent horizontal scaling of inference workers — achieving 99.9% uptime.",
  },
  {
    id: 'websites',
    question: 'What websites has he built?',
    keywords: ['website', 'web', 'site', 'client', 'church', 'onc', 'korbly', 'propcollect', 'roar', 'design'],
    answer: "Alex has built 7+ client websites:\n• Overcomers Nation Church — full church website with media gallery\n• ONC 2026 Redesign — modernised church site\n• ONC SPS — shepherd activity reporting system\n• Roar Ladies Roar — women's ministry event site\n• Korbly Investment Partners — investment firm corporate site\n• PropCollect — property rate collection platform for local authorities\n• Samuel & Rebecca — digital wedding brochure",
  },
  {
    id: 'quantdata',
    question: 'Tell me about QuantData Pipeline',
    keywords: ['quantdata', 'quant', 'financial', 'timescale', 'market', 'tick', 'pipeline', 'finance', 'trading'],
    answer: "QuantData Pipeline is a financial market data ingestion system that processes thousands of market ticks per second into TimescaleDB hypertables. Rust-backed Pydantic v2 validation ensures zero corrupted data points enter the pipeline. TimescaleDB's time-series optimisation massively improves query performance for temporal aggregations like OHLCV windows and rolling averages.",
  },
  {
    id: 'onc_hub',
    question: 'Tell me about ONC Media Automation Hub',
    keywords: ['onc', 'automation', 'hub', 'vmix', 'broadcast', 'live', 'switch', 'graphic', 'church media'],
    answer: "The ONC Media Automation Hub is a React Native app that acts as a remote control for complex live broadcast operations. A FastAPI backend integrates with the vMix API over WebSockets for real-time, low-latency scene switching and graphics control. The 60fps mobile interface lets media teams manage global livestreams from any device — no physical switcher needed.",
  },

  // ── TECHNICAL ───────────────────────────────────────────────────
  {
    id: 'stack',
    question: "What's his tech stack?",
    keywords: ['stack', 'technology', 'technologies', 'tools', 'language', 'framework', 'use', 'know'],
    answer: "Backend: Python, FastAPI, PostgreSQL, Redis, Celery, Kafka, RabbitMQ, TimescaleDB, Pydantic v2, WebRTC, Socket.IO.\nFrontend: React, React Native, TypeScript, Tailwind CSS, Vite, Framer Motion.\nAI/ML: PyTorch, PyTorch Geometric, Graph Neural Networks, Computer Vision.\nDevOps: Docker, Docker Compose, AWS S3/CloudFront, Vercel, GitHub Actions, Linux.\nMedia: vMix, OBS, Live Streaming, Audio Engineering.",
  },
  {
    id: 'python',
    question: 'What is his Python experience?',
    keywords: ['python', 'django', 'flask', 'async', 'generator', 'pydantic', 'scripting'],
    answer: "Python is Alex's primary language. He uses it for production FastAPI APIs (async/await, dependency injection, middleware), data pipeline scripting (async generators, bulk inserts), AI/ML model training (PyTorch), task queues (Celery workers), and data validation (Pydantic v2 with Rust backend). He's been writing Python professionally since 2023 across 5+ deployed systems.",
  },
  {
    id: 'backend',
    question: 'What backend systems can he build?',
    keywords: ['backend', 'server', 'api', 'rest', 'microservice', 'architecture', 'system design'],
    answer: "Alex specialises in: high-concurrency REST APIs (FastAPI, async), distributed systems with message queues (Kafka, RabbitMQ, Celery), real-time systems (WebRTC, Socket.IO, WebSockets), financial-grade transactional systems (double-entry ledgers, idempotency), AI inference pipelines, and streaming data platforms. He designs for failure — retry logic, dead letter queues, and circuit breakers are standard in his APIs.",
  },
  {
    id: 'frontend',
    question: 'Can he build frontend / React apps?',
    keywords: ['frontend', 'react', 'ui', 'interface', 'web app', 'javascript', 'typescript', 'tailwind', 'component'],
    answer: "Yes — this portfolio itself is built with React 19, Vite, Tailwind CSS, and Framer Motion. He's built production React dashboards and TypeScript interfaces at AreteForge and for client websites. Frontend isn't his primary focus but he's fully capable of building polished, responsive UIs from scratch.",
  },
  {
    id: 'mobile',
    question: 'Can he build mobile apps?',
    keywords: ['mobile', 'app', 'ios', 'android', 'react native', 'phone', 'native', 'cross-platform'],
    answer: "Yes — Alex builds cross-platform mobile apps with React Native. He built the ONC Media Automation Hub (a real-time 60fps broadcast remote control app) and CPG Collect (a field data collection app with offline-first sync and dynamic form branching). Both are production deployments, not demos.",
  },
  {
    id: 'devops',
    question: 'Does he do DevOps?',
    keywords: ['devops', 'docker', 'deploy', 'ci', 'cd', 'pipeline', 'container', 'kubernetes', 'aws', 'cloud', 'infrastructure'],
    answer: "Yes. Alex containerises all his projects with Docker — multi-stage, non-root Dockerfiles with minimal attack surface. He orchestrates services with Docker Compose, deploys to AWS (S3, CloudFront), and uses Vercel for frontend. GitHub Actions powers his CI/CD pipelines. He's comfortable on Linux servers and writes deployment configs himself rather than relying on managed scaffolding.",
  },
  {
    id: 'databases',
    question: 'What databases does he work with?',
    keywords: ['database', 'db', 'sql', 'postgresql', 'redis', 'timescale', 'mongo', 'mysql', 'storage', 'schema'],
    answer: "Primary databases: PostgreSQL (OLTP — transactions, row-level locking, indexes), Redis (caching, distributed locks, pub/sub), TimescaleDB (time-series financial and IoT data). He designs schemas carefully — normalization, partitioning, and query optimization are part of his workflow, not afterthoughts.",
  },
  {
    id: 'concurrency',
    question: 'How does he handle high traffic?',
    keywords: ['traffic', 'load', 'scale', 'concurrent', 'thousand', 'million', 'performance', 'bottleneck', 'optimise'],
    answer: "Alex's go-to patterns for high concurrency: Redis distributed locks to eliminate race conditions, PostgreSQL SELECT FOR UPDATE for row-level safety, idempotency keys to handle duplicate requests safely, async FastAPI endpoints to avoid thread blocking, Celery/Kafka for offloading heavy work to background workers, and horizontal scaling via Docker Compose. VelocityPass (10k+ concurrent users) and Fraud Detection (sub-50ms Kafka processing) are live examples.",
  },

  // ── AI / RESEARCH ───────────────────────────────────────────────
  {
    id: 'ai',
    question: 'Does he do AI / ML work?',
    keywords: ['ai', 'ml', 'machine learning', 'artificial intelligence', 'deep learning', 'neural', 'pytorch', 'model'],
    answer: "Yes — Alex works at the intersection of AI research and production. He trains Graph Neural Networks with PyTorch Geometric, builds spatio-temporal transformer architectures, and integrates AI inference pipelines into production APIs. He also teaches Applied AI at UoG's CS department and has built production AI systems (StrokeNet's imaging pipeline, Symptom Checker inference service).",
  },
  {
    id: 'research',
    question: 'What research is he doing?',
    keywords: ['research', 'academic', 'university', 'gnn', 'graph', 'water', 'thesis', 'paper', 'study'],
    answer: "Alex has three active research threads:\n1. Spatio-temporal graph transformers for water distribution network leakage detection (UoG, under Prof. Kofi Sarpong Adu-Manu)\n2. Transferable Foundation GNNs with PyTorch Geometric — 40% faster convergence across varied datasets\n3. Quantitative financial modelling and real-time data pipelines (WorldQuant University, Financial Engineering)",
  },
  {
    id: 'gnn',
    question: 'What are Graph Neural Networks?',
    keywords: ['gnn', 'graph neural', 'network', 'node', 'edge', 'geometric', 'graph learning', 'pyg'],
    answer: "Graph Neural Networks (GNNs) are deep learning models that operate on graph-structured data — where entities are nodes and relationships are edges. Alex uses them to model water distribution networks (pipes as edges, junctions as nodes) and detect anomalies like leakage. With PyTorch Geometric, he's built transferable architectures that learn from one network and generalise to others — a key challenge in infrastructure AI.",
  },

  // ── MEDIA ────────────────────────────────────────────────────────
  {
    id: 'media',
    question: 'What media work has he done?',
    keywords: ['media', 'broadcast', 'vmix', 'streaming', 'church', 'audio', 'video', 'production', 'onc', 'live'],
    answer: "Alex is Head of Media Systems & IT at Overcomers Nation Church. He runs all live broadcast operations using vMix, manages audio engineering, built the ONC Media Automation Hub (React Native + FastAPI + WebSockets remote control), and developed multiple church websites and tools. He brings software engineering discipline to broadcast — automating workflows that most churches do manually.",
  },

  // ── PERSONAL / BACKGROUND ────────────────────────────────────────
  {
    id: 'strongest',
    question: "What's his strongest skill?",
    keywords: ['strongest', 'best', 'expert', 'speciality', 'specialty', 'top', 'main', 'good at', 'excel'],
    answer: "High-concurrency backend architecture — designing systems that handle thousands of simultaneous users with zero race conditions or data corruption. He achieves this through Redis distributed locking, PostgreSQL atomic transactions, idempotency keys, and async FastAPI. VelocityPass and UG SmartWallet are the clearest examples. His second strongest area is bridging AI research into production-ready inference services.",
  },
  {
    id: 'experience',
    question: 'How much experience does he have?',
    keywords: ['experience', 'years', 'long', 'senior', 'junior', 'level', 'background', 'how long'],
    answer: "Alex has been building production systems professionally since 2023, across 5+ concurrent active roles: Research Assistant (UoG), Backend Developer (Meditel Inc.), Software Developer (AreteForge), AI Instructor (UoG CS dept.), and Head of Media & IT (Overcomers Nation Church). In that time he's shipped distributed systems, AI pipelines, mobile apps, and broadcast automation tools.",
  },
  {
    id: 'education',
    question: 'What is his educational background?',
    keywords: ['education', 'degree', 'university', 'study', 'studied', 'qualification', 'bsc', 'graduate', 'school'],
    answer: "Alex holds a BSc in Information Technology from the University of Ghana (class of 2025). He's also completing a programme in Financial Engineering with WorldQuant University, focused on quantitative finance and real-time market data pipelines. On top of formal education, he teaches an Applied AI short course at UoG's Department of Computer Science.",
  },
  {
    id: 'location',
    question: 'Where is he based?',
    keywords: ['where', 'location', 'based', 'country', 'city', 'accra', 'ghana', 'africa', 'timezone', 'gmt'],
    answer: "Alex is based in Accra, Ghana (GMT+0). He works remotely and is open to international contracts. His timezone overlaps well with Europe (mornings) and US East Coast (afternoons/evenings).",
  },
  {
    id: 'dats',
    question: 'What is DATS?',
    keywords: ['dats', 'education', 'venture', 'startup', 'teaching', 'training', 'course', 'bootcamp', 'teach'],
    answer: "DATS (Data and Technology Solutions) is Alex's tech education venture. He runs structured programmes that teach practical software development and AI skills — bridging the gap between university theory and industry requirements. It's an extension of his belief that the best engineers also know how to communicate and teach what they know.",
  },
  {
    id: 'teaching',
    question: 'Does he teach?',
    keywords: ['teach', 'instructor', 'lecture', 'course', 'class', 'student', 'mentor', 'training', 'coach'],
    answer: "Yes. Alex teaches an Applied AI short course at the University of Ghana's Department of Computer Science, covering real-world machine learning workflows, model evaluation, and AI integration into production systems. He also runs DATS, his own tech education venture, and mentors developers through code reviews and pair programming.",
  },
  {
    id: 'contact',
    question: 'How do I contact Alex?',
    keywords: ['contact', 'email', 'reach', 'message', 'talk', 'connect', 'linkedin', 'github', 'whatsapp', 'phone'],
    answer: "Email: alexteyeametepey@gmail.com\nWhatsApp: +233 549 044 977\nGitHub: github.com/aa-Teye\nLinkedIn: linkedin.com/in/alex-ametepey-1123a3205\n\nOr use the 'Get In Touch' button at the bottom of this page.",
  },
];

export const botGreeting = "Hi! I'm AlexBot — ask me anything about Alex. Use the quick questions below or type your own.";

export const fallbackReply = "I'm not sure about that one. For anything specific, reach Alex directly:\nEmail: alexteyeametepey@gmail.com\nWhatsApp: +233 549 044 977";

export const suggestedChips = [
  "How do I hire Alex?",
  "Why should I hire Alex?",
  "What's his strongest skill?",
  "What's his tech stack?",
  "Tell me about StrokeNet",
  "Tell me about VelocityPass",
  "Can he build mobile apps?",
  "Does he do DevOps?",
  "What research is he doing?",
  "What websites has he built?",
  "Does he teach?",
  "Where is he based?",
];
