import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays, MapPin, ArrowLeft, Users, Sparkles, FlaskConical, Rocket,
} from "lucide-react";
import { PageHero, Section, SectionHeading, GlassCard, CTAButton, Eyebrow } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/science-fest-2026")({
  head: () => ({
    meta: [
      { title: "Science Fest 2026 — Neutrino Science Club" },
      { name: "description", content: "Science Fest 2026 organized by Neutrino Science Club (NSC). Register now to participate!" },
      { property: "og:title", content: "Science Fest 2026 — Neutrino Science Club" },
      { property: "og:description", content: "Science Fest 2026 — Register now to showcase your projects and compete!" },
      { property: "og:url", content: "https://nsc-official.vercel.app/science-fest-2026" },
      { name: "twitter:title", content: "Science Fest 2026 — Neutrino Science Club" },
      { name: "twitter:description", content: "Register for Science Fest 2026 organized by NSC." },
    ]
  }),
  component: ScienceFest2026,
});

const highlights = [
  { icon: FlaskConical, label: "Science Projects", value: "Project Showcases" },
  { icon: Users, label: "Open To", value: "All Students" },
  { icon: Sparkles, label: "Competitions", value: "Quiz & Olympiad" },
  { icon: Rocket, label: "Prizes", value: "Awards & Prizes" },
];

function ScienceFest2026() {
  const ref = useRevealAll<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Upcoming Event · 2026"
        title={<>Science <span className="text-gradient">Fest</span> 2026</>}
        description="Neutrino Science Club (NSC) presents Science Fest 2026 — a celebration of curiosity, innovation, and scientific discovery. Register now to participate!"
      >
        <CTAButton href="https://forms.gle/znyes6T523dwSrdU8" target="_blank" rel="noopener noreferrer">
          Register Now
        </CTAButton>
        <Link
          to="/events"
          className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-black/10 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to All Events
        </Link>
      </PageHero>

      {/* Highlights */}
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
          {highlights.map((h) => (
            <GlassCard key={h.label} className="p-6">
              <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary mb-3">
                <h.icon className="h-5 w-5" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{h.label}</div>
              <div className="mt-1 text-base font-bold text-foreground">{h.value}</div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Registration CTA Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <SectionHeading
            eyebrow="Registration"
            title={<>Ready to <span className="text-gradient">participate</span>?</>}
            description="Fill out the registration form to secure your spot at Science Fest 2026. Don't miss this opportunity to showcase your scientific talent!"
            align="center"
          />
          <div className="mt-8 flex justify-center">
            <CTAButton href="https://forms.gle/znyes6T523dwSrdU8" target="_blank" rel="noopener noreferrer">
              Register Now
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
