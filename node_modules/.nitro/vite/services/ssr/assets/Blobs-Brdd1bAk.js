import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/Blobs.tsx
function Blobs({ variant = "default" }) {
	return /* @__PURE__ */ jsxs("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl animate-float-slow",
				style: { background: "radial-gradient(circle at 30% 30%, oklch(0.72 0.19 245 / 0.65), transparent 60%)" }
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl animate-float-slow",
				style: {
					background: "radial-gradient(circle at 60% 40%, oklch(0.86 0.16 205 / 0.55), transparent 60%)",
					animationDelay: "-6s"
				}
			}),
			variant === "default" && /* @__PURE__ */ jsx("div", {
				className: "absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl animate-float-slow",
				style: {
					background: "radial-gradient(circle at 50% 50%, oklch(0.55 0.22 280 / 0.5), transparent 60%)",
					animationDelay: "-10s"
				}
			})
		]
	});
}
//#endregion
export { Blobs as t };
