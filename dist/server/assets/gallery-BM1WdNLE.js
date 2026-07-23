import { t as cn } from "./utils-C_uf36nf.js";
import { a as PageHero, o as Section, t as useRevealAll } from "./use-reveal-b167KTr4.js";
import { t as Route } from "./gallery-A6LH8Zbq.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
//#region src/routes/gallery.tsx?tsr-split=component
function Gallery() {
	const { gallery_items: tiles = [] } = Route.useLoaderData();
	const ref = useRevealAll();
	const [i, setI] = useState(null);
	const close = () => setI(null);
	const prev = () => setI((n) => n == null ? n : (n - 1 + tiles.length) % tiles.length);
	const next = () => setI((n) => n == null ? n : (n + 1) % tiles.length);
	return /* @__PURE__ */ jsxs("div", {
		ref,
		children: [
			/* @__PURE__ */ jsx(PageHero, {
				eyebrow: "Gallery",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"Snapshots from the ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "lab"
					}),
					"."
				] }),
				description: "A Pinterest-style feed of moments — labs, nights, builds and demos."
			}),
			/* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", {
				className: "columns-2 md:columns-3 xl:columns-4 gap-4 [column-fill:_balance]",
				children: tiles.map((t, idx) => /* @__PURE__ */ jsx("button", {
					onClick: () => setI(idx),
					"data-reveal": true,
					className: "reveal mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl glass hover-lift text-left",
					style: { transitionDelay: `${idx * 30}ms` },
					children: /* @__PURE__ */ jsxs("div", {
						className: cn("relative bg-gradient-to-br", t.gradient),
						style: { height: t.height || 260 },
						children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-50" }), /* @__PURE__ */ jsx("div", {
							className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4",
							children: /* @__PURE__ */ jsx("div", {
								className: "text-xs text-white/90",
								children: t.caption
							})
						})]
					})
				}, idx))
			}) }),
			i != null && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 z-[60] grid place-items-center bg-black/70 backdrop-blur-md p-4 animate-blur-in",
				onClick: close,
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative w-full max-w-4xl aspect-[4/3] rounded-3xl overflow-hidden glass-strong shadow-elevated",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ jsx("div", { className: cn("absolute inset-0 bg-gradient-to-br", tiles[i].gradient) }),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-50" }),
						/* @__PURE__ */ jsx("div", {
							className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6",
							children: /* @__PURE__ */ jsx("div", {
								className: "text-sm text-white/90",
								children: tiles[i].caption
							})
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: close,
							className: "absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full glass-strong",
							children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: prev,
							className: "absolute top-1/2 left-4 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass-strong",
							children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: next,
							className: "absolute top-1/2 right-4 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass-strong",
							children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Gallery as component };
