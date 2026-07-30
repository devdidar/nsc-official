import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2 } from "lucide-react";
import { PageHero, Section, CTAButton } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/bootcamps")({
  head: () => ({
    meta: [
      { title: "Bootcamps — Neutrino Science Club" },
      { name: "description", content: "Immersive Python Bootcamp — learn from zero to real projects with live classes, mentorship, and certification." },
      { property: "og:title", content: "Bootcamps — Neutrino Science Club" },
      { property: "og:description", content: "Immersive, mentor-led training programs. Our flagship Python Bootcamp is now live." },
      { property: "og:url", content: "https://nsc-official.vercel.app/bootcamps" },
      { property: "og:image", content: "https://nsc-official.vercel.app/og-bootcamps.png" },
      { name: "twitter:title", content: "Bootcamps — Neutrino Science Club" },
      { name: "twitter:description", content: "Our flagship Python Bootcamp is now live." },
      { name: "twitter:image", content: "https://nsc-official.vercel.app/og-bootcamps.png" },
    ],
  }),
  component: Bootcamps,
});

function Bootcamps() {
  const ref = useRevealAll<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Bootcamps"
        title={<>Our flagship <span className="text-gradient">Python Bootcamp</span> is now live.</>}
        description="4 weeks of hands-on, mentor-led Python training for kids & beginners — 8 live classes, milestone projects, and a Python Arcade capstone."
      >
        <CTAButton to="/bootcamp/python">Explore Python Bootcamp</CTAButton>
      </PageHero>

      <Section>
        <div data-reveal className="reveal relative overflow-hidden rounded-2xl sm:rounded-[32px] glass-strong p-6 sm:p-8 md:p-14 text-center">
          <div className="relative">
            <div className="mx-auto inline-grid h-20 w-20 place-items-center rounded-2xl bg-primary mb-6">
              <Code2 className="h-9 w-9 text-primary-foreground" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              NSC Python Bootcamp for Kids
            </h2>
            <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2">
              <span className="rounded-full bg-primary/20 border border-primary/40 px-3 py-1 text-[10px] sm:text-xs font-bold text-primary text-center leading-snug">
                Launch Scholarship: FREE for First 50 Students (Regular ৳299)
              </span>
            </div>
            <p className="mt-4 mx-auto max-w-lg text-muted-foreground leading-relaxed">
              Learn complete Python fundamentals in 4 weeks. Build milestone projects like a Student Info System & Quiz Game, leading up to your own Python Arcade!
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
              {["4 Weeks", "8 Live Classes", "Milestone Projects", "Python Arcade", "Certificate", "First 50 Students FREE"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/bootcamp/python"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:scale-[1.03] transition-transform"
              >
                View Full Details
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
