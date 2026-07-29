import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarDays, MapPin, Clock, ArrowRight, Sparkles, Users, GraduationCap, Trophy, Gamepad2 } from "lucide-react";
import { PageHero, Section, GlassCard, Eyebrow, CTAButton, SectionHeading } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [
    { title: "Events — Neutrino Science Club" },
    { name: "description", content: "Our flagship Python Bootcamp is launching soon. 4 weeks, 8 live classes, projects, and a certificate — FREE for the first 50 students." },
    { property: "og:title", content: "Events — Neutrino Science Club" },
    { property: "og:description", content: "Our flagship Python Bootcamp is launching soon. 4 weeks, 8 live classes, projects, and a certificate — FREE for the first 50 students." },
    { property: "og:url", content: "https://nsc-official.vercel.app/events" },
    { property: "og:image", content: "https://nsc-official.vercel.app/og-events.png" },
    { name: "twitter:title", content: "Events — Neutrino Science Club" },
    { name: "twitter:description", content: "The Python Bootcamp is launching. Be among the first 50 to join for free." },
    { name: "twitter:image", content: "https://nsc-official.vercel.app/og-events.png" },
  ]}),
  component: Events,
});

const bootcampDetails = [
  { i: <Users className="h-5 w-5" />, label: "Batch size", value: "Limited seats" },
  { i: <GraduationCap className="h-5 w-5" />, label: "Level", value: "Beginner friendly" },
  { i: <Clock className="h-5 w-5" />, label: "Duration", value: "4 Weeks" },
  { i: <Trophy className="h-5 w-5" />, label: "Reward", value: "Certificate + Arcade Project" },
];

const highlights = [
  { icon: Sparkles, title: "8 Live Interactive Classes", desc: "Step-by-step live guidance with real-time Q&A and hands-on coding." },
  { icon: Gamepad2, title: "Python Arcade Capstone", desc: "Build a complete multi-game arcade app by the end of the bootcamp." },
  { icon: Users, title: "Mentor Support", desc: "Get interactive feedback and dedicated 1-on-1 help from mentors." },
  { icon: Trophy, title: "Certificate of Completion", desc: "Official NSC certificate after your final showcase presentation." },
];

function Events() {
  const ref = useRevealAll<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Launching Soon"
        title={<>The <span className="text-gradient">Python Bootcamp</span> is almost here.</>}
        description="Our first flagship bootcamp for absolute beginners. 4 weeks of live classes, hands-on projects, and a final Python Arcade showcase."
      >
        <CTAButton to="/bootcamp/python">Claim your free spot</CTAButton>
      </PageHero>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <GlassCard className="p-8 sm:p-10" data-reveal>
            <Eyebrow>Flagship Launch</Eyebrow>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              NSC Python Bootcamp — <span className="text-gradient">Founding Batch</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Designed for kids and absolute starters. Whether you have never written a line of code before or you have tried and got stuck — this bootcamp will take you from zero to building real Python projects.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {bootcampDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-2xl bg-secondary/60 p-4">
                  <div className="mt-0.5 text-primary">{item.i}</div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</div>
                    <div className="mt-1 text-sm font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/bootcamp/python">View full curriculum</CTAButton>
            </div>
          </GlassCard>

          <GlassCard className="p-8 sm:p-10" data-reveal style={{ transitionDelay: "120ms" }}>
            <h3 className="font-display text-xl font-semibold">What you will build</h3>
            <div className="mt-6 space-y-4">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white/70 p-4">
                  <div className="mt-0.5 inline-grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">{h.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <div data-reveal>
          <SectionHeading eyebrow="Launch scholarship" title="First 50 students join for free" align="center"
            description="Regular price is ৳299. Founding batch students get full access for free as part of our launch scholarship."
          />
        </div>
        <div className="mt-10 flex justify-center">
          <GlassCard className="max-w-xl w-full p-8 text-center" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
              <Sparkles className="h-4 w-4 text-primary" /> Founding Batch
            </div>
            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="text-2xl text-muted-foreground line-through decoration-2">৳299</span>
              <span className="h-10 w-px bg-black/10" aria-hidden="true" />
              <span className="font-display text-5xl font-bold text-gradient">FREE</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">First 50 students get the bootcamp completely free.</p>
            <div className="mt-6">
              <CTAButton to="/bootcamp/python" className="w-full justify-center">Claim your scholarship</CTAButton>
            </div>
          </GlassCard>
        </div>
      </Section>
    </div>
  );
}
