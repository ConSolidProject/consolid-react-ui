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
  }, "As you know by now, LBDserver projects are federated aggregations of heterogeneous datasets. Such datasets can be either RDF-based or non-RDF. RDF datasets can be easily connected on a sub-document level, as they natively rely on URIs as resource identifiers. Other datasets require some more work to lift internal identifiers to a \"higher\" context. To do this, we roughly depart from a federated version of the ICDD specification (ISO 21597), using \"Linkelements\" that connect identifiers and their corresponding documents to abstract representations of a certain concept (\"artefacts\"). The more documents connect their representations of an object to this \"artefact\", the richer it becomes semantically. Individual stakeholders can indicate equality between their local artefacts and those of other stakeholders using an owl:sameAs pointer, effectively declaring aliases that allow to query the federated project while still maintaining a local \"artefact registry\"."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "When something is selected in an LBDserver module, a selectionset is made including the \"original\" artefact and its aliases in the project. This selection set is shared with other modules in the configuration, which can then use it to identify which linkelements (documents and identifiers) are relevant to them to display. For example, a glTF viewer module will only be interested in those link elements associated with a document with mime type \"model/gltf+json\".")));
};

exports.default = _default;