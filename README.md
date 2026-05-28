# Amudeeshan Srinivasan AI Portfolio

Premium dark-mode portfolio for an AI Systems / LLM Engineer focused on local-first AI, agentic systems, RAG pipelines, voice AI, Zig runtimes, and multi-model orchestration.

## Stack

- Next.js App Router
- React and TypeScript
- TailwindCSS
- Framer Motion
- React Flow
- MDX page support

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Customize

Portfolio content lives in `lib/portfolio.ts`. The profile links and project links are populated from the resume and public project repositories.

The generated hero visual is stored at `public/images/ai-os-hero.png`.
The downloadable resume is stored at `public/resume.pdf`.

## Deploy

The simplest deployment path is Vercel:

1. Push this repository to GitHub.
2. Import it in Vercel.
3. Use the default Next.js build settings.

Any platform that supports Next.js can also deploy it with `npm run build`.
