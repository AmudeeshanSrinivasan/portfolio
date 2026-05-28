import {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Mic2,
  Network,
  Server,
  ShieldCheck,
  TerminalSquare,
  Workflow
} from "lucide-react";

export const links = {
  email: "mailto:shan.tech.er@gmail.com",
  github: "https://github.com/AmudeeshanSrinivasan",
  linkedin: "https://linkedin.com/in/amudeeshan-s",
  huggingFace: "https://huggingface.co/AmudeeshanSrinivasan",
  resume: "/resume.pdf"
};

export const sourceLinks = {
  enma: "https://huggingface.co/AmudeeshanSrinivasan/enma-project/tree/main",
  zigEval: "https://github.com/AmudeeshanSrinivasan/zig-eval",
  llmRouterZig: "https://github.com/AmudeeshanSrinivasan/llm-router-zig"
};

export const nav = [
  ["About", "#about"],
  ["ENMA", "#enma"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Writing", "#writing"],
  ["Contact", "#contact"]
] as const;

export const enmaStats = [
  "Active app build in progress",
  "Local-first assistant architecture",
  "27+ planned and prototype subsystem modules",
  "300+ development commits",
  "Real-time voice pipeline under development",
  "8-route turn-state router design",
  "Local Ollama model routing target: Phi-4 Mini, Qwen3, Qwen3-Coder, GLM",
  "ToolGateway safety stack prototype",
  "Hybrid RAG direction with LanceDB and SQLite",
  "RuntimeZigClient command boundary exploration",
  "Prolog permissions and Clingo planning gates research",
  "Gated V-JEPA perception mode planned"
];

export const projects = [
  {
    title: "ENMA",
    subtitle: "Local-First Personal AI Assistant",
    description:
      "An in-progress local-first assistant app exploring real-time voice, selective model routing, hybrid RAG, memory, ToolGateway safety, symbolic checks, observability, and gated perception.",
    tags: ["Python 3.12", "Ollama", "LanceDB", "SQLite", "Piper TTS", "faster-whisper", "Prolog", "Zig"],
    url: sourceLinks.enma,
    cta: "View on Hugging Face"
  },
  {
    title: "Multi-Provider LLM API Router",
    subtitle: "OpenAI-compatible Zig router",
    description:
      "A Zig 0.15.2 prototype exposing POST /v1/chat/completions and routing one normalized API across local Ollama Qwen, OpenRouter, and AWS Bedrock.",
    tags: ["Zig", "Ollama Qwen", "OpenRouter", "AWS Bedrock", "SigV4", "OpenAI API"],
    url: sourceLinks.llmRouterZig,
    cta: "View GitHub"
  },
  {
    title: "Tool-RAG AI Assistant",
    subtitle: "Retrieval-grounded agent workflow",
    description:
      "A local assistant combining ReAct reasoning, structured outputs, API-backed tool execution, vector retrieval, and cross-encoder reranking for multi-step query resolution.",
    tags: ["Python", "FastAPI", "LangChain", "Vector DBs", "ReAct", "Reranking"]
  },
  {
    title: "Zig Evaluation & Benchmarking Framework",
    subtitle: "Registry-driven LLM eval library",
    description:
      "A Zig eval framework for OpenAI-compatible chat APIs with JSONL datasets, deterministic matchers, model-graded checks, tool-call validation, multimodal cases, and bounded parallelism.",
    tags: ["Zig", "LLM Evaluation", "JSONL", "Tool Calls", "Model Grading", "Multimodal"],
    url: sourceLinks.zigEval,
    cta: "View GitHub"
  },
  {
    title: "Scalabs Zig Coding Agent Capstone",
    subtitle: "Industry capstone for AI developer tooling",
    description:
      "Industry capstone work on a lightweight terminal coding-agent harness in Zig, covering ReAct loops, plan-then-execute flows, OpenAI-compatible APIs, streaming, and context management.",
    tags: ["Scalabs", "Zig", "ReAct", "Streaming", "Multi-Agent", "Developer Tools"]
  }
];

export const skills = [
  {
    group: "AI / LLM Engineering",
    icon: BrainCircuit,
    items: ["LLMs", "RAG", "LangGraph", "LangChain", "ReAct", "Transformers", "Structured outputs", "Symbolic AI"]
  },
  {
    group: "Backend & APIs",
    icon: Server,
    items: ["FastAPI", "REST APIs", "OpenAI-compatible APIs", "Tool calling systems", "Async pipelines", "SharePoint"]
  },
  {
    group: "Voice AI",
    icon: Mic2,
    items: ["faster-whisper", "Silero VAD", "Piper TTS", "RealtimeSTT", "Wake phrases", "Echo suppression"]
  },
  {
    group: "RAG & Memory",
    icon: Database,
    items: ["Hybrid retrieval", "LanceDB", "pgvector", "SQLite memory", "Embeddings", "Cross-encoder reranking"]
  },
  {
    group: "Runtime / Systems",
    icon: Cpu,
    items: ["Zig runtimes", "Local inference", "Ollama", "Runtime clients", "Benchmarking", "Linux"]
  },
  {
    group: "Cloud & Infrastructure",
    icon: Cloud,
    items: ["AWS EC2", "SageMaker", "EMR", "Bedrock", "Docker", "Git", "Observability"]
  },
  {
    group: "Programming",
    icon: Code2,
    items: ["Python 3.12", "Zig", "JavaScript", "Java", "C#", "SQL", "ReactJS"]
  }
];

export const experience = [
  {
    role: "Programmer Analyst",
    org: "Cognizant Technology Solutions",
    period: "Feb 2022 - Sep 2023",
    detail:
      "Contributed to Gilead's GCAP SharePoint migration, delivering ReactJS, HTML, and CSS frontend components while maintaining .NET, C#, and SharePoint enterprise applications."
  },
  {
    role: "AI Systems / Agent Engineering Capstone",
    org: "Scalabs",
    period: "Mar 2026 - Jun 2026",
    detail:
      "Contributing to a lightweight Zig coding-agent harness focused on ReAct, tool-use loops, plan-then-execute workflows, OpenAI-compatible APIs, streaming, context management, and multi-agent orchestration."
  },
  {
    role: "Master of Artificial Intelligence",
    org: "RMIT University",
    period: "Mar 2024 - Jun 2026",
    detail:
      "Relevant coursework includes LLMs, deep learning, NLP, machine learning, and AI systems design."
  },
  {
    role: "Bachelor of Engineering - Mechatronics",
    org: "Anna University",
    period: "Aug 2018 - Jun 2022",
    detail:
      "Engineering foundation across control systems, automation, embedded thinking, and interdisciplinary software-hardware problem solving."
  }
];

export const notes = [
  {
    title: "Building ENMA",
    href: "/notes/how-i-built-enma",
    status: "Work in progress"
  },
  {
    title: "Designing safe tool gateways for AI agents",
    href: "/notes/safe-tool-gateways",
    status: "Published"
  },
  {
    title: "Fast-path routing for local LLMs",
    href: "/notes/fast-path-routing-local-llms",
    status: "Published"
  },
  {
    title: "Why Zig for AI runtime systems",
    href: "/notes/zig-ai-runtime-systems",
    status: "Published"
  }
];

export const architectureNodes = [
  { id: "voice", type: "input", position: { x: 0, y: 95 }, data: { label: "Voice / Text" } },
  { id: "router", position: { x: 170, y: 95 }, data: { label: "8-Route Router" } },
  { id: "models", position: { x: 360, y: 22 }, data: { label: "Local Models" } },
  { id: "tools", position: { x: 360, y: 168 }, data: { label: "ToolGateway" } },
  { id: "memory", position: { x: 550, y: 22 }, data: { label: "RAG Memory" } },
  { id: "safety", position: { x: 550, y: 168 }, data: { label: "Safety Stack" } },
  { id: "response", type: "output", position: { x: 745, y: 95 }, data: { label: "Response" } }
];

export const architectureEdges = [
  { id: "e1", source: "voice", target: "router", animated: true },
  { id: "e2", source: "router", target: "models", animated: true },
  { id: "e3", source: "router", target: "tools", animated: true },
  { id: "e4", source: "models", target: "memory", animated: true },
  { id: "e5", source: "tools", target: "safety", animated: true },
  { id: "e6", source: "memory", target: "response", animated: true },
  { id: "e7", source: "safety", target: "response", animated: true }
];

export const systemPillars = [
  { icon: Bot, label: "Agentic systems" },
  { icon: Workflow, label: "Multi-model orchestration" },
  { icon: Network, label: "RAG pipelines" },
  { icon: ShieldCheck, label: "Safe tool execution" },
  { icon: TerminalSquare, label: "Local runtimes" }
];
