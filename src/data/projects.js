export const flagship = [
  {
    title: 'Ghana HIVdr Platform',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'Lead the full-stack architecture and data synchronization pipelines for secure, real-time health-tech reporting and record tracking.',
      'Engineered role-based access control (RBAC) and automated sync mechanisms for encrypted medical records.',
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'UGDS Customer Care System',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'Led the complete full-stack architecture, API endpoint specifications, and database performance optimization as Lead Engineer.',
      'Streamlined customer issue tracking, real-time ticket escalation, and administrative analytics dashboards.',
    ],
    stack: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    title: 'Automated Examination Management System',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'Built a secure assessment engine supporting automated grading logic, audit logging, and encrypted academic record handling.',
      'Optimized database queries and API response times for high-concurrency exam submission windows.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'JWT'],
  },
  {
    title: 'StrokeNet: Real-Time Response Network',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'Lead Backend Developer for a cross-platform ecosystem spanning Web, Mobile, Desktop, and Smartwatches.',
      'Architected the real-time nervous system connecting patients, doctors, and ambulances using WebRTC and Socket.IO.',
      'Engineered the automated AI assessment pipeline (FastAPI, Celery, AWS S3) that processes medical imaging and broadcasts critical alerts.',
    ],
    stack: ['WebRTC', 'Socket.IO', 'FastAPI', 'Celery'],
  },
  {
    title: 'VelocityPass: Event Ticketing Engine',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'High-throughput API using FastAPI and Redis distributed locks to eliminate race conditions during 10k+ concurrent traffic spikes.',
      'PostgreSQL row-level locking (SELECT FOR UPDATE) and Unit of Work patterns guaranteeing atomic transactions.',
      'Horizontally scalable services deployed via Docker Compose with multi-stage, non-root Dockerfiles.',
    ],
    stack: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
  },
];

export const websites = [
  {
    title: 'Overcomers Nation Church',
    description: 'Full church website with service schedules, media gallery, and ministry pages.',
    link: null,
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'ONC 2026 Redesign',
    description: 'Redesigned church website with a modern layout and improved content structure.',
    link: null,
    stack: ['JavaScript', 'CSS'],
  },
  {
    title: 'ONC SPS',
    description: 'Shepherd reporting system for Overcomers Nation Church, tracking and logging all shepherd activities across the church.',
    link: null,
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Roar Ladies Roar',
    description: "Event and ministry website for the women's arm of Overcomers Nation Church.",
    link: null,
    stack: ['JavaScript', 'CSS'],
  },
  {
    title: 'Korbly Investment Partners',
    description: 'Professional website for Korbly Investment Partners, showcasing investment services, portfolio, and firm contact.',
    link: null,
    stack: ['JavaScript', 'CSS'],
  },
  {
    title: 'PropCollect',
    description: 'Property rate collection platform for local authorities, digitising the process of tracking and managing property rates in Ghana.',
    link: null,
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Samuel & Rebecca',
    description: 'Digital wedding brochure: a personalised event site for a wedding celebration.',
    link: null,
    stack: ['JavaScript', 'CSS'],
  },
];

export const backend = [
  {
    title: 'Dominion Media API: Audio Streaming',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'Memory-efficient streaming using Python async generators and FastAPI StreamingResponse, drastically reducing server footprint.',
      'Offloaded heavy bandwidth ops to AWS S3 and CloudFront via secure presigned URLs.',
      'Decoupled media architecture handling thousands of concurrent listeners without exhausting worker threads.',
    ],
    stack: ['FastAPI', 'AWS S3', 'CloudFront'],
  },
  {
    title: 'QuantData Pipeline: Financial Data API',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'Async bulk-insert pipeline to TimescaleDB processing thousands of market ticks per second.',
      'Rust-backed Pydantic v2 validation ensuring zero corrupted data points enter the pipeline.',
      'TimescaleDB hypertables massively improving query performance for temporal aggregations.',
    ],
    stack: ['Python', 'TimescaleDB', 'Pydantic v2'],
  },
  {
    title: 'Symptom Checker Microservice',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'Decoupled heavy AI inference from the main API using Celery and RabbitMQ, preventing pool exhaustion and gateway timeouts.',
      'Robust worker queue with automatic retries and Redis state management, allowing independent horizontal scaling.',
      'Non-blocking API handling burst traffic gracefully by queueing requests for 99.9% uptime.',
    ],
    stack: ['FastAPI', 'Celery', 'RabbitMQ', 'Docker'],
  },
  {
    title: 'Fraud Detection: Real-Time Pipeline',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'Low-latency fraud detection using Kafka streams to process transaction events in under 50ms.',
      'In-memory Redis caching layer for rapid feature retrieval, minimizing database round-trips.',
      'Async FastAPI microservice exposing model predictions without blocking event processing.',
    ],
    stack: ['FastAPI', 'Kafka', 'Redis', 'ML'],
  },
  {
    title: 'EcoPulse Web Platform',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'Ecological analytics and sustainability tracking platform displaying real-time environmental metrics and reports.',
      'Built responsive frontend interfaces and data visualization dashboards.',
    ],
    stack: ['JavaScript', 'React', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'ONC Media Automation Hub',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'React Native app serving as a remote control for complex live media broadcasts.',
      'FastAPI backend integrated with the vMix API over WebSockets for real-time, low-latency switching and graphics.',
      '60fps mobile interface empowering media teams to manage global livestreams from any device.',
    ],
    stack: ['React Native', 'FastAPI', 'WebSockets', 'vMix API'],
  },
  {
    title: 'AudioAlert: VS Code Extension',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'VS Code extension that plays an alert sound whenever a syntax error or exception is detected in the editor.',
      'Custom audio uploads or native system sounds for personalized error notifications.',
      'Built with TypeScript and the VS Code Extension API, hooking into diagnostic and language-server events in real time.',
    ],
    stack: ['TypeScript', 'VS Code API', 'Node.js'],
  },
  {
    title: 'CPG Collect: Field Data Platform',
    status: 'Live',
    statusType: 'live',
    link: null,
    bullets: [
      'Structured data-collection platform for CPG field agents capturing real-time shelf analytics and competitor data.',
      'Dynamic form engine with branching logic, offline-first support, and automatic sync to a centralized PostgreSQL backend.',
      'Reporting dashboard surfacing insights through FastAPI async aggregation pipelines.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'React Native', 'Offline-First'],
  },
];
