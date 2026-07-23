import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { J as ChevronDown, L as FileArchive, V as Code, a as Video, et as BookOpen, rt as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as Section, i as PageHero, o as SectionHeading, r as GlassCard, s as useRevealAll } from "./use-reveal-b167KTr4.mjs";
import { t as Route } from "./resources-DT-eDAj0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-BOSLOsim.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Resources() {
	const { resources, faqs } = Route.useLoaderData();
	const Icons = {
		BookOpen,
		Video,
		Code,
		FileArchive
	};
	const ref = useRevealAll();
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Resources",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Learn, borrow, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "remix"
					}),
					"."
				] }),
				description: "Curated reading, tutorials, datasets and starter kits — most of it free, all of it open."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: resources?.map(({ icon_name, title, description, tag, link_url }, k) => {
					const I = Icons[icon_name] || BookOpen;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						"data-reveal": true,
						style: { transitionDelay: `${k * 50}ms` },
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4 text-primary-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground",
									children: tag
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg font-semibold",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: link_url || "#",
								className: "mt-5 inline-flex items-center gap-1 text-sm text-primary/90",
								children: ["Open ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})
						]
					}, title);
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-reveal": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "FAQ",
					title: "Frequently asked",
					align: "center"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 mx-auto max-w-2xl rounded-3xl glass overflow-hidden divide-y divide-white/5",
				children: faqs?.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "block w-full text-left px-6 py-5 hover:bg-white/[0.03] transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base font-semibold",
								children: f.question
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 text-muted-foreground transition-transform", isOpen && "rotate-180 text-primary") })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: f.answer
								})
							})
						})]
					}, f.question);
				})
			})] })
		]
	});
}
//#endregion
export { Resources as component };
