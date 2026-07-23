import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/activities", label: "Activities" },
  { to: "/events", label: "Events" },
  { to: "/bootcamps", label: "Bootcamps" },
  { to: "/research", label: "Research" },
  { to: "/resources", label: "Resources" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-500",
            scrolled ? "glass-strong shadow-elevated" : "bg-transparent",
          )}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <img
              src="/favicon.svg"
              alt="Neutrino Science Club Logo"
              className="h-8 w-8 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-display text-sm sm:text-base font-bold tracking-tight text-foreground whitespace-nowrap">
              Neutrino Science Club
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/bootcamp/python"
              className="relative rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground animate-glow-border animate-pulse-glow transition-transform hover:scale-[1.06] hover:shadow-[0_0_32px_oklch(0.72_0.19_245_/_0.5)]"
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
            className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[76px] mx-4 rounded-3xl transition-all duration-300 origin-top",
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none",
        )}
      >
        <div className="glass-strong rounded-3xl p-4 shadow-elevated">
          <div className="grid gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                activeProps={{ className: "bg-white/5 text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/bootcamp/python"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground animate-glow-border"
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
