import { CalendarDays, MapPin, Sparkles, ArrowRight, FlaskConical, Trophy, type LucideIcon, Rocket } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Event data — single source of truth
───────────────────────────────────────────── */
export const SCIENCE_FEST_EVENT = {
  /** Internal route — redirects 301 to https://sf26.neutrinoscienceclub.org/ */
  url: "/science-fest-2026",
  title: "Shaheed Tanvir Science Fest & Olympiad 2026",
  shortTitle: "Science Fest & Olympiad",
  tagline: "Explore · Build · Compete",
  subtitle: "A national science festival where young minds explore, build, and compete.",
  date: "19 September 2026",
  venue: "Tongi Pilot School & Girls College",
  city: "Tongi, Gazipur",
  activities: ["Project Showcase", "Science Olympiad"],
} as const;

/* Science Fest palette tokens */
export const SF_PALETTE = {
  green: "#123F2A",
  greenDark: "#0d2e1f",
  greenMid: "#1a5237",
  greenLight: "#1e6040",
  yellow: "#F4E82C",
  yellowSoft: "rgba(244,232,44,0.18)",
  cream: "#F8F8EF",
  creamDark: "#f0f0e4",
} as const;

/* ─────────────────────────────────────────────
   Subtle SVG Science Graphics
───────────────────────────────────────────── */
function AtomRings({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="60" cy="60" r="28" stroke={SF_PALETTE.yellow} strokeOpacity="0.35" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="48" stroke={SF_PALETTE.yellow} strokeOpacity="0.2" strokeWidth="1" />
      <ellipse cx="60" cy="60" rx="55" ry="22" stroke={SF_PALETTE.yellow} strokeOpacity="0.25" strokeWidth="1" transform="rotate(-35 60 60)" />
      <ellipse cx="60" cy="60" rx="55" ry="22" stroke={SF_PALETTE.yellow} strokeOpacity="0.2" strokeWidth="1" transform="rotate(35 60 60)" />
      <circle cx="60" cy="60" r="5" fill={SF_PALETTE.yellow} fillOpacity="0.6" />
      <circle cx="60" cy="32" r="3" fill={SF_PALETTE.yellow} fillOpacity="0.6" />
      <circle cx="88" cy="75" r="3" fill={SF_PALETTE.yellow} fillOpacity="0.5" />
      <circle cx="32" cy="75" r="3" fill={SF_PALETTE.yellow} fillOpacity="0.45" />
    </svg>
  );
}

function SparkleCluster({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M40 8 L43 37 L72 40 L43 43 L40 72 L37 43 L8 40 L37 37 Z"
        fill={SF_PALETTE.yellow}
        fillOpacity="0.5"
      />
      <circle cx="16" cy="16" r="2.5" fill={SF_PALETTE.yellow} fillOpacity="0.5" />
      <circle cx="64" cy="18" r="2" fill={SF_PALETTE.yellow} fillOpacity="0.4" />
      <circle cx="20" cy="64" r="2" fill={SF_PALETTE.yellow} fillOpacity="0.35" />
      <circle cx="66" cy="62" r="2.5" fill={SF_PALETTE.yellow} fillOpacity="0.45" />
    </svg>
  );
}

function MoleculeLines({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <line x1="20" y1="50" x2="55" y2="25" stroke={SF_PALETTE.yellow} strokeOpacity="0.25" strokeWidth="1.5" />
      <line x1="55" y1="25" x2="90" y2="50" stroke={SF_PALETTE.yellow} strokeOpacity="0.25" strokeWidth="1.5" />
      <line x1="90" y1="50" x2="120" y2="30" stroke={SF_PALETTE.yellow} strokeOpacity="0.2" strokeWidth="1.5" />
      <circle cx="20" cy="50" r="6" fill={SF_PALETTE.greenLight} stroke={SF_PALETTE.yellow} strokeOpacity="0.4" strokeWidth="1.5" />
      <circle cx="55" cy="25" r="8" fill={SF_PALETTE.greenMid} stroke={SF_PALETTE.yellow} strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="90" cy="50" r="6" fill={SF_PALETTE.greenLight} stroke={SF_PALETTE.yellow} strokeOpacity="0.4" strokeWidth="1.5" />
      <circle cx="120" cy="30" r="5" fill={SF_PALETTE.greenLight} stroke={SF_PALETTE.yellow} strokeOpacity="0.3" strokeWidth="1" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Hero Event Card Component (Right Column in Hero)
───────────────────────────────────────────── */
export function ScienceFestHeroCard() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Subtle glowing backdrop for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-2 sm:-inset-3 rounded-[36px] opacity-75 blur-xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 70% 30%, rgba(18,63,42,0.18), rgba(244,232,44,0.12) 40%, rgba(99,68,245,0.08) 70%, transparent 85%)`,
        }}
      />

      {/* Main card */}
      <div
        className="group relative overflow-hidden rounded-[26px] sm:rounded-[32px] bg-white border transition-all duration-300 hover:-translate-y-1"
        style={{
          borderColor: "rgba(0,0,0,0.08)",
          boxShadow:
            "0 4px 20px rgba(0,0,0,0.04), 0 12px 36px rgba(18,63,42,0.08), 0 0 0 1px rgba(18,63,42,0.06)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.06), 0 20px 48px rgba(18,63,42,0.14), 0 0 0 1px rgba(18,63,42,0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.04), 0 12px 36px rgba(18,63,42,0.08), 0 0 0 1px rgba(18,63,42,0.06)";
        }}
      >
        {/* Top Header Strip */}
        <div className="flex items-center justify-between px-5 sm:px-6 pt-4 pb-3 border-b border-black/[0.04] bg-[#fbfbf8]">
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]"
            style={{
              background: `${SF_PALETTE.green}12`,
              color: SF_PALETTE.green,
              border: `1px solid ${SF_PALETTE.green}20`,
            }}
          >
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ background: SF_PALETTE.green }}
            />
            Featured Event
          </div>

          <div
            className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            style={{
              background: `${SF_PALETTE.yellow}40`,
              color: SF_PALETTE.green,
            }}
          >
            <Sparkles className="h-3 w-3" />
            <span>National Fest</span>
          </div>
        </div>

        {/* Science Fest Visual Banner with Official Logo */}
        <div
          className="relative overflow-hidden px-5 sm:px-6 py-5 sm:py-6 flex flex-col items-center justify-center text-center"
          style={{
            background: `linear-gradient(145deg, ${SF_PALETTE.green} 0%, ${SF_PALETTE.greenMid} 65%, ${SF_PALETTE.greenLight} 100%)`,
          }}
        >
          {/* Yellow ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 60% at 50% 10%, ${SF_PALETTE.yellowSoft}, transparent 75%)`,
            }}
          />

          {/* Animated decorative SVGs */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <AtomRings className="sf-decor-float absolute -top-4 -right-4 w-28 h-28 opacity-40" />
            <SparkleCluster className="sf-decor-drift absolute bottom-2 left-2 w-12 h-12 opacity-50" />
            <MoleculeLines className="sf-decor-float absolute -bottom-4 right-1 w-24 h-16 opacity-30" style={{ animationDelay: "-2.5s" }} />
            {/* Dot grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, ${SF_PALETTE.yellow}20 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
                opacity: 0.3,
              }}
            />
          </div>

          {/* Official Logo Display */}
          <div className="relative z-10 w-full flex flex-col items-center">
            <div className="w-full max-w-[280px] sm:max-w-[330px] flex items-center justify-center py-1">
              <img
                src="/images/sf-main-logo.svg"
                alt="Shaheed Tanvir Science Fest & Olympiad 2026"
                className="w-full h-auto max-h-[140px] sm:max-h-[160px] object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <div className="mt-2.5 flex items-center justify-center gap-2">
              <span
                className="text-[11px] font-semibold tracking-wide px-3 py-0.5 rounded-full"
                style={{
                  background: "rgba(244,232,44,0.18)",
                  color: SF_PALETTE.yellow,
                  border: "1px solid rgba(244,232,44,0.3)",
                }}
              >
                {SCIENCE_FEST_EVENT.tagline}
              </span>
            </div>
          </div>
        </div>

        {/* Card Body — Event Details */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Key Activities Tags */}
          <div className="flex flex-wrap gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                background: `${SF_PALETTE.green}10`,
                border: `1px solid ${SF_PALETTE.green}18`,
                color: SF_PALETTE.green,
              }}
            >
              <FlaskConical className="h-3.5 w-3.5" />
              Project Showcase
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                background: `${SF_PALETTE.green}10`,
                border: `1px solid ${SF_PALETTE.green}18`,
                color: SF_PALETTE.green,
              }}
            >
              <Trophy className="h-3.5 w-3.5" />
              Science Olympiad
            </span>
          </div>

          {/* Info Rows */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <span
                className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg"
                style={{
                  background: `${SF_PALETTE.green}12`,
                  color: SF_PALETTE.green,
                }}
              >
                <CalendarDays className="h-3.5 w-3.5" />
              </span>
              <div className="leading-snug">
                <span className="font-semibold text-foreground">{SCIENCE_FEST_EVENT.date}</span>
                <span className="ml-2 text-xs px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-medium border border-emerald-200/60">
                  Registration Open
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <span
                className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg"
                style={{
                  background: `${SF_PALETTE.green}12`,
                  color: SF_PALETTE.green,
                }}
              >
                <MapPin className="h-3.5 w-3.5" />
              </span>
              <div className="leading-snug text-muted-foreground">
                <span className="font-medium text-foreground">{SCIENCE_FEST_EVENT.venue}</span>
                <span className="block text-[11px] sm:text-xs text-muted-foreground">{SCIENCE_FEST_EVENT.city}</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <Link
              to={SCIENCE_FEST_EVENT.url}
              className="group/cta w-full inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-3 text-sm font-bold text-white transition-all duration-200 science-fest-btn"
              style={{
                background: SF_PALETTE.green,
                boxShadow: "0 4px 16px rgba(18,63,42,0.3)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = SF_PALETTE.greenMid;
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = SF_PALETTE.green;
                el.style.transform = "";
              }}
              aria-label="Explore Shaheed Tanvir Science Fest & Olympiad 2026"
            >
              <span>Explore Science Fest</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FeaturedScienceFest (Standalone section fallback if needed)
───────────────────────────────────────────── */
export function FeaturedScienceFest() {
  return (
    <section className="relative py-8 sm:py-10 md:py-14" aria-labelledby="sf-section-heading">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <ScienceFestHeroCard />
      </div>
    </section>
  );
}
