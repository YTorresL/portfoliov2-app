"use strict";
(() => {
var exports = {};
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 8854:
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
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./infrastructure/services/email/sanitizer.ts
function sanitizeEmail(input) {
    return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
}

;// CONCATENATED MODULE: ./infrastructure/services/email/emailTemplate.ts
function generateContactEmailTemplate(email) {
    return `
    <table cellspacing="0" cellpadding="0" border="0" width="100%">
      <tr>
        <td align="center" valign="top" style="background-color: #f5f5f5; padding: 70px 0;">
          <table cellpadding="0" cellspacing="0" border="0" width="400" style="background-color: #ffffff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <tr>
              <td align="center" valign="top" style="padding: 30px;">
                <h1 style="font-size: 24px; line-height: 32px; margin: 0 0 20px;">
                  YTorres<span style="color: #f59e0b;"> Portfolio </span>
                </h1>
                <p style="font-size: 14px; line-height: 20px; margin: 0 0 20px;">
                  You have a new message from your website:
                </p>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="font-size: 16px; line-height: 20px; margin: 0 0 10px;">
                    <strong>Email:</strong> ${email}
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

// EXTERNAL MODULE: ./node_modules/nodemailer/lib/nodemailer.js
var nodemailer = __webpack_require__(4098);
;// CONCATENATED MODULE: ./infrastructure/services/email/config.ts

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




async function POST(request) {
    try {
        const data = await request.json();
        const { email } = data;
        if (!email) {
            return next_response/* default */.Z.json({
                error: "Email is required"
            }, {
                status: 400
            });
        }
        const sanitizedEmail = sanitizeEmail(email);
        const htmlContent = generateContactEmailTemplate(sanitizedEmail);
        await transporter.sendMail({
            ...mailOptions,
            html: htmlContent
        });
        return next_response/* default */.Z.json({
            success: true,
            message: "Email sent successfully"
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Email sending error:", error);
        return next_response/* default */.Z.json({
            error: "Failed to send email"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Femail%2Froute&name=app%2Fapi%2Femail%2Froute&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=%2Fhome%2Fyalithtorres%2FGithub%2Fportfoliov2-app%2Fapp&appPaths=%2Fapi%2Femail%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

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
    resolvedPagePath: "/home/yalithtorres/Github/portfoliov2-app/app/api/email/route.js",
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
var __webpack_exports__ = __webpack_require__.X(0, [587,501,92], () => (__webpack_exec__(8854)));
module.exports = __webpack_exports__;

})();