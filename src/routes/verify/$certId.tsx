import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, SearchX } from "lucide-react";
import { Section, CTAButton } from "@/components/site/primitives";
import { verifyCertificate, formatCompletedOn } from "@/lib/certificates";

// Confirms a certificate is genuine. The certificate itself is not shown here.
export const Route = createFileRoute("/verify/$certId")({
  loader: async ({ params }) => ({ cert: await verifyCertificate({ data: { id: params.certId } }) }),
  head: () => ({
    meta: [
      { title: "Certificate Verification — Neutrino Science Club" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: VerifyCertificate,
});

function VerifyCertificate() {
  const { cert } = Route.useLoaderData();
  const { certId } = Route.useParams();

  if (!cert) {
    return (
      <Section className="pt-28 sm:pt-36 md:pt-40">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-red-50 text-red-500">
            <SearchX className="h-6 w-6" />
          </div>
          <h1 className="mt-5 font-display text-2xl sm:text-3xl font-bold">No certificate found</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            We couldn't find a certificate with ID <span className="font-mono text-foreground">{certId}</span>. Check the ID and try again.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton to="/verify">Try another ID</CTAButton>
          </div>
        </div>
      </Section>
    );
  }

  const rows = [
    ["Awarded to", cert.full_name],
    ["Program", `${cert.program}, Neutrino Science Club`],
    ["Batch", cert.batch],
    ["Date", formatCompletedOn(cert)],
    ["Certificate ID", cert.id],
  ];

  return (
    <Section className="pt-28 sm:pt-36 md:pt-40">
      <div className="mx-auto max-w-lg">
        <div className="text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <BadgeCheck className="h-7 w-7" />
          </div>
          <h1 className="mt-5 font-display text-2xl sm:text-3xl font-bold">This certificate is genuine</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">Issued by Neutrino Science Club.</p>
        </div>

        <dl className="mt-8 divide-y divide-black/5 rounded-3xl border border-black/5 bg-white">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
              <dt className="text-sm text-muted-foreground">{k}</dt>
              <dd className={k === "Certificate ID" ? "font-mono text-sm" : "text-right text-sm font-semibold"}>{v}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/bootcamp/python/graduates/b1" className="font-semibold text-primary hover:underline">
            See all Batch 1 graduates
          </Link>
        </p>
      </div>
    </Section>
  );
}
