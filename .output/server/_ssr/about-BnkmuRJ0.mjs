import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as HeartHandshake, B as Compass, D as Lightbulb, h as ShieldCheck, p as Sparkles, v as Rocket } from "../_libs/lucide-react.mjs";
import { a as Section, i as PageHero, n as Eyebrow, o as SectionHeading, r as GlassCard, s as useRevealAll, t as CTAButton } from "./use-reveal-b167KTr4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BnkmuRJ0.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		i: Compass,
		t: "First principles",
		d: "We reason from fundamentals — not from convention."
	},
	{
		i: Lightbulb,
		t: "Playful rigor",
		d: "Serious science, joyfully done."
	},
	{
		i: HeartHandshake,
		t: "Radical mentorship",
		d: "Everyone teaches, everyone learns."
	},
	{
		i: ShieldCheck,
		t: "Open by default",
		d: "Code, data and results shared with the world."
	},
	{
		i: Sparkles,
		t: "Aesthetics matter",
		d: "Beautiful ideas deserve beautiful execution."
	},
	{
		i: Rocket,
		t: "Ship or it didn't happen",
		d: "A demo beats a deck, every time."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: useRevealAll(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
				eyebrow: "About NSC",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"A community for people who ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "build the future"
					}),
					"."
				] }),
				description: "Neutrino began in 2019 with twelve students and a whiteboard. Today it's a global collective of curious minds — meeting weekly, shipping monthly, publishing yearly.",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
					to: "/team",
					children: "Meet the team"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
					to: "/contact",
					variant: "ghost",
					children: "Get involved"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					className: "reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Our story" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance",
							children: [
								"From a whiteboard, to a wing, to a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "worldwide network"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4 text-muted-foreground leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "What started as a Friday-night study group evolved into a full research and engineering community. Our members build satellites, train language models, and win olympiads — often in the same semester." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We're a student-run non-profit, powered by mentors from industry and academia who believe the fastest way to grow scientists is to hand them the keys." })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3",
					"data-reveal": true,
					children: [
						["12", "Founding members"],
						["1,200+", "Active today"],
						["46", "Awards won"],
						["22", "Partner schools"]
					].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-4xl font-semibold text-gradient",
							children: v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
							children: l
						})]
					}, l))
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-reveal": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Values",
					title: "What we believe",
					align: "center"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: values.map(({ i: I, t, d }, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
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
							className: "mt-1 text-sm text-muted-foreground leading-relaxed",
							children: d
						})
					]
				}, t))
			})] })
		]
	});
}
//#endregion
export { About as component };
