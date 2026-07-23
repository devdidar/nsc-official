import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
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
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-primary shadow-glow">
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
                    className="w-full rounded-2xl glass px-4 py-3 text-sm outline-none focus:border-primary/60 focus:shadow-glow transition-all resize-none" />
                </div>
                {error && <div className="text-sm text-destructive">{error}</div>}
                <button type="submit" disabled={loading}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100">
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

function Field({ label, required = true, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string, required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input required={required}
        {...rest}
        className="w-full rounded-full glass px-4 py-3 text-sm outline-none focus:border-primary/60 focus:shadow-glow transition-all" />
    </div>
  );
}
