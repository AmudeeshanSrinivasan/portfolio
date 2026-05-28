import { NotePage, NoteSection } from "@/components/note-page";

export const metadata = {
  title: "Fast-path routing for local LLMs | Amudeeshan Srinivasan",
  description: "A technical note on routing local LLM requests across chat, RAG, tool, coding, and reasoning paths."
};

export default function FastPathRoutingPage() {
  return (
    <NotePage
      title="Fast-path routing for local LLMs"
      intro="Local-first assistants need to feel responsive, but not every request needs the same model, context, memory, or tool chain. Fast-path routing keeps simple work cheap and reserves heavier systems for tasks that need them."
    >
      <NoteSection title="Why Routing Matters">
        <p>
          A local assistant can easily become slow if every turn loads retrieval, long context, tool planning, and a larger reasoning model. Most turns are simpler: a short answer, a clarification, a memory lookup, or a direct command.
        </p>
        <p>
          A router gives the assistant a first decision point. It classifies the turn, selects a path, and keeps the rest of the stack from waking up unnecessarily.
        </p>
      </NoteSection>

      <NoteSection title="Example Routes">
        <ul className="list-disc space-y-3 pl-5">
          <li>Fast chat for low-risk conversational turns.</li>
          <li>RAG synthesis when the user asks about indexed documents, prior notes, or project context.</li>
          <li>Tool execution when the answer requires an external action or structured side effect.</li>
          <li>Coding route for repo-aware generation, debugging, or evaluation work.</li>
          <li>Reasoning route for multi-step planning where latency is less important than accuracy.</li>
        </ul>
        <pre className="overflow-x-auto rounded-lg border border-slate-700/60 bg-slate-950/80 p-4 font-mono text-sm text-teal-100">
          <code>{`turn -> intent + risk + context need -> route -> model/tool/memory path -> response`}</code>
        </pre>
      </NoteSection>

      <NoteSection title="Local-First Tradeoffs">
        <p>
          Local models make privacy and offline operation possible, but they force more careful budget management. Routing is where latency, context size, model choice, and tool risk become explicit engineering decisions.
        </p>
        <p>
          In ENMA, the routing direction is an 8-route turn-state router that can start with a fast local path and escalate only when retrieval, tools, coding context, or deeper reasoning is justified.
        </p>
      </NoteSection>
    </NotePage>
  );
}

