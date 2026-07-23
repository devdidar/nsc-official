import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import type { ReactNode, HTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

export function Section({
  children,
  className,
  id,
}: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary animate-pulse-glow" />
      <span className="uppercase tracking-[0.18em]">{children}</span>
    </div>
  );
}

export function SectionHeading({
  eyebrow, title, description, align = "left",
}: { eyebrow?: string; title: ReactNode; description?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <div className={cn("mb-5", align === "center" && "flex justify-center")}><Eyebrow>{eyebrow}</Eyebrow></div>}
      <h2 className="text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function GlassCard({
  children, className, hover = true, ...rest
}: HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      {...rest}
      className={cn(
        "group relative rounded-3xl glass p-6 transition-all duration-500",
        hover && "hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-1",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,0%), oklch(0.72 0.19 245 / 0.10), transparent 40%)" }} />
      <div className="relative">{children}</div>
    </div>
  );
}

export function CTAButton({
  to, href, children, variant = "primary", className, ...props
}: { to?: string; href?: string; children: ReactNode; variant?: "primary" | "ghost"; className?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300";
  const styles = variant === "primary"
    ? "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-[1.03]"
    : "glass hover:bg-white/10";
  const cls = cn(base, styles, className);
  const content = <>{children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>;
  if (to) return <Link to={to} className={cn(cls, "group")} {...(props as any)}>{content}</Link>;
  return <a href={href ?? "#"} className={cn(cls, "group")} {...props}>{content}</a>;
}

export function PageHero({
  eyebrow, title, description, children,
}: { eyebrow: string; title: ReactNode; description?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative pt-40 pb-16 sm:pt-48 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-hero opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] grid-bg" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <div className="animate-blur-in">
          <div className="flex justify-center"><Eyebrow>{eyebrow}</Eyebrow></div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-balance">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
