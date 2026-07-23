import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { I as FileText, N as GitBranch, R as Database, it as ArrowRight, tt as Beaker } from "../_libs/lucide-react.mjs";
import { a as Section, i as PageHero, o as SectionHeading, r as GlassCard, s as useRevealAll } from "./use-reveal-b167KTr4.mjs";
import { t as Route } from "./research-C1-zDTp1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/research-BSdZ4e8n.js
var import_jsx_runtime = require_jsx_runtime();
var tracks = [
	{
		i: FileText,
		t: "Papers & preprints",
		d: "Mentored writing, submission and peer review."
	},
	{
		i: Database,
		t: "Open datasets",
		d: "We publish everything we collect, with clean licensing."
	},
	{
		i: GitBranch,
		t: "Replications",
		d: "Reproducing landmark results — carefully and openly."
	},
	{
		i: Beaker,
		t: "Experimental grants",
		d: "Small micro-grants for high-variance ideas."
	}
];
function Research() {
	const { research_papers: papers } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: useRevealAll(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Research",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Papers, replications, and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "open datasets"
					}),
					"."
				] }),
				description: "Our research wing pairs undergraduates with mentors to run rigorous, reproducible projects. All outputs are open by default."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: tracks.map(({ i: I, t, d }, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					"data-reveal": true,
					style: { transitionDelay: `${k * 60}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-5 w-5 text-primary-foreground" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg font-semibold",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: d
						})
					]
				}, t))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-reveal": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Recent work",
					title: "Selected outputs"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 divide-y divide-white/5 rounded-3xl glass overflow-hidden",
				children: papers?.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: p.link_url || "#",
					className: "group grid md:grid-cols-[110px_1fr_auto] gap-4 px-6 py-5 hover:bg-white/[0.04] transition-colors",
					"data-reveal": true,
					style: { transitionDelay: `${i * 40}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: p.year
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-semibold",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								p.authors,
								" · ",
								p.area
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-widest text-primary/90",
								children: p.status
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" })]
						})
					]
				}, p.title))
			})] })
		]
	});
}
//#endregion
export { Research as component };
