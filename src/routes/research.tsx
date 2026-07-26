import { createFileRoute } from "@tanstack/react-router";
import { FileText, Database, GitBranch, Beaker, ArrowRight } from "lucide-react";
import { PageHero, Section, GlassCard, SectionHeading, Eyebrow } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/research")({
  head: () => ({ meta: [
    { title: "Research — Neutrino Science Club" },
    { name: "description", content: "Papers, replications, and open datasets from the NSC research wing." },
  ]}),
  loader: async () => {
    const { data: research_papers, error } = await supabase.from("research_papers").select("*").order("sort_order");
    if (error) throw error;
    return { research_papers };
  },
  component: Research,
});

const tracks = [
  { i: FileText, t: "Papers & preprints", d: "Mentored writing, submission and peer review." },
  { i: Database, t: "Open datasets", d: "We publish everything we collect, with clean licensing." },
  { i: GitBranch, t: "Replications", d: "Reproducing landmark results — carefully and openly." },
  { i: Beaker, t: "Experimental grants", d: "Small micro-grants for high-variance ideas." },
];

function Research() {
  const { research_papers: papers } = Route.useLoaderData();
  const ref = useRevealAll<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Research"
        title={<>Papers, replications, and <span className="text-gradient">open datasets</span>.</>}
        description="Our research wing pairs undergraduates with mentors to run rigorous, reproducible projects. All outputs are open by default."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map(({ i: I, t, d }, k) => (
            <GlassCard key={t} data-reveal style={{ transitionDelay: `${k * 60}ms` }}>
              <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary">
                <I className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div data-reveal>
          <SectionHeading eyebrow="Recent work" title="Selected outputs" />
        </div>
        <div className="mt-10 divide-y divide-white/5 rounded-3xl glass overflow-hidden">
          {papers?.map((p, i) => (
            <a key={p.title} href={p.link_url || "#"} className="group grid md:grid-cols-[110px_1fr_auto] gap-4 px-6 py-5 hover:bg-white/[0.04] transition-colors" data-reveal style={{ transitionDelay: `${i * 40}ms` }}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.year}</div>
              <div>
                <div className="font-display text-lg font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.authors} · {p.area}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-widest text-primary/90">{p.status}</span>
                <ArrowRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
