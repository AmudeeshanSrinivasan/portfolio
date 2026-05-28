import { MotionSection, reveal } from "@/components/motion";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <MotionSection
      id={id}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="mb-10 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-teal-300">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        {intro ? <p className="mt-4 text-base leading-8 text-slate-300">{intro}</p> : null}
      </div>
      {children}
    </MotionSection>
  );
}
