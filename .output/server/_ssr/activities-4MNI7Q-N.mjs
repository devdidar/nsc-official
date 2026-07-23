import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as Bot, F as FlaskConical, H as CodeXml, b as Microscope, it as ArrowRight, m as Sigma, p as Sparkles, u as Telescope, z as Cpu } from "../_libs/lucide-react.mjs";
import { a as Section, i as PageHero, o as SectionHeading, r as GlassCard, s as useRevealAll, t as CTAButton } from "./use-reveal-b167KTr4.mjs";
import { t as Route } from "./activities-Bv9SVVJE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/activities-4MNI7Q-N.js
var import_jsx_runtime = require_jsx_runtime();
function Activities() {
	const { activities } = Route.useLoaderData();
	const ref = useRevealAll();
	const Icons = {
		Code2: CodeXml,
		Cpu,
		Bot,
		Telescope,
		FlaskConical,
		Sigma,
		Microscope,
		Sparkles
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Activities",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Something happening ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "every day"
					}),
					" of the week."
				] }),
				description: "Drop in on a club, join a lab, or sign up for the whole track — every activity is student-led and mentor-supported.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
					to: "/events",
					children: "See the calendar"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: activities?.map(({ icon_name, title, description, tag }, k) => {
					const I = Icons[icon_name] || CodeXml;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full",
						"data-reveal": true,
						style: { transitionDelay: `${k * 50}ms` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-5 w-5 text-primary-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground",
									children: tag
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-lg font-semibold",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 inline-flex items-center gap-1 text-xs text-primary/90",
								children: ["Join ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
							})
						]
					}, title);
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-reveal": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "How to join",
					title: "Three ways in",
					align: "center",
					description: "Anyone can attend a session. Members get labs, mentors and full access."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-3",
				children: [
					{
						t: "Drop-in",
						d: "Attend any weekly session — no signup required."
					},
					{
						t: "Become a member",
						d: "Free application, opens twice a year."
					},
					{
						t: "Mentor",
						d: "For students & pros ready to give back their craft."
					}
				].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					"data-reveal": true,
					className: "p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold",
						children: x.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground leading-relaxed",
						children: x.d
					})]
				}, x.t))
			})] })
		]
	});
}
//#endregion
export { Activities as component };
