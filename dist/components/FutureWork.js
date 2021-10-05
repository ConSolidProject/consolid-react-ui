"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _consolid = require("consolid");

var _core = require("@material-ui/core");

var _reactJsonEditorViewer = require("react-json-editor-viewer");

var _solidClientAuthnBrowser = require("@inrupt/solid-client-authn-browser");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = _ref => {
  let {
    config,
    setConfig,
    trigger,
    setTrigger
  } = _ref;
  const [data, setData] = (0, _react.useState)(config);
  const [remoteConfigUrl, setRemoteConfigUrl] = (0, _react.useState)("http://localhost:5000/jeroen/public/remoteConfig1.json"); // function onConfigChange(key, value, parent, data) {
  //     console.log(`key`, key)
  //     console.log(`value`, value)
  //     console.log(`parent`, parent)
  //     console.log(`data`, data)
  //     let newConfig
  //     if (data.root) {
  //         newConfig = data.root
  //     } else {
  //         newConfig = data
  //     }
  //     setConfig(newConfig)
  //     setData(newConfig)
  // }

  async function fetchRemoteConfig(e) {
    e.preventDefault();
    const s = (0, _solidClientAuthnBrowser.getDefaultSession)();
    const conf = await s.fetch(remoteConfigUrl);
    const newConf = await conf.json();
    setData(() => newConf);
    setConfig(() => newConf);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Container, {
    component: "main"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "As this is just a demo app, there is still a whole lot of work to do here. Just some ideas you might want to collaborate in:"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Create new/better plugins for visualisation, checking, querying etc."), /*#__PURE__*/_react.default.createElement("li", null, "Develop a template for plugins built using Angular, Vue or another front-end framework "), /*#__PURE__*/_react.default.createElement("li", null, "A plugin store / configuration builder"), /*#__PURE__*/_react.default.createElement("li", null, "Develop backend services to automate and streamline information exchange."), /*#__PURE__*/_react.default.createElement("li", null, "...")), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "If you're interested, please contact me at jeroen.werbrouck [ at ] ugent.be")));
};

exports.default = _default;