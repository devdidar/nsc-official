import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, GraduationCap } from "lucide-react";
import { PageHero, Section, GlassCard, CTAButton } from "@/components/site/primitives";
import { listGraduates } from "@/lib/certificates";

export const Route = createFileRoute("/bootcamp/python_/graduates/b1")({
  head: () => ({
    meta: [
      { title: "Python Bootcamp Batch 1 Graduates — Neutrino Science Club" },
      { name: "description", content: "Meet the Founding Batch graduates of the Neutrino Science Club Python Bootcamp." },
      { property: "og:title", content: "NSC Python Bootcamp — Batch 1 Graduates" },
      { property: "og:description", content: "The first batch of the Neutrino Science Club Python Bootcamp." },
      { property: "og:url", content: "https://nsc-official.vercel.app/bootcamp/python/graduates/b1" },
      { property: "og:image", content: "https://nsc-official.vercel.app/og-python-bootcamp.png" },
    ],
  }),
  loader: async () => ({ graduates: await listGraduates({ data: { idPrefix: "NSC-B1" } }) }),
  component: Graduates,
});

function initials(name: string) {
  return name
    .replace(/\b(Md|Mohammad|Muhammad|Sheikh|Shekh|Syed|Sayed)\.?\s+/gi, "")
    .split(/\s+/)
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Graduates() {
  const { graduates } = Route.useLoaderData();
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return needle ? graduates.filter((n) => n.toLowerCase().includes(needle)) : graduates;
  }, [graduates, q]);

  return (
    <div>
      <PageHero
        eyebrow="Batch 1 · Founding Batch"
        title={<>Python Bootcamp <span className="text-primary">graduates</span></>}
        description={`Congratulations to all ${graduates.length} graduates of our very first batch. Proud of every one of you.`}
      >
        <CTAButton to="/bootcamp/python" variant="ghost">About the bootcamp</CTAButton>
      </PageHero>

      <Section className="pt-0 sm:pt-0 md:pt-0">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-3">
            <label className="relative w-full max-w-sm">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search a name"
                className="w-full rounded-full border border-black/10 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
              />
            </label>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="h-4 w-4 text-primary" />
              {list.length === graduates.length ? `${graduates.length} graduates` : `${list.length} of ${graduates.length}`}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {list.map((name) => (
              <GlassCard key={name} className="flex flex-col items-center p-5 text-center sm:p-6">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary text-base font-bold text-primary sm:h-16 sm:w-16 sm:text-lg">
                  {initials(name)}
                </div>
                <div className="mt-3.5 font-display text-sm font-bold leading-snug text-foreground text-balance sm:text-base">{name}</div>
                <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">Graduate · B1</div>
              </GlassCard>
            ))}
          </div>

          {list.length === 0 && (
            <p className="mt-10 text-center text-sm text-muted-foreground">No graduate matches “{q}”.</p>
          )}
        </div>
      </Section>
    </div>
  );
}
