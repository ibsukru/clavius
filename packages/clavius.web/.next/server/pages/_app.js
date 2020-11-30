module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "HaU7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("IGGJ");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "IGGJ":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Khd+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HaU7")


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: /Users/iliyan/Documents/work/clavius/node_modules/next/app.js
var app = __webpack_require__("Khd+");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./styles/html.styles.ts
// https://github.com/zeit/styled-jsx#global-styles
const _defaultExport = [":root{--foreground:#000;--background:#fff;--accent-0:#dd2f2f;--accent-1:#f5a623;--accent-2:#97f646;--accent-3:#79c638;--accent-4:#58aa11;--accent-5:#4697f6;--accent-6:#197ef4;--accent-7:#f832e7;--accent-8:#863dcf;--shade-1:#fafafa;--shade-2:#eaeaea;--shade-3:#999;--shade-4:#888;--shade-5:#666;--shade-6:#444;--shade-7:#333;--shade-8:#111;--selection:var(--accent-2);--link-color:var(--accent-6);--secondary-light:var(--shade-3);--secondary:var(--shade-5);--secondary-dark:var(--shade-7);--shadow:0 5px 10px rgba(0,0,0,0.12);--portal-opacity:0.25;}", "html.dark{--foreground:#fff;--background:#000;--shade-8:#fafafa;--shade-7:#eaeaea;--shade-6:#999;--shade-5:#888;--shade-4:#666;--shade-3:#444;--shade-2:#333;--shade-1:#111;--selection:var(--accent-7);}", ":root{--breakpoint-mobile:600px;--breakpoint-tablet:960px;--radius:10px;--font-sans:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;--font-mono:'Roboto Mono',Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}", "html,body{background-color:var(--background);}", "body{color:var(--foreground);font-family:var(--font-mono);text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;height:100vh;}", "pre,code{font-family:var(--font-mono);}", "a{position:relative;-webkit-text-decoration:none;text-decoration:none;color:var(--link-color);}", "button,.clickable{position:relative;}", ".small{font-size:0.875rem;}", ".smaller{font-size:0.775rem;}", ".smallest{font-size:0.675rem;}", ".invert{background-color:var(--foreground);color:var(--background);}", "button:active,a:active,.clickable:active{top:1.2px;}", "::selection{background:var(--selection);}", "::-moz-selection{background:var(--selection);}"];
_defaultExport.__hash = "1210855732";
/* harmony default export */ var html_styles = (_defaultExport);
// CONCATENATED MODULE: ./styles/nprogress.styles.ts
const nprogress_styles_defaultExport = ["#nprogress{pointer-events:none;}", "#nprogress .bar{background:var(--link-color);position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}", "#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px var(--link-color);opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}", "#nprogress .spinner{display:block;position:fixed;z-index:1031;top:7px;right:5px;}", "#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:var(--link-color);border-left-color:var(--link-color);border-radius:50%;-webkit-animation:nprogress-spinner 550ms linear infinite;animation:nprogress-spinner 550ms linear infinite;}", ".nprogress-custom-parent{overflow:hidden;position:relative;}", ".nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"];
nprogress_styles_defaultExport.__hash = "121331917";
/* harmony default export */ var nprogress_styles = (nprogress_styles_defaultExport);
// CONCATENATED MODULE: ./styles/reset.styles.ts
const reset_styles_defaultExport = ["*,*::before,*::after{box-sizing:border-box;}", "ul[class],ol[class]{padding:0;}", "body,h1,h2,h3,h4,p,ul[class],ol[class],figure,blockquote,dl,dd{margin:0;}", "body{min-height:100vh;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;text-rendering:optimizeSpeed;line-height:1.5;}", "ul[class],ol[class]{list-style:none;}", "a:not([class]){-webkit-text-decoration-skip-ink:auto;text-decoration-skip-ink:auto;}", "img{max-width:100%;display:block;}", "article>*+*{margin-top:1em;}", "input,button,textarea,select{font:inherit;}", "img:not([alt]){-webkit-filter:blur(10px);filter:blur(10px);}", "@media (prefers-reduced-motion:reduce){*{-webkit-animation-duration:0.01ms !important;animation-duration:0.01ms !important;-webkit-animation-iteration-count:1 !important;animation-iteration-count:1 !important;-webkit-transition-duration:0.01ms !important;transition-duration:0.01ms !important;-webkit-scroll-behavior:auto !important;-moz-scroll-behavior:auto !important;-ms-scroll-behavior:auto !important;scroll-behavior:auto !important;}}"];
reset_styles_defaultExport.__hash = "1600111791";
/* harmony default export */ var reset_styles = (reset_styles_defaultExport);
// CONCATENATED MODULE: ./styles/index.ts




// CONCATENATED MODULE: ./hooks/useCookie/useCookie.ts



const useCookie = (key, initialValue) => {
  const {
    0: item,
    1: setInnerValue
  } = Object(external_react_["useState"])(() => {
    return external_js_cookie_default.a.get(key) || initialValue;
  });

  const setValue = (value, options) => {
    setInnerValue(value);
    external_js_cookie_default.a.set(key, value, options);
  };

  return [item, setValue];
};

/* harmony default export */ var useCookie_useCookie = (useCookie);
// CONCATENATED MODULE: ./hooks/useCookie/index.ts

/* harmony default export */ var hooks_useCookie = (useCookie_useCookie);
// CONCATENATED MODULE: ./contexts/index.ts


// CONCATENATED MODULE: ./hooks/useThemeContext/useThemeContext.tsx



const useThemeContext = () => {
  return Object(external_react_["useContext"])(ThemeContext);
};

/* harmony default export */ var useThemeContext_useThemeContext = (useThemeContext);
// CONCATENATED MODULE: ./hooks/useThemeContext/index.ts

/* harmony default export */ var hooks_useThemeContext = (useThemeContext_useThemeContext);
// CONCATENATED MODULE: ./hooks/index.ts



// CONCATENATED MODULE: ./contexts/themeContext/themeContext.tsx




const ThemeContext = /*#__PURE__*/Object(external_react_["createContext"])({
  theme: 'dark',
  setTheme: () => undefined,
  toggleTheme: () => undefined
});
const ThemeContextProvider = ({
  children,
  theme: initialTheme
}) => {
  const [themeCookie, setThemeCookie] = hooks_useCookie('theme', initialTheme);
  const theme = themeCookie;

  const updateHtml = newTheme => {
    var _document$getElements;

    const html = (_document$getElements = document.getElementsByTagName('html')) === null || _document$getElements === void 0 ? void 0 : _document$getElements[0];
    if (!html) return;
    const htmlClasses = html.classList;
    htmlClasses.add(newTheme);
  };

  const setTheme = newTheme => {
    updateHtml(newTheme);
    setThemeCookie(newTheme);
  };

  const toggleTheme = () => {
    const toggled = otherTheme(theme);
    console.log(`toggleTheme -> toggled`, toggled);
    setTheme(toggled);
    return toggled;
  };

  const value = {
    theme,
    setTheme,
    toggleTheme
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ThemeContext.Provider, {
    value: value,
    children: children
  });
};
// CONCATENATED MODULE: ./contexts/themeContext/index.ts

const otherTheme = theme => theme === 'dark' ? 'light' : 'dark';

// CONCATENATED MODULE: ./pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class _app_MyApp extends app_default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    const theme = external_js_cookie_default.a.get('theme') || 'dark';
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
        id: reset_styles.__hash,
        children: reset_styles
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
        id: html_styles.__hash,
        children: html_styles
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
        id: nprogress_styles.__hash,
        children: nprogress_styles
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ThemeContextProvider, {
        theme: theme,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
      })]
    });
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ })

/******/ });