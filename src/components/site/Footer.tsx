import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-black/5 bg-white/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
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
            <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
              A student-led community exploring the frontiers of science, engineering
              and computation — building the next generation of curious minds.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.facebook.com/neutrinoscienceclub"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white border border-black/5 hover:bg-black/5 transition-colors text-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/neutrino-science-club/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white border border-black/5 hover:bg-black/5 transition-colors text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

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

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-black/5 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Neutrino Science Club. Crafted with curiosity.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-foreground">
              Status <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link to={href} className="text-foreground/80 hover:text-foreground transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
