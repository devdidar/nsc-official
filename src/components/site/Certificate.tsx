import { useEffect, useId, useLayoutEffect, useRef, useState, type Ref } from "react";
import QRCode from "qrcode";
import type { Certificate as CertificateData } from "@/lib/certificates";
import { formatCompletedOn } from "@/lib/certificates";

// Every font the certificate uses. Add to a route's head().links with crossOrigin "anonymous"
// so html-to-image can read and embed them in downloads.
export const certificateFontsHref =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,600&family=JetBrains+Mono:wght@400;500;600&family=Great+Vibes&display=swap";

// Designed at A4 landscape (1123×794 CSS px = 297×210mm at 96dpi), scaled to fit its container.
const W = 1123;
const H = 794;

// `image`: transparent PNG of the real signature, drawn `height` px tall.
const signatories: { name: string; role: string; image: string; height: number }[] = [
  { name: "Faisal Abdullah Fahim", role: "Chairman", image: "/signatures/faisal-abdullah-fahim.png", height: 56 },
  { name: "Didarul Azam Mahi", role: "President & Lead Instructor", image: "/signatures/didarul-azam-mahi.png", height: 84 },
];

export function verifyUrl(id: string) {
  return `https://www.neutrinoscienceclub.org/verify/${id}`;
}

// NSC-B1001 → "01" (batch digits before the 3-digit serial).
function batchNumber(id: string) {
  const m = /^NSC-B(\d+)\d{3}$/.exec(id);
  return m ? m[1].padStart(2, "0") : "";
}

async function render(node: HTMLElement, type: "png" | "jpeg") {
  const { toPng, toJpeg } = await import("html-to-image");
  await document.fonts?.ready;
  const opts = { width: W, height: H, pixelRatio: 2.5, style: { transform: "none" }, cacheBust: true, quality: 0.95 };
  return type === "png" ? toPng(node, opts) : toJpeg(node, opts);
}

function save(href: string, filename: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  a.click();
}

export async function downloadCertificatePng(node: HTMLElement, cert: CertificateData) {
  save(await render(node, "png"), `NSC-Certificate-${cert.id}.png`);
}

export async function downloadCertificatePdf(node: HTMLElement, cert: CertificateData) {
  const [jpg, { jsPDF }] = await Promise.all([render(node, "jpeg"), import("jspdf")]);
  const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  pdf.addImage(jpg, "JPEG", 0, 0, 297, 210);
  pdf.save(`NSC-Certificate-${cert.id}.pdf`);
}

export function Certificate({ cert, certRef }: { cert: CertificateData; certRef?: Ref<HTMLDivElement> }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const [scale, setScale] = useState(1);
  const [qr, setQr] = useState("");
  const batch = batchNumber(cert.id);

  useEffect(() => {
    QRCode.toDataURL(verifyUrl(cert.id), { margin: 0, width: 300, color: { dark: "#16163B", light: "#FFFFFF" } }).then(setQr);
  }, [cert.id]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(Math.min(1, e.contentRect.width / W)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Shrink long names until they fit on one line between the braces.
  useLayoutEffect(() => {
    const el = nameRef.current;
    const row = el?.parentElement;
    if (!el || !row) return;
    const fit = () => {
      const braces = [...row.querySelectorAll<HTMLElement>(".brace")].reduce((w, b) => w + b.offsetWidth, 0);
      const max = row.clientWidth - braces - 2 * 22;
      let size = 60;
      el.style.fontSize = `${size}px`;
      while (el.scrollWidth > max && size > 30) el.style.fontSize = `${--size}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
  }, [cert.full_name]);

  return (
    <div ref={wrapRef} className="nsc-cert-wrap" style={{ height: H * scale }}>
      <style>{css}</style>
      <div ref={certRef} className="nsc-cert" style={{ transform: `scale(${scale})` }}>
        <div className="frame" />
        <Corner className="corner tl" />
        <Corner className="corner br" />

        <div className="code-bg">
          <span className="k">def</span> graduate(student):{"\n"}
          {"    "}skills = [<span className="s">"python"</span>, <span className="s">"logic"</span>]{"\n"}
          {"    "}<span className="k">for</span> s <span className="k">in</span> skills:{"\n"}
          {"        "}student.learn(s){"\n"}
          {"    "}<span className="k">return</span> <span className="k">True</span>
        </div>

        <div className="content">
          <div className="brand">
            <img src="/favicon.svg" alt="Neutrino Science Club" />
            <div className="club">
              Neutrino
              <br />
              Science Club
            </div>
          </div>

          <div className="title">Certificate</div>
          <div className="subtitle">of Completion</div>

          <div className="presented">This certificate is proudly presented to</div>
          <div className="name-row">
            <span className="brace">{"{"}</span>
            <span ref={nameRef} className="name">{cert.full_name}</span>
            <span className="brace">{"}"}</span>
          </div>
          <div className="rule" />

          <p className="body">
            for successfully completing the <b>Neutrino Science Club {cert.program}</b>.
            <br />
            Congratulations on this achievement, and keep building!
          </p>

          <div className="terminal">
            <span className="dots">
              <i style={{ background: "#FF5F57" }} />
              <i style={{ background: "#FEBC2E" }} />
              <i style={{ background: "#28C840" }} />
            </span>
            <span className="p">&gt;&gt;&gt;</span>
            <span>
              <span className="f">print</span>(<span className="s">"{cert.program}{batch && ` · Batch ${batch}`}"</span>)
            </span>
          </div>

          <div className="foot">
            <Signature s={signatories[0]} />
            <div className="verify">
              {qr ? <img src={qr} alt="Verification QR code" /> : <div className="qr-ph" />}
              <div className="id">{cert.id}</div>
              <div className="date">
                {cert.batch} · {formatCompletedOn(cert)}
              </div>
            </div>
            <Signature s={signatories[1]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Signature({ s }: { s: (typeof signatories)[number] }) {
  return (
    <div className="sign">
      <div className="img">
        <img src={s.image} alt={`${s.name} signature`} style={{ height: s.height }} />
      </div>
      <div className="line" />
      <div className="who">{s.name}</div>
      <div className="role">{s.role}</div>
    </div>
  );
}

// Corner ornament: layered shards, logo-style network, gradient strip and short circuit traces.
// Drawn for the top-left; the bottom-right copy is rotated 180° in CSS.
function Corner({ className }: { className: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="0 0 280 280" aria-hidden>
      <defs>
        <linearGradient id={`nv${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#16163B" />
          <stop offset="1" stopColor="#2B2470" />
        </linearGradient>
        <linearGradient id={`gl${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3EE0E8" />
          <stop offset="1" stopColor="#B6F23C" />
        </linearGradient>
        <pattern id={`dt${id}`} width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="#fff" opacity=".12" />
        </pattern>
        <clipPath id={`cp${id}`}>
          <polygon points="0,0 176,0 0,176" />
        </clipPath>
      </defs>
      <polygon points="0,0 262,0 0,46" fill="#6344f5" opacity=".9" />
      <polygon points="0,0 46,0 0,262" fill="#6344f5" opacity=".9" />
      <polygon points="0,0 228,0 0,98" fill="#8B74FF" opacity=".35" />
      <polygon points="0,0 98,0 0,228" fill="#8B74FF" opacity=".35" />
      <polygon points="0,0 176,0 0,176" fill={`url(#nv${id})`} />
      <rect width="176" height="176" fill={`url(#dt${id})`} clipPath={`url(#cp${id})`} />
      <polygon points="186,0 196,0 0,196 0,186" fill={`url(#gl${id})`} />
      <g stroke="#3EE0E8" strokeWidth="1.2" opacity=".85">
        <line x1="28" y1="34" x2="66" y2="22" />
        <line x1="66" y1="22" x2="58" y2="62" />
        <line x1="28" y1="34" x2="58" y2="62" />
        <line x1="58" y1="62" x2="100" y2="40" />
        <line x1="66" y1="22" x2="100" y2="40" />
        <line x1="28" y1="34" x2="22" y2="86" />
        <line x1="22" y1="86" x2="58" y2="62" />
      </g>
      <circle cx="28" cy="34" r="3.6" fill="#B6F23C" />
      <circle cx="66" cy="22" r="3" fill="#3EE0E8" />
      <circle cx="58" cy="62" r="4.4" fill="#B6F23C" />
      <circle cx="100" cy="40" r="3" fill="#3EE0E8" />
      <circle cx="22" cy="86" r="3" fill="#3EE0E8" />
      {/* Kept clear of the signature rows. */}
      <g fill="none" stroke="#6344f5" strokeWidth="1.3" opacity=".45" strokeLinecap="round">
        <path d="M40 160 V186 L54 200 V214" />
        <path d="M72 128 V156 L92 176 V222" />
        <path d="M100 116 V138 L114 152 V170" />
      </g>
      <g fill="#fff" stroke="#6344f5" strokeWidth="1.5" opacity=".75">
        <circle cx="54" cy="214" r="2.6" />
        <circle cx="92" cy="222" r="3.4" />
        <circle cx="114" cy="170" r="2.6" />
      </g>
    </svg>
  );
}

const css = `
.nsc-cert-wrap { position: relative; width: 100%; max-width: ${W}px; overflow: hidden; }
.nsc-cert {
  --navy: #16163B; --violet: #6344f5; --cyan: #3EE0E8; --lime: #B6F23C; --ink: #121217; --muted: #6B6B7B; --line: #E4E2EF;
  position: absolute; top: 0; left: 0; width: ${W}px; height: ${H}px; transform-origin: top left; overflow: hidden;
  background: radial-gradient(circle at 1px 1px, rgba(22,22,59,.07) 1px, transparent 0) 0 0 / 22px 22px, #fff;
  font-family: "Plus Jakarta Sans", sans-serif; color: var(--ink); text-align: center;
}
.nsc-cert .frame { position: absolute; inset: 22px; border: 1px solid var(--line); border-radius: 4px; }
.nsc-cert .corner { position: absolute; width: 280px; height: 280px; }
.nsc-cert .corner.tl { top: 0; left: 0; }
.nsc-cert .corner.br { bottom: 0; right: 0; transform: rotate(180deg); }
.nsc-cert .code-bg { position: absolute; top: 52px; right: 56px; text-align: left; white-space: pre; font-family: "JetBrains Mono", monospace; font-size: 11px; line-height: 1.75; color: rgba(22,22,59,.16); }
.nsc-cert .code-bg .k { color: rgba(99,68,245,.32); }
.nsc-cert .code-bg .s { color: rgba(6,150,120,.32); }

.nsc-cert .content { position: relative; height: 100%; padding: 50px 120px 46px; display: flex; flex-direction: column; align-items: center; }
.nsc-cert .brand { display: flex; align-items: center; gap: 12px; }
.nsc-cert .brand img { width: 52px; height: 52px; border-radius: 12px; }
.nsc-cert .club { text-align: left; font-size: 12px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; line-height: 1.45; color: var(--navy); }

.nsc-cert .title { margin-top: 22px; font-family: "Great Vibes", cursive; font-size: 96px; line-height: 1; color: var(--navy); }
.nsc-cert .subtitle { margin-top: 12px; display: flex; align-items: center; gap: 14px; font-size: 13px; font-weight: 700; letter-spacing: .38em; text-transform: uppercase; color: var(--violet); }
.nsc-cert .subtitle::before, .nsc-cert .subtitle::after { content: ""; width: 46px; height: 2px; border-radius: 2px; background: linear-gradient(90deg, var(--cyan), var(--lime)); }

.nsc-cert .presented { margin-top: 46px; font-size: 14px; font-weight: 500; color: var(--muted); }
.nsc-cert .name-row { margin-top: 8px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 22px; }
.nsc-cert .brace { font-family: "JetBrains Mono", monospace; font-size: 54px; line-height: 1; color: var(--violet); opacity: .55; }
.nsc-cert .name { font-family: "Fraunces", serif; font-weight: 600; font-size: 60px; line-height: 1.12; letter-spacing: -.015em; white-space: nowrap; }
.nsc-cert .rule { margin-top: 10px; width: 520px; height: 2px; background: linear-gradient(90deg, transparent, var(--violet) 30%, var(--cyan) 70%, transparent); }
.nsc-cert .body { margin-top: 26px; max-width: 610px; font-size: 16px; line-height: 1.65; color: #3A3A48; }
.nsc-cert .body b { color: var(--ink); font-weight: 700; }

.nsc-cert .terminal { margin-top: 26px; display: inline-flex; align-items: center; gap: 10px; padding: 8px 16px; border-radius: 10px; background: #F5F3FF; border: 1px solid #E2DAFF; color: #3A3A48; font-family: "JetBrains Mono", monospace; font-size: 13px; }
.nsc-cert .terminal .dots { display: flex; gap: 5px; margin-right: 4px; }
.nsc-cert .terminal .dots i { display: block; width: 8px; height: 8px; border-radius: 50%; }
.nsc-cert .terminal .p { color: var(--violet); font-weight: 600; }
.nsc-cert .terminal .f { color: #0E8FA0; }
.nsc-cert .terminal .s { color: #B45309; }

.nsc-cert .foot { margin-top: auto; width: 100%; display: grid; grid-template-columns: 1fr auto 1fr; align-items: end; gap: 40px; }
.nsc-cert .sign { display: flex; flex-direction: column; align-items: center; }
.nsc-cert .sign .img { height: 84px; display: flex; align-items: flex-end; }
.nsc-cert .sign .img img { display: block; width: auto; }
.nsc-cert .sign .line { margin-top: 4px; width: 230px; height: 1px; background: #CFCDE0; }
.nsc-cert .sign .who { margin-top: 9px; font-size: 14px; font-weight: 700; }
.nsc-cert .sign .role { margin-top: 2px; font-size: 12px; color: var(--muted); }
.nsc-cert .verify { display: flex; flex-direction: column; align-items: center; gap: 7px; }
.nsc-cert .verify img, .nsc-cert .qr-ph { width: 74px; height: 74px; }
.nsc-cert .verify .id { font-family: "JetBrains Mono", monospace; font-size: 11.5px; font-weight: 600; letter-spacing: .04em; color: var(--navy); }
.nsc-cert .verify .date { font-size: 11px; color: var(--muted); }
`;
