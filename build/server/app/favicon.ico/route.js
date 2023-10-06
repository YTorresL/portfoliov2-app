"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5Cyalit%5CDesktop%5CYTorres%5Cportfoliov2-app%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!C:\\Users\\yalit\\Desktop\\YTorres\\portfoliov2-app\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,514], () => (__webpack_exec__(1479)));
module.exports = __webpack_exports__;

})();