import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Blobs-Brdd1bAk.js
var import_jsx_runtime = require_jsx_runtime();
function Blobs({ variant = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl animate-float-slow",
				style: { background: "radial-gradient(circle at 30% 30%, oklch(0.72 0.19 245 / 0.65), transparent 60%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl animate-float-slow",
				style: {
					background: "radial-gradient(circle at 60% 40%, oklch(0.86 0.16 205 / 0.55), transparent 60%)",
					animationDelay: "-6s"
				}
			}),
			variant === "default" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
