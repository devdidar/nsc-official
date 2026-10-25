import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Copy, Download, FileJson, ImagePlus, Loader2, Plus, Trash2, Upload, X } from "lucide-react";
import {
  CongratsPoster,
  POSTER_H,
  POSTER_W,
  posterFontsHref,
  type PhotoFrame,
  type PosterData,
} from "@/components/site/CongratsPoster";

// Internal tool: build "Congrats" posters for graduates, one card per student, and download them.
export const Route = createFileRoute("/tools/congrats-poster")({
  head: () => ({
    meta: [{ title: "Congrats Poster Maker — NSC" }, { name: "robots", content: "noindex" }],
    links: [{ rel: "stylesheet", href: posterFontsHref, crossOrigin: "anonymous" }],
  }),
  component: PosterMaker,
});

type Defaults = Omit<PosterData, "name">;
type Card = Partial<Defaults> & { id: string; name: string; photo: string | null; frame: PhotoFrame };

const STORAGE_KEY = "nsc-congrats-poster-v1";
const DEFAULT_FRAME: PhotoFrame = { zoom: 1, x: 50, y: 25 };
const DEFAULTS: Defaults = { program: "Python Bootcamp", batch: "01", batchLabel: "Founding Batch" };
const SAMPLE_JSON = `[
  { "name": "Hafizul Islam Rafi" },
  { "name": "Muzzammil Rahman Galib" },
  { "name": "Arpita Das", "batch": "01" },
  { "name": "Sheikh Md. Asadullahil Galib", "batchLabel": "Founding Batch" }
]`;

const newId = () => Math.random().toString(36).slice(2, 10);
const newCard = (name = ""): Card => ({ id: newId(), name, photo: null, frame: { ...DEFAULT_FRAME } });

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "poster";

// "md_salman-yasir.jpg" → "Md Salman Yasir"
const nameFromFile = (file: File) =>
  file.name
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

const readAsDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result as string);
    r.onerror = reject;
    r.readAsDataURL(file);
  });

// Accepts [{ name, program?, batch?, batchLabel? }] or ["Name", ...].
function parseCards(text: string): Card[] {
  const raw = JSON.parse(text);
  if (!Array.isArray(raw)) throw new Error("JSON must be an array, like [{ \"name\": \"...\" }].");
  return raw.map((item, i) => {
    if (typeof item === "string") return newCard(item);
    if (!item || typeof item.name !== "string") throw new Error(`Item ${i + 1} needs a "name".`);
    const card = newCard(item.name.trim());
    for (const k of ["program", "batch", "batchLabel"] as const) if (item[k] != null) card[k] = String(item[k]);
    return card;
  });
}

async function renderPng(node: HTMLElement, pixelRatio: number) {
  const { toPng } = await import("html-to-image");
  await document.fonts?.ready;
  return toPng(node, { width: POSTER_W, height: POSTER_H, pixelRatio, cacheBust: true });
}

function PosterMaker() {
  const [defaults, setDefaults] = useState<Defaults>(DEFAULTS);
  const [cards, setCards] = useState<Card[]>(() => [newCard("Sheikh Md. Asadullahil Galib")]);
  const [json, setJson] = useState(SAMPLE_JSON);
  const [jsonError, setJsonError] = useState("");
  const [pixelRatio, setPixelRatio] = useState(1);
  const [busy, setBusy] = useState<string | null>(null);
  const posterNodes = useRef(new Map<string, HTMLDivElement>());
  const loaded = useRef(false);

  // Restore names and settings (not photos) from the last session.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved?.cards?.length) setCards(saved.cards.map((c: Card) => ({ ...c, photo: null })));
      if (saved?.defaults) setDefaults(saved.defaults);
    } catch {}
    loaded.current = true;
  }, []);
  useEffect(() => {
    if (!loaded.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ defaults, cards: cards.map((c) => ({ ...c, photo: null })) }));
    } catch {}
  }, [cards, defaults]);

  const update = (id: string, patch: Partial<Card>) => setCards((cs) => cs.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  const remove = (id: string) => setCards((cs) => cs.filter((c) => c.id !== id));
  const duplicate = (id: string) =>
    setCards((cs) => {
      const i = cs.findIndex((c) => c.id === id);
      const copy = { ...cs[i], id: newId(), frame: { ...cs[i].frame } };
      return [...cs.slice(0, i + 1), copy, ...cs.slice(i + 1)];
    });

  const applyJson = (mode: "replace" | "append") => {
    try {
      const parsed = parseCards(json);
      setCards((cs) => (mode === "replace" ? parsed : [...cs, ...parsed]));
      setJsonError("");
    } catch (e) {
      setJsonError(e instanceof Error ? e.message : "Invalid JSON.");
    }
  };

  const loadJsonFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (file) setJson(await file.text());
  };

  // Multiple photos: fill cards that have no photo yet, in order; extra photos become new cards.
  const bulkPhotos = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = [...(e.target.files ?? [])];
    e.target.value = "";
    const photos = await Promise.all(files.map(async (f) => ({ file: f, url: await readAsDataUrl(f) })));
    setCards((cs) => {
      const next = cs.map((c) => ({ ...c }));
      for (const { file, url } of photos) {
        const empty = next.find((c) => !c.photo);
        if (empty) Object.assign(empty, { photo: url, frame: { ...DEFAULT_FRAME } });
        else next.push({ ...newCard(nameFromFile(file)), photo: url });
      }
      return next;
    });
  };

  const dataFor = (c: Card): PosterData => ({
    name: c.name,
    program: c.program || defaults.program,
    batch: c.batch || defaults.batch,
    batchLabel: c.batchLabel || defaults.batchLabel,
  });

  const downloadOne = async (c: Card, index: number) => {
    const node = posterNodes.current.get(c.id);
    if (!node) return;
    setBusy(c.id);
    try {
      const a = document.createElement("a");
      a.href = await renderPng(node, pixelRatio);
      a.download = `${String(index + 1).padStart(2, "0")}-${slug(c.name)}.png`;
      a.click();
    } finally {
      setBusy(null);
    }
  };

  const downloadAll = async () => {
    setBusy("all");
    try {
      const { default: JSZip } = await import("jszip");
      const zip = new JSZip();
      for (const [i, c] of cards.entries()) {
        const node = posterNodes.current.get(c.id);
        if (!node) continue;
        const png = await renderPng(node, pixelRatio);
        zip.file(`${String(i + 1).padStart(2, "0")}-${slug(c.name)}.png`, png.split(",")[1], { base64: true });
      }
      const blob = await zip.generateAsync({ type: "blob" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `nsc-congrats-posters-${cards.length}.zip`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } finally {
      setBusy(null);
    }
  };

  const field = "w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15";
  const btn = "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all disabled:opacity-50";

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Congrats poster maker</h1>
          <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
            One card per graduate. Add names by hand or from JSON, upload photos, then download one or all.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select value={pixelRatio} onChange={(e) => setPixelRatio(Number(e.target.value))} className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm">
            <option value={1}>1080 × 1350</option>
            <option value={2}>2160 × 2700 (2×)</option>
          </select>
          <button onClick={downloadAll} disabled={!!busy || !cards.length} className={`${btn} bg-primary text-primary-foreground hover:bg-primary/90`}>
            {busy === "all" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            Download all ({cards.length}) as ZIP
          </button>
        </div>
      </div>

      {/* Settings + data entry */}
      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <section className="rounded-3xl border border-black/5 bg-white p-5 sm:p-6">
          <h2 className="font-display text-lg font-bold">Defaults</h2>
          <p className="mt-1 text-xs text-muted-foreground">Used for every card unless a card's JSON sets its own value.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <label className="text-xs font-semibold">
              Program
              <input className={`${field} mt-1`} value={defaults.program} onChange={(e) => setDefaults({ ...defaults, program: e.target.value })} />
            </label>
            <label className="text-xs font-semibold">
              Batch no.
              <input className={`${field} mt-1`} value={defaults.batch} onChange={(e) => setDefaults({ ...defaults, batch: e.target.value })} />
            </label>
            <label className="text-xs font-semibold">
              Batch label
              <input className={`${field} mt-1`} value={defaults.batchLabel} onChange={(e) => setDefaults({ ...defaults, batchLabel: e.target.value })} />
            </label>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <button onClick={() => setCards((cs) => [...cs, newCard()])} className={`${btn} border border-black/10 bg-white hover:bg-black/5`}>
              <Plus className="h-4 w-4" /> Add card
            </button>
            <label className={`${btn} cursor-pointer border border-black/10 bg-white hover:bg-black/5`}>
              <ImagePlus className="h-4 w-4" /> Upload photos (multiple)
              <input type="file" accept="image/*" multiple className="hidden" onChange={bulkPhotos} />
            </label>
            <button onClick={() => setCards([])} disabled={!cards.length} className={`${btn} text-red-600 hover:bg-red-50`}>
              <Trash2 className="h-4 w-4" /> Clear all
            </button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Multiple photos fill the cards that have no photo yet, in order. Extra photos become new cards named after the file.
          </p>
        </section>

        <section className="rounded-3xl border border-black/5 bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-lg font-bold">JSON</h2>
            <label className={`${btn} cursor-pointer border border-black/10 bg-white py-1.5 text-xs hover:bg-black/5`}>
              <Upload className="h-3.5 w-3.5" /> Load .json file
              <input type="file" accept="application/json,.json" className="hidden" onChange={loadJsonFile} />
            </label>
          </div>
          <textarea
            value={json}
            onChange={(e) => setJson(e.target.value)}
            spellCheck={false}
            rows={7}
            className={`${field} mt-3 font-mono text-xs leading-relaxed`}
          />
          {jsonError && <p className="mt-2 rounded-xl bg-red-50 px-3 py-2 text-xs text-red-600">{jsonError}</p>}
          <div className="mt-3 flex flex-wrap gap-2">
            <button onClick={() => applyJson("replace")} className={`${btn} bg-primary text-primary-foreground hover:bg-primary/90`}>
              <FileJson className="h-4 w-4" /> Create cards (replace)
            </button>
            <button onClick={() => applyJson("append")} className={`${btn} border border-black/10 bg-white hover:bg-black/5`}>
              <Plus className="h-4 w-4" /> Add to existing
            </button>
          </div>
        </section>
      </div>

      {/* Cards */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((c, i) => (
          <PosterCard
            key={c.id}
            index={i}
            card={c}
            data={dataFor(c)}
            busy={busy === c.id || busy === "all"}
            registerNode={(n) => (n ? posterNodes.current.set(c.id, n) : posterNodes.current.delete(c.id))}
            onChange={(patch) => update(c.id, patch)}
            onDuplicate={() => duplicate(c.id)}
            onRemove={() => remove(c.id)}
            onDownload={() => downloadOne(c, i)}
          />
        ))}
      </div>
      {!cards.length && (
        <p className="mt-12 text-center text-sm text-muted-foreground">No cards yet. Add one, upload photos, or create cards from JSON.</p>
      )}
    </div>
  );
}

function PosterCard({
  index,
  card,
  data,
  busy,
  registerNode,
  onChange,
  onDuplicate,
  onRemove,
  onDownload,
}: {
  index: number;
  card: Card;
  data: PosterData;
  busy: boolean;
  registerNode: (n: HTMLDivElement | null) => void;
  onChange: (patch: Partial<Card>) => void;
  onDuplicate: () => void;
  onRemove: () => void;
  onDownload: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / POSTER_W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const pickPhoto = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (file) onChange({ photo: await readAsDataUrl(file), frame: { ...DEFAULT_FRAME } });
  };

  const slider = (key: keyof PhotoFrame, label: string, min: number, max: number, step: number) => (
    <label className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="w-10 shrink-0">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={card.frame[key]}
        onChange={(e) => onChange({ frame: { ...card.frame, [key]: Number(e.target.value) } })}
        className="w-full accent-[#6344f5]"
      />
    </label>
  );

  const iconBtn = "grid h-8 w-8 place-items-center rounded-full border border-black/10 bg-white transition-colors hover:bg-black/5";

  return (
    <div className="rounded-3xl border border-black/5 bg-white p-3">
      <div ref={wrapRef} className="relative overflow-hidden rounded-2xl" style={{ height: POSTER_H * scale }}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: POSTER_W, height: POSTER_H }}>
          <CongratsPoster data={data} photo={card.photo} frame={card.frame} posterRef={registerNode} />
        </div>
      </div>

      <div className="space-y-3 p-2 pt-4">
        <div className="flex items-center gap-2">
          <span className="w-6 shrink-0 text-xs font-semibold text-muted-foreground">{index + 1}</span>
          <input
            value={card.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="Student name"
            className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold hover:bg-black/5">
            <ImagePlus className="h-3.5 w-3.5" /> {card.photo ? "Change photo" : "Upload photo"}
            <input type="file" accept="image/*" className="hidden" onChange={pickPhoto} />
          </label>
          {card.photo && (
            <button onClick={() => onChange({ photo: null })} className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-xs text-muted-foreground hover:bg-black/5">
              <X className="h-3.5 w-3.5" /> Remove photo
            </button>
          )}
          <div className="ml-auto flex gap-1.5">
            <button onClick={onDuplicate} className={iconBtn} title="Duplicate card">
              <Copy className="h-3.5 w-3.5" />
            </button>
            <button onClick={onRemove} className={`${iconBtn} text-red-600`} title="Delete card">
              <Trash2 className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={onDownload}
              disabled={busy}
              className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              title="Download PNG"
            >
              {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

        {card.photo && (
          <div className="space-y-1.5 rounded-2xl bg-black/[.03] p-3">
            {slider("zoom", "Zoom", 1, 3, 0.01)}
            {slider("x", "Left", 0, 100, 1)}
            {slider("y", "Up", 0, 100, 1)}
          </div>
        )}
      </div>
    </div>
  );
}
