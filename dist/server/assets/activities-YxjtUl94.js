import { t as supabase } from "./supabase-JQDjdr8i.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/activities.tsx
var $$splitComponentImporter = () => import("./activities-DKqUo7Rv.js");
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
