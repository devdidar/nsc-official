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
    <section id={id} className={cn("relative py-10 sm:py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-secondary/80 text-secondary-foreground border border-secondary px-3.5 py-1 text-xs font-semibold">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span className="uppercase tracking-[0.16em]">{children}</span>
    </div>
  );
}

export function SectionHeading({
  eyebrow, title, description, align = "left",
}: { eyebrow?: string; title: ReactNode; description?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <div className={cn("mb-3", align === "center" && "flex justify-center")}><Eyebrow>{eyebrow}</Eyebrow></div>}
      <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
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
        "group relative rounded-3xl bg-white/85 border border-black/5 p-6 transition-all duration-300",
        hover && "hover:bg-white hover:border-black/10 hover:-translate-y-1",
        className,
      )}
    >
      <div className="relative">{children}</div>
    </div>
  );
}

export function CTAButton({
  to, href, children, variant = "primary", className, ...props
}: { to?: string; href?: string; children: ReactNode; variant?: "primary" | "ghost"; className?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300";
  const styles = variant === "primary"
    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02]"
    : "bg-white/80 border border-black/5 text-foreground hover:bg-white";
  const cls = cn(base, styles, className);
  const content = <>{children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>;
  if (to) return <Link to={to} className={cn(cls, "group")} {...(props as any)}>{content}</Link>;
  return <a href={href ?? "#"} className={cn(cls, "group")} {...props}>{content}</a>;
}

export function PageHero({
  eyebrow, title, description, children,
}: { eyebrow: string; title: ReactNode; description?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative pt-28 pb-8 sm:pt-36 sm:pb-12">
      <div className="pointer-events-none absolute inset-0 bg-hero opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] grid-bg" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <div className="animate-blur-in">
          <div className="flex justify-center"><Eyebrow>{eyebrow}</Eyebrow></div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
