import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Code2, Cpu, Bot, Telescope, FlaskConical, Sigma, Microscope, Sparkles,
  ArrowRight, Rocket, Users, Trophy, School, Wrench, CalendarDays,
  Star, Quote, Mail,
} from "lucide-react";
import { Blobs } from "@/components/site/Blobs";
import { CTAButton, GlassCard, PageHero, Section, SectionHeading, Eyebrow } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neutrino Science Club — Science in Thought, Innovation in Creation." },
      { name: "description", content: "A student-led community building the next generation of scientists, engineers and researchers." },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Code2, title: "Programming", desc: "From first Python script to production systems." },
  { icon: Cpu, title: "Artificial Intelligence", desc: "Neural networks, LLMs and applied ML research." },
  { icon: Bot, title: "Robotics", desc: "Autonomous machines, embedded systems, kinematics." },
  { icon: Telescope, title: "Astronomy", desc: "Observation nights, astrophysics, deep-sky imaging." },
  { icon: FlaskConical, title: "Science Projects", desc: "End-to-end experiments across disciplines." },
  { icon: Sigma, title: "Mathematics", desc: "Olympiad training, proofs, applied problem solving." },
  { icon: Microscope, title: "Research", desc: "Mentored papers, replications, open datasets." },
  { icon: Sparkles, title: "Innovation", desc: "Rapid prototyping, hackathons, moonshots." },
] as const;

const events = [
  { tag: "Flagship", title: "NeutrinoCon 2026", date: "March 14–16", city: "Main Auditorium", desc: "A three-day summit on frontier science and engineering.", grad: "from-blue-500/40 to-cyan-400/30" },
  { tag: "Bootcamp", title: "Deep Learning Sprint", date: "Feb 08", city: "Lab 3B", desc: "Build a transformer from scratch in one weekend.", grad: "from-indigo-500/40 to-blue-400/30" },
  { tag: "Field", title: "Stargazing Night", date: "Jan 22", city: "Observatory Hill", desc: "8-inch Dobsonians, deep-sky targets, hot cocoa.", grad: "from-purple-500/40 to-cyan-400/30" },
] as const;

const projects = [
  { name: "Kepler-Vision", stack: "PyTorch · CV", desc: "Automated exoplanet transit detection from light curves." },
  { name: "Helios Rover", stack: "ROS 2 · ESP32", desc: "Solar-powered autonomous rover with SLAM navigation." },
  { name: "Axion", stack: "Rust · WASM", desc: "A physics-first differential equation playground for the browser." },
  { name: "Nimbus LLM", stack: "Transformers", desc: "Small language model trained on open scientific abstracts." },
] as const;

const stats = [
  { value: 1200, suffix: "+", label: "Active members" },
  { value: 180, suffix: "+", label: "Workshops hosted" },
  { value: 74, suffix: "", label: "Live projects" },
  { value: 22, suffix: "", label: "Partner schools" },
  { value: 46, suffix: "", label: "Awards & prizes" },
] as const;

const timeline = [
  { year: "2019", title: "Founded", desc: "Twelve students, one whiteboard, a lot of questions." },
  { year: "2021", title: "First bootcamp", desc: "48-hour AI sprint kicks off our flagship series." },
  { year: "2023", title: "Research wing", desc: "Mentored papers accepted at three regional conferences." },
  { year: "2024", title: "Robotics lab", desc: "A dedicated lab with 3D printers, mills and dev boards." },
  { year: "2026", title: "1000+ members", desc: "A global network across 22 partner institutions." },
] as const;

const testimonials = [
  { name: "Aditi Sharma", role: "ML Engineer, formerly NSC ‘23", quote: "NSC didn't just teach me to code — it taught me how researchers think. Every workshop pushed me deeper." },
  { name: "Marco Silva", role: "Physics Undergrad", quote: "The observatory nights got me hooked on astrophysics. Now I'm publishing my first paper with a mentor from NSC." },
  { name: "Ren Takeda", role: "Robotics Lead", quote: "Nowhere else do students get this much lab time, mentorship and freedom to build weird, brilliant things." },
] as const;

function Home() {
  const ref = useRevealAll<HTMLDivElement>();
  return (
    <div ref={ref}>
      <Hero />
      <Mission />
      <WhatWeDo />
      <FeaturedEvents />
      <Stats />
      <Timeline />
      <FeaturedProjects />
      <Research />
      <GalleryPreview />
      <Testimonials />
      <Partners />
      <Newsletter />
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-32 pb-24 flex items-center overflow-hidden">
      <Blobs />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />

      {/* Floating Python code snippets */}
      <FloatingCodeSnippets />

      {/* Floating science glyphs */}
      <FloatingGlyphs />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="mx-auto max-w-4xl text-center animate-blur-in">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs animate-glow-border">
              <span className="h-2 w-2 rounded-full bg-gradient-primary animate-pulse-glow" />
              <span className="uppercase tracking-[0.18em] text-muted-foreground">Science in Thought · Innovation in Creation</span>
            </div>
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-balance">
            Empowering Young Minds Through <span className="text-gradient">Science & Innovation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A student-led community building the next generation of scientists, engineers, and researchers. Hands-on projects, mentored research, bootcamps, and observation nights.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CTAButton to="/bootcamp/python">Explore Python Bootcamp</CTAButton>
            <Link to="/about" className="group inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10">
                <Rocket className="h-3 w-3" />
              </span>
              About Our Club
            </Link>
          </div>

          {/* Marquee */}
          <div className="mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="flex gap-10 animate-marquee whitespace-nowrap text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {Array.from({ length: 2 }).map((_, k) => (
                <div key={k} className="flex gap-10 shrink-0">
                  {["Programming", "Artificial Intelligence", "Robotics", "Astronomy", "Science Projects", "Mathematics", "Research", "Innovation"].map((x) => (
                    <span key={x + k}>{x}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Scroll ↓
      </div>
    </section>
  );
}

function FloatingCodeSnippets() {
  const snippets = [
    { code: 'print("Hello, World!")', top: "20%", left: "3%", delay: "0s" },
    { code: 'for i in range(10):', top: "65%", right: "4%", delay: "-2s" },
    { code: 'def learn():', top: "75%", left: "5%", delay: "-4s" },
    { code: 'import python_bootcamp', top: "30%", right: "6%", delay: "-1s" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      {snippets.map((s, i) => (
        <div
          key={i}
          className="absolute glass rounded-xl px-3 py-2 animate-float-code shadow-elevated"
          style={{ top: s.top, left: (s as any).left, right: (s as any).right, animationDelay: s.delay }}
        >
          <code className="text-xs font-mono text-cyan/80">{s.code}</code>
        </div>
      ))}
    </div>
  );
}

function FloatingGlyphs() {
  const items = [
    { top: "18%", left: "6%", Icon: Telescope, size: 20, delay: "0s" },
    { top: "28%", right: "8%", Icon: Cpu, size: 18, delay: "-3s" },
    { top: "70%", left: "10%", Icon: FlaskConical, size: 22, delay: "-6s" },
    { top: "62%", right: "12%", Icon: Sigma, size: 20, delay: "-2s" },
    { top: "42%", left: "14%", Icon: Sparkles, size: 16, delay: "-4s" },
    { top: "38%", right: "18%", Icon: Bot, size: 18, delay: "-5s" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {items.map(({ Icon, ...pos }, i) => (
        <div key={i} className="absolute glass rounded-2xl p-3 animate-float shadow-elevated"
          style={{ top: pos.top, left: (pos as any).left, right: (pos as any).right, animationDelay: pos.delay }}>
          <Icon className="text-primary" style={{ width: pos.size, height: pos.size }} />
        </div>
      ))}
    </div>
  );
}

/* ---------- Mission ---------- */
function Mission() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
        <div data-reveal className="reveal">
          <Eyebrow>Our mission</Eyebrow>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
            Build scientists.<br />Not just science projects.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We believe learning happens fastest when students <em className="not-italic text-foreground">build things
              that don't exist yet.</em> NSC exists to give every curious mind the mentors,
            tools and community to turn wild ideas into working prototypes — and
            working prototypes into real research.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton to="/about">Read our story</CTAButton>
            <CTAButton to="/research" variant="ghost">Explore research</CTAButton>
          </div>
        </div>

        <div data-reveal className="reveal">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Rocket, k: "Ship real work", v: "Every semester ends with a demo day." },
              { icon: Users, k: "Peer-led", v: "Students teaching students, deeply." },
              { icon: Trophy, k: "Compete", v: "Olympiads, hackathons and research fairs." },
              { icon: Wrench, k: "Build", v: "Full access to labs, boards and compute." },
            ].map(({ icon: I, k, v }) => (
              <GlassCard key={k} className="p-5">
                <I className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-display font-semibold">{k}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{v}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- What we do ---------- */
function WhatWeDo() {
  return (
    <Section>
      <div data-reveal className="reveal">
        <SectionHeading
          eyebrow="What we do"
          title={<>Eight disciplines.<span className="text-gradient"> One community.</span></>}
          description="From first principles to frontier research — pick a track, or wander across all of them."
          align="center"
        />
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: I, title, desc }, i) => (
          <div key={title} data-reveal className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <GlassCard className="h-full">
              <div className="mb-6 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <I className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-xs text-primary/90">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Events ---------- */
function FeaturedEvents() {
  return (
    <Section>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6" data-reveal>
        <SectionHeading
          eyebrow="Featured events"
          title="What's happening next"
          description="A curated slice of our upcoming calendar — from summits to weekend field trips."
        />
        <Link to="/events" className="group inline-flex items-center gap-1 text-sm text-primary/90 hover:text-primary">
          All events <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {events.map((e, i) => (
          <article key={e.title} data-reveal className="reveal group relative overflow-hidden rounded-3xl glass hover-lift" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${e.grad}`}>
              <div className="absolute inset-0 grid-bg opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <CalendarDays className="h-14 w-14 text-white/70" />
              </div>
              <div className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-[10px] uppercase tracking-widest">{e.tag}</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{e.date}</span><span>·</span><span>{e.city}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-xs text-primary/90">
                Reserve seat <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* BootcampShowcase removed — single Python Bootcamp promoted via Hero */

/* ---------- Stats ---------- */
function useCounter(target: number, active: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return n;
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(true)), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Section>
      <div ref={ref} className="relative overflow-hidden rounded-[32px] glass p-8 sm:p-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s) => <StatItem key={s.label} {...s} active={active} />)}
        </div>
      </div>
    </Section>
  );
}
function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const n = useCounter(value, active);
  return (
    <div className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-semibold tabular-nums text-gradient">
        {n.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------- Timeline ---------- */
function Timeline() {
  return (
    <Section>
      <div data-reveal className="reveal">
        <SectionHeading
          eyebrow="Timeline"
          title={<>A short history of <span className="text-gradient">going far</span>.</>}
          description="Milestones from a scrappy club to a global learning community."
          align="center"
        />
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="pointer-events-none absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
        <ol className="space-y-10">
          {timeline.map((t, i) => {
            const right = i % 2 === 1;
            return (
              <li key={t.year} data-reveal className="reveal relative sm:grid sm:grid-cols-2 sm:gap-10">
                <div className={`hidden sm:block ${right ? "order-2" : ""}`} />
                <div className={`relative pl-12 sm:pl-0 ${right ? "sm:pr-10 sm:text-right sm:order-1" : "sm:pl-10"}`}>
                  <span className="absolute left-2 sm:left-1/2 top-1.5 -translate-x-1/2 grid h-5 w-5 place-items-center rounded-full bg-gradient-primary shadow-glow">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <GlassCard className="p-5">
                    <div className="text-xs uppercase tracking-[0.2em] text-primary/90">{t.year}</div>
                    <h3 className="mt-2 font-display text-xl font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </GlassCard>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

/* ---------- Projects ---------- */
function FeaturedProjects() {
  return (
    <Section>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6" data-reveal>
        <SectionHeading
          eyebrow="Featured projects"
          title="Built by students. Shipped in public."
          description="A selection of what our members have prototyped, researched and open-sourced."
        />
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <GlassCard key={p.name} className="p-8" data-reveal>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-full bg-white/5 px-2 py-0.5">{p.stack}</span>
              <span>· open-source</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary/90">
              Explore project <ArrowRight className="h-4 w-4" />
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Research ---------- */
function Research() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div data-reveal className="reveal">
          <Eyebrow>Research</Eyebrow>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
            Papers, replications & <span className="text-gradient">open datasets</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Our research wing pairs undergraduates with mentors to run rigorous,
            reproducible projects — from ML replication to observational astronomy.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton to="/research">Browse research</CTAButton>
          </div>
        </div>
        <div className="grid gap-3" data-reveal>
          {[
            { t: "Replicating BERT on scientific corpora", meta: "NLP · Preprint" },
            { t: "Photometric variability of RR Lyrae stars", meta: "Astronomy · Data release" },
            { t: "SLAM benchmarks for indoor micro-rovers", meta: "Robotics · Dataset" },
          ].map((r) => (
            <GlassCard key={r.t} className="p-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.meta}</div>
              <h3 className="mt-2 font-display text-lg font-semibold">{r.t}</h3>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Gallery preview ---------- */
function GalleryPreview() {
  const tiles = [
    { h: 220, c: "from-blue-500/50 to-cyan-400/30" },
    { h: 320, c: "from-purple-500/40 to-blue-500/30" },
    { h: 260, c: "from-cyan-400/40 to-indigo-500/30" },
    { h: 280, c: "from-indigo-500/50 to-cyan-400/30" },
    { h: 200, c: "from-blue-400/40 to-purple-500/30" },
    { h: 300, c: "from-cyan-500/40 to-blue-500/30" },
    { h: 240, c: "from-purple-500/40 to-cyan-400/30" },
    { h: 260, c: "from-blue-500/40 to-indigo-500/30" },
  ];
  return (
    <Section>
      <div className="flex items-end justify-between gap-6" data-reveal>
        <SectionHeading
          eyebrow="Gallery"
          title={<>Moments from the <span className="text-gradient">lab</span>.</>}
        />
        <Link to="/gallery" className="group inline-flex items-center gap-1 text-sm text-primary/90">
          Open gallery <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-10 columns-2 md:columns-4 gap-4 [column-fill:_balance]">
        {tiles.map((t, i) => (
          <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl glass hover-lift">
            <div className={`relative bg-gradient-to-br ${t.c}`} style={{ height: t.h }}>
              <div className="absolute inset-0 grid-bg opacity-50" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  return (
    <Section>
      <div data-reveal>
        <SectionHeading
          eyebrow="Voices"
          title="What our alumni say"
          align="center"
        />
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <GlassCard key={t.name} className="p-7" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
            <Quote className="h-6 w-6 text-primary" />
            <p className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-semibold">
                {t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
              </div>
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
            <div className="mt-3 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-primary text-primary" />)}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Partners ---------- */
function Partners() {
  const logos = ["Photon Labs", "Kepler Institute", "Vector School", "OpenBio", "AtlasAI", "NovaCollege", "Helix Foundation", "Quanta Works"];
  return (
    <Section>
      <div data-reveal>
        <SectionHeading
          eyebrow="Trusted by"
          title="Institutions we build alongside"
          align="center"
        />
      </div>
      <div className="mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((l, i) => (
            <div key={i} className="flex items-center gap-3 text-xl font-display font-semibold text-foreground/60 hover:text-foreground transition-colors">
              <School className="h-5 w-5" />
              {l}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Newsletter ---------- */
function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    const { error: submitError } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email }]);

    setLoading(false);

    if (submitError) {
      if (submitError.code === "23505") {
        // Unique violation means they are already subscribed
        setSubscribed(true);
      } else {
        console.error("Error subscribing:", submitError);
        setError("Failed to subscribe. Please try again.");
      }
    } else {
      setSubscribed(true);
    }
  };

  return (
    <Section>
      <div data-reveal className="reveal relative overflow-hidden rounded-[32px] glass-strong p-10 sm:p-16 text-center shadow-elevated">
        <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-2xl">
          <div className="flex justify-center"><Eyebrow>Stay in orbit</Eyebrow></div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
            The <span className="text-gradient">Neutrino</span> dispatch
          </h2>
          <p className="mt-4 text-muted-foreground">
            One thoughtful email a month — new bootcamps, research drops, and reading.
          </p>
          {subscribed ? (
            <div className="mt-8 text-primary font-medium p-4 rounded-full glass-strong">
              Thanks for subscribing! Keep an eye on your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-8 mx-auto flex max-w-md items-center gap-2 rounded-full glass p-1.5 relative">
              <div className="pl-3 text-muted-foreground"><Mail className="h-4 w-4" /></div>
               <input type="email" required name="email" placeholder="neutrinoscienceclub@gmail.com" disabled={loading}
                className="flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground disabled:opacity-50" />
              <button disabled={loading} className="rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform disabled:opacity-70 disabled:hover:scale-100">
                {loading ? "Wait..." : "Subscribe"}
              </button>
              {error && <div className="absolute -bottom-8 left-0 right-0 text-xs text-destructive text-center">{error}</div>}
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

// keep PageHero import from tree-shaking (unused in Home but referenced elsewhere)
export { PageHero };
