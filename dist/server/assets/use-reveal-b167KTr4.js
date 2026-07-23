import { t as cn } from "./utils-C_uf36nf.js";
import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
//#region src/components/site/primitives.tsx
function Section({ children, className, id }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: cn("relative py-24 sm:py-32", className),
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children
		})
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground",
		children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gradient-primary animate-pulse-glow" }), /* @__PURE__ */ jsx("span", {
			className: "uppercase tracking-[0.18em]",
			children
		})]
	});
}
function SectionHeading({ eyebrow, title, description, align = "left" }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("max-w-3xl", align === "center" && "mx-auto text-center"),
		children: [
			eyebrow && /* @__PURE__ */ jsx("div", {
				className: cn("mb-5", align === "center" && "flex justify-center"),
				children: /* @__PURE__ */ jsx(Eyebrow, { children: eyebrow })
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl",
				children: title
			}),
			description && /* @__PURE__ */ jsx("p", {
				className: "mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed",
				children: description
			})
		]
	});
}
function GlassCard({ children, className, hover = true, ...rest }) {
	return /* @__PURE__ */ jsxs("div", {
		...rest,
		className: cn("group relative rounded-3xl glass p-6 transition-all duration-500", hover && "hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-1", className),
		children: [/* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
			style: { background: "radial-gradient(400px circle at var(--x,50%) var(--y,0%), oklch(0.72 0.19 245 / 0.10), transparent 40%)" }
		}), /* @__PURE__ */ jsx("div", {
			className: "relative",
			children
		})]
	});
}
function CTAButton({ to, href, children, variant = "primary", className, ...props }) {
	const cls = cn("inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300", variant === "primary" ? "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-[1.03]" : "glass hover:bg-white/10", className);
	const content = /* @__PURE__ */ jsxs(Fragment, { children: [children, /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })] });
	if (to) return /* @__PURE__ */ jsx(Link, {
		to,
		className: cn(cls, "group"),
		...props,
		children: content
	});
	return /* @__PURE__ */ jsx("a", {
		href: href ?? "#",
		className: cn(cls, "group"),
		...props,
		children: content
	});
}
function PageHero({ eyebrow, title, description, children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative pt-40 pb-16 sm:pt-48 sm:pb-24",
		children: [
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-hero opacity-70" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[520px] grid-bg" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative mx-auto max-w-5xl px-4 sm:px-6 text-center",
				children: /* @__PURE__ */ jsxs("div", {
					className: "animate-blur-in",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex justify-center",
							children: /* @__PURE__ */ jsx(Eyebrow, { children: eyebrow })
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-balance",
							children: title
						}),
						description && /* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed",
							children: description
						}),
						children && /* @__PURE__ */ jsx("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children
						})
					]
				})
			})
		]
	});
}
//#endregion
//#region src/hooks/use-reveal.ts
function useRevealAll() {
	const ref = useRef(null);
	useEffect(() => {
		const root = ref.current;
		if (!root) return;
		const targets = root.querySelectorAll("[data-reveal]");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("is-visible");
					io.unobserve(e.target);
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -60px 0px"
		});
		targets.forEach((t) => io.observe(t));
		return () => io.disconnect();
	}, []);
	return ref;
}
//#endregion
export { PageHero as a, GlassCard as i, CTAButton as n, Section as o, Eyebrow as r, SectionHeading as s, useRevealAll as t };
