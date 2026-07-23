import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./supabase-CPni-6uY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-HQGJYx_-.js
var $$splitComponentImporter = () => import("./events-DXSdKZUI.mjs");
var Route = createFileRoute("/events")({
	head: () => ({ meta: [{ title: "Events — Neutrino Science Club" }, {
		name: "description",
		content: "Upcoming and past events: summits, hackathons, observation nights and workshops."
	}] }),
	loader: async () => {
		const { data: events, error } = await supabase.from("events").select("*").order("sort_order");
		if (error) throw error;
		return { events };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
