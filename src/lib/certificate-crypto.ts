// Server-only. Shared by scripts/certificates.ts (hashing) and src/lib/certificates.ts (checking).
import { createHash, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const PASSCODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no 0/O, 1/I/L

export const normalizeEmail = (email: string) => email.trim().toLowerCase();
export const normalizePasscode = (code: string) => code.toUpperCase().replace(/[^A-Z0-9]/g, "");

export function hashEmail(email: string) {
  return createHash("sha256").update(`nsc-cert:${normalizeEmail(email)}`).digest("hex");
}

export function hashPasscode(passcode: string, salt: string) {
  return scryptSync(normalizePasscode(passcode), salt, 32).toString("hex");
}

export function checkPasscode(passcode: string, salt: string, hash: string) {
  const a = Buffer.from(hashPasscode(passcode, salt), "hex");
  const b = Buffer.from(hash, "hex");
  return a.length === b.length && timingSafeEqual(a, b);
}

export function newSalt() {
  return randomBytes(16).toString("hex");
}

// 8 characters shown as XXXX-XXXX.
export function newPasscode() {
  const bytes = randomBytes(8);
  const chars = [...bytes].map((b) => PASSCODE_ALPHABET[b % PASSCODE_ALPHABET.length]);
  return `${chars.slice(0, 4).join("")}-${chars.slice(4).join("")}`;
}
