import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./supabase-CPni-6uY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/research-C1-zDTp1.js
var $$splitComponentImporter = () => import("./research-BSdZ4e8n.mjs");
var Route = createFileRoute("/research")({
	head: () => ({ meta: [{ title: "Research — Neutrino Science Club" }, {
		name: "description",
		content: "Papers, replications, and open datasets from the NSC research wing."
	}] }),
	loader: async () => {
		const { data: research_papers, error } = await supabase.from("research_papers").select("*").order("sort_order");
		if (error) throw error;
		return { research_papers };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
