globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.DS_Store": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1804-3y++sUAKzaCQmjLBz2v0kvESHgc\"",
		"mtime": "2026-07-23T08:04:02.907Z",
		"size": 6148,
		"path": "../public/.DS_Store"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-07-23T08:04:02.907Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/Blobs-CrqVoU9J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"956-646drVDCbpzKaxwdVL3ASWZc6ZQ\"",
		"mtime": "2026-07-23T08:04:02.474Z",
		"size": 2390,
		"path": "../public/assets/Blobs-CrqVoU9J.js"
	},
	"/assets/about-DHYSpVjY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fc2-BFlGaJ07ZB+fofn2E1L1FIvpwbs\"",
		"mtime": "2026-07-23T08:04:02.474Z",
		"size": 4034,
		"path": "../public/assets/about-DHYSpVjY.js"
	},
	"/assets/activities-a7khGrXm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a62-8JKnNT+NX2zrFMJN9+4rQpmFeOY\"",
		"mtime": "2026-07-23T08:04:02.474Z",
		"size": 2658,
		"path": "../public/assets/activities-a7khGrXm.js"
	},
	"/assets/bootcamps-CNxF9nSg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bb9-U13S9W7vXZbYVK0D7pR08maIUxM\"",
		"mtime": "2026-07-23T08:04:02.474Z",
		"size": 3001,
		"path": "../public/assets/bootcamps-CNxF9nSg.js"
	},
	"/assets/calendar-days-DPvDOoLm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-NStogpriVpBLjco5kvTroFhb+c8\"",
		"mtime": "2026-07-23T08:04:02.474Z",
		"size": 483,
		"path": "../public/assets/calendar-days-DPvDOoLm.js"
	},
	"/instructor_mahi.png": {
		"type": "image/png",
		"etag": "\"69349-t5CPhMWVgrAY08xH8Q1Oa/nYiNE\"",
		"mtime": "2026-07-23T08:04:02.908Z",
		"size": 430921,
		"path": "../public/instructor_mahi.png"
	},
	"/assets/chevron-right-DcVl9_15.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-e5E/kdUAsydb0bhwr7rhdRpuGy8\"",
		"mtime": "2026-07-23T08:04:02.474Z",
		"size": 119,
		"path": "../public/assets/chevron-right-DcVl9_15.js"
	},
	"/assets/clock-Cfrj-ASC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-hmr1m/tO3p3fkJEIqvLuqDBEzrA\"",
		"mtime": "2026-07-23T08:04:02.475Z",
		"size": 158,
		"path": "../public/assets/clock-Cfrj-ASC.js"
	},
	"/assets/contact-BJMQPcwW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"250d-yiY9uxayqvfvuDP9pGFgppXEcdE\"",
		"mtime": "2026-07-23T08:04:02.475Z",
		"size": 9485,
		"path": "../public/assets/contact-BJMQPcwW.js"
	},
	"/assets/cpu-BZvVZRn3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"277-3q5XCAnsDnlUQrFV97WqZ0c43QI\"",
		"mtime": "2026-07-23T08:04:02.475Z",
		"size": 631,
		"path": "../public/assets/cpu-BZvVZRn3.js"
	},
	"/assets/createClientRpc-B9EtXeb6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7bac-G4678tPQbY2PlS58bN/D4SSiCcA\"",
		"mtime": "2026-07-23T08:04:02.475Z",
		"size": 31660,
		"path": "../public/assets/createClientRpc-B9EtXeb6.js"
	},
	"/assets/events-CpwiZeSa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b39-grFuujWOmP4M8ogfpvVxkCo30+o\"",
		"mtime": "2026-07-23T08:04:02.475Z",
		"size": 2873,
		"path": "../public/assets/events-CpwiZeSa.js"
	},
	"/assets/file-text-s4oYWEZl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-mRImHniHEuWWwaR8LgiRGLPQ/wM\"",
		"mtime": "2026-07-23T08:04:02.475Z",
		"size": 374,
		"path": "../public/assets/file-text-s4oYWEZl.js"
	},
	"/assets/gallery-DqvqDQyi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa3-YlmP7+FpgC+BOOmNMuMeKdFYT+Q\"",
		"mtime": "2026-07-23T08:04:02.475Z",
		"size": 2723,
		"path": "../public/assets/gallery-DqvqDQyi.js"
	},
	"/assets/heart-handshake-Dff3FENk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bf-MGVnnVU/EJd5G2mpHAjAgpvEtL0\"",
		"mtime": "2026-07-23T08:04:02.475Z",
		"size": 447,
		"path": "../public/assets/heart-handshake-Dff3FENk.js"
	},
	"/assets/mail-CqRGmFP7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca-WQFtNOANFO8DuYrfIyr1OlKOLbs\"",
		"mtime": "2026-07-23T08:04:02.475Z",
		"size": 202,
		"path": "../public/assets/mail-CqRGmFP7.js"
	},
	"/assets/map-pin-FZsxndJD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-DEjz6S8kQYlgGNpXky2d58OxRWM\"",
		"mtime": "2026-07-23T08:04:02.475Z",
		"size": 248,
		"path": "../public/assets/map-pin-FZsxndJD.js"
	},
	"/assets/index-BMcfjKOs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7927b-NsCAfXlzB1QwafpxmF3G9yVdvs4\"",
		"mtime": "2026-07-23T08:04:02.474Z",
		"size": 496251,
		"path": "../public/assets/index-BMcfjKOs.js"
	},
	"/assets/python-Cd1IS6YY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d13c-NScSseDdYcTph0uqLSoJ/Qg9wCk\"",
		"mtime": "2026-07-23T08:04:02.476Z",
		"size": 53564,
		"path": "../public/assets/python-Cd1IS6YY.js"
	},
	"/assets/redirect-Dhm19zUi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4-ePZWCXP5uehkmkGMkMl5xDch+/Y\"",
		"mtime": "2026-07-23T08:04:02.476Z",
		"size": 500,
		"path": "../public/assets/redirect-Dhm19zUi.js"
	},
	"/assets/research-Cdxm7kvc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c42-3wEpQ1JJRZHium6xcnaRvCSHyGs\"",
		"mtime": "2026-07-23T08:04:02.476Z",
		"size": 3138,
		"path": "../public/assets/research-Cdxm7kvc.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"acd46-pD634/O39DfHMhnlM2MaVmTKJeo\"",
		"mtime": "2026-07-23T08:04:02.907Z",
		"size": 707910,
		"path": "../public/favicon.svg"
	},
	"/assets/resources-CP6qGbrV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c79-x/IBnCOWkoZXwKUDPyYXRP2/ptg\"",
		"mtime": "2026-07-23T08:04:02.476Z",
		"size": 3193,
		"path": "../public/assets/resources-CP6qGbrV.js"
	},
	"/assets/routes-C1TaEKsD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5bc2-PsQ2v+t3WTB3jOPH4p8eI/6gU+c\"",
		"mtime": "2026-07-23T08:04:02.476Z",
		"size": 23490,
		"path": "../public/assets/routes-C1TaEKsD.js"
	},
	"/assets/team-BMXD7MLd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"952-kudhVNYm8v9X58P91h15vxFoDJ8\"",
		"mtime": "2026-07-23T08:04:02.476Z",
		"size": 2386,
		"path": "../public/assets/team-BMXD7MLd.js"
	},
	"/assets/telescope-CkXWbsbE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"642-OQ/UndBfSILARH7q3vvjZOWSQJQ\"",
		"mtime": "2026-07-23T08:04:02.476Z",
		"size": 1602,
		"path": "../public/assets/telescope-CkXWbsbE.js"
	},
	"/assets/use-reveal-LGChwvdm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6c-jpokyVVO5HvuKYUOCtm2LKK5ljg\"",
		"mtime": "2026-07-23T08:04:02.477Z",
		"size": 3692,
		"path": "../public/assets/use-reveal-LGChwvdm.js"
	},
	"/assets/utils-Bun0kNdv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f911-o2M4Pj6YQ+Pn0F+/VYQXMtTZDfA\"",
		"mtime": "2026-07-23T08:04:02.477Z",
		"size": 63761,
		"path": "../public/assets/utils-Bun0kNdv.js"
	},
	"/assets/video-Luizcjm0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27d-CsLUJJvXZtRznldz/mar6OZaxFg\"",
		"mtime": "2026-07-23T08:04:02.477Z",
		"size": 637,
		"path": "../public/assets/video-Luizcjm0.js"
	},
	"/assets/sparkles-DWsGohGS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-quhbD+Kokpo1hsgUHlt8e7osetQ\"",
		"mtime": "2026-07-23T08:04:02.476Z",
		"size": 483,
		"path": "../public/assets/sparkles-DWsGohGS.js"
	},
	"/assets/rocket-C9C6SbC4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b9-OmPT7MG9FALB8p6/C/CDLm2Vqdc\"",
		"mtime": "2026-07-23T08:04:02.476Z",
		"size": 441,
		"path": "../public/assets/rocket-C9C6SbC4.js"
	},
	"/assets/styles-CMBwnY_R.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1bae4-MTNRxnblgqpVsFJEQY8yxOJJKs0\"",
		"mtime": "2026-07-23T08:04:02.477Z",
		"size": 113380,
		"path": "../public/assets/styles-CMBwnY_R.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy__rjXyu = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy__rjXyu
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
