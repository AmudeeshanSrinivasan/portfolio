import { NotePage, NoteSection } from "@/components/note-page";

export const metadata = {
  title: "Building ENMA | Amudeeshan Srinivasan",
  description: "A technical note on the architecture behind ENMA, an in-progress local-first multi-model personal AI assistant app."
};

export default function HowIBuiltEnmaPage() {
  return (
    <NotePage
      title="Building ENMA"
      intro="ENMA is an in-progress local-first, multi-model personal AI assistant app that I am building as a modular agent system rather than a simple chatbot."
    >
      <NoteSection title="System Shape">
        <p>
          The core design goal is selective depth: simple conversations should stay on a fast local path, while heavier capabilities such as RAG, tools, symbolic rules, workflow planning, and gated perception should activate only when the router decides the task needs them.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-slate-700/60 bg-slate-950/80 p-4 font-mono text-sm text-teal-100">
          <code>{`voice/text -> input layer -> conversation state -> selective router -> model/tool/memory path -> response composer`}</code>
        </pre>
      </NoteSection>

      <NoteSection title="Subsystems Under Development">
        <ul className="list-disc space-y-3 pl-5">
          <li>Real-time voice with faster-whisper, Silero VAD, wake phrases, barge-in handling, and Piper/macOS TTS.</li>
          <li>Local Ollama model routing across fast chat, reasoning, coding, and RAG synthesis roles.</li>
          <li>Hybrid RAG and memory with LanceDB, embeddings, and SQLite.</li>
          <li>ToolGateway validation, approval gates, permission checks, and structured observations.</li>
          <li>RuntimeZigClient as a low-latency command boundary while Python remains the safety policy source.</li>
          <li>Prolog permission checks and Clingo planning gates for explainable symbolic control.</li>
          <li>Local observability for routing, model, tool, workflow, and safety decisions.</li>
        </ul>
      </NoteSection>

      <NoteSection title="Why Local-First">
        <p>
          The target architecture keeps runtime state local by default: SQLite databases, LanceDB indexes, logs, jobs, and model artifacts remain on the machine. Cloud fallbacks are privacy-gated rather than assumed.
        </p>
        <p>
          That architecture makes the assistant slower to build than a hosted chatbot wrapper, but it creates a stronger foundation for privacy, offline operation, reproducible debugging, and trustworthy tool execution.
        </p>
      </NoteSection>
    </NotePage>
  );
}
