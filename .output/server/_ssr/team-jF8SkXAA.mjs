import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as Linkedin, M as Github, s as Twitter } from "../_libs/lucide-react.mjs";
import { a as Section, i as PageHero, o as SectionHeading, r as GlassCard, s as useRevealAll } from "./use-reveal-b167KTr4.mjs";
import { t as Route } from "./team-FyPOhIkG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-jF8SkXAA.js
var import_jsx_runtime = require_jsx_runtime();
function Team() {
	const { team_members } = Route.useLoaderData();
	const core = team_members?.filter((m) => m.type === "core") || [];
	const mentors = team_members?.filter((m) => m.type === "mentor") || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: useRevealAll(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Team",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"The ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "people"
					}),
					" behind Neutrino."
				] }),
				description: "A student-led board and a network of mentors who show up, week after week."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-reveal": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Core board",
					title: "Meet the officers"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: core.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-0 overflow-hidden",
					"data-reveal": true,
					style: { transitionDelay: `${i * 50}ms` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative h-44 bg-gradient-to-br ${m.gradient}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-16 w-16 place-items-center rounded-full glass-strong font-display text-xl font-semibold",
								children: m.name.split(" ").map((s) => s[0]).slice(0, 2).join("")
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg font-semibold",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-primary/90",
								children: m.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: m.bio
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex gap-2",
								children: [
									Github,
									Twitter,
									Linkedin
								].map((I, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "grid h-8 w-8 place-items-center rounded-lg glass hover:bg-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-3.5 w-3.5" })
								}, k))
							})
						]
					})]
				}, m.name))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-reveal": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Mentors",
					title: "Faculty & industry mentors"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: mentors.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
					className: "p-5",
					"data-reveal": true,
					style: { transitionDelay: `${i * 40}ms` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-base",
						children: [
							m.name,
							" — ",
							m.bio
						]
					})
				}, m.name))
			})] })
		]
	});
}
//#endregion
export { Team as component };
