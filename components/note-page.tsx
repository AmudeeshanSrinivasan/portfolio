import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type NotePageProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export function NotePage({ title, intro, children }: NotePageProps) {
  return (
    <main className="min-h-screen bg-ink px-5 py-12 text-slate-200 sm:px-8">
      <article className="mx-auto max-w-3xl">
        <Link href="/#writing" className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 transition hover:text-teal-100">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <p className="mt-12 font-mono text-xs uppercase tracking-[0.24em] text-teal-300">Technical note</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">{intro}</p>

        <div className="mt-10 space-y-10 leading-8 text-slate-300">{children}</div>
      </article>
    </main>
  );
}

export function NoteSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

