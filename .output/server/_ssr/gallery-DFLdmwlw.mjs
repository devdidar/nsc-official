import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./supabase-CPni-6uY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DFLdmwlw.js
var $$splitComponentImporter = () => import("./gallery-iWQyMqpp.mjs");
var Route = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Gallery — Neutrino Science Club" }, {
		name: "description",
		content: "Photos and moments from the labs, bootcamps and observation nights."
	}] }),
	loader: async () => {
		const { data: gallery_items, error } = await supabase.from("gallery_items").select("*").order("sort_order");
		if (error) throw error;
		return { gallery_items };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
