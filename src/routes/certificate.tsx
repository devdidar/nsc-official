import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Download, FileImage, KeyRound, Loader2, Mail, ArrowLeft } from "lucide-react";
import { PageHero, Section } from "@/components/site/primitives";
import {
  Certificate,
  certificateFontsHref,
  downloadCertificatePdf,
  downloadCertificatePng,
} from "@/components/site/Certificate";
import { unlockCertificate, type Certificate as CertificateData } from "@/lib/certificates";

export const Route = createFileRoute("/certificate")({
  head: () => ({
    meta: [
      { title: "Get Your Certificate — Neutrino Science Club" },
      { name: "description", content: "Download your Neutrino Science Club certificate with your email and passcode." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "stylesheet", href: certificateFontsHref, crossOrigin: "anonymous" }],
  }),
  component: CertificatePage,
});

function CertificatePage() {
  const [cert, setCert] = useState<CertificateData | null>(null);
  return cert ? <Unlocked cert={cert} onBack={() => setCert(null)} /> : <UnlockForm onUnlock={setCert} />;
}

function UnlockForm({ onUnlock }: { onUnlock: (c: CertificateData) => void }) {
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const cert = await unlockCertificate({ data: { email, passcode } });
      if (cert) onUnlock(cert);
      else setError("Email or passcode doesn't match. Check both and try again.");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const input =
    "w-full rounded-2xl border border-black/10 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15";

  return (
    <div>
      <PageHero
        eyebrow="Certificate"
        title={<>Get your <span className="text-primary">certificate</span></>}
        description="Enter the email you registered with and the passcode we sent you."
      />
      <Section className="pt-0 sm:pt-0 md:pt-0">
        <form onSubmit={submit} className="mx-auto max-w-md rounded-3xl border border-black/5 bg-white p-5 sm:p-7">
          <label className="block text-sm font-semibold">Email</label>
          <div className="relative mt-2">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@gmail.com"
              className={input}
            />
          </div>

          <label className="mt-5 block text-sm font-semibold">Passcode</label>
          <div className="relative mt-2">
            <KeyRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              required
              autoComplete="off"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="XXXX-XXXX"
              className={`${input} font-mono uppercase tracking-wider`}
            />
          </div>

          {error && <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Open my certificate
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Lost your passcode? Contact Neutrino Science Club.
          </p>
        </form>
      </Section>
    </div>
  );
}

function Unlocked({ cert, onBack }: { cert: CertificateData; onBack: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState<"png" | "pdf" | null>(null);

  const download = async (kind: "png" | "pdf") => {
    if (!ref.current) return;
    setBusy(kind);
    try {
      await (kind === "png" ? downloadCertificatePng : downloadCertificatePdf)(ref.current, cert);
    } finally {
      setBusy(null);
    }
  };

  const btn = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all disabled:opacity-60";

  return (
    <Section className="pt-28 sm:pt-36 md:pt-40">
      <div className="mx-auto max-w-[1123px]">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <h1 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Congratulations, {cert.full_name.split(" ").filter((p) => !/^(md\.?|mohammad|muhammad|sheikh|shekh|syed|sayed|atm)$/i.test(p))[0] ?? cert.full_name}!
            </h1>
            <p className="mt-1.5 text-sm sm:text-base text-muted-foreground">Here's your certificate. Download it and share it proudly.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => download("pdf")} disabled={!!busy} className={`${btn} bg-primary text-primary-foreground hover:bg-primary/90`}>
              {busy === "pdf" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />} Download PDF
            </button>
            <button onClick={() => download("png")} disabled={!!busy} className={`${btn} border border-black/10 bg-white hover:bg-black/5`}>
              {busy === "png" ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileImage className="h-4 w-4" />} Download image
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white">
          <Certificate cert={cert} certRef={ref} />
        </div>
      </div>
    </Section>
  );
}
