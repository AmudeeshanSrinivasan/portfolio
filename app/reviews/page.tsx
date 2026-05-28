import Link from "next/link";
import { ArrowLeft, MessageSquareText, Star } from "lucide-react";
import { ReviewForm, ReviewPageCta } from "./review-form";

export const metadata = {
  title: "Review Amudeeshan's Portfolio | Amudeeshan Srinivasan",
  description: "Leave a review and star rating for Amudeeshan Srinivasan's AI systems portfolio and project work."
};

const reviewSignals = [
  "Portfolio clarity",
  "AI systems depth",
  "Project credibility",
  "Recruiter readiness"
];

export default function ReviewsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink px-5 py-10 text-slate-200 sm:px-8">
      <div className="grid-mask pointer-events-none fixed inset-0 opacity-45" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 transition hover:text-teal-100">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <section className="grid gap-8 pb-10 pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-teal-300">Portfolio Review</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Rate the portfolio and project work.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Share feedback on the portfolio, technical writing, and AI systems work. Reviews help improve the presentation for recruiters, collaborators, and engineering teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ReviewPageCta />
              <Link
                href="/#projects"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 text-sm font-medium text-slate-100 transition hover:border-teal-300/50 focus:outline-none focus:ring-2 focus:ring-teal-300/60"
              >
                View projects <MessageSquareText size={16} />
              </Link>
            </div>
          </div>

          <div className="glass rounded-lg p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Review focus</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">What to rate</h2>
              </div>
              <Star className="text-amber-300" fill="currentColor" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {reviewSignals.map((signal) => (
                <div key={signal} className="rounded-lg border border-slate-700/60 bg-slate-950/45 px-4 py-3 text-sm text-slate-300">
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="review-form" className="pb-16">
          <ReviewForm />
        </section>
      </div>
    </main>
  );
}

