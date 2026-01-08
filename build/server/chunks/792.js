exports.id = 792;
exports.ids = [792];
exports.modules = {

/***/ 49395:
/***/ (() => {



/***/ }),

/***/ 35159:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 51921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70697);
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__);



const metadata = {
    title: "YTorres | Portfolio",
    description: "Yalith Torres - Web Developer. Discover my projects and get in touch with me. Expert in web development and creative design.",
    author: "Yalith Torres",
    keywords: "web developer, developer, web design, dise\xf1o web, desarrollo web, front-end, back-end, full-stack, web development, desarrollo web, dise\xf1o web, dise\xf1o creativo, portfolio, projects, contact, yalith torres",
    ogTitle: "YTorres | Portfolio",
    ogDescription: "Yalith Torres - Web Developer. Discover my projects and get in touch with me. Expert in web development and creative design.",
    ogType: "website",
    ogSiteName: "YTorres | Portfolio",
    ogLocale: "en_US",
    verification: {
        google: "-mBNwJzxyEqLfhmDxt71BFH52AzLjxh_yz31AxKVDuI"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: "bg-[#FAF0E4] leading-6",
            children: children
        })
    });
}


/***/ }),

/***/ 83718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ ProjectController)
});

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
var dist = __webpack_require__(96798);
// EXTERNAL MODULE: ./node_modules/firebase/compat/firestore/dist/index.mjs + 3 modules
var firestore_dist = __webpack_require__(90892);
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


/***/ }),

/***/ 9674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ getProjectsCached)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62947);
/* harmony import */ var _controllers_getProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83718);


const getProjectsCached = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)(async ()=>{
    const { getAllProjects } = (0,_controllers_getProject__WEBPACK_IMPORTED_MODULE_1__/* .ProjectController */ .L)();
    return getAllProjects();
});


/***/ }),

/***/ 5395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ IconGithub)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function IconGithub(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 1024 1024",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Github"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
            })
        ]
    });
}


/***/ }),

/***/ 11222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ AppLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function AppLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "w-[1300px] max-[1440px]:w-[90%] mx-auto border-x border-black",
        children: children
    });
}


/***/ }),

/***/ 65191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "py-5 flex gap-2 justify-center border-t border-black",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Made with Next.js ♥"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                children: [
                    "2023 - ",
                    currentYear
                ]
            })
        ]
    });
}


/***/ }),

/***/ 29756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./assets/icons/logo.tsx

function Logo(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 342.78 337.29",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "YTorres"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M81.2 179.79v-72.77l-66.21-99h27.65L76.5 59.79q9.38 14.53 17.46 29.07 7.74-13.49 18.75-30.35L145.99 8h26.49l-68.56 99v72.79ZM250.85 329.28V179.79h-59.71v-22.3h143.64v22.3h-60v149.49Z"
            })
        ]
    });
}

// EXTERNAL MODULE: ./presentation/components/SocialLinks.tsx + 2 modules
var SocialLinks = __webpack_require__(14918);
;// CONCATENATED MODULE: ./presentation/components/Header.tsx




function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "flex items-center justify-between p-2 px-5 border-b border-black",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                "aria-label": "Home",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                    className: "h-12",
                    fill: "#F6AA19",
                    stroke: "#F6AA19",
                    strokeMiterlimit: "10",
                    strokeWidth: "16"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialLinks/* SocialLinks */.W, {})
        ]
    });
}


/***/ }),

/***/ 14918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ SocialLinks)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./assets/icons/github.tsx
var github = __webpack_require__(5395);
;// CONCATENATED MODULE: ./assets/icons/linkedin.tsx

function IconLinkedinCircled(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 960 1000",
        fill: "currentColor",
        height: "1em",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Linkedin"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./presentation/config/SocialLinks.ts


const SOCIAL_LINKS = [
    {
        icon: IconLinkedinCircled,
        link: "https://www.linkedin.com/in/yalith-torres/"
    },
    {
        icon: github/* IconGithub */.U,
        link: "https://github.com/YTorresL"
    }
];

;// CONCATENATED MODULE: ./presentation/components/SocialLinks.tsx



function SocialLinks({ color = "000" } = {}) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex space-x-4",
        children: SOCIAL_LINKS.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: item.link,
                target: "_blank",
                children: /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                    className: `h-8 w-8 text-[#${color}]`
                })
            }, index + item.link))
    });
}


/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"256x256"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;