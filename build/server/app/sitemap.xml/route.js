"use strict";
(() => {
var exports = {};
exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

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

/***/ 85158:
/***/ ((module) => {

module.exports = require("http2");

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

/***/ 11028:
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

// NAMESPACE OBJECT: ./app/sitemap.ts
var sitemap_namespaceObject = {};
__webpack_require__.r(sitemap_namespaceObject);
__webpack_require__.d(sitemap_namespaceObject, {
  "default": () => (sitemap)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&isDynamic=1!./app/sitemap.ts?__next_metadata_route__
var sitemap_next_metadata_route_namespaceObject = {};
__webpack_require__.r(sitemap_next_metadata_route_namespaceObject);
__webpack_require__.d(sitemap_next_metadata_route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(20514);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./domain/useCases/createPaginateProjects.ts
function createPaginateProjectsUseCase() {
    return function(projects, page, pageSize) {
        const startIndex = 0;
        const endIndex = page * pageSize;
        return {
            paginatedProjects: projects.slice(startIndex, endIndex),
            totalProjects: projects.length,
            hasMore: endIndex < projects.length
        };
    };
}

;// CONCATENATED MODULE: ./domain/useCases/getAllProjects.ts
function GetAllProjectsUseCase(projectRepository) {
    return async function() {
        return await projectRepository.getAllProjects();
    };
}

;// CONCATENATED MODULE: ./domain/entities/Project.ts
function hasLanguage(project, language) {
    return project.technologies.includes(language);
}

;// CONCATENATED MODULE: ./domain/useCases/getFilterProjects.ts

function GetFilterProjectsUseCase() {
    return function(projects, technology) {
        return projects.filter((project)=>hasLanguage(project, technology) || technology === "all");
    };
}

;// CONCATENATED MODULE: ./domain/useCases/getProjectById.ts
function GetProjectByIdUseCase() {
    return function(projects, id) {
        return projects.find((project)=>project.id === id) || null;
    };
}

// EXTERNAL MODULE: ./node_modules/firebase/compat/app/dist/index.mjs
var dist = __webpack_require__(68515);
// EXTERNAL MODULE: ./node_modules/firebase/compat/firestore/dist/index.mjs + 3 modules
var firestore_dist = __webpack_require__(81132);
;// CONCATENATED MODULE: ./infrastructure/services/firebase/client.ts


const firebaseConfig = {
    apiKey: process.env.FIREBASE_CLIENT_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
dist/* default */.Z.initializeApp(firebaseConfig);
const db = dist/* default */.Z.firestore();

;// CONCATENATED MODULE: ./infrastructure/services/firebase/config.ts
const FIREBASE_COLLECTIONS = {
    PROJECTS: "projects"
};

;// CONCATENATED MODULE: ./infrastructure/repositories/FirebaseProject.ts


function ProjectRepository() {
    return {
        getAllProjects: async ()=>{
            return db.collection(FIREBASE_COLLECTIONS.PROJECTS).orderBy("createdAt", "desc").get().then((snapshot)=>{
                return snapshot.docs.map((doc)=>{
                    const id = doc.id;
                    const data = doc.data();
                    const createdAt = data.createdAt && typeof data.createdAt === "object" && data.createdAt.seconds ? new Date(data.createdAt.seconds * 1000 + data.createdAt.nanoseconds / 1000000).toISOString() : data.createdAt || null;
                    return JSON.parse(JSON.stringify({
                        id,
                        createdAt,
                        images: data.images || [],
                        type: data.type || "",
                        description: data.description || "",
                        languages: data.languages || [],
                        title: data.title || "",
                        technologies: data.technologies || [],
                        links: data.links || [],
                        content: data.content || [],
                        state: data.state || ""
                    }));
                });
            });
        }
    };
}

;// CONCATENATED MODULE: ./application/controllers/getProject.ts





function ProjectController() {
    const projectRepository = ProjectRepository();
    return {
        async getAllProjects () {
            return await GetAllProjectsUseCase(projectRepository)();
        },
        getFilterProjects (projects, technology, page, pageSize) {
            const filteredProjects = GetFilterProjectsUseCase()(projects, technology);
            return createPaginateProjectsUseCase()(filteredProjects, page, pageSize);
        },
        getProjectById (projects, id) {
            return GetProjectByIdUseCase()(projects, id);
        }
    };
}

;// CONCATENATED MODULE: ./application/loaders/getProjectsCached.ts


const getProjectsCached = (0,external_react_.cache)(async ()=>{
    const { getAllProjects } = ProjectController();
    return getAllProjects();
});

;// CONCATENATED MODULE: ./app/sitemap.ts

async function sitemap() {
    const siteUrl = "https://portfoliov2-app.vercel.app" ?? 0;
    const projects = await getProjectsCached();
    const projectUrls = projects.map((project)=>({
            url: `${siteUrl}/projects/${project.id}`,
            lastModified: new Date(project.createdAt ?? Date.now()),
            changeFrequency: "monthly",
            priority: 0.8
        }));
    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1
        },
        {
            url: `${siteUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
        ...projectUrls
    ];
}

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js
var resolve_route_data = __webpack_require__(54031);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&isDynamic=1!./app/sitemap.ts?__next_metadata_route__




const sitemapModule = { ...sitemap_namespaceObject }
const handler = sitemapModule.default
const generateSitemaps = sitemapModule.generateSitemaps
const contentType = "application/xml"
const fileType = "sitemap"

async function GET(_, ctx) {
  const { __metadata_id__ = [], ...params } = ctx.params || {}
  const targetId = __metadata_id__[0]
  let id = undefined
  const sitemaps = generateSitemaps ? await generateSitemaps() : null

  if (sitemaps) {
    id = sitemaps.find((item) => {
      if (false) {}
      return item.id.toString() === targetId
    })?.id
    if (id == null) {
      return new server.NextResponse('Not Found', {
        status: 404,
      })
    }
  }

  const data = await handler({ id })
  const content = (0,resolve_route_data.resolveRouteData)(data, fileType)

  return new server.NextResponse(content, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}



;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fsitemap.xml%2Froute&name=app%2Fsitemap.xml%2Froute&pagePath=private-next-app-dir%2Fsitemap.ts&appDir=%2Fhome%2Fyalithtorres%2FGithub%2Fportfoliov2-app%2Fapp&appPaths=%2Fsitemap&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/sitemap.xml/route",
        pathname: "/sitemap.xml",
        filename: "sitemap",
        bundlePath: "app/sitemap.xml/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Fsitemap.xml%2Froute&isDynamic=1!/home/yalithtorres/Github/portfoliov2-app/app/sitemap.ts?__next_metadata_route__",
    nextConfigOutput,
    userland: sitemap_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/sitemap.xml/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,514,31,661], () => (__webpack_exec__(11028)));
module.exports = __webpack_exports__;

})();