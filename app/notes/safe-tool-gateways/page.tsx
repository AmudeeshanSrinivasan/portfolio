import { NotePage, NoteSection } from "@/components/note-page";

export const metadata = {
  title: "Designing safe tool gateways for AI agents | Amudeeshan Srinivasan",
  description: "A technical note on permissioned tool execution, policy gates, and auditability for AI agents."
};

export default function SafeToolGatewaysPage() {
  return (
    <NotePage
      title="Designing safe tool gateways for AI agents"
      intro="Tool-using agents need more than function calls. They need a controlled execution boundary that turns model intent into validated, scoped, observable actions."
    >
      <NoteSection title="The Problem">
        <p>
          LLM agents are good at proposing actions, but raw tool access creates avoidable risk. A model can call the wrong tool, pass malformed arguments, repeat a destructive action, or combine safe operations into an unsafe workflow.
        </p>
        <p>
          The gateway pattern treats every tool call as a request. The request is parsed, typed, checked against policy, optionally approved by a human, executed in a constrained environment, and returned as a structured observation.
        </p>
      </NoteSection>

      <NoteSection title="Gateway Shape">
        <pre className="overflow-x-auto rounded-lg border border-slate-700/60 bg-slate-950/80 p-4 font-mono text-sm text-teal-100">
          <code>{`model intent -> schema validation -> policy gate -> approval gate -> executor -> observation -> audit log`}</code>
        </pre>
        <ul className="list-disc space-y-3 pl-5">
          <li>Schema validation catches missing fields, unsafe paths, invalid enum values, and ambiguous arguments before execution.</li>
          <li>Policy gates decide what the assistant is allowed to do for the current user, workspace, and risk level.</li>
          <li>Approval gates pause high-impact actions such as filesystem writes, network calls, shell commands, or credential-adjacent operations.</li>
          <li>Structured observations keep the model grounded in what actually happened instead of letting it infer tool results.</li>
        </ul>
      </NoteSection>

      <NoteSection title="Design Principles">
        <p>
          The gateway should be boring by design: explicit inputs, predictable outputs, strict defaults, and logs that make debugging possible after the fact. The assistant can be flexible at the reasoning layer, but the execution layer should be conservative.
        </p>
        <p>
          For ENMA, the ToolGateway direction is to keep Python as the policy and safety source while using lower-level runtime boundaries only for scoped commands. That keeps capability expansion separate from permission expansion.
        </p>
      </NoteSection>
    </NotePage>
  );
}

