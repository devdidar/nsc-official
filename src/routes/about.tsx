import { createFileRoute } from "@tanstack/react-router";
import { Compass, Lightbulb, HeartHandshake, ShieldCheck, Sparkles, Rocket } from "lucide-react";
import { PageHero, Section, SectionHeading, GlassCard, CTAButton, Eyebrow } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Neutrino Science Club" },
      { name: "description", content: "The story, values and people behind Neutrino Science Club." },
      { property: "og:title", content: "About — Neutrino Science Club" },
      { property: "og:description", content: "The story, values and people behind Neutrino Science Club. Founded 2024 · 300+ Members · 46 Awards." },
      { property: "og:url", content: "https://nsc-official.vercel.app/about" },
      { property: "og:image", content: "https://nsc-official.vercel.app/og-about.png" },
      { name: "twitter:title", content: "About — Neutrino Science Club" },
      { name: "twitter:description", content: "The story, values and people behind NSC." },
      { name: "twitter:image", content: "https://nsc-official.vercel.app/og-about.png" },
    ]
  }),
  component: About,
});

const values = [
  { i: Compass, t: "First principles", d: "We reason from fundamentals — not from convention." },
  { i: Lightbulb, t: "Playful rigor", d: "Serious science, joyfully done." },
  { i: HeartHandshake, t: "Radical mentorship", d: "Everyone teaches, everyone learns." },
  { i: ShieldCheck, t: "Open by default", d: "Code, data and results shared with the world." },
  { i: Sparkles, t: "Aesthetics matter", d: "Beautiful ideas deserve beautiful execution." },
  { i: Rocket, t: "Ship or it didn't happen", d: "A demo beats a deck, every time." },
];

function About() {
  const ref = useRevealAll<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="About NSC"
        title={<>A community for people who <span className="text-gradient">build the future</span>.</>}
        description="Neutrino began in 2024 with a passion for discovery. Today it's a growing collective of curious minds — meeting weekly, shipping monthly, competing nationally."
      >
        {/* <CTAButton to="/team">Meet the team</CTAButton> */}
        <CTAButton to="/contact" variant="ghost">Get involved</CTAButton>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div data-reveal className="reveal">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
              From a whiteboard, to a wing, to a <span className="text-gradient">worldwide network</span>.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                What started as a Friday-night study group evolved into a full research
                and engineering community. Our members build satellites, train language
                models, and win olympiads — often in the same semester.
              </p>
              <p>
                We're a student-run non-profit, powered by mentors from industry and academia
                who believe the fastest way to grow scientists is to hand them the keys.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3" data-reveal>
            {[
              ["2024", "Founded"],
              ["300+", "Active members"],
              ["5+", "Awards won"],
              ["10", "Partner schools"],
            ].map(([v, l]) => (
              <GlassCard key={l} className="p-6">
                <div className="font-display text-4xl font-semibold text-gradient">{v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div data-reveal>
          <SectionHeading eyebrow="Values" title="What we believe" align="center" />
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ i: I, t, d }, k) => (
            <GlassCard key={t} data-reveal style={{ transitionDelay: `${k * 60}ms` }}>
              <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary">
                <I className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
