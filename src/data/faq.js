export const faqs = [
  {
    id: 'hire',
    question: 'How do I hire Alex?',
    keywords: ['hire', 'work', 'contract', 'freelance', 'available', 'engage', 'book'],
    answer: "Alex is currently available for freelance and contract work. The best way to reach him is by email at alexteyeametepey@gmail.com — describe your project, stack, and timeline and he'll get back to you quickly.",
  },
  {
    id: 'strongest',
    question: "What's his strongest skill?",
    keywords: ['strongest', 'best', 'expert', 'speciality', 'specialty', 'top', 'main'],
    answer: "Alex's strongest area is high-concurrency backend architecture — specifically building systems that handle thousands of simultaneous users without race conditions or data loss. He achieves this using distributed locking (Redis), atomic transactions (PostgreSQL), and idempotency patterns. VelocityPass and UG SmartWallet are the clearest examples.",
  },
  {
    id: 'stack',
    question: "What's his tech stack?",
    keywords: ['stack', 'technology', 'technologies', 'tools', 'use', 'language', 'framework'],
    answer: "Core backend: Python, FastAPI, PostgreSQL, Redis, Celery, Kafka, RabbitMQ, Pydantic v2. Frontend: React, React Native, TypeScript, Tailwind. AI/ML: PyTorch, PyTorch Geometric, GNNs. Infrastructure: Docker, AWS S3/CloudFront, Vercel, GitHub Actions. Media: vMix, WebRTC, Socket.IO.",
  },
  {
    id: 'strokenet',
    question: 'Tell me about StrokeNet',
    keywords: ['strokenet', 'stroke', 'medical', 'health', 'meditel'],
    answer: "StrokeNet is a real-time stroke response network Alex built as Lead Backend Developer at Meditel Inc. It connects patients, doctors, and ambulances across Web, Mobile, Desktop, and Smartwatch using WebRTC and Socket.IO. The AI assessment pipeline (FastAPI + Celery + AWS S3) processes medical imaging and broadcasts critical alerts automatically.",
  },
  {
    id: 'research',
    question: 'What research is he doing?',
    keywords: ['research', 'academic', 'university', 'gnn', 'graph', 'water', 'thesis'],
    answer: "Alex is a Research Assistant at the University of Ghana under Prof. Kofi Sarpong Adu-Manu. He's building spatio-temporal graph transformer architectures for water distribution network leakage detection. He also works on transferable Foundation GNNs using PyTorch Geometric — achieving 40% faster convergence across varied datasets.",
  },
  {
    id: 'experience',
    question: 'How much experience does he have?',
    keywords: ['experience', 'years', 'long', 'senior', 'junior', 'level', 'background'],
    answer: "Alex has been building production systems since 2023, currently working across 5+ active roles — Research Assistant at UoG, Backend Developer at Meditel Inc., Software Developer at AreteForge, AI Instructor at UoG's CS department, and Head of Media & IT at Overcomers Nation Church.",
  },
  {
    id: 'education',
    question: 'What is his educational background?',
    keywords: ['education', 'degree', 'university', 'study', 'studied', 'qualification', 'bsc'],
    answer: "Alex holds a BSc in Information Technology from the University of Ghana (graduated 2025). He's also studying Financial Engineering with WorldQuant University, focusing on quantitative finance and real-time data pipelines.",
  },
  {
    id: 'location',
    question: 'Where is he based?',
    keywords: ['where', 'location', 'based', 'country', 'city', 'remote', 'accra', 'ghana'],
    answer: "Alex is based in Accra, Ghana. He works remotely and is open to both remote contracts and international opportunities.",
  },
  {
    id: 'projects',
    question: 'What projects has he built?',
    keywords: ['project', 'built', 'portfolio', 'work', 'made', 'created', 'product'],
    answer: "Key projects: StrokeNet (real-time medical alert system), VelocityPass (10k+ concurrent event ticketing), UG SmartWallet (campus double-entry ledger), Dominion Media API (async audio streaming), QuantData Pipeline (financial data to TimescaleDB), Fraud Detection (Kafka under 50ms), Symptom Checker microservice, and ONC Media Automation Hub.",
  },
  {
    id: 'contact',
    question: 'How do I contact Alex?',
    keywords: ['contact', 'email', 'reach', 'message', 'talk', 'connect', 'linkedin', 'github'],
    answer: "Email: alexteyeametepey@gmail.com\nGitHub: github.com/aa-Teye\nLinkedIn: linkedin.com/in/alex-ametepey-1123a3205\nOr hit the 'Get In Touch' button at the bottom of this page.",
  },
  {
    id: 'ai',
    question: 'Does he do AI / ML work?',
    keywords: ['ai', 'ml', 'machine learning', 'artificial', 'intelligence', 'deep learning', 'neural', 'pytorch'],
    answer: "Yes — Alex works at the intersection of AI research and production. He builds Graph Neural Networks with PyTorch Geometric, trains spatio-temporal transformer models, and integrates AI inference pipelines into production APIs (like the Symptom Checker and StrokeNet). He also teaches Applied AI at UoG's CS department.",
  },
  {
    id: 'rate',
    question: 'What are his rates?',
    keywords: ['rate', 'price', 'cost', 'charge', 'salary', 'pay', 'fee', 'budget'],
    answer: "Alex's rates depend on the project scope, duration, and stack. Email alexteyeametepey@gmail.com with your project details and he'll send you a tailored quote.",
  },
];

export const botGreeting = "Hi! I'm AlexBot — ask me anything about Alex. Click a question below or type your own.";

export const fallbackReply = "I'm not sure about that one. For anything specific, email Alex directly at alexteyeametepey@gmail.com — he responds fast.";

export const suggestedChips = [
  "How do I hire Alex?",
  "What's his strongest skill?",
  "Tell me about StrokeNet",
  "What's his tech stack?",
  "Where is he based?",
];
