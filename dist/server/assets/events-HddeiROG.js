import { t as cn } from "./utils-C_uf36nf.js";
import { a as PageHero, o as Section, r as Eyebrow, t as useRevealAll } from "./use-reveal-b167KTr4.js";
import { t as Route } from "./events-Bpep_ENo.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
//#region src/routes/events.tsx?tsr-split=component
var tabs = [
	"Upcoming",
	"Past",
	"All"
];
function Events() {
	const { events } = Route.useLoaderData();
	const [tab, setTab] = useState("Upcoming");
	const ref = useRevealAll();
	const list = events?.filter((e) => tab === "All" ? true : tab === "Upcoming" ? e.status === "upcoming" : e.status === "past") || [];
	return /* @__PURE__ */ jsxs("div", {
		ref,
		children: [/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Events",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Meet, make, and ",
				/* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "launch things"
				}),
				"."
			] }),
			description: "Summits, hackathons, workshops and observation nights — a calendar full of reasons to show up."
		}), /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx("div", {
			className: "flex justify-center gap-1 rounded-full glass p-1.5 w-fit mx-auto",
			"data-reveal": true,
			children: tabs.map((t) => /* @__PURE__ */ jsx("button", {
				onClick: () => setTab(t),
				className: cn("rounded-full px-5 py-2 text-sm transition-all", tab === t ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"),
				children: t
			}, t))
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-12 grid gap-5 lg:grid-cols-2",
			children: list.map((e, i) => /* @__PURE__ */ jsx("article", {
				"data-reveal": true,
				className: "reveal group relative overflow-hidden rounded-3xl glass hover-lift",
				style: { transitionDelay: `${i * 60}ms` },
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid sm:grid-cols-[220px_1fr]",
					children: [/* @__PURE__ */ jsxs("div", {
						className: `relative min-h-40 bg-gradient-to-br ${e.grad}`,
						children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-60" }), /* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 grid place-items-center",
							children: /* @__PURE__ */ jsx(CalendarDays, { className: "h-12 w-12 text-white/70" })
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ jsx(Eyebrow, { children: e.tag })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-3 font-display text-xl font-semibold",
								children: e.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: e.description
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-5 grid grid-cols-3 gap-3 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ jsx(Meta, {
										i: /* @__PURE__ */ jsx(CalendarDays, { className: "h-3.5 w-3.5" }),
										v: e.date
									}),
									/* @__PURE__ */ jsx(Meta, {
										i: /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }),
										v: e.time || ""
									}),
									/* @__PURE__ */ jsx(Meta, {
										i: /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
										v: e.city || ""
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 inline-flex items-center gap-1 text-sm text-primary/90",
								children: [
									e.status === "upcoming" ? "Reserve seat" : "Recap",
									" ",
									/* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
								]
							})
						]
					})]
				})
			}, e.title))
		})] })]
	});
}
function Meta({ i, v }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-1.5",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-primary/90",
			children: i
		}), /* @__PURE__ */ jsx("span", { children: v })]
	});
}
//#endregion
export { Events as component };
