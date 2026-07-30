import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-12 sm:mt-16 md:mt-24 border-t border-black/5 bg-white/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 md:py-16">
        {/* Brand + description */}
        <div className="text-center sm:text-left">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <img
              src="/favicon.svg"
              alt="Neutrino Science Club Logo"
              className="h-9 w-9 object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold whitespace-nowrap text-foreground">Neutrino Science Club</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">Science in Thought · Innovation in Creation</span>
            </span>
          </Link>
          <p className="mt-4 mx-auto sm:mx-0 max-w-xs sm:max-w-md text-sm text-muted-foreground leading-relaxed">
            A student-led community exploring the frontiers of science, engineering
            and computation — building the next generation of curious minds.
          </p>
          <div className="mt-5 flex items-center gap-2 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/neutrinoscienceclub"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-xl bg-white border border-black/5 hover:bg-black/5 transition-colors text-foreground shadow-sm"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/neutrino-science-club/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-xl bg-white border border-black/5 hover:bg-black/5 transition-colors text-foreground shadow-sm"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Explore | Community | Reach us */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 lg:gap-12">
          <FooterCol title="Explore" links={[
            ["About", "/about"], ["Activities", "/activities"],
            ["Events", "/events"], ["Python Bootcamp", "/bootcamp/python"],
          ]} />
          <FooterCol title="Community" links={[
            ["Research", "/research"], ["Resources", "/resources"],
            ["Bootcamps", "/bootcamps"], ["Contact", "/contact"],
          ]} />
          <FooterCol title="Reach us" links={[
            ["Contact", "/contact"], ["Partnerships", "/contact"],
            ["Press kit", "#"], ["Code of conduct", "#"],
          ]} />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-black/5 pt-5 sm:pt-6 text-xs text-muted-foreground text-center sm:text-left">
          <p>© {new Date().getFullYear()} Neutrino Science Club. Crafted with curiosity.</p>
          <div className="flex items-center gap-4 justify-center">
            <a href="#" className="hover:text-foreground transition-colors py-1">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors py-1">Terms</a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-foreground transition-colors py-1">
              Status <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, className }: { title: string; links: [string, string][]; className?: string }) {
  return (
    <div className={className}>
      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link to={href} className="text-foreground/80 hover:text-foreground transition-colors py-0.5 inline-block">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
