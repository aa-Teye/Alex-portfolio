export const flagship = [
  {
    title: 'StrokeNet: Real-Time Response Network',
    status: 'In Progress',
    statusType: 'progress',
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
    link: 'https://github.com/aa-Teye/VelocityPass',
    bullets: [
      'High-throughput API using FastAPI and Redis distributed locks to eliminate race conditions during 10k+ concurrent traffic spikes.',
      'PostgreSQL row-level locking (SELECT FOR UPDATE) and Unit of Work patterns guaranteeing atomic transactions.',
      'Horizontally scalable services deployed via Docker Compose with multi-stage, non-root Dockerfiles.',
    ],
    stack: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'UG SmartWallet: Campus Economy',
    status: 'In Progress',
    statusType: 'progress',
    link: 'https://github.com/aa-Teye/UG-SmartWallet',
    bullets: [
      'Double-entry ledger system with PostgreSQL row-level locking, ensuring zero money creation or loss during concurrent transactions.',
      'Strict idempotency-key validation eliminating double-spending from network retries and duplicate QR scans.',
      'Pydantic v2 enforcing rigorous pre-database validation against malformed financial data.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'Pydantic v2'],
  },
];

export const backend = [
  {
    title: 'Dominion Media API: Audio Streaming',
    status: 'Live',
    statusType: 'live',
    link: 'https://github.com/aa-Teye/Dominion-Media',
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
    link: 'https://github.com/aa-Teye/QuantData-Pipeline',
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
    link: 'https://github.com/aa-Teye/Symptom-Checker',
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
    link: 'https://github.com/aa-Teye/Fraud-Detection',
    bullets: [
      'Low-latency fraud detection using Kafka streams to process transaction events in under 50ms.',
      'In-memory Redis caching layer for rapid feature retrieval, minimizing database round-trips.',
      'Async FastAPI microservice exposing model predictions without blocking event processing.',
    ],
    stack: ['FastAPI', 'Kafka', 'Redis', 'ML'],
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
    status: 'In Progress',
    statusType: 'progress',
    link: null,
    bullets: [
      'Structured data-collection platform for CPG field agents capturing real-time shelf analytics and competitor data.',
      'Dynamic form engine with branching logic, offline-first support, and automatic sync to a centralized PostgreSQL backend.',
      'Reporting dashboard surfacing insights through FastAPI async aggregation pipelines.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'React Native', 'Offline-First'],
  },
];
