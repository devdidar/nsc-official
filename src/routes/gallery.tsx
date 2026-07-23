import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery — Neutrino Science Club" },
    { name: "description", content: "Photos and moments from the labs, bootcamps and observation nights." },
  ]}),
  loader: async () => {
    const { data: gallery_items, error } = await supabase.from("gallery_items").select("*").order("sort_order");
    if (error) throw error;
    return { gallery_items };
  },
  component: Gallery,
});

function Gallery() {
  const { gallery_items: tiles = [] } = Route.useLoaderData();
  const ref = useRevealAll<HTMLDivElement>();
  const [i, setI] = useState<number | null>(null);
  const close = () => setI(null);
  const prev = () => setI((n) => (n == null ? n : (n - 1 + tiles.length) % tiles.length));
  const next = () => setI((n) => (n == null ? n : (n + 1) % tiles.length));

  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Gallery"
        title={<>Snapshots from the <span className="text-gradient">lab</span>.</>}
        description="A Pinterest-style feed of moments — labs, nights, builds and demos."
      />

      <Section>
        <div className="columns-2 md:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
          {tiles.map((t, idx) => (
            <button key={idx} onClick={() => setI(idx)} data-reveal
              className="reveal mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl glass hover-lift text-left"
              style={{ transitionDelay: `${idx * 30}ms` }}>
              <div className={cn("relative bg-gradient-to-br", t.gradient)} style={{ height: t.height || 260 }}>
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <div className="text-xs text-white/90">{t.caption}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {i != null && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 backdrop-blur-md p-4 animate-blur-in" onClick={close}>
          <div className="relative w-full max-w-4xl aspect-[4/3] rounded-3xl overflow-hidden glass-strong shadow-elevated" onClick={(e) => e.stopPropagation()}>
            <div className={cn("absolute inset-0 bg-gradient-to-br", tiles[i].gradient)} />
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <div className="text-sm text-white/90">{tiles[i].caption}</div>
            </div>
            <button onClick={close} className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full glass-strong">
              <X className="h-4 w-4" />
            </button>
            <button onClick={prev} className="absolute top-1/2 left-4 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass-strong">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} className="absolute top-1/2 right-4 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass-strong">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
