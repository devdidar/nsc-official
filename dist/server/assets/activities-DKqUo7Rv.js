import { a as PageHero, i as GlassCard, n as CTAButton, o as Section, s as SectionHeading, t as useRevealAll } from "./use-reveal-b167KTr4.js";
import { t as Route } from "./activities-YxjtUl94.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Bot, Code2, Cpu, FlaskConical, Microscope, Sigma, Sparkles, Telescope } from "lucide-react";
//#region src/routes/activities.tsx?tsr-split=component
function Activities() {
	const { activities } = Route.useLoaderData();
	const ref = useRevealAll();
	const Icons = {
		Code2,
		Cpu,
		Bot,
		Telescope,
		FlaskConical,
		Sigma,
		Microscope,
		Sparkles
	};
	return /* @__PURE__ */ jsxs("div", {
		ref,
		children: [
			/* @__PURE__ */ jsx(PageHero, {
				eyebrow: "Activities",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"Something happening ",
					/* @__PURE__ */ jsx("span", {
						className: "text-gradient",
						children: "every day"
					}),
					" of the week."
				] }),
				description: "Drop in on a club, join a lab, or sign up for the whole track — every activity is student-led and mentor-supported.",
				children: /* @__PURE__ */ jsx(CTAButton, {
					to: "/events",
					children: "See the calendar"
				})
			}),
			/* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: activities?.map(({ icon_name, title, description, tag }, k) => {
					const I = Icons[icon_name] || Code2;
					return /* @__PURE__ */ jsxs(GlassCard, {
						className: "h-full",
						"data-reveal": true,
						style: { transitionDelay: `${k * 50}ms` },
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ jsx("div", {
									className: "inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow",
									children: /* @__PURE__ */ jsx(I, { className: "h-5 w-5 text-primary-foreground" })
								}), /* @__PURE__ */ jsx("span", {
									className: "rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground",
									children: tag
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-5 font-display text-lg font-semibold",
								children: title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: description
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 inline-flex items-center gap-1 text-xs text-primary/90",
								children: ["Join ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })]
							})
						]
					}, title);
				})
			}) }),
			/* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx("div", {
				"data-reveal": true,
				children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "How to join",
					title: "Three ways in",
					align: "center",
					description: "Anyone can attend a session. Members get labs, mentors and full access."
				})
			}), /* @__PURE__ */ jsx("div", {
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
				].map((x) => /* @__PURE__ */ jsxs(GlassCard, {
					"data-reveal": true,
					className: "p-8",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-xl font-semibold",
						children: x.t
					}), /* @__PURE__ */ jsx("p", {
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
