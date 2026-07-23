import { a as PageHero, n as CTAButton, o as Section, t as useRevealAll } from "./use-reveal-b167KTr4.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Code2 } from "lucide-react";
//#region src/routes/bootcamps.tsx?tsr-split=component
function Bootcamps() {
	return /* @__PURE__ */ jsxs("div", {
		ref: useRevealAll(),
		children: [/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Bootcamps",
			title: /* @__PURE__ */ jsxs(Fragment, { children: [
				"Our flagship ",
				/* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "Python Bootcamp"
				}),
				" is now live."
			] }),
			description: "4 weeks of hands-on, mentor-led Python training for kids & beginners — 8 live classes, milestone projects, and a Python Arcade capstone.",
			children: /* @__PURE__ */ jsx(CTAButton, {
				to: "/bootcamp/python",
				children: "Explore Python Bootcamp"
			})
		}), /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
			"data-reveal": true,
			className: "reveal relative overflow-hidden rounded-[32px] glass-strong p-8 sm:p-14 shadow-elevated text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl",
					style: { background: "radial-gradient(circle, oklch(0.72 0.19 245 / 0.5), transparent 60%)" }
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full opacity-20 blur-3xl",
					style: { background: "radial-gradient(circle, oklch(0.86 0.16 205 / 0.4), transparent 60%)" }
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto inline-grid h-20 w-20 place-items-center rounded-2xl bg-gradient-primary shadow-glow mb-6",
							children: /* @__PURE__ */ jsx(Code2, { className: "h-9 w-9 text-primary-foreground" })
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl sm:text-4xl font-semibold tracking-tight",
							children: "NSC Python Bootcamp for Kids"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 flex items-center justify-center gap-2",
							children: /* @__PURE__ */ jsx("span", {
								className: "rounded-full bg-primary/20 border border-primary/40 px-3 py-1 text-xs font-bold text-primary",
								children: "Launch Scholarship: FREE for First 50 Students (Regular ৳299)"
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 mx-auto max-w-lg text-muted-foreground leading-relaxed",
							children: "Learn complete Python fundamentals in 4 weeks. Build milestone projects like a Student Info System & Quiz Game, leading up to your own Python Arcade!"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground",
							children: [
								"4 Weeks",
								"8 Live Classes",
								"Milestone Projects",
								"Python Arcade",
								"Certificate",
								"First 50 Students FREE"
							].map((item) => /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5",
								children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), item]
							}, item))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/bootcamp/python",
								className: "group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform",
								children: ["View Full Details", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
							})
						})
					]
				})
			]
		}) })]
	});
}
//#endregion
export { Bootcamps as component };
