import { useId, useLayoutEffect, useRef, type Ref } from "react";

// Every font the poster uses. Load with crossOrigin "anonymous" so html-to-image can embed them.
export const posterFontsHref =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,600;0,700;0,800;1,700;1,800&family=Fraunces:opsz,wght@9..144,700&family=JetBrains+Mono:wght@500;600;700&display=swap";

// Instagram portrait size.
export const POSTER_W = 1080;
export const POSTER_H = 1350;

export type PosterData = {
  name: string;
  program: string; // "Python Bootcamp"
  batch: string; // "01"
  batchLabel: string; // "Founding Batch"
};

// How the uploaded photo sits inside the arch: zoom ≥ 1, x/y are object-position percentages.
export type PhotoFrame = { zoom: number; x: number; y: number };

function initials(name: string) {
  return name
    .replace(/\b(Md|Mohammad|Muhammad|Sheikh|Shekh|Syed|Sayed)\.?\s+/gi, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function CongratsPoster({
  data,
  photo,
  frame,
  posterRef,
}: {
  data: PosterData;
  photo: string | null;
  frame: PhotoFrame;
  posterRef?: Ref<HTMLDivElement>;
}) {
  const id = useId().replace(/:/g, "");
  const nameRef = useRef<HTMLDivElement>(null);
  const tape = `${data.batchLabel} ✦ NSC ${data.program}`.toUpperCase();

  // Shrink long names to fit the plate.
  useLayoutEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const fit = () => {
      const max = el.parentElement!.clientWidth - 60;
      let size = 46;
      el.style.fontSize = `${size}px`;
      while (el.scrollWidth > max && size > 26) el.style.fontSize = `${--size}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
  }, [data.name]);

  return (
    <div ref={posterRef} className="cp">
      <style>{css}</style>
      <div className="stars" />

      <div className="brand">
        <img src="/favicon.svg" alt="" />
        <div className="club">
          Neutrino
          <br />
          Science Club
        </div>
      </div>

      <div className="head">
        <div className="congrats">
          <span className="echo">CONGRATS!</span>
          <span className="main">CONGRATS</span>
          <span className="bang">!</span>
        </div>
        <div className="sub">
          For successfully completing the <b>{data.program}</b>
        </div>
      </div>

      <div className="tape back">
        <span>{Array(5).fill('>>> print("hello, world")').join("   ")}</span>
      </div>
      <div className="tape">
        <span>{Array(4).fill(tape).join(" ✦ ")}</span>
      </div>

      <svg className="orbits" viewBox={`0 0 ${POSTER_W} ${POSTER_H}`} fill="none" aria-hidden>
        <ellipse cx="540" cy="760" rx="380" ry="130" transform="rotate(-22 540 760)" stroke="#3EE0E8" strokeWidth="1.6" opacity=".55" />
        <ellipse cx="540" cy="760" rx="380" ry="130" transform="rotate(22 540 760)" stroke="#9D8BFF" strokeWidth="1.6" opacity=".55" />
        <circle cx="206" cy="902" r="9" fill="#B6F23C" />
        <circle cx="890" cy="622" r="7" fill="#3EE0E8" />
        <circle cx="874" cy="902" r="6" fill="#9D8BFF" />
        <circle cx="206" cy="902" r="18" stroke="#B6F23C" strokeWidth="1.4" opacity=".5" />
      </svg>

      <div className="portrait">
        <div className="in">
          {photo ? (
            <img
              className="person"
              src={photo}
              alt=""
              style={{
                objectPosition: `${frame.x}% ${frame.y}%`,
                transform: `scale(${frame.zoom})`,
                transformOrigin: `${frame.x}% ${frame.y}%`,
              }}
            />
          ) : (
            <div className="ini">{initials(data.name) || "?"}</div>
          )}
        </div>
      </div>

      <svg className="stamp" viewBox="0 0 160 160" aria-hidden>
        <defs>
          <path id={`ring${id}`} d="M80 80 m-58 0 a58 58 0 1 1 116 0 a58 58 0 1 1 -116 0" />
        </defs>
        <circle cx="80" cy="80" r="76" fill="#B6F23C" />
        <circle cx="80" cy="80" r="67" stroke="#16163B" strokeWidth="1.6" strokeDasharray="3 4" fill="none" />
        <text fontFamily="JetBrains Mono" fontSize="12.5" fontWeight="700" fill="#16163B">
          <textPath href={`#ring${id}`} textLength="356" lengthAdjust="spacing">
            NEUTRINO · SCIENCE · CLUB · {data.program.split(" ")[0].toUpperCase()} ·
          </textPath>
        </text>
        <text x="80" y="76" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="17" fontWeight="800" fill="#16163B" letterSpacing="1.5">
          BATCH
        </text>
        <text x="80" y="114" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="44" fontWeight="800" fill="#16163B">
          {data.batch}
        </text>
      </svg>

      <div className="plate">
        <div className="role">
          <i />
          {data.program} Graduate
        </div>
        <div ref={nameRef} className="name">
          {data.name || "Student Name"}
        </div>
        <div className="meta">{data.batchLabel} · Neutrino Science Club</div>
      </div>

      <div className="foot">
        <span>↗</span> neutrinoscienceclub.org
      </div>
    </div>
  );
}

const css = `
.cp { --night: #0A0A22; --navy: #16163B; --violet: #6344f5; --cyan: #3EE0E8; --lime: #B6F23C;
  position: relative; width: ${POSTER_W}px; height: ${POSTER_H}px; overflow: hidden; color: #fff; text-align: left;
  font-family: "Plus Jakarta Sans", sans-serif; -webkit-font-smoothing: antialiased;
  background:
    radial-gradient(620px 560px at 50% 56%, rgba(99,68,245,.55), transparent 70%),
    radial-gradient(420px 360px at 8% 4%, rgba(62,224,232,.14), transparent 70%),
    radial-gradient(420px 360px at 96% 98%, rgba(182,242,60,.10), transparent 70%),
    var(--night); }
.cp * { box-sizing: border-box; }
.cp .stars { position: absolute; inset: 0; background: radial-gradient(circle at 1px 1px, rgba(255,255,255,.09) 1px, transparent 0) 0 0 / 28px 28px; }

.cp .brand { position: absolute; top: 56px; left: 0; right: 0; display: flex; justify-content: center; align-items: center; gap: 14px; }
.cp .brand img { width: 54px; height: 54px; border-radius: 12px; box-shadow: 0 0 0 1px rgba(255,255,255,.14); }
.cp .brand .club { font-size: 14px; font-weight: 800; letter-spacing: .22em; text-transform: uppercase; line-height: 1.4; }

.cp .head { position: absolute; top: 140px; left: 0; right: 0; text-align: center; }
.cp .congrats { position: relative; display: inline-block; font-size: 172px; font-weight: 800; letter-spacing: -.05em; line-height: .9; }
.cp .congrats .echo { position: absolute; left: 0; top: 0; transform: translate(9px, 9px); color: transparent; -webkit-text-stroke: 2px rgba(157,139,255,.7); }
.cp .congrats .main { position: relative; background: linear-gradient(180deg, #FFFFFF 45%, #D5CCFF); -webkit-background-clip: text; background-clip: text; color: transparent; }
.cp .congrats .bang { background: linear-gradient(180deg, var(--cyan), var(--lime)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.cp .sub { margin-top: 26px; font-size: 27px; font-weight: 800; font-style: italic; letter-spacing: .01em; text-transform: uppercase; }
.cp .sub b { color: var(--lime); }

.cp .tape { position: absolute; left: -60px; right: -60px; top: 770px; height: 58px; background: var(--lime); transform: rotate(-8deg);
  display: flex; align-items: center; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,.35); }
.cp .tape span { white-space: nowrap; font-family: "JetBrains Mono", monospace; font-size: 21px; font-weight: 700; color: var(--navy); letter-spacing: .06em; }
.cp .tape.back { background: var(--violet); transform: rotate(6deg); top: 706px; height: 46px; opacity: .9; }
.cp .tape.back span { color: #fff; font-size: 17px; opacity: .85; }

.cp .orbits { position: absolute; left: 0; top: 0; width: ${POSTER_W}px; height: ${POSTER_H}px; }
.cp .portrait { position: absolute; left: 50%; top: 478px; width: 440px; height: 548px; transform: translateX(-50%);
  border-radius: 220px 220px 34px 34px; padding: 8px; background: linear-gradient(160deg, var(--cyan), var(--violet) 50%, var(--lime)); box-shadow: 0 30px 90px rgba(10,5,60,.7); }
.cp .portrait .in { position: relative; width: 100%; height: 100%; border-radius: 212px 212px 28px 28px; overflow: hidden;
  background:
    radial-gradient(240px 200px at 70% 25%, rgba(62,224,232,.32), transparent 70%),
    radial-gradient(240px 200px at 25% 90%, rgba(182,242,60,.22), transparent 70%),
    linear-gradient(170deg, #241F66, #121036); }
.cp .portrait .person { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.cp .portrait .ini { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding-bottom: 40px;
  font-family: "Fraunces", serif; font-size: 210px; font-weight: 700; letter-spacing: -.02em;
  background: linear-gradient(180deg, #FFFFFF, #CFC5FF); -webkit-background-clip: text; background-clip: text; color: transparent; }

.cp .stamp { position: absolute; left: 236px; top: 500px; width: 150px; height: 150px; transform: rotate(-12deg); }

.cp .plate { position: absolute; left: 50%; top: 972px; transform: translateX(-50%); width: 760px; padding: 26px 30px 24px; border-radius: 26px; text-align: center;
  background: linear-gradient(180deg, #1E1A54, #121036); box-shadow: 0 24px 70px rgba(5,3,30,.6), inset 0 0 0 1px rgba(255,255,255,.14); }
.cp .plate .role { display: inline-flex; align-items: center; gap: 10px; font-family: "JetBrains Mono", monospace; font-size: 17px; font-weight: 600; color: var(--cyan); letter-spacing: .04em; }
.cp .plate .role i { width: 7px; height: 7px; border-radius: 50%; background: var(--lime); display: block; }
.cp .plate .name { margin-top: 10px; font-size: 46px; font-weight: 800; letter-spacing: -.025em; line-height: 1.1; white-space: nowrap; }
.cp .plate .meta { margin-top: 10px; font-size: 19px; color: rgba(255,255,255,.7); }

.cp .foot { position: absolute; left: 0; right: 0; bottom: 58px; display: flex; justify-content: center; align-items: center; gap: 12px; font-size: 25px; font-weight: 700; }
.cp .foot span { color: var(--lime); }
`;
