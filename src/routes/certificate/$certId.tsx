import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { BadgeCheck, Check, Download, FileImage, Link2, Loader2, SearchX } from "lucide-react";
import { Section, CTAButton } from "@/components/site/primitives";
import {
  Certificate,
  certificateFontsHref,
  certificateUrl,
  downloadCertificatePdf,
  downloadCertificatePng,
} from "@/components/site/Certificate";
import { getCertificate, formatCompletedOn, type Certificate as CertificateData } from "@/lib/certificates";

export const Route = createFileRoute("/certificate/$certId")({
  loader: async ({ params }) => ({ cert: await getCertificate({ data: { id: params.certId } }) }),
  head: ({ loaderData }) => {
    const cert = loaderData?.cert;
    const title = cert
      ? `${cert.full_name} — NSC ${cert.program} Certificate`
      : "Certificate not found — Neutrino Science Club";
    const description = cert
      ? `${cert.full_name} completed the Neutrino Science Club ${cert.program} (${cert.batch}). Certificate ${cert.id}.`
      : "Find and verify a Neutrino Science Club certificate.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: "https://nsc-official.vercel.app/og-python-bootcamp.png" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "stylesheet", href: certificateFontsHref, crossOrigin: "anonymous" }],
    };
  },
  component: CertificatePage,
});

function CertificatePage() {
  const { cert } = Route.useLoaderData();
  const { certId } = Route.useParams();
  return cert ? <Found cert={cert} /> : <NotFound certId={certId} />;
}

function NotFound({ certId }: { certId: string }) {
  return (
    <Section className="pt-28 sm:pt-36 md:pt-40">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-red-50 text-red-500">
          <SearchX className="h-6 w-6" />
        </div>
        <h1 className="mt-5 font-display text-2xl sm:text-3xl font-bold">No certificate found</h1>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          There's no certificate with ID <span className="font-mono text-foreground">{certId}</span>. Check the link and try again.
        </p>
        <div className="mt-6 flex justify-center">
          <CTAButton to="/certificate">Find a certificate</CTAButton>
        </div>
      </div>
    </Section>
  );
}

function Found({ cert }: { cert: CertificateData }) {
  const ref = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState<"png" | "pdf" | null>(null);
  const [copied, setCopied] = useState(false);

  const download = async (kind: "png" | "pdf") => {
    if (!ref.current) return;
    setBusy(kind);
    try {
      await (kind === "png" ? downloadCertificatePng : downloadCertificatePdf)(ref.current, cert);
    } finally {
      setBusy(null);
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(certificateUrl(cert.id));
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const btn = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all disabled:opacity-60";

  return (
    <Section className="pt-28 sm:pt-36 md:pt-40">
      <div className="mx-auto max-w-[1123px]">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <BadgeCheck className="h-4 w-4" /> Verified certificate
            </div>
            <h1 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{cert.full_name}</h1>
            <p className="mt-1.5 text-sm sm:text-base text-muted-foreground">
              NSC {cert.program} · {cert.batch} · {formatCompletedOn(cert)} ·{" "}
              <span className="font-mono whitespace-nowrap">{cert.id}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => download("pdf")} disabled={!!busy} className={`${btn} bg-primary text-primary-foreground hover:bg-primary/90`}>
              {busy === "pdf" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />} Download PDF
            </button>
            <button onClick={() => download("png")} disabled={!!busy} className={`${btn} border border-black/10 bg-white hover:bg-black/5`}>
              {busy === "png" ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileImage className="h-4 w-4" />} Download image
            </button>
            <button onClick={copyLink} className={`${btn} border border-black/10 bg-white hover:bg-black/5`}>
              {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Link2 className="h-4 w-4" />}
              {copied ? "Link copied" : "Copy link"}
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white">
          <Certificate cert={cert} certRef={ref} />
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Issued by Neutrino Science Club.{" "}
          <Link to="/bootcamp/python/graduates/b1" className="font-semibold text-primary hover:underline">
            See all Batch 1 graduates
          </Link>
        </p>
      </div>
    </Section>
  );
}
