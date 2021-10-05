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
  }, "To boost reuse of modules and integrate tools from various front-end frameworks (React, Angular, Vue, ...), we make use of ", /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    href: "https://webpack.js.org/concepts/module-federation/"
  }, "Webpack 5's Module Federation"), " feature. This allows remote modules (\"micro-front-ends\") to function both as standalone apps and be bundled in a container application to address larger use cases. The container application is responsible for the exchange of important information, such as the active project, selected (document) resources or selected \"artefacts\". An important aspect of the LBDserver is to enable third party developers, researchers, students etc. to easily bootstrap their own plugins and wire them together with existing ones. You may find a template for your own (React) plugin at ", /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    href: "https://github.com/ConSolidProject/pluginTemplate"
  }, "https://github.com/ConSolidProject/pluginTemplate"), ", as well as information on how to get started with developing your own plugin. To make full use of the LBDserver backend framework as well, it is important to know the ", /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    href: "https://lbdserver.org/wiki/backend"
  }, "peculiarities of LBDserver data storage and -linking"), "."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "Below, you can see the configuration that is loaded by default. You may test the configuration options by fetching another configuration via its URL. For example, one that is stored on an office pod, or by a specialised service that has configurations for specific use cases ... In this container, configurations are \"hot-loaded\", which means they can be changed in real-time during your browser session."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.TextField, {
    id: "remoteConfig",
    label: "Remote config",
    fullWidth: true,
    variant: "outlined",
    value: remoteConfigUrl,
    onChange: e => setRemoteConfigUrl(e.target.value)
  }), " ", /*#__PURE__*/_react.default.createElement(_core.Button, {
    style: {
      marginTop: 20,
      marginBottom: 15
    },
    variant: "contained",
    fullWidth: true,
    color: "primary",
    onClick: fetchRemoteConfig
  }, "FETCH"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "Current configuration:"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactJsonEditorViewer.JSONViewer, {
    data: data,
    collapsible: true,
    styles: styles
  }))));
};

exports.default = _default;
const styles = {
  dualView: {
    display: "flex"
  },
  jsonViewer: {
    borderLeft: "1px dashed white",
    lineHeight: 1.25,
    width: "50%",
    borderLeft: "1px solid lightgrey",
    margin: 10
  },
  jsonEditor: {
    width: "50%",
    fontSize: 12,
    fontFamily: "Lucida Console, monospace",
    lineHeight: 1.25
  },
  root: {
    fontSize: 12,
    fontFamily: "Lucida Console, monospace",
    lineHeight: 1,
    backgroundColor: "Bisque",
    borderRadius: "10px",
    padding: 10 //   border: 2px solid #73AD21;

  },
  label: {
    color: "DeepPink",
    marginTop: 3
  },
  value: {
    marginLeft: 10
  },
  row: {
    display: "flex"
  },
  withChildrenLabel: {
    color: "DeepPink"
  },
  select: {
    borderRadius: 3,
    borderColor: "grey",
    backgroundColor: "DimGray",
    color: "khaki"
  },
  input: {
    borderRadius: 3,
    border: "1px solid #272822",
    padding: 2,
    fontFamily: "Lucida Console, monospace",
    fontSize: 12,
    backgroundColor: "gray",
    color: "khaki",
    width: "200%"
  },
  addButton: {
    cursor: "pointer",
    color: "LightGreen",
    marginLeft: 15,
    fontSize: 12
  },
  removeButton: {
    cursor: "pointer",
    color: "magenta",
    marginLeft: 15,
    fontSize: 12
  },
  saveButton: {
    cursor: "pointer",
    color: "green",
    marginLeft: 15,
    fontSize: 12
  },
  builtin: {
    color: "green",
    fontSize: 12
  },
  text: {
    color: "black",
    fontSize: 12
  },
  number: {
    color: "purple",
    fontSize: 12
  },
  property: {
    color: "DeepPink",
    fontSize: 12
  },
  collapseIcon: {
    cursor: "pointer",
    fontSize: 10,
    color: "teal"
  }
};