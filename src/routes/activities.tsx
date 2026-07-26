import { createFileRoute } from "@tanstack/react-router";
import { Code2, Cpu, Bot, Telescope, FlaskConical, Sigma, Microscope, Sparkles, ArrowRight } from "lucide-react";
import { PageHero, Section, GlassCard, SectionHeading, CTAButton } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/activities")({
  head: () => ({ meta: [
    { title: "Activities — Neutrino Science Club" },
    { name: "description", content: "Weekly programs, labs and clubs across programming, AI, robotics, astronomy, math and research." },
  ]}),
  loader: async () => {
    const { data: activities, error } = await supabase.from("activities").select("*").order("sort_order");
    if (error) throw error;
    return { activities };
  },
  component: Activities,
});

function Activities() {
  const { activities } = Route.useLoaderData();
  const ref = useRevealAll<HTMLDivElement>();
  const Icons: Record<string, React.ElementType> = { Code2, Cpu, Bot, Telescope, FlaskConical, Sigma, Microscope, Sparkles };
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Activities"
        title={<>Something happening <span className="text-gradient">every day</span> of the week.</>}
        description="Drop in on a club, join a lab, or sign up for the whole track — every activity is student-led and mentor-supported."
      >
        <CTAButton to="/events">See the calendar</CTAButton>
      </PageHero>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities?.map(({ icon_name, title, description, tag }, k) => {
            const I = Icons[icon_name] || Code2;
            return (
            <GlassCard key={title} className="h-full" data-reveal style={{ transitionDelay: `${k * 50}ms` }}>
              <div className="flex items-start justify-between">
                <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary">
                  <I className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">{tag}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-xs text-primary/90">
                Join <ArrowRight className="h-3 w-3" />
              </div>
            </GlassCard>
            );
          })}
        </div>
      </Section>

      <Section>
        <div data-reveal>
          <SectionHeading eyebrow="How to join" title="Three ways in" align="center"
            description="Anyone can attend a session. Members get labs, mentors and full access."
          />
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { t: "Drop-in", d: "Attend any weekly session — no signup required." },
            { t: "Become a member", d: "Free application, opens twice a year." },
            { t: "Mentor", d: "For students & pros ready to give back their craft." },
          ].map((x) => (
            <GlassCard key={x.t} data-reveal className="p-8">
              <h3 className="font-display text-xl font-semibold">{x.t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{x.d}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
