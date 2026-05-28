import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ExternalLink,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageSquareText,
  Rocket,
  Send,
  Sparkles
} from "lucide-react";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { MotionA, MotionDiv, reveal, stagger } from "@/components/motion";
import { Section } from "@/components/section";
import {
  enmaStats,
  experience,
  links,
  nav,
  notes,
  projects,
  skills,
  sourceLinks,
  systemPillars
} from "@/lib/portfolio";

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-teal-300/60";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="grid-mask pointer-events-none fixed inset-0 opacity-50" />
      <Header />
      <Hero />
      <About />
      <ENMA />
      <Projects />
      <Skills />
      <Experience />
      <Writing />
      <Contact />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/60 bg-ink/72 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold text-white">
          AS<span className="text-teal-300">.ai</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <a
          href={links.email}
          className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-700/70 px-3 text-sm text-slate-200 transition hover:border-teal-300/50 hover:text-white"
        >
          <Mail size={15} />
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pt-24">
      <MotionDiv variants={stagger} initial="hidden" animate="show" className="relative z-10">
        <MotionDiv variants={reveal} className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/8 px-3 py-1.5 text-sm text-teal-100">
          <Sparkles size={15} className="text-teal-300" />
          Modern AI operating systems for local-first intelligence
        </MotionDiv>
        <MotionDiv variants={reveal}>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Amudeeshan Srinivasan
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-medium text-slate-200">
            AI Engineer | LLM Systems | Multi-Agent AI | RAG Pipelines
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Building local-first AI systems, multi-agent architectures, and intelligent orchestration platforms.
          </p>
        </MotionDiv>
        <MotionDiv variants={reveal} className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className={`${buttonBase} border-teal-300/40 bg-teal-300 text-slate-950 hover:bg-teal-200`}>
            View Projects <ArrowDown size={16} />
          </a>
          <a href={links.github} className={`${buttonBase} border-slate-700 bg-slate-900/70 text-slate-100 hover:border-slate-500`}>
            <Github size={16} /> GitHub
          </a>
          <a href={links.huggingFace} className={`${buttonBase} border-slate-700 bg-slate-900/70 text-slate-100 hover:border-slate-500`}>
            Hugging Face
          </a>
          <a href={links.linkedin} className={`${buttonBase} border-slate-700 bg-slate-900/70 text-slate-100 hover:border-slate-500`}>
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={links.resume} className={`${buttonBase} border-slate-700 bg-slate-900/70 text-slate-100 hover:border-slate-500`}>
            <Download size={16} /> Download Resume
          </a>
          <a href="/reviews" className={`${buttonBase} border-slate-700 bg-slate-900/70 text-slate-100 hover:border-slate-500`}>
            <MessageSquareText size={16} /> Review Portfolio
          </a>
        </MotionDiv>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="relative min-h-[480px]"
      >
        <Image
          src="/images/ai-os-hero.png"
          alt="Abstract AI operating system interface"
          fill
          priority
          className="rounded-lg object-cover opacity-70"
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-transparent via-ink/10 to-ink/85" />
        <TerminalPanel />
      </MotionDiv>
    </section>
  );
}

function TerminalPanel() {
  const commands = [
    "$ enma route --mode local --voice realtime",
    "router: fast_path.intent=tool_rag confidence=0.91",
    "models: ollama/qwen + runtime_zig_client",
    "memory: lancedb.vector + sqlite.facts",
    "safety: toolgateway.policy=allow_scoped"
  ];

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.45 }}
      className="glass absolute bottom-6 left-4 right-4 rounded-lg p-4 sm:left-8 sm:right-auto sm:w-[500px]"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal-300" />
        <span className="ml-2 font-mono text-xs text-slate-400">agent-os</span>
      </div>
      <div className="space-y-2 font-mono text-xs leading-6 text-slate-200 sm:text-sm">
        {commands.map((line, index) => (
          <MotionDiv
            key={line}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.15 }}
          >
            <span className={index === 0 ? "text-teal-300" : "text-slate-300"}>{line}</span>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="AI systems engineering with production software discipline."
      intro="I am a Master of Artificial Intelligence student at RMIT focused on local-first AI, agentic systems, retrieval pipelines, voice AI, and AI infrastructure, with 1.5 years of enterprise software engineering experience at Cognizant."
    >
      <div className="grid gap-4 md:grid-cols-5">
        {systemPillars.map(({ icon: Icon, label }) => (
          <MotionDiv key={label} whileHover={{ y: -4 }} className="glass rounded-lg p-5">
            <Icon className="mb-5 text-teal-300" size={24} />
            <p className="text-sm font-medium text-slate-100">{label}</p>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}

function ENMA() {
  return (
    <Section
      id="enma"
      eyebrow="Featured Project"
      title="ENMA: a local-first personal AI assistant in active development."
      intro="ENMA is the main showcase and current build: a planned app for local model execution, turn-state routing, tool safety, voice interaction, and hybrid memory."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.35fr]">
        <div className="glass rounded-lg p-6">
            <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-300">ENMA stack</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">In-progress modular assistant app</h3>
            </div>
              <Rocket className="text-teal-300" />
            </div>
          <a
            href={sourceLinks.enma}
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-teal-300 transition hover:text-teal-100"
          >
            View ENMA on Hugging Face <ExternalLink size={15} />
          </a>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {enmaStats.map((stat) => (
              <div key={stat} className="rounded-lg border border-slate-700/50 bg-slate-950/38 px-4 py-3 text-sm text-slate-200">
                {stat}
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-lg p-4">
          <ArchitectureFlow />
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Systems that connect models, tools, memory, and runtime paths.">
      <MotionDiv variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <MotionDiv key={project.title} variants={reveal} whileHover={{ y: -5 }} className="glass flex min-h-[280px] flex-col rounded-lg p-6">
            <p className="text-sm text-teal-300">{project.subtitle}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 flex-1 leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-slate-700/70 bg-slate-950/45 px-2.5 py-1 font-mono text-xs text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            {"url" in project && project.url ? (
              <a
                href={project.url}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-teal-300 transition hover:text-teal-100"
              >
                {project.cta ?? "View Project"} <ExternalLink size={15} />
              </a>
            ) : null}
          </MotionDiv>
        ))}
      </MotionDiv>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A stack shaped around practical AI infrastructure.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ group, icon: Icon, items }) => (
          <MotionDiv key={group} whileHover={{ y: -4 }} className="glass rounded-lg p-6">
            <div className="mb-5 flex items-center gap-3">
              <Icon className="text-teal-300" size={22} />
              <h3 className="text-lg font-semibold text-white">{group}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="rounded-md bg-slate-900/80 px-2.5 py-1.5 text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Enterprise engineering, industry capstone, and AI study.">
      <div className="relative space-y-5 border-l border-slate-700/70 pl-6">
        {experience.map((item) => (
          <MotionDiv key={`${item.org}-${item.role}`} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass relative rounded-lg p-6">
            <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border border-teal-200 bg-teal-300 shadow-glow" />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-semibold text-white">{item.role}</h3>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">{item.period}</span>
            </div>
            <p className="mt-1 text-teal-300">{item.org}</p>
            <p className="mt-4 leading-7 text-slate-300">{item.detail}</p>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}

function Writing() {
  return (
    <Section id="writing" eyebrow="Technical Writing" title="Notes on building AI systems that hold up in practice.">
      <div className="grid gap-4 md:grid-cols-2">
        {notes.map((note) => (
          note.href ? (
            <MotionA
              key={note.title}
              href={note.href}
              whileHover={{ y: -4 }}
              className="glass group rounded-lg p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">{note.status}</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{note.title}</h3>
                <ArrowRight className="shrink-0 text-slate-500 transition group-hover:text-teal-300" size={20} />
              </div>
            </MotionA>
          ) : (
            <MotionDiv
              key={note.title}
              whileHover={{ y: -2 }}
              className="glass rounded-lg p-6 opacity-80"
              aria-disabled="true"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{note.status}</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{note.title}</h3>
                <span className="rounded-md border border-slate-700/70 px-2.5 py-1 font-mono text-xs text-slate-500">
                  Soon
                </span>
              </div>
            </MotionDiv>
          )
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Available for AI systems, LLM infrastructure, and agentic engineering work."
      intro="Reach out for roles or collaborations around local-first AI, RAG systems, voice assistants, tool-using agents, and runtime infrastructure."
    >
      <div className="glass flex flex-col gap-6 rounded-lg p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-medium text-white">Amudeeshan Srinivasan</p>
          <a href={links.email} className="mt-2 inline-flex items-center gap-2 text-slate-300 transition hover:text-teal-300">
            <Mail size={16} /> shan.tech.er@gmail.com
          </a>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={links.github} className={`${buttonBase} border-slate-700 text-slate-100 hover:border-teal-300/50`}>
            <Github size={16} /> GitHub
          </a>
          <a href={links.linkedin} className={`${buttonBase} border-slate-700 text-slate-100 hover:border-teal-300/50`}>
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={links.huggingFace} className={`${buttonBase} border-slate-700 text-slate-100 hover:border-teal-300/50`}>
            Hugging Face
          </a>
          <a href={links.email} className={`${buttonBase} border-teal-300/50 bg-teal-300 text-slate-950 hover:bg-teal-200`}>
            <Send size={16} /> Email
          </a>
          <a href="/reviews" className={`${buttonBase} border-slate-700 text-slate-100 hover:border-teal-300/50`}>
            <MessageSquareText size={16} /> Review Portfolio
          </a>
        </div>
      </div>
    </Section>
  );
}
