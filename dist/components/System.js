"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFromRemote = exports.default = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _mem = _interopRequireDefault(require("mem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const loadComponent = (0, _mem.default)(async (scope, module) => {
  const factory = await window[scope].get(module);
  return factory;
});
const useDynamicScript = (0, _mem.default)(args => {
  return new Promise((resolve, reject) => {
    try {
      if (!args.url) {
        console.log("no url provided");
        reject();
      }

      const element = document.createElement("script");
      element.src = args.url;
      element.type = "text/javascript";
      element.async = true;
      document.head.appendChild(element);

      element.onload = () => {
        // console.log(`Dynamic Script Loaded: ${args.url}`);
        resolve();
      };

      element.onerror = () => {
        // console.error(`Dynamic Script Error: ${args.url}`);
        reject();
      };
    } catch (error) {
      console.log("error", error);
      reject(error);
    }
  });
});
const getFromRemote = (0, _mem.default)(async (_ref, module) => {
  let {
    system
  } = _ref;

  try {
    await useDynamicScript(system);
    const factory = await loadComponent(system.scope, system.module);
    return factory()[module];
  } catch (error) {
    console.log("error in getFromRemote", error);
  }
});
exports.getFromRemote = getFromRemote;

const System = /*#__PURE__*/_react.default.memo(props => {
  const ref = (0, _react.useRef)(null);
  const [error, setError] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    getTheMount(props);
  });

  const getTheMount = async () => {
    try {
      const m = await getFromRemote(props, "default");
      m(ref.current, _objectSpread({}, props));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }; // const Component = wrapComponent(() => <div ref={ref} />);


  return /*#__PURE__*/_react.default.createElement("div", null, error ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Error loading remote component"), /*#__PURE__*/_react.default.createElement("p", null, error), /*#__PURE__*/_react.default.createElement("p", null, "Check console for more information")) : /*#__PURE__*/_react.default.createElement("div", {
    ref: ref
  }, "Loading"));
});

var _default = System;
exports.default = _default;