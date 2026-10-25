import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { PageHero, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/certificate/")({
  head: () => ({
    meta: [
      { title: "Find a Certificate — Neutrino Science Club" },
      { name: "description", content: "Open or verify a Neutrino Science Club certificate by its ID." },
    ],
  }),
  component: VerifyLookup,
});

function VerifyLookup() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  return (
    <div>
      <PageHero
        eyebrow="Certificate"
        title={<>Find a <span className="text-primary">certificate</span></>}
        description="Every NSC certificate has a unique ID (like NSC-B1001) under its QR code. Enter it to open and verify the certificate."
      />
      <Section className="pt-0 sm:pt-0 md:pt-0">
        <form
          className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            const certId = id.trim().toUpperCase();
            if (certId) navigate({ to: "/certificate/$certId", params: { certId } });
          }}
        >
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="NSC-B1001"
            className="flex-1 rounded-full border border-black/10 bg-white px-5 py-3 font-mono text-sm uppercase outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            <ShieldCheck className="h-4 w-4" /> Open
          </button>
        </form>
      </Section>
    </div>
  );
}
