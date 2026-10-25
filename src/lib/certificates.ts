import { createServerFn } from "@tanstack/react-start";
import db from "@/data/certificates.json";

export type Certificate = {
  id: string;
  full_name: string;
  program: string;
  batch: string;
  completed_on: string | null;
};

// Graduates of one batch for the public list, A–Z.
export const listGraduates = createServerFn({ method: "GET" })
  .validator((data: { idPrefix: string }) => data)
  .handler(async ({ data }) =>
    db.certificates
      .filter((c) => c.id.startsWith(data.idPrefix))
      .map((c) => ({ id: c.id, full_name: c.full_name }))
      .sort((a, b) => a.full_name.localeCompare(b.full_name)),
  );

export const getCertificate = createServerFn({ method: "GET" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }): Promise<Certificate | null> => {
    return db.certificates.find((c) => c.id === data.id.trim().toUpperCase()) ?? null;
  });

export function formatCompletedOn(c: Certificate) {
  if (!c.completed_on) return "2026";
  return new Date(c.completed_on).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
