"use strict";
(() => {
var exports = {};
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 2081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 3663:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 1808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 4404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 4145:
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

// NAMESPACE OBJECT: ./app/api/email/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/nodemailer/lib/nodemailer.js
var nodemailer = __webpack_require__(4098);
;// CONCATENATED MODULE: ./config/nodemailer.js

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass
    }
});
const mailOptions = {
    from: email,
    to: email,
    subject: "YTorres - Portfolio | New message from your website",
    text: "You have a new message from your website"
};

;// CONCATENATED MODULE: ./app/api/email/route.js

function sanitizeInput(input) {
    const sanitizedInput = input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
    return sanitizedInput;
}
async function POST(NextRequest, NextResponse) {
    const data = await NextRequest.json();
    const { email } = data;
    if (!email) {
        return new Response(null, {
            status: 400
        });
    }
    try {
        await transporter.sendMail({
            ...mailOptions,
            html: `
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tr>
    <td align="center" valign="top" style="background-color: #f5f5f5; padding: 70px 0;">
      <table cellpadding="0" cellspacing="0" border="0" width="400" style="background-color: #ffffff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <tr>
          <td align="center" valign="top" style="padding: 30px;">
            <h1 style="font-size: 24px; line-height: 32px; margin: 0 0 20px;">YTorres<span style="color: #f59e0b;"> Portfolio </span></h1>
            <p style="font-size: 14px; line-height: 20px; margin: 0 0 20px;">You have a new message from your website:</p>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="font-size: 16px; line-height: 20px; margin: 0 0 10px;"><strong>Email:</strong> ${sanitizeInput(email)}</li>
            </ul>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
        `
        });
    } catch (err) {
        console.log(err);
        return new Response(null, {
            status: 400
        });
    }
    return new Response(null, {
        status: 400
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Femail%2Froute&name=app%2Fapi%2Femail%2Froute&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=C%3A%5CUsers%5Cyalit%5CDesktop%5CYTorres%5Cportfoliov2-app%5Capp&appPaths=%2Fapi%2Femail%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/email/route",
        pathname: "/api/email",
        filename: "route",
        bundlePath: "app/api/email/route"
    },
    resolvedPagePath: "C:\\Users\\yalit\\Desktop\\YTorres\\portfoliov2-app\\app\\api\\email\\route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/email/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,98], () => (__webpack_exec__(4145)));
module.exports = __webpack_exports__;

})();