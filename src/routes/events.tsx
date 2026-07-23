import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarDays, MapPin, Clock, ArrowRight } from "lucide-react";
import { PageHero, Section, GlassCard, Eyebrow } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [
    { title: "Events — Neutrino Science Club" },
    { name: "description", content: "Upcoming and past events: summits, hackathons, observation nights and workshops." },
  ]}),
  loader: async () => {
    const { data: events, error } = await supabase.from("events").select("*").order("sort_order");
    if (error) throw error;
    return { events };
  },
  component: Events,
});

const tabs = ["Upcoming", "Past", "All"] as const;

function Events() {
  const { events } = Route.useLoaderData();
  const [tab, setTab] = useState<(typeof tabs)[number]>("Upcoming");
  const ref = useRevealAll<HTMLDivElement>();
  const list = events?.filter((e) =>
    tab === "All" ? true : tab === "Upcoming" ? e.status === "upcoming" : e.status === "past"
  ) || [];
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Events"
        title={<>Meet, make, and <span className="text-gradient">launch things</span>.</>}
        description="Summits, hackathons, workshops and observation nights — a calendar full of reasons to show up."
      />
      <Section>
        <div className="flex justify-center gap-1 rounded-full glass p-1.5 w-fit mx-auto" data-reveal>
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "rounded-full px-5 py-2 text-sm transition-all",
                tab === t ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {list.map((e, i) => (
            <article key={e.title} data-reveal className="reveal group relative overflow-hidden rounded-3xl glass hover-lift" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="grid sm:grid-cols-[220px_1fr]">
                <div className={`relative min-h-40 bg-gradient-to-br ${e.grad}`}>
                  <div className="absolute inset-0 grid-bg opacity-60" />
                  <div className="absolute inset-0 grid place-items-center">
                    <CalendarDays className="h-12 w-12 text-white/70" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <Eyebrow>{e.tag}</Eyebrow>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-muted-foreground">
                    <Meta i={<CalendarDays className="h-3.5 w-3.5" />} v={e.date} />
                    <Meta i={<Clock className="h-3.5 w-3.5" />} v={e.time || ""} />
                    <Meta i={<MapPin className="h-3.5 w-3.5" />} v={e.city || ""} />
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary/90">
                    {e.status === "upcoming" ? "Reserve seat" : "Recap"} <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Meta({ i, v }: { i: React.ReactNode; v: string }) {
  return <div className="flex items-center gap-1.5"><span className="text-primary/90">{i}</span><span>{v}</span></div>;
}
