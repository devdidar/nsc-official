import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./supabase-CPni-6uY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-DT-eDAj0.js
var $$splitComponentImporter = () => import("./resources-BOSLOsim.mjs");
var Route = createFileRoute("/resources")({
	head: () => ({ meta: [{ title: "Resources — Neutrino Science Club" }, {
		name: "description",
		content: "Curated reading, tutorials, datasets, and starter kits from NSC members and mentors."
	}] }),
	loader: async () => {
		const [resResp, faqResp] = await Promise.all([supabase.from("resources").select("*").order("sort_order"), supabase.from("faqs").select("*").order("sort_order")]);
		if (resResp.error) throw resResp.error;
		if (faqResp.error) throw faqResp.error;
		return {
			resources: resResp.data,
			faqs: faqResp.data
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
