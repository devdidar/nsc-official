import { createServerFn } from "@tanstack/react-start";
import db from "@/data/certificates.json";
import { checkPasscode, hashEmail } from "@/lib/certificate-crypto";

// Public shape. Email/passcode hashes never leave the server.
export type Certificate = {
  id: string;
  full_name: string;
  program: string;
  batch: string;
  completed_on: string | null;
};

const toPublic = ({ id, full_name, program, batch, completed_on }: Certificate): Certificate => ({
  id, full_name, program, batch, completed_on,
});

// Names only, for the public graduates list.
export const listGraduates = createServerFn({ method: "GET" })
  .validator((data: { idPrefix: string }) => data)
  .handler(async ({ data }) =>
    db.certificates
      .filter((c) => c.id.startsWith(data.idPrefix))
      .map((c) => c.full_name)
      .sort((a, b) => a.localeCompare(b)),
  );

export const verifyCertificate = createServerFn({ method: "GET" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const cert = db.certificates.find((c) => c.id === data.id.trim().toUpperCase());
    return cert ? toPublic(cert) : null;
  });

export const unlockCertificate = createServerFn({ method: "POST" })
  .validator((data: { email: string; passcode: string }) => data)
  .handler(async ({ data }) => {
    const emailHash = hashEmail(data.email);
    const cert = db.certificates.find(
      (c) => c.email_hashes.includes(emailHash) && checkPasscode(data.passcode, c.passcode_salt, c.passcode_hash),
    );
    return cert ? toPublic(cert) : null;
  });

export function formatCompletedOn(c: Certificate) {
  if (!c.completed_on) return "2026";
  return new Date(c.completed_on).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
