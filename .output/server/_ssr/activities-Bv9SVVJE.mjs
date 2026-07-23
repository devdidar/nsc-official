import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./supabase-CPni-6uY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/activities-Bv9SVVJE.js
var $$splitComponentImporter = () => import("./activities-4MNI7Q-N.mjs");
var Route = createFileRoute("/activities")({
	head: () => ({ meta: [{ title: "Activities — Neutrino Science Club" }, {
		name: "description",
		content: "Weekly programs, labs and clubs across programming, AI, robotics, astronomy, math and research."
	}] }),
	loader: async () => {
		const { data: activities, error } = await supabase.from("activities").select("*").order("sort_order");
		if (error) throw error;
		return { activities };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
