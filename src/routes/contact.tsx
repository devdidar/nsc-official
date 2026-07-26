import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useCallback } from "react";
import { Mail, MapPin, Send, CheckCircle2, ImagePlus, X, FileImage } from "lucide-react";
import { PageHero, Section, GlassCard, Eyebrow } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";
import { sendContactEmail } from "@/lib/email";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Neutrino Science Club" },
    { name: "description", content: "Reach the Neutrino Science Club — join, partner, mentor, or just say hi." },
  ]}),
  component: Contact,
});

function Contact() {
  const ref = useRevealAll<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    try {
      const result = await sendContactEmail({
        data: {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          subject: (formData.get("subject") as string) || null,
          message: formData.get("message") as string,
        },
      });
      if (result.success) {
        setSent(true);
      } else {
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient">talk</span>.</>}
        description="Whether you want to join, partner, mentor or just ask a question — we read every message."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4" data-reveal>
            <GlassCard className="p-6">
              <Mail className="h-5 w-5 text-primary" />
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Email</div>
              <div className="mt-1 font-display text-lg">neutrinoscienceclub@gmail.com</div>
            </GlassCard>
            <GlassCard className="p-6">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Lab</div>
              <div className="mt-1 font-display text-lg">College gate, Tongi, Gazipur.</div>
            </GlassCard>
          </div>

          <GlassCard className="p-8 sm:p-10" data-reveal>
            <Eyebrow>Send a message</Eyebrow>
            {sent ? (
              <div className="mt-8 text-center py-14">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary">
                  <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">Message received.</h3>
                <p className="mt-2 text-muted-foreground">We'll get back to you within 48 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-6 grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Ada Lovelace" />
                  <Field label="Email" name="email" type="email" placeholder="neutrinoscienceclub@gmail.com" />
                </div>
                <Field label="Subject" name="subject" required={false} placeholder="Partnership · Mentoring · Membership" />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                  <textarea rows={6} required name="message"
                    placeholder="Tell us a little about what you're building or hoping to explore…"
                    className="w-full rounded-2xl bg-white/90 border border-black/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground placeholder:text-muted-foreground" />
                </div>
                <ImageAttachment />
                {error && <div className="text-sm text-destructive">{error}</div>}
                <button type="submit" disabled={loading}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition-transform cursor-pointer disabled:opacity-70">
                  {loading ? "Sending..." : "Send message"} <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </Section>
    </div>
  );
}

/* ---------- Premium Image Attachment ---------- */

function ImageAttachment() {
  const [file, setFile] = useState<{ name: string; size: string; preview: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleFile = useCallback((f: File) => {
    if (!f.type.startsWith("image/")) return;
    const preview = URL.createObjectURL(f);
    setFile({ name: f.name, size: formatSize(f.size), preview });
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  }, [handleFile]);

  const remove = useCallback(() => {
    if (file?.preview) URL.revokeObjectURL(file.preview);
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  }, [file]);

  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        Attach Image <span className="font-normal text-muted-foreground/60">(optional)</span>
      </label>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />

      {file ? (
        /* ---- Preview Card ---- */
        <div className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-white/90 transition-all hover:border-primary/40">
          <div className="flex items-center gap-4 p-4">
            {/* Thumbnail */}
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-black/5">
              <img
                src={file.preview}
                alt="Attachment preview"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
            </div>

            {/* File Info */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <FileImage className="h-3.5 w-3.5 text-primary shrink-0" />
                <span className="truncate text-sm font-medium text-foreground">{file.name}</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{file.size}</div>
            </div>

            {/* Remove Button */}
            <button
              type="button"
              onClick={remove}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-destructive hover:text-destructive-foreground"
              aria-label="Remove attachment"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Bottom accent bar */}
          <div className="h-0.5 w-full bg-primary/15" />
        </div>
      ) : (
        /* ---- Drop Zone ---- */
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`
            relative w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed
            transition-all duration-300 group
            ${isDragging
              ? "border-primary bg-primary/[0.06] scale-[1.01]"
              : "border-black/10 bg-white/60 hover:border-primary/40 hover:bg-primary/[0.03]"
            }
          `}
        >
          {/* Subtle glow on hover */}
          <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

          <div className="relative flex flex-col items-center gap-3 py-8 px-4">
            <div
              className={`
                grid h-12 w-12 place-items-center rounded-xl transition-all duration-300
                ${isDragging
                  ? "bg-primary text-primary-foreground scale-110"
                  : "bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                }
              `}
            >
              <ImagePlus className="h-5 w-5" />
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-foreground">
                {isDragging ? "Drop your image here" : "Click to browse or drag & drop"}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                PNG, JPG, WEBP up to 5 MB
              </p>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

function Field({ label, required = true, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string, required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input required={required}
        {...rest}
        className="w-full rounded-full bg-white/90 border border-black/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground" />
    </div>
  );
}
