import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, GlassCard, SectionHeading, CTAButton } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/activities")({
  head: () => ({ meta: [
    { title: "Activities — Neutrino Science Club" },
    { name: "description", content: "Weekly programs, labs and clubs across programming, robotics, astronomy, science and maker activities for beginners." },
    { property: "og:title", content: "Activities — Neutrino Science Club" },
    { property: "og:description", content: "Weekly programs, labs and clubs across programming, robotics, astronomy, science and maker activities for beginners." },
    { property: "og:url", content: "https://nsc-official.vercel.app/activities" },
    { property: "og:image", content: "https://nsc-official.vercel.app/og-activities.png" },
    { name: "twitter:title", content: "Activities — Neutrino Science Club" },
    { name: "twitter:description", content: "Start here — beginner-friendly clubs and labs." },
    { name: "twitter:image", content: "https://nsc-official.vercel.app/og-activities.png" },
  ]}),
  component: Activities,
});

const beginnerActivities = [
  {
    title: "Programming Circle",
    description: "Weekly problem-solving, code review and paired programming across languages. Start with Python, grow into full-stack projects.",
    tag: "Weekly · Wed",
    gradient: "from-blue-500/70 to-cyan-400/50",
    image: "/images/premium_photo-1663075913794-6c742d7d6c74.avif",
  },
  {
    title: "Robotics Guild",
    description: "Design, build and program robots. From autonomous rovers to creative mechatronics — hands-on every session.",
    tag: "Weekly · Sat",
    image: "/images/kids-robot.png",
    gradient: "from-purple-500/70 to-indigo-400/50",
  },
  {
    title: "Astronomy Nights",
    description: "Monthly observation sessions with Dobsonians and astrophotography rigs. No experience needed — just curiosity.",
    tag: "Monthly",
    gradient: "from-indigo-500/70 to-purple-400/50",
    image: "/images/photo-1704296435778-607552ba8571.avif",
  },
  {
    title: "Experimental Sciences",
    description: "Chemistry, biology and physics experiments in a mentored setting. Learn by doing, not just reading.",
    tag: "Bi-weekly",
    gradient: "from-emerald-500/70 to-teal-400/50",
    image: "/images/photo-1586011876158-197fd32f15e2.avif",
  },
  {
    title: "Maker Fridays",
    description: "Open lab hours with 3D printers, mills, boards and tools. Bring any project — or start one from scratch.",
    tag: "Weekly · Fri",
    gradient: "from-amber-500/70 to-orange-400/50",
    image: "/images/istockphoto-1329632922-612x612.webp",
  },
];

function Activities() {
  const ref = useRevealAll<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Activities"
        title={<>Start here. <span className="text-gradient">Build from day one.</span></>}
        description="Curated clubs and labs for beginners. Drop in, learn by doing, and find your track."
      >
        <CTAButton to="/events">See the calendar</CTAButton>
      </PageHero>

      <Section>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {beginnerActivities.map((activity, k) => {
            return (
              <GlassCard key={activity.title} className="h-full p-0 hover-lift overflow-hidden" data-reveal style={{ transitionDelay: `${k * 80}ms` }}>
                <div className={`relative h-44 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br ${activity.gradient}`}>
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 text-foreground px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
                    {activity.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{activity.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    Join activity <ArrowRight className="h-4 w-4" />
                  </div>
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
        <div className="mt-8 sm:mt-12 grid gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-3">
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
