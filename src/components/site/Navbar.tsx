import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Code2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const CAMPUS_AMBASSADOR_URL = "https://forms.gle/zL5qfhdb2MFR1XqB6";

const links = [
  { to: "/about", label: "About" },
  { to: "/activities", label: "Activities" },
  { to: "/events", label: "Events" },
  { to: "/bootcamps", label: "Bootcamps" },
  // { to: "/research", label: "Research" },
  // { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

const mobileLinks = [
  { to: "/", label: "Home" },
  ...links,
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-3 sm:py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 border border-black/10 bg-white/85 backdrop-blur-xl gap-2 sm:gap-4",
            scrolled ? "bg-white/95 shadow-sm" : "",
          )}
        >
          <Link to="/" className="group flex items-center gap-2.5 shrink-0">
            <img
              src="/favicon.svg"
              alt="Neutrino Science Club Logo"
              className="h-8 w-8 rounded-lg object-cover shrink-0"
            />
            <span className="font-display text-sm sm:text-base font-bold tracking-tight text-foreground whitespace-nowrap shrink-0">
              Neutrino Science Club
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink-0">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative rounded-full px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-black/5 whitespace-nowrap"
                activeProps={{ className: "bg-secondary text-secondary-foreground font-semibold" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href={CAMPUS_AMBASSADOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/amb relative overflow-hidden rounded-full px-4 xl:px-5 py-2 text-xs xl:text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_4px_24px_rgba(37,99,235,0.45)]"
              style={{
                background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 40%, #3b82f6 100%)",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover/amb:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                  animation: "ambassador-sweep 2s ease-in-out infinite",
                }}
              />
              <span className="relative z-10">
                Campus Ambassador
              </span>
            </a>
            <Link
              to="/bootcamp/python"
              className="relative rounded-full bg-primary px-4 xl:px-5 py-2 text-xs xl:text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] whitespace-nowrap shrink-0"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Code2 className="h-4 w-4" />
                Python Bootcamp
              </span>
            </Link>
          </div>

          <button
            aria-label="Menu"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden grid h-9 w-9 place-items-center rounded-full bg-secondary text-secondary-foreground border border-secondary/60 shrink-0"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[64px] sm:top-[72px] mx-3 rounded-3xl transition-all duration-300 origin-top",
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none",
        )}
      >
        <div className="bg-white/95 backdrop-blur-2xl border border-black/10 rounded-3xl p-4 shadow-lg">
          <div className="grid gap-1">
            {mobileLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-black/5 hover:text-foreground"
                activeProps={{ className: "bg-secondary text-secondary-foreground font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={CAMPUS_AMBASSADOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 relative flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-center text-sm font-semibold text-white overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 40%, #3b82f6 100%)",
              }}
            >
              Campus Ambassador
            </a>
            <Link
              to="/bootcamp/python"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              <Code2 className="h-4 w-4" />
              Python Bootcamp
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
