import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./supabase-CPni-6uY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-FyPOhIkG.js
var $$splitComponentImporter = () => import("./team-jF8SkXAA.mjs");
var Route = createFileRoute("/team")({
	head: () => ({ meta: [{ title: "Team — Neutrino Science Club" }, {
		name: "description",
		content: "The students and mentors behind NSC."
	}] }),
	loader: async () => {
		const { data: team_members, error } = await supabase.from("team_members").select("*").order("sort_order");
		if (error) throw error;
		return { team_members };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
