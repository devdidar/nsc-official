import { useEffect, useLayoutEffect, useRef, useState, type Ref } from "react";
import QRCode from "qrcode";
import type { Certificate as CertificateData } from "@/lib/certificates";
import { formatCompletedOn } from "@/lib/certificates";

// Every font the certificate uses. Add to a route's head().links with crossOrigin "anonymous"
// so html-to-image can read and embed them in downloads.
export const certificateFontsHref =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,600&family=JetBrains+Mono:wght@500&display=swap";

// Designed at A4 landscape (1123×794 CSS px = 297×210mm at 96dpi), scaled to fit its container.
const W = 1123;
const H = 794;

// `image`: transparent PNG of the real signature, drawn `height` px tall.
const signatories: { name: string; role: string; image: string; height: number }[] = [
  { name: "Faisal Abdullah Fahim", role: "Chairman", image: "/signatures/faisal-abdullah-fahim.png", height: 58 },
  { name: "Didarul Azam Mahi", role: "President & Lead Instructor", image: "/signatures/didarul-azam-mahi.png", height: 80 },
];

export function verifyUrl(id: string) {
  return `https://www.neutrinoscienceclub.org/verify/${id}`;
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
  const nameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [qr, setQr] = useState("");

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

  // Shrink long names until they fit on one line.
  useLayoutEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const fit = () => {
      let size = 62;
      el.style.fontSize = `${size}px`;
      while (el.scrollWidth > el.parentElement!.clientWidth && size > 30) el.style.fontSize = `${--size}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
  }, [cert.full_name]);

  return (
    <div ref={wrapRef} className="nsc-cert-wrap" style={{ height: H * scale }}>
      <style>{css}</style>
      <div ref={certRef} className="nsc-cert" style={{ transform: `scale(${scale})` }}>
        <aside className="rail">
          <img className="logo" src="/favicon.svg" alt="Neutrino Science Club" />
          <div className="program">
            <div className="k">Program</div>
            <h2>
              {cert.program.split(" ")[0]}
              <br />
              <span>{cert.program.split(" ").slice(1).join(" ")}</span>
            </h2>
            <div className="batch">{cert.batch} · 2026</div>
          </div>
          <div className="verify">
            {qr ? <img src={qr} alt="Verification QR code" /> : <div className="qr-ph" />}
            <div>
              <div className="id">{cert.id}</div>
              <div className="url">
                Scan to verify, or visit
                <br />
                neutrinoscienceclub.org/verify
              </div>
            </div>
          </div>
        </aside>

        <div className="main">
          <div className="eyebrow">Neutrino Science Club</div>
          <div className="title">Certificate of Completion</div>

          <div className="awarded">Awarded to</div>
          <div className="name-wrap">
            <div ref={nameRef} className="name">{cert.full_name}</div>
          </div>
          <div className="rule" />

          <p className="body">
            For successfully completing the Neutrino Science Club {cert.program}. Congratulations on this achievement, and keep building!
          </p>

          <div className="foot">
            <div>
              <div className="val">{formatCompletedOn(cert)}</div>
              <div className="line" />
              <div className="who">Date</div>
              <div className="role">{cert.batch}</div>
            </div>
            {signatories.map((s) => (
              <div key={s.name}>
                <div className="sig">
                  <img className="sig-img" src={s.image} alt={`${s.name} signature`} style={{ height: s.height }} />
                </div>
                <div className="line" />
                <div className="who">{s.name}</div>
                <div className="role">{s.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const css = `
.nsc-cert-wrap { position: relative; width: 100%; max-width: ${W}px; overflow: hidden; }
.nsc-cert {
  --navy: #16163B; --violet: #6344f5; --cyan: #3EE0E8; --lime: #B6F23C; --ink: #121217; --muted: #6B6B7B;
  position: absolute; top: 0; left: 0; width: ${W}px; height: ${H}px; transform-origin: top left;
  display: grid; grid-template-columns: 280px minmax(0, 1fr); overflow: hidden; background: #fff;
  font-family: "Plus Jakarta Sans", sans-serif; color: var(--ink); text-align: left;
  -webkit-print-color-adjust: exact; print-color-adjust: exact;
}
.nsc-cert .rail { position: relative; background: var(--navy); color: #fff; padding: 48px 36px 40px; display: flex; flex-direction: column; overflow: hidden; }
.nsc-cert .rail::before { content: ""; position: absolute; inset: 0; background: radial-gradient(380px 300px at 0% 0%, rgba(99,68,245,.45), transparent 70%); }
.nsc-cert .rail > * { position: relative; }
.nsc-cert .logo { width: 120px; height: 120px; border-radius: 20px; display: block; }
.nsc-cert .program { margin-top: auto; }
.nsc-cert .program .k { font-size: 10.5px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase; color: rgba(255,255,255,.5); }
.nsc-cert .program h2 { margin-top: 10px; font-size: 30px; line-height: 1.08; font-weight: 800; letter-spacing: -.02em; }
.nsc-cert .program h2 span { background: linear-gradient(90deg, var(--cyan), var(--lime)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.nsc-cert .batch { margin-top: 8px; font-size: 13px; color: rgba(255,255,255,.7); font-weight: 500; }
.nsc-cert .verify { margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.12); display: flex; gap: 14px; align-items: center; }
.nsc-cert .verify img, .nsc-cert .qr-ph { width: 76px; height: 76px; border-radius: 8px; background: #fff; padding: 5px; flex: none; }
.nsc-cert .verify .id { font-family: "JetBrains Mono", monospace; font-size: 12px; color: #fff; }
.nsc-cert .verify .url { margin-top: 5px; font-size: 10px; line-height: 1.45; color: rgba(255,255,255,.55); }
.nsc-cert .main { position: relative; min-width: 0; padding: 72px 76px 56px; display: flex; flex-direction: column; }
.nsc-cert .main::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 5px; background: linear-gradient(90deg, var(--violet), var(--cyan), var(--lime)); }
.nsc-cert .eyebrow { font-size: 11.5px; font-weight: 700; letter-spacing: .3em; text-transform: uppercase; color: var(--violet); }
.nsc-cert .title { margin-top: 14px; font-size: 40px; font-weight: 800; letter-spacing: -.025em; line-height: 1.05; }
.nsc-cert .awarded { margin-top: 84px; font-size: 14px; color: var(--muted); font-weight: 500; }
.nsc-cert .name-wrap { margin-top: 12px; width: 100%; overflow: hidden; }
.nsc-cert .name { font-family: "Fraunces", serif; font-weight: 600; font-size: 62px; line-height: 1.1; letter-spacing: -.015em; white-space: nowrap; display: inline-block; }
.nsc-cert .rule { margin-top: 18px; height: 2px; width: 100%; background: linear-gradient(90deg, var(--violet) 0 96px, #E7E5F2 96px); }
.nsc-cert .body { margin-top: 26px; max-width: 560px; font-size: 17px; line-height: 1.6; color: #3A3A48; }
.nsc-cert .foot { margin-top: auto; display: grid; grid-template-columns: 0.8fr 1fr 1fr; gap: 36px; align-items: end; }
.nsc-cert .val { font-size: 18px; font-weight: 700; height: 46px; display: flex; align-items: flex-end; }
.nsc-cert .sig { height: 46px; display: flex; align-items: flex-end; }
.nsc-cert .sig-img { display: block; width: auto; max-width: 100%; margin-bottom: -6px; }
.nsc-cert .line { margin-top: 10px; height: 1px; background: #D6D4E4; }
.nsc-cert .who { margin-top: 10px; font-size: 14px; font-weight: 700; }
.nsc-cert .role { margin-top: 2px; font-size: 12px; color: var(--muted); }
`;
