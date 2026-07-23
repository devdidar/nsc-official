import { t as cn } from "./utils-C_uf36nf.js";
import { a as PageHero, i as GlassCard, o as Section, s as SectionHeading, t as useRevealAll } from "./use-reveal-b167KTr4.js";
import { t as Route } from "./resources-Dsw10JZt.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, BookOpen, ChevronDown, Code, FileArchive, Video } from "lucide-react";
//#region src/routes/resources.tsx?tsr-split=component
function Resources() {
	const { resources, faqs } = Route.useLoaderData();
	const Icons = {
		BookOpen,
		Video,
		Code,
		FileArchive
	};
	const ref = useRevealAll();
	const [open, setOpen] = useState(0);
	return /* @__PURE__ */ jsxs("div", {
		ref,
		children: [
			/* @__PURE__ */ jsx(PageHero, {
				eyebrow: "Resources",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"Learn, borrow, ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "remix"
					}),
					"."
				] }),
				description: "Curated reading, tutorials, datasets and starter kits — most of it free, all of it open."
			}),
			/* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: resources?.map(({ icon_name, title, description, tag, link_url }, k) => {
					const I = Icons[icon_name] || BookOpen;
					return /* @__PURE__ */ jsxs(GlassCard, {
						"data-reveal": true,
						style: { transitionDelay: `${k * 50}ms` },
						className: "group",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow",
									children: /* @__PURE__ */ jsx(I, { className: "h-4 w-4 text-primary-foreground" })
								}), /* @__PURE__ */ jsx("span", {
									className: "rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground",
									children: tag
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-4 font-display text-lg font-semibold",
								children: title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: description
							}),
							/* @__PURE__ */ jsxs("a", {
								href: link_url || "#",
								className: "mt-5 inline-flex items-center gap-1 text-sm text-primary/90",
								children: ["Open ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})
						]
					}, title);
				})
			}) }),
			/* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx("div", {
				"data-reveal": true,
				children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "FAQ",
					title: "Frequently asked",
					align: "center"
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 mx-auto max-w-2xl rounded-3xl glass overflow-hidden divide-y divide-white/5",
				children: faqs?.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ jsxs("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "block w-full text-left px-6 py-5 hover:bg-white/[0.03] transition-colors",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-display text-base font-semibold",
								children: f.question
							}), /* @__PURE__ */ jsx(ChevronDown, { className: cn("h-4 w-4 text-muted-foreground transition-transform", isOpen && "rotate-180 text-primary") })]
						}), /* @__PURE__ */ jsx("div", {
							className: cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"),
							children: /* @__PURE__ */ jsx("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ jsx("p", {
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
