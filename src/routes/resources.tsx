import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Video, Code, FileArchive, ChevronDown, ArrowUpRight } from "lucide-react";
import { PageHero, Section, GlassCard, SectionHeading, Eyebrow } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [
    { title: "Resources — Neutrino Science Club" },
    { name: "description", content: "Curated reading, tutorials, datasets, and starter kits from NSC members and mentors." },
  ]}),
  loader: async () => {
    const [resResp, faqResp] = await Promise.all([
      supabase.from("resources").select("*").order("sort_order"),
      supabase.from("faqs").select("*").order("sort_order"),
    ]);
    if (resResp.error) throw resResp.error;
    if (faqResp.error) throw faqResp.error;
    return { resources: resResp.data, faqs: faqResp.data };
  },
  component: Resources,
});

function Resources() {
  const { resources, faqs } = Route.useLoaderData();
  const Icons: Record<string, React.ElementType> = { BookOpen, Video, Code, FileArchive };
  const ref = useRevealAll<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Resources"
        title={<>Learn, borrow, <span className="text-gradient">remix</span>.</>}
        description="Curated reading, tutorials, datasets and starter kits — most of it free, all of it open."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources?.map(({ icon_name, title, description, tag, link_url }, k) => {
            const I = Icons[icon_name] || BookOpen;
            return (
            <GlassCard key={title} data-reveal style={{ transitionDelay: `${k * 50}ms` }} className="group">
              <div className="flex items-center gap-3">
                <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-primary">
                  <I className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">{tag}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
              <a href={link_url || "#"} className="mt-5 inline-flex items-center gap-1 text-sm text-primary/90">
                Open <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </GlassCard>
            );
          })}
        </div>
      </Section>

      <Section>
        <div data-reveal>
          <SectionHeading eyebrow="FAQ" title="Frequently asked" align="center" />
        </div>
        <div className="mt-12 mx-auto max-w-2xl rounded-3xl glass overflow-hidden divide-y divide-white/5">
          {faqs?.map((f, i) => {
            const isOpen = open === i;
            return (
              <button key={f.question} onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full text-left px-6 py-5 hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold">{f.question}</span>
                  <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", isOpen && "rotate-180 text-primary")} />
                </div>
                <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden">
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
