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
		"mtime": "2026-07-29T17:28:37.408Z",
		"size": 8196,
		"path": "../public/.DS_Store"
	},
	"/og-about.png": {
		"type": "image/png",
		"etag": "\"79d9d-wRFy240ayMed1Rx+EA9C51sx/6E\"",
		"mtime": "2026-07-29T17:28:37.431Z",
		"size": 499101,
		"path": "../public/og-about.png"
	},
	"/og-activities.png": {
		"type": "image/png",
		"etag": "\"7d60b-MMWulN441Qvu1Y9IitWgxeBwpI8\"",
		"mtime": "2026-07-29T17:28:37.438Z",
		"size": 513547,
		"path": "../public/og-activities.png"
	},
	"/instructor_mahi.png": {
		"type": "image/png",
		"etag": "\"69349-t5CPhMWVgrAY08xH8Q1Oa/nYiNE\"",
		"mtime": "2026-07-29T17:28:37.425Z",
		"size": 430921,
		"path": "../public/instructor_mahi.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-07-29T17:28:37.506Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/Blobs-7TdzFI7h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b1-pnqjBisSkdomXkZDnC2aI6xILNs\"",
		"mtime": "2026-07-29T17:28:36.806Z",
		"size": 689,
		"path": "../public/assets/Blobs-7TdzFI7h.js"
	},
	"/assets/about-gdQk2WQW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8f-yJAtN80LYgzriAhp4/i7nI+xDPQ\"",
		"mtime": "2026-07-29T17:28:36.806Z",
		"size": 3983,
		"path": "../public/assets/about-gdQk2WQW.js"
	},
	"/assets/activities-Bf59uDQM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"edc-s8XC4OaBFcsIClmtQPfR9F14/WQ\"",
		"mtime": "2026-07-29T17:28:36.806Z",
		"size": 3804,
		"path": "../public/assets/activities-Bf59uDQM.js"
	},
	"/assets/award-W84U_no7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"107-ZqRBIPNTB/Uo1J1AGXGp92rjl70\"",
		"mtime": "2026-07-29T17:28:36.806Z",
		"size": 263,
		"path": "../public/assets/award-W84U_no7.js"
	},
	"/assets/bootcamps-QriqOkSg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e4-xmGP0+Pd5zPr6acnb0GBksDn6J8\"",
		"mtime": "2026-07-29T17:28:36.806Z",
		"size": 2532,
		"path": "../public/assets/bootcamps-QriqOkSg.js"
	},
	"/assets/calendar-days-Byxs0Ptw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-VQuG8NIJLYijgOkpFwZElGq1Y5o\"",
		"mtime": "2026-07-29T17:28:36.807Z",
		"size": 483,
		"path": "../public/assets/calendar-days-Byxs0Ptw.js"
	},
	"/assets/chevron-left-DLbO2AjY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-4RQYwbr78Q9+U5aO/xkpnrOAM58\"",
		"mtime": "2026-07-29T17:28:36.807Z",
		"size": 119,
		"path": "../public/assets/chevron-left-DLbO2AjY.js"
	},
	"/assets/contact-CIfGuKbK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3419-4idXhI3vNQTlLM71qOSpaxIUCjY\"",
		"mtime": "2026-07-29T17:28:36.807Z",
		"size": 13337,
		"path": "../public/assets/contact-CIfGuKbK.js"
	},
	"/assets/chevron-right-BIPu6Bm2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-P15Ha2gUo83LLKFyLziVNvNm8dM\"",
		"mtime": "2026-07-29T17:28:36.807Z",
		"size": 119,
		"path": "../public/assets/chevron-right-BIPu6Bm2.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"acd46-pD634/O39DfHMhnlM2MaVmTKJeo\"",
		"mtime": "2026-07-29T17:28:37.408Z",
		"size": 707910,
		"path": "../public/favicon.svg"
	},
	"/og-bootcamps.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-07-29T17:28:37.450Z",
		"size": 645859,
		"path": "../public/og-bootcamps.png"
	},
	"/og-events.png": {
		"type": "image/png",
		"etag": "\"8d953-S2M603B0qq4poycIVcSCAGCa61A\"",
		"mtime": "2026-07-29T17:28:37.459Z",
		"size": 579923,
		"path": "../public/og-events.png"
	},
	"/og-contact.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-07-29T17:28:37.456Z",
		"size": 645859,
		"path": "../public/og-contact.png"
	},
	"/og-image.png": {
		"type": "image/png",
		"etag": "\"a2c18-PBOEeq647tSaY51bR/OYnSDJs6s\"",
		"mtime": "2026-07-29T17:28:37.477Z",
		"size": 666648,
		"path": "../public/og-image.png"
	},
	"/og-gallery.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-07-29T17:28:37.472Z",
		"size": 645859,
		"path": "../public/og-gallery.png"
	},
	"/og-home.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-07-29T17:28:37.476Z",
		"size": 645859,
		"path": "../public/og-home.png"
	},
	"/og-research.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-07-29T17:28:37.499Z",
		"size": 645859,
		"path": "../public/og-research.png"
	},
	"/og-python-bootcamp.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-07-29T17:28:37.494Z",
		"size": 645859,
		"path": "../public/og-python-bootcamp.png"
	},
	"/og-resources.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-07-29T17:28:37.504Z",
		"size": 645859,
		"path": "../public/og-resources.png"
	},
	"/og-team.png": {
		"type": "image/png",
		"etag": "\"9dae3-5Ckb5a322x8wnxbyJisDQa8Kuco\"",
		"mtime": "2026-07-29T17:28:37.526Z",
		"size": 645859,
		"path": "../public/og-team.png"
	},
	"/assets/events-BsbnTlKq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-NSIkmMw60ivQMdnIkzfC4IcPeoU\"",
		"mtime": "2026-07-29T17:28:36.807Z",
		"size": 151,
		"path": "../public/assets/events-BsbnTlKq.js"
	},
	"/assets/events-CuPsH8ka.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"289c-5KOabs9GB9suwyyRjAFB0E2FhvA\"",
		"mtime": "2026-07-29T17:28:36.807Z",
		"size": 10396,
		"path": "../public/assets/events-CuPsH8ka.js"
	},
	"/assets/file-text-BdOS6a1F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-zn3+XB8tK2hru7/sAQWxsCA8Ufo\"",
		"mtime": "2026-07-29T17:28:36.807Z",
		"size": 374,
		"path": "../public/assets/file-text-BdOS6a1F.js"
	},
	"/assets/gallery-B33YBXGb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd3-i/vVwSyu3a5ifDe0Ltql1kRcA9M\"",
		"mtime": "2026-07-29T17:28:36.807Z",
		"size": 3027,
		"path": "../public/assets/gallery-B33YBXGb.js"
	},
	"/assets/graduation-cap-CXt4PE4w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e3-EI7b/kOrFEUJMVSnP1sXhuEXx80\"",
		"mtime": "2026-07-29T17:28:36.808Z",
		"size": 995,
		"path": "../public/assets/graduation-cap-CXt4PE4w.js"
	},
	"/assets/heart-handshake-tVbP1WUF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bf-Z3Y6pvXi/KrtK6cOCAF1xgXtvU0\"",
		"mtime": "2026-07-29T17:28:36.808Z",
		"size": 447,
		"path": "../public/assets/heart-handshake-tVbP1WUF.js"
	},
	"/assets/mail-qztFHub1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca-l7grPnkQg9ucLrZyTopQolyb+cc\"",
		"mtime": "2026-07-29T17:28:36.808Z",
		"size": 202,
		"path": "../public/assets/mail-qztFHub1.js"
	},
	"/assets/map-pin-LJh314Pd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-/4UtjXau1rysEsu8sOYgGaDWFS8\"",
		"mtime": "2026-07-29T17:28:36.808Z",
		"size": 248,
		"path": "../public/assets/map-pin-LJh314Pd.js"
	},
	"/assets/matchContext--gST7YKY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-d25Xnh+Uj1+TXr2qEniqO95LdhE\"",
		"mtime": "2026-07-29T17:28:36.808Z",
		"size": 159,
		"path": "../public/assets/matchContext--gST7YKY.js"
	},
	"/assets/python-D6hOtanV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cdb1-Akz6UHFYplnaLOFq/NN/fVbrXOI\"",
		"mtime": "2026-07-29T17:28:36.808Z",
		"size": 52657,
		"path": "../public/assets/python-D6hOtanV.js"
	},
	"/assets/qss-Bqk2G4CH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bc-2N+JPG3965eWSB0QcbrDwgkqrgU\"",
		"mtime": "2026-07-29T17:28:36.808Z",
		"size": 444,
		"path": "../public/assets/qss-Bqk2G4CH.js"
	},
	"/assets/research-BMDBUuUe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c51-REZwFFGzArYD4rgxSLKCM9Zznl8\"",
		"mtime": "2026-07-29T17:28:36.808Z",
		"size": 3153,
		"path": "../public/assets/research-BMDBUuUe.js"
	},
	"/assets/resources-CGr49D_z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c8d-U63u9kq93Pytn4dbt+Ep2zFo2GY\"",
		"mtime": "2026-07-29T17:28:36.808Z",
		"size": 3213,
		"path": "../public/assets/resources-CGr49D_z.js"
	},
	"/assets/rocket-aOZ-0qUl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b9-MERviY277IScSenjt88/iDSXosQ\"",
		"mtime": "2026-07-29T17:28:36.808Z",
		"size": 441,
		"path": "../public/assets/rocket-aOZ-0qUl.js"
	},
	"/assets/routes-Ctzb4I8W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"396a-SJm/psozZxNKk2CplpfFiGAuLrQ\"",
		"mtime": "2026-07-29T17:28:36.809Z",
		"size": 14698,
		"path": "../public/assets/routes-Ctzb4I8W.js"
	},
	"/assets/science-fair-2025-ZDoPRpwB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38d2-yk/h932jYRPBiniFD4Iveunw8MA\"",
		"mtime": "2026-07-29T17:28:36.809Z",
		"size": 14546,
		"path": "../public/assets/science-fair-2025-ZDoPRpwB.js"
	},
	"/assets/sparkles-DlAgEkSw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-Q/grjH7ujutZdzD81wfauUW/5gY\"",
		"mtime": "2026-07-29T17:28:36.809Z",
		"size": 483,
		"path": "../public/assets/sparkles-DlAgEkSw.js"
	},
	"/assets/styles-BYdqqjfX.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1e137-VL/Ou3kPZ9QASJ7q5QiSEXXaW4s\"",
		"mtime": "2026-07-29T17:28:36.815Z",
		"size": 123191,
		"path": "../public/assets/styles-BYdqqjfX.css"
	},
	"/assets/redirect-Dhm19zUi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4-ePZWCXP5uehkmkGMkMl5xDch+/Y\"",
		"mtime": "2026-07-29T17:28:36.808Z",
		"size": 500,
		"path": "../public/assets/redirect-Dhm19zUi.js"
	},
	"/assets/team-Cg4DoM64.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be4-Tqwcx7/VSQboCMX60JkluKzGRj4\"",
		"mtime": "2026-07-29T17:28:36.809Z",
		"size": 3044,
		"path": "../public/assets/team-Cg4DoM64.js"
	},
	"/assets/use-reveal-B4KsTUqc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"de8-RdjixAKOqabTonOxSB549mqJ19M\"",
		"mtime": "2026-07-29T17:28:36.809Z",
		"size": 3560,
		"path": "../public/assets/use-reveal-B4KsTUqc.js"
	},
	"/assets/useStore-CsI6HBwk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b93-/94wXA959dCiHhQ17fo/1aIZiOs\"",
		"mtime": "2026-07-29T17:28:36.809Z",
		"size": 27539,
		"path": "../public/assets/useStore-CsI6HBwk.js"
	},
	"/assets/users-C27ecAEK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ce-ceQHYxl4TCp+6HbjnaKE35/9dBQ\"",
		"mtime": "2026-07-29T17:28:36.809Z",
		"size": 718,
		"path": "../public/assets/users-C27ecAEK.js"
	},
	"/assets/index-BYoBz-i6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82735-M0STSMRzPOS0urpR0vWiItKdfus\"",
		"mtime": "2026-07-29T17:28:36.805Z",
		"size": 534325,
		"path": "../public/assets/index-BYoBz-i6.js"
	},
	"/assets/utils-Bz2WNsev.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8dd7-4mcLjM60V+IGEZRyrmtvQuJbDGI\"",
		"mtime": "2026-07-29T17:28:36.809Z",
		"size": 36311,
		"path": "../public/assets/utils-Bz2WNsev.js"
	},
	"/assets/video-t6OwsX1_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27d-/zjz6e8Q1aGy1Zwc3m5DakYk5lk\"",
		"mtime": "2026-07-29T17:28:36.809Z",
		"size": 637,
		"path": "../public/assets/video-t6OwsX1_.js"
	},
	"/images/event1.jpg": {
		"type": "image/jpeg",
		"etag": "\"5e32e-ebSaOOqumEMlNAsirwatZoWXJcY\"",
		"mtime": "2026-07-29T17:28:37.384Z",
		"size": 385838,
		"path": "../public/images/event1.jpg"
	},
	"/images/event3.jpg": {
		"type": "image/jpeg",
		"etag": "\"63979-A06rspVNZajmoaDVjRFdjwqMbc0\"",
		"mtime": "2026-07-29T17:28:37.396Z",
		"size": 407929,
		"path": "../public/images/event3.jpg"
	},
	"/images/istockphoto-1329632922-612x612.webp": {
		"type": "image/webp",
		"etag": "\"5fae-WaQ47vHSWu+1gzvF6DDDFkO3oeY\"",
		"mtime": "2026-07-29T17:28:37.384Z",
		"size": 24494,
		"path": "../public/images/istockphoto-1329632922-612x612.webp"
	},
	"/images/istockphoto-2192763820-612x612.webp": {
		"type": "image/webp",
		"etag": "\"69a0-Ik1XAO6pkbXKsoRmXAh1uKuL0dE\"",
		"mtime": "2026-07-29T17:28:37.386Z",
		"size": 27040,
		"path": "../public/images/istockphoto-2192763820-612x612.webp"
	},
	"/images/photo-1586011876158-197fd32f15e2.avif": {
		"type": "image/avif",
		"etag": "\"10ccf-3WaxNR/4iWT2tTSon2maZln2FCU\"",
		"mtime": "2026-07-29T17:28:37.401Z",
		"size": 68815,
		"path": "../public/images/photo-1586011876158-197fd32f15e2.avif"
	},
	"/images/photo-1704296435778-607552ba8571.avif": {
		"type": "image/avif",
		"etag": "\"ec9c-HXYtPdE6pFOW5ImYcquX/QZjdR8\"",
		"mtime": "2026-07-29T17:28:37.393Z",
		"size": 60572,
		"path": "../public/images/photo-1704296435778-607552ba8571.avif"
	},
	"/images/event5.jpg": {
		"type": "image/jpeg",
		"etag": "\"405f2-Jtg0eLb+E4Ml5fVAQ6iSyaJV2Qk\"",
		"mtime": "2026-07-29T17:28:37.384Z",
		"size": 263666,
		"path": "../public/images/event5.jpg"
	},
	"/images/premium_photo-1663075913794-6c742d7d6c74.avif": {
		"type": "image/avif",
		"etag": "\"aaa6-U+4bEO+Qh3Y7EIj9cDA+96cH9w0\"",
		"mtime": "2026-07-29T17:28:37.406Z",
		"size": 43686,
		"path": "../public/images/premium_photo-1663075913794-6c742d7d6c74.avif"
	},
	"/images/event2.jpg": {
		"type": "image/jpeg",
		"etag": "\"a65ba-dTdmR2mGWuGyUt6LrlCd2CyDwmM\"",
		"mtime": "2026-07-29T17:28:37.384Z",
		"size": 681402,
		"path": "../public/images/event2.jpg"
	},
	"/images/event4.jpg": {
		"type": "image/jpeg",
		"etag": "\"9570a-JHrvVEZDJIFfR/FAXPMr6Y9g+14\"",
		"mtime": "2026-07-29T17:28:37.384Z",
		"size": 612106,
		"path": "../public/images/event4.jpg"
	},
	"/images/kids-robot.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e09c7-W8ZYtqtBLUE7Dy0CHrrL2ndLP+o\"",
		"mtime": "2026-07-29T17:28:37.402Z",
		"size": 4065735,
		"path": "../public/images/kids-robot.jpg"
	},
	"/images/kids-robot.png": {
		"type": "image/png",
		"etag": "\"1f1916b-zom8+WWpAOfwgCgBsW1zf/3cLVY\"",
		"mtime": "2026-07-29T17:28:37.552Z",
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
