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
    { property: "og:title", content: "Gallery — Neutrino Science Club" },
    { property: "og:description", content: "Snapshots from the lab — labs, observation nights, builds and demos." },
    { property: "og:url", content: "https://nsc-official.vercel.app/gallery" },
    { property: "og:image", content: "https://nsc-official.vercel.app/og-gallery.png" },
    { name: "twitter:title", content: "Gallery — Neutrino Science Club" },
    { name: "twitter:description", content: "Photos and moments from the labs, bootcamps and observation nights." },
    { name: "twitter:image", content: "https://nsc-official.vercel.app/og-gallery.png" },
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
              className="reveal mb-4 block w-full break-inside-avoid overflow-hidden rounded-3xl bg-white/90 border border-black/6 hover-lift text-left shadow-xs"
              style={{ transitionDelay: `${idx * 30}ms` }}>
              <div className="relative bg-secondary/50" style={{ height: t.height || 260 }}>
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md p-3.5 border-t border-black/5">
                  <div className="text-xs font-medium text-foreground">{t.caption}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {i != null && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/40 backdrop-blur-md p-4 animate-blur-in" onClick={close}>
          <div className="relative w-full max-w-4xl aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-black/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="absolute inset-0 bg-secondary/50" />
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-md p-6 border-t border-black/5">
              <div className="text-sm font-semibold text-foreground">{tiles[i].caption}</div>
            </div>
            <button onClick={close} className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white border border-black/10 text-foreground hover:bg-black/5 transition-colors cursor-pointer">
              <X className="h-4 w-4" />
            </button>
            <button onClick={prev} className="absolute top-1/2 left-4 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white border border-black/10 text-foreground hover:bg-black/5 transition-colors cursor-pointer">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} className="absolute top-1/2 right-4 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white border border-black/10 text-foreground hover:bg-black/5 transition-colors cursor-pointer">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
