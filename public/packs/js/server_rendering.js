(self["webpackChunkespresso_rails"] = self["webpackChunkespresso_rails"] || []).push([["server_rendering"],{

/***/ "./app/javascript/components sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./app/javascript/components/ sync ^\.\/.*$ ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./Hello": "./app/javascript/components/Hello.js",
	"./Hello.js": "./app/javascript/components/Hello.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/components sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./app/javascript/components/Hello.js":
/*!********************************************!*\
  !*** ./app/javascript/components/Hello.js ***!
  \********************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/elton/dev/espresso-rails/app/javascript/components/Hello.js: Support for the experimental syntax 'jsx' isn't currently enabled (8:5):\n\n   6 | const Hello = (props) => {\n   7 |   return (\n>  8 |     <React.Fragment>\n     |     ^\n   9 |       <Container maxWidth=\"sm\">\n  10 |         <Typography variant=\"h2\" component=\"h1\" align=\"center\">\n  11 |           Olá, {props.candidate}!\n\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\n\nIf you already added the plugin for this syntax to your config, it's possible that your config isn't being loaded.\nYou can re-run Babel with the BABEL_SHOW_CONFIG_FOR environment variable to show the loaded configuration:\n\tnpx cross-env BABEL_SHOW_CONFIG_FOR=/home/elton/dev/espresso-rails/app/javascript/components/Hello.js <your build command>\nSee https://babeljs.io/docs/configuration#print-effective-configs for more info.\n\n    at constructor (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:349:19)\n    at Parser.raise (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:3247:19)\n    at Parser.expectOnePlugin (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:3281:18)\n    at Parser.parseExprAtom (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10907:18)\n    at Parser.parseExprSubscripts (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10562:23)\n    at Parser.parseUpdate (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10547:21)\n    at Parser.parseMaybeUnary (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10527:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10381:61)\n    at Parser.parseExprOps (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10386:23)\n    at Parser.parseMaybeConditional (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10363:23)\n    at Parser.parseMaybeAssign (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10326:21)\n    at /home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10296:39\n    at Parser.allowInAnd (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:11911:12)\n    at Parser.parseMaybeAssignAllowIn (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10296:17)\n    at Parser.parseParenAndDistinguishExpression (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:11173:28)\n    at Parser.parseExprAtom (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10829:23)\n    at Parser.parseExprSubscripts (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10562:23)\n    at Parser.parseUpdate (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10547:21)\n    at Parser.parseMaybeUnary (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10527:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10381:61)\n    at Parser.parseExprOps (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10386:23)\n    at Parser.parseMaybeConditional (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10363:23)\n    at Parser.parseMaybeAssign (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10326:21)\n    at Parser.parseExpressionBase (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10280:23)\n    at /home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10276:39\n    at Parser.allowInAnd (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:11906:16)\n    at Parser.parseExpression (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10276:17)\n    at Parser.parseReturnStatement (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:12596:28)\n    at Parser.parseStatementContent (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:12248:21)\n    at Parser.parseStatementLike (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:12217:17)\n    at Parser.parseStatementListItem (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:12197:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:12770:61)\n    at Parser.parseBlockBody (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:12763:10)\n    at Parser.parseBlock (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:12751:10)\n    at Parser.parseFunctionBody (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:11596:24)\n    at Parser.parseArrowExpression (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:11571:10)\n    at Parser.parseParenAndDistinguishExpression (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:11185:12)\n    at Parser.parseExprAtom (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10829:23)\n    at Parser.parseExprSubscripts (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10562:23)\n    at Parser.parseUpdate (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10547:21)\n    at Parser.parseMaybeUnary (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10527:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10381:61)\n    at Parser.parseExprOps (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10386:23)\n    at Parser.parseMaybeConditional (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10363:23)\n    at Parser.parseMaybeAssign (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10326:21)\n    at /home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10296:39\n    at Parser.allowInAnd (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:11906:16)\n    at Parser.parseMaybeAssignAllowIn (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:10296:17)\n    at Parser.parseVar (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:12838:91)\n    at Parser.parseVarStatement (/home/elton/dev/espresso-rails/node_modules/@babel/parser/lib/index.js:12684:10)");

/***/ }),

/***/ "./app/javascript/packs/server_rendering.js":
/*!**************************************************!*\
  !*** ./app/javascript/packs/server_rendering.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// By default, this pack is loaded for server-side rendering.
// It must expose react_ujs as `ReactRailsUJS` and prepare a require context.
var componentRequireContext = __webpack_require__("./app/javascript/components sync recursive ^\\.\\/.*$");
var ReactRailsUJS = __webpack_require__(/*! react_ujs */ "./node_modules/react_ujs/react_ujs/index.js");
ReactRailsUJS.useContext(componentRequireContext);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react_ujs_react_ujs_index_js"], function() { return __webpack_exec__("./app/javascript/packs/server_rendering.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=server_rendering.js.map