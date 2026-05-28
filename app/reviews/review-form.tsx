"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowUpRight, Mail, Star } from "lucide-react";
import { links, projects } from "@/lib/portfolio";

const focusRing = "focus:outline-none focus:ring-2 focus:ring-teal-300/60";

type Ratings = Record<string, number>;

function ratingLabel(value: number) {
  if (value === 0) return "Not rated";
  if (value <= 2) return "Needs work";
  if (value === 3) return "Good";
  if (value === 4) return "Strong";
  return "Excellent";
}

function StarRating({
  label,
  value,
  onChange
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-950/40 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-white">{label}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">{ratingLabel(value)}</p>
        </div>
        <div className="flex items-center gap-1" role="radiogroup" aria-label={`${label} rating`}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onChange(star)}
              className={`rounded-md p-1.5 transition ${focusRing} ${
                star <= value ? "text-amber-300" : "text-slate-600 hover:text-slate-300"
              }`}
              role="radio"
              aria-checked={star === value}
              aria-label={`${star} star${star > 1 ? "s" : ""}`}
            >
              <Star size={22} fill={star <= value ? "currentColor" : "none"} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ReviewForm() {
  const initialRatings = useMemo(
    () =>
      projects.reduce<Ratings>((acc, project) => {
        acc[project.title] = 0;
        return acc;
      }, {}),
    []
  );

  const [overallRating, setOverallRating] = useState(0);
  const [ratings, setRatings] = useState<Ratings>(initialRatings);
  const [reviewerName, setReviewerName] = useState("");
  const [reviewerRole, setReviewerRole] = useState("");
  const [reviewerEmail, setReviewerEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [highlight, setHighlight] = useState("");
  const [improvement, setImprovement] = useState("");

  function updateProjectRating(project: string, value: number) {
    setRatings((current) => ({ ...current, [project]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      `Reviewer: ${reviewerName || "Anonymous"}`,
      reviewerRole ? `Role / company: ${reviewerRole}` : null,
      reviewerEmail ? `Email: ${reviewerEmail}` : null,
      "",
      `Overall portfolio rating: ${overallRating}/5 (${ratingLabel(overallRating)})`,
      "",
      "Work ratings:",
      ...projects.map((project) => `- ${project.title}: ${ratings[project.title] || 0}/5 (${ratingLabel(ratings[project.title] || 0)})`),
      "",
      "What stood out:",
      highlight || "Not provided",
      "",
      "Suggested improvements:",
      improvement || "Not provided",
      "",
      "Review:",
      feedback || "Not provided"
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    const email = links.email.replace("mailto:", "");
    const href = `mailto:${email}?subject=${encodeURIComponent("Portfolio review and work ratings")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-lg p-5 sm:p-6">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="block">
          <span className="text-sm font-medium text-slate-200">Name</span>
          <input
            value={reviewerName}
            onChange={(event) => setReviewerName(event.target.value)}
            className={`mt-2 w-full rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-3 text-sm text-white placeholder:text-slate-600 ${focusRing}`}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-200">Role / company</span>
          <input
            value={reviewerRole}
            onChange={(event) => setReviewerRole(event.target.value)}
            className={`mt-2 w-full rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-3 text-sm text-white placeholder:text-slate-600 ${focusRing}`}
            placeholder="Recruiter, engineer, founder"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-200">Email</span>
          <input
            type="email"
            value={reviewerEmail}
            onChange={(event) => setReviewerEmail(event.target.value)}
            className={`mt-2 w-full rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-3 text-sm text-white placeholder:text-slate-600 ${focusRing}`}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="mt-6">
        <StarRating label="Overall portfolio" value={overallRating} onChange={setOverallRating} />
      </div>

      <div className="mt-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-teal-300">Rate the work</p>
        <div className="grid gap-3 lg:grid-cols-2">
          {projects.map((project) => (
            <StarRating
              key={project.title}
              label={project.title}
              value={ratings[project.title] || 0}
              onChange={(value) => updateProjectRating(project.title, value)}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-200">What stood out?</span>
          <textarea
            value={highlight}
            onChange={(event) => setHighlight(event.target.value)}
            className={`mt-2 min-h-32 w-full resize-y rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-3 text-sm leading-6 text-white placeholder:text-slate-600 ${focusRing}`}
            placeholder="Architecture, design, project depth, clarity..."
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-200">What should improve?</span>
          <textarea
            value={improvement}
            onChange={(event) => setImprovement(event.target.value)}
            className={`mt-2 min-h-32 w-full resize-y rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-3 text-sm leading-6 text-white placeholder:text-slate-600 ${focusRing}`}
            placeholder="Missing context, project proof, writing, layout..."
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-medium text-slate-200">Full review</span>
        <textarea
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
          className={`mt-2 min-h-40 w-full resize-y rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-3 text-sm leading-6 text-white placeholder:text-slate-600 ${focusRing}`}
          placeholder="Share your overall feedback on the portfolio, projects, technical writing, and presentation."
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 border-t border-slate-800 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-400">
          Submitting opens your email app with the review prefilled. No review data is stored on the site.
        </p>
        <button
          type="submit"
          className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-teal-300/50 bg-teal-300 px-4 text-sm font-semibold text-slate-950 transition hover:bg-teal-200 ${focusRing}`}
        >
          Send review <Mail size={16} />
        </button>
      </div>
    </form>
  );
}

export function ReviewPageCta() {
  return (
    <a
      href="#review-form"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 text-sm font-medium text-slate-100 transition hover:border-teal-300/50 ${focusRing}`}
    >
      Start review <ArrowUpRight size={16} />
    </a>
  );
}

