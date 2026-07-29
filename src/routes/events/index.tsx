import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays, MapPin, Clock, ArrowRight, Sparkles, Users, GraduationCap,
  Trophy, Gamepad2
} from "lucide-react";
import { PageHero, Section, GlassCard, Eyebrow, CTAButton, SectionHeading } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events — Neutrino Science Club" },
      { name: "description", content: "Explore upcoming bootcamps and past events like Science Fair 2025 hosted by Neutrino Science Club." },
      { property: "og:title", content: "Events — Neutrino Science Club" },
      { property: "og:description", content: "Explore upcoming bootcamps and past events like Science Fair 2025 hosted by Neutrino Science Club." },
      { property: "og:url", content: "https://nsc-official.vercel.app/events" },
      { property: "og:image", content: "https://nsc-official.vercel.app/og-events.png" },
      { name: "twitter:title", content: "Events — Neutrino Science Club" },
      { name: "twitter:description", content: "Explore upcoming bootcamps and past events like Science Fair 2025." },
      { name: "twitter:image", content: "https://nsc-official.vercel.app/og-events.png" },
    ]
  }),
  component: Events,
});

function Meta({ i, v }: { i: React.ReactNode; v: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-primary">{i}</span>
      <span>{v}</span>
    </div>
  );
}

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
        eyebrow="Events & Programs"
        title={<>Discover our <span className="text-gradient">Events & Bootcamps</span>.</>}
        description="Join our upcoming flagship Python Bootcamp or explore recap & highlights from our past events like Science Fair 2025."
      >
        <CTAButton to="/bootcamp/python">Join Python Bootcamp</CTAButton>
      </PageHero>

      {/* Flagship Bootcamp Highlight */}
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

      {/* Upcoming Events Section */}
      <Section>
        <div data-reveal>
          <SectionHeading
            eyebrow="Upcoming Events"
            title="What's happening next"
            align="center"
            description="Our next flagship event and training programs you can join right now."
          />
        </div>
        <div className="mt-10 grid gap-6 max-w-4xl mx-auto">
          <article data-reveal className="reveal group relative overflow-hidden rounded-3xl bg-white/90 border border-black/10 hover-lift backdrop-blur-md shadow-md">
            <div className="grid sm:grid-cols-[220px_1fr]">
              <div className="relative min-h-48 bg-gradient-to-br from-primary/20 to-blue-500/10 flex items-center justify-center p-6">
                <div className="absolute inset-0 grid-bg opacity-60" />
                <div className="relative text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <span className="mt-3 inline-block rounded-full bg-primary/20 px-3 py-1 text-[11px] font-bold text-primary">
                    FREE for First 50
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <Eyebrow>Upcoming Bootcamp</Eyebrow>
                    <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-semibold text-emerald-600">
                      Registration Open
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                    <Link to="/bootcamp/python" className="hover:text-primary transition-colors">
                      NSC Python Bootcamp — Founding Batch
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    4-week beginner-friendly Python program with 8 live interactive classes, mentor guidance, milestone projects, and a Python Arcade capstone.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
                    <Meta i={<CalendarDays className="h-4 w-4" />} v="Launching Soon" />
                    <Meta i={<Clock className="h-4 w-4" />} v="4 Weeks (8 Live Classes)" />
                    <Meta i={<MapPin className="h-4 w-4" />} v="Online / Live Zoom" />
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    to="/bootcamp/python"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground hover:scale-[1.02] transition-all shadow-md"
                  >
                    Claim free spot <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Section>

      {/* Past Events Section */}
      <Section>
        <div data-reveal>
          <SectionHeading
            eyebrow="Past Events"
            title="Science Fair in 2025"
            align="center"
            description="Recap, photos, and highlights from our major past event hosted in 2025."
          />
        </div>

        <div className="mt-10 grid gap-6 max-w-4xl mx-auto">
          <article data-reveal className="reveal group relative overflow-hidden rounded-3xl bg-white/90 border border-black/10 hover-lift backdrop-blur-md shadow-md">
            <div className="grid sm:grid-cols-[240px_1fr]">
              <Link to="/events/science-fair-2025" className="relative min-h-52 bg-secondary/60 overflow-hidden block">
                <img
                  src="/images/event1.jpg"
                  alt="Junior Science Fest & Olympiad 2025"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1">5 Photos</span>
                  <span className="rounded-full bg-primary px-2.5 py-1 text-primary-foreground">2025</span>
                </div>
              </Link>

              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <Eyebrow>Past Science Fair</Eyebrow>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      Oct 24, 2025
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                    <Link to="/events/science-fair-2025" className="hover:text-primary transition-colors">
                      Junior Science Fest & Olympiad 2025
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-primary">
                    জুনিয়র সায়েন্স ফেস্ট ও অলিম্পিয়াড ২০২৫
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    নিউট্রিনো সায়েন্স ক্লাব (NSC) ও জাতীয় শিশুকিশোর সংগঠন ফুলকুঁড়ি আসর, গাজীপুর মহানগরী শাখার যৌথ আয়োজনে অনুষ্ঠিত হলো "জুনিয়র সায়েন্স ফেস্ট ও অলিম্পিয়াড ২০২৫"। অনুষ্ঠানে গাজীপুরের বিভিন্ন প্রতিষ্ঠানের শিক্ষার্থীরা মোট ৪৩টি বিজ্ঞানভিত্তিক প্রজেক্ট নিয়ে অংশগ্রহণ করে।
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
                    <Meta i={<CalendarDays className="h-4 w-4" />} v="২৪ অক্টোবর ২০২৫" />
                    <Meta i={<MapPin className="h-4 w-4" />} v="টঙ্গী পাইলট স্কুল, গাজীপুর" />
                    <Meta i={<Trophy className="h-4 w-4" />} v="৪৩টি প্রজেক্ট + অলিম্পিয়াড" />
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/events/science-fair-2025"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground hover:scale-[1.02] transition-all shadow-md"
                  >
                    Read full recap & view photos <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Section>
    </div>
  );
}
