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
		"etag": "\"2004-TGrcTTFtQiIELZHlyeFB0qw2e4o\"",
		"mtime": "2026-08-27T13:17:39.097Z",
		"size": 8196,
		"path": "../public/.DS_Store"
	},
	"/instructor_mahi.png": {
		"type": "image/png",
		"etag": "\"69349-t5CPhMWVgrAY08xH8Q1Oa/nYiNE\"",
		"mtime": "2026-08-27T13:17:39.465Z",
		"size": 430921,
		"path": "../public/instructor_mahi.png"
	},
	"/og-about.png": {
		"type": "image/png",
		"etag": "\"79d9d-wRFy240ayMed1Rx+EA9C51sx/6E\"",
		"mtime": "2026-08-27T13:17:39.107Z",
		"size": 499101,
		"path": "../public/og-about.png"
	},
	"/og-activities.png": {
		"type": "image/png",
		"etag": "\"7d60b-MMWulN441Qvu1Y9IitWgxeBwpI8\"",
		"mtime": "2026-08-27T13:17:39.107Z",
		"size": 513547,
		"path": "../public/og-activities.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-08-27T13:17:39.491Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/about-B0VE8wcJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd4-CMhIS5V4G0MA97k9G8uCp0OhOIs\"",
		"mtime": "2026-08-27T13:17:38.573Z",
		"size": 4052,
		"path": "../public/assets/about-B0VE8wcJ.js"
	},
	"/assets/award-W84U_no7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"107-ZqRBIPNTB/Uo1J1AGXGp92rjl70\"",
		"mtime": "2026-08-27T13:17:38.573Z",
		"size": 263,
		"path": "../public/assets/award-W84U_no7.js"
	},
	"/assets/activities-Ck9PCYkq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0d-qPoVbqBkxmp0JYp9mrF0BstCl64\"",
		"mtime": "2026-08-27T13:17:38.573Z",
		"size": 3853,
		"path": "../public/assets/activities-Ck9PCYkq.js"
	},
	"/assets/calendar-days-Byxs0Ptw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-VQuG8NIJLYijgOkpFwZElGq1Y5o\"",
		"mtime": "2026-08-27T13:17:38.573Z",
		"size": 483,
		"path": "../public/assets/calendar-days-Byxs0Ptw.js"
	},
	"/assets/chevron-right-BIPu6Bm2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-P15Ha2gUo83LLKFyLziVNvNm8dM\"",
		"mtime": "2026-08-27T13:17:38.573Z",
		"size": 119,
		"path": "../public/assets/chevron-right-BIPu6Bm2.js"
	},
	"/assets/chevron-left-DLbO2AjY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-4RQYwbr78Q9+U5aO/xkpnrOAM58\"",
		"mtime": "2026-08-27T13:17:38.573Z",
		"size": 119,
		"path": "../public/assets/chevron-left-DLbO2AjY.js"
	},
	"/assets/bootcamps-yG_21gp2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a55-ENPxin5sALWm0zb6LUjezrbhCUI\"",
		"mtime": "2026-08-27T13:17:38.573Z",
		"size": 2645,
		"path": "../public/assets/bootcamps-yG_21gp2.js"
	},
	"/assets/code-xml-C-H_ChV7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5-6vtGF8PhblSFbHWDa3LB8on0Z8s\"",
		"mtime": "2026-08-27T13:17:38.573Z",
		"size": 197,
		"path": "../public/assets/code-xml-C-H_ChV7.js"
	},
	"/assets/Blobs-7TdzFI7h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b1-pnqjBisSkdomXkZDnC2aI6xILNs\"",
		"mtime": "2026-08-27T13:17:38.573Z",
		"size": 689,
		"path": "../public/assets/Blobs-7TdzFI7h.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"acd46-pD634/O39DfHMhnlM2MaVmTKJeo\"",
		"mtime": "2026-08-27T13:17:39.125Z",
		"size": 707910,
		"path": "../public/favicon.svg"
	},
	"/og-contact.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-08-27T13:17:39.471Z",
		"size": 645859,
		"path": "../public/og-contact.png"
	},
	"/og-events.png": {
		"type": "image/png",
		"etag": "\"8d953-S2M603B0qq4poycIVcSCAGCa61A\"",
		"mtime": "2026-08-27T13:17:39.472Z",
		"size": 579923,
		"path": "../public/og-events.png"
	},
	"/og-home.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-08-27T13:17:39.488Z",
		"size": 645859,
		"path": "../public/og-home.png"
	},
	"/og-bootcamps.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-08-27T13:17:39.474Z",
		"size": 645859,
		"path": "../public/og-bootcamps.png"
	},
	"/og-research.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-08-27T13:17:39.488Z",
		"size": 645859,
		"path": "../public/og-research.png"
	},
	"/og-team.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-08-27T13:17:39.488Z",
		"size": 645859,
		"path": "../public/og-team.png"
	},
	"/og-gallery.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-08-27T13:17:39.480Z",
		"size": 645859,
		"path": "../public/og-gallery.png"
	},
	"/og-python-bootcamp.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-08-27T13:17:39.483Z",
		"size": 645859,
		"path": "../public/og-python-bootcamp.png"
	},
	"/og-resources.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-08-27T13:17:39.496Z",
		"size": 645859,
		"path": "../public/og-resources.png"
	},
	"/og-image.png": {
		"type": "image/png",
		"etag": "\"a2c18-PBOEeq647tSaY51bR/OYnSDJs6s\"",
		"mtime": "2026-08-27T13:17:39.482Z",
		"size": 666648,
		"path": "../public/og-image.png"
	},
	"/assets/contact-Vp2d3-6s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3469-7ioWGmpgvJOm26HpXKnirNe8TzQ\"",
		"mtime": "2026-08-27T13:17:38.574Z",
		"size": 13417,
		"path": "../public/assets/contact-Vp2d3-6s.js"
	},
	"/assets/events-DoHMr-DR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-KdheSSuG4B0eWv2zdWjlzlLU17E\"",
		"mtime": "2026-08-27T13:17:38.574Z",
		"size": 151,
		"path": "../public/assets/events-DoHMr-DR.js"
	},
	"/assets/flask-conical-PKnqDiG-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"123-A1sEQpg00bPUbJmyNwkPAJO+PVA\"",
		"mtime": "2026-08-27T13:17:38.574Z",
		"size": 291,
		"path": "../public/assets/flask-conical-PKnqDiG-.js"
	},
	"/assets/gallery-D_EMTeRP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd3-A6Rn1hRBcT2VaCOuYSM97HOR5Fc\"",
		"mtime": "2026-08-27T13:17:38.574Z",
		"size": 3027,
		"path": "../public/assets/gallery-D_EMTeRP.js"
	},
	"/assets/graduation-cap-CXt4PE4w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e3-EI7b/kOrFEUJMVSnP1sXhuEXx80\"",
		"mtime": "2026-08-27T13:17:38.574Z",
		"size": 995,
		"path": "../public/assets/graduation-cap-CXt4PE4w.js"
	},
	"/assets/heart-handshake-tVbP1WUF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bf-Z3Y6pvXi/KrtK6cOCAF1xgXtvU0\"",
		"mtime": "2026-08-27T13:17:38.574Z",
		"size": 447,
		"path": "../public/assets/heart-handshake-tVbP1WUF.js"
	},
	"/assets/mail-qztFHub1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca-l7grPnkQg9ucLrZyTopQolyb+cc\"",
		"mtime": "2026-08-27T13:17:38.574Z",
		"size": 202,
		"path": "../public/assets/mail-qztFHub1.js"
	},
	"/assets/map-pin-LJh314Pd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-/4UtjXau1rysEsu8sOYgGaDWFS8\"",
		"mtime": "2026-08-27T13:17:38.575Z",
		"size": 248,
		"path": "../public/assets/map-pin-LJh314Pd.js"
	},
	"/assets/matchContext--gST7YKY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-d25Xnh+Uj1+TXr2qEniqO95LdhE\"",
		"mtime": "2026-08-27T13:17:38.575Z",
		"size": 159,
		"path": "../public/assets/matchContext--gST7YKY.js"
	},
	"/assets/python-S4la3YP1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cdb1-pfhOOF0rQ86s9w8yneAorbWrTEg\"",
		"mtime": "2026-08-27T13:17:38.575Z",
		"size": 52657,
		"path": "../public/assets/python-S4la3YP1.js"
	},
	"/assets/qss-Bqk2G4CH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bc-2N+JPG3965eWSB0QcbrDwgkqrgU\"",
		"mtime": "2026-08-27T13:17:38.575Z",
		"size": 444,
		"path": "../public/assets/qss-Bqk2G4CH.js"
	},
	"/assets/events-NDP2B8_D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3306-kivXVLMNRtrbKVF98F3DIlyFIIg\"",
		"mtime": "2026-08-27T13:17:38.574Z",
		"size": 13062,
		"path": "../public/assets/events-NDP2B8_D.js"
	},
	"/assets/file-text-BdOS6a1F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-zn3+XB8tK2hru7/sAQWxsCA8Ufo\"",
		"mtime": "2026-08-27T13:17:38.574Z",
		"size": 374,
		"path": "../public/assets/file-text-BdOS6a1F.js"
	},
	"/assets/redirect-Dhm19zUi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4-ePZWCXP5uehkmkGMkMl5xDch+/Y\"",
		"mtime": "2026-08-27T13:17:38.575Z",
		"size": 500,
		"path": "../public/assets/redirect-Dhm19zUi.js"
	},
	"/assets/research-dIbJW7J7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c51-ojUJ3IGPqKcE9+MS+dj7gN8k2AA\"",
		"mtime": "2026-08-27T13:17:38.575Z",
		"size": 3153,
		"path": "../public/assets/research-dIbJW7J7.js"
	},
	"/assets/resources-CJbDtZpZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c8d-xDJI9f/G4xHohjPIz8laziJhEeA\"",
		"mtime": "2026-08-27T13:17:38.576Z",
		"size": 3213,
		"path": "../public/assets/resources-CJbDtZpZ.js"
	},
	"/assets/rocket-aOZ-0qUl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b9-MERviY277IScSenjt88/iDSXosQ\"",
		"mtime": "2026-08-27T13:17:38.576Z",
		"size": 441,
		"path": "../public/assets/rocket-aOZ-0qUl.js"
	},
	"/assets/routes-D51T9Vuj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e3c-L79Wn6xyYN2p0nh6qGQVjKq75GM\"",
		"mtime": "2026-08-27T13:17:38.576Z",
		"size": 15932,
		"path": "../public/assets/routes-D51T9Vuj.js"
	},
	"/assets/index-B7XjbVoC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"836de-zPYYJ1uaQ0F5IqyTgPwhCPFAtpw\"",
		"mtime": "2026-08-27T13:17:38.571Z",
		"size": 538334,
		"path": "../public/assets/index-B7XjbVoC.js"
	},
	"/assets/science-fair-2025-zlNNZxuz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3757-zKgQECmN349ocgcroubqB2dKw3I\"",
		"mtime": "2026-08-27T13:17:38.576Z",
		"size": 14167,
		"path": "../public/assets/science-fair-2025-zlNNZxuz.js"
	},
	"/assets/science-fest-2026-B9t8SJo9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ff-U48rfNA6usRcnlZuE2N79SVatwc\"",
		"mtime": "2026-08-27T13:17:38.576Z",
		"size": 2559,
		"path": "../public/assets/science-fest-2026-B9t8SJo9.js"
	},
	"/assets/sparkles-DlAgEkSw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-Q/grjH7ujutZdzD81wfauUW/5gY\"",
		"mtime": "2026-08-27T13:17:38.576Z",
		"size": 483,
		"path": "../public/assets/sparkles-DlAgEkSw.js"
	},
	"/assets/styles-DWzw3C-i.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1f99e-zBHrcJPsI/t4j+7RGh/xH0rtftI\"",
		"mtime": "2026-08-27T13:17:38.577Z",
		"size": 129438,
		"path": "../public/assets/styles-DWzw3C-i.css"
	},
	"/assets/trophy-DWwobZ2D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d1-zWQqjjGyK8ZAPqkah2IfbYEU+Ag\"",
		"mtime": "2026-08-27T13:17:38.577Z",
		"size": 465,
		"path": "../public/assets/trophy-DWwobZ2D.js"
	},
	"/assets/team-CWXgc4mm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be4-2uaQaOV8Uc/C+JBfdIXg81D3GFM\"",
		"mtime": "2026-08-27T13:17:38.577Z",
		"size": 3044,
		"path": "../public/assets/team-CWXgc4mm.js"
	},
	"/assets/use-reveal-RlCM74oW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e72-zEvKyEPZ030+PKw+DI0HAPfMTag\"",
		"mtime": "2026-08-27T13:17:38.577Z",
		"size": 3698,
		"path": "../public/assets/use-reveal-RlCM74oW.js"
	},
	"/assets/useStore-CsI6HBwk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b93-/94wXA959dCiHhQ17fo/1aIZiOs\"",
		"mtime": "2026-08-27T13:17:38.577Z",
		"size": 27539,
		"path": "../public/assets/useStore-CsI6HBwk.js"
	},
	"/assets/users-pd19YHP4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127-X3ovBiVWawLMFr8KY5WCItuv/4Y\"",
		"mtime": "2026-08-27T13:17:38.577Z",
		"size": 295,
		"path": "../public/assets/users-pd19YHP4.js"
	},
	"/assets/utils-Bz2WNsev.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8dd7-4mcLjM60V+IGEZRyrmtvQuJbDGI\"",
		"mtime": "2026-08-27T13:17:38.577Z",
		"size": 36311,
		"path": "../public/assets/utils-Bz2WNsev.js"
	},
	"/assets/video-t6OwsX1_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27d-/zjz6e8Q1aGy1Zwc3m5DakYk5lk\"",
		"mtime": "2026-08-27T13:17:38.577Z",
		"size": 637,
		"path": "../public/assets/video-t6OwsX1_.js"
	},
	"/images/event1.jpg": {
		"type": "image/jpeg",
		"etag": "\"5e32e-ebSaOOqumEMlNAsirwatZoWXJcY\"",
		"mtime": "2026-08-27T13:17:39.082Z",
		"size": 385838,
		"path": "../public/images/event1.jpg"
	},
	"/images/event3.jpg": {
		"type": "image/jpeg",
		"etag": "\"63979-A06rspVNZajmoaDVjRFdjwqMbc0\"",
		"mtime": "2026-08-27T13:17:39.090Z",
		"size": 407929,
		"path": "../public/images/event3.jpg"
	},
	"/images/istockphoto-1329632922-612x612.webp": {
		"type": "image/webp",
		"etag": "\"5fae-WaQ47vHSWu+1gzvF6DDDFkO3oeY\"",
		"mtime": "2026-08-27T13:17:39.080Z",
		"size": 24494,
		"path": "../public/images/istockphoto-1329632922-612x612.webp"
	},
	"/images/istockphoto-2192763820-612x612.webp": {
		"type": "image/webp",
		"etag": "\"69a0-Ik1XAO6pkbXKsoRmXAh1uKuL0dE\"",
		"mtime": "2026-08-27T13:17:39.085Z",
		"size": 27040,
		"path": "../public/images/istockphoto-2192763820-612x612.webp"
	},
	"/images/event5.jpg": {
		"type": "image/jpeg",
		"etag": "\"405f2-Jtg0eLb+E4Ml5fVAQ6iSyaJV2Qk\"",
		"mtime": "2026-08-27T13:17:39.084Z",
		"size": 263666,
		"path": "../public/images/event5.jpg"
	},
	"/images/premium_photo-1663075913794-6c742d7d6c74.avif": {
		"type": "image/avif",
		"etag": "\"aaa6-U+4bEO+Qh3Y7EIj9cDA+96cH9w0\"",
		"mtime": "2026-08-27T13:17:39.094Z",
		"size": 43686,
		"path": "../public/images/premium_photo-1663075913794-6c742d7d6c74.avif"
	},
	"/images/photo-1586011876158-197fd32f15e2.avif": {
		"type": "image/avif",
		"etag": "\"10ccf-3WaxNR/4iWT2tTSon2maZln2FCU\"",
		"mtime": "2026-08-27T13:17:39.088Z",
		"size": 68815,
		"path": "../public/images/photo-1586011876158-197fd32f15e2.avif"
	},
	"/images/photo-1704296435778-607552ba8571.avif": {
		"type": "image/avif",
		"etag": "\"ec9c-HXYtPdE6pFOW5ImYcquX/QZjdR8\"",
		"mtime": "2026-08-27T13:17:39.092Z",
		"size": 60572,
		"path": "../public/images/photo-1704296435778-607552ba8571.avif"
	},
	"/images/event2.jpg": {
		"type": "image/jpeg",
		"etag": "\"a65ba-dTdmR2mGWuGyUt6LrlCd2CyDwmM\"",
		"mtime": "2026-08-27T13:17:39.083Z",
		"size": 681402,
		"path": "../public/images/event2.jpg"
	},
	"/images/event4.jpg": {
		"type": "image/jpeg",
		"etag": "\"9570a-JHrvVEZDJIFfR/FAXPMr6Y9g+14\"",
		"mtime": "2026-08-27T13:17:39.083Z",
		"size": 612106,
		"path": "../public/images/event4.jpg"
	},
	"/images/kids-robot.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e09c7-W8ZYtqtBLUE7Dy0CHrrL2ndLP+o\"",
		"mtime": "2026-08-27T13:17:39.110Z",
		"size": 4065735,
		"path": "../public/images/kids-robot.jpg"
	},
	"/images/kids-robot.png": {
		"type": "image/png",
		"etag": "\"1f1916b-zom8+WWpAOfwgCgBsW1zf/3cLVY\"",
		"mtime": "2026-08-27T13:17:39.564Z",
		"size": 32608619,
		"path": "../public/images/kids-robot.png"
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
