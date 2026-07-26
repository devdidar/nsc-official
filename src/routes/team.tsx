import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";
import { PageHero, Section, GlassCard, SectionHeading } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [
    { title: "Team — Neutrino Science Club" },
    { name: "description", content: "The students and mentors behind NSC." },
  ]}),
  loader: async () => {
    const { data: team_members, error } = await supabase.from("team_members").select("*").order("sort_order");
    if (error) throw error;
    return { team_members };
  },
  component: Team,
});

function Team() {
  const { team_members } = Route.useLoaderData();
  const core = team_members?.filter(m => m.type === "core") || [];
  const mentors = team_members?.filter(m => m.type === "mentor") || [];
  const ref = useRevealAll<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Team"
        title={<>The <span className="text-gradient">people</span> behind Neutrino.</>}
        description="A student-led board and a network of mentors who show up, week after week."
      />

      <Section>
        <div data-reveal><SectionHeading eyebrow="Core board" title="Meet the officers" /></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {core.map((m, i) => (
            <GlassCard key={m.name} className="p-0 overflow-hidden" data-reveal style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="relative h-44 bg-secondary/60">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white border border-black/10 font-display text-xl font-bold text-primary shadow-xs">
                    {m.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="font-display text-lg font-bold text-foreground">{m.name}</div>
                <div className="text-xs uppercase tracking-wider font-semibold text-primary">{m.role}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                <div className="mt-4 flex gap-2">
                  {[Github, Twitter, Linkedin].map((I, k) => (
                    <a key={k} href="#" className="grid h-8 w-8 place-items-center rounded-full bg-white border border-black/8 hover:bg-black/5 text-foreground transition-colors">
                      <I className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div data-reveal><SectionHeading eyebrow="Mentors" title="Faculty & industry mentors" /></div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m, i) => (
            <GlassCard key={m.name} className="p-5" data-reveal style={{ transitionDelay: `${i * 40}ms` }}>
              <div className="font-display text-base">{m.name} — {m.bio}</div>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
