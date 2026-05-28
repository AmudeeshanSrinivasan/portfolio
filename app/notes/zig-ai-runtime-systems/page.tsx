import { NotePage, NoteSection } from "@/components/note-page";

export const metadata = {
  title: "Why Zig for AI runtime systems | Amudeeshan Srinivasan",
  description: "A technical note on using Zig for AI runtime boundaries, routers, evaluators, and local-first systems."
};

export default function ZigRuntimeSystemsPage() {
  return (
    <NotePage
      title="Why Zig for AI runtime systems"
      intro="Python is still the fastest way to iterate on AI behavior, but AI systems also need small, predictable runtime components. Zig is a strong fit for those boundaries."
    >
      <NoteSection title="Where Zig Fits">
        <p>
          Zig is not a replacement for the whole AI stack. It is useful around the edges where predictable binaries, explicit memory, simple deployment, and low overhead matter.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>OpenAI-compatible API routers that normalize requests across local and hosted model providers.</li>
          <li>Evaluation runners that need deterministic IO, JSONL datasets, bounded parallelism, and clear failure modes.</li>
          <li>Runtime command boundaries where an assistant needs a small executable surface instead of a large framework process.</li>
          <li>Developer tooling where startup time, streaming, and straightforward distribution matter.</li>
        </ul>
      </NoteSection>

      <NoteSection title="Why It Is Practical">
        <p>
          Zig gives low-level control without forcing a large runtime onto the deployment target. For local-first AI systems, that matters: users may run the assistant on laptops, small servers, or controlled environments where dependency weight becomes part of the product.
        </p>
        <p>
          The language also makes systems behavior visible. Allocators, networking, process boundaries, and error paths are explicit enough to support serious debugging.
        </p>
      </NoteSection>

      <NoteSection title="My Current Direction">
        <p>
          I am exploring Zig in two related tracks: `llm-router-zig` for multi-provider chat routing, and `zig-eval` for registry-driven LLM evaluation. Both are ways to move infrastructure concerns out of the prompt layer and into testable runtime code.
        </p>
        <p>
          For ENMA, the same idea shows up as RuntimeZigClient: Python can stay responsible for AI behavior and safety policy, while Zig can handle scoped runtime work where a small command boundary is cleaner.
        </p>
      </NoteSection>
    </NotePage>
  );
}

