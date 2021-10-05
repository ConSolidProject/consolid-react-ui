"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _consolid = require("consolid");

var _core = require("@material-ui/core");

var _solidClientAuthnBrowser = require("@inrupt/solid-client-authn-browser");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = _ref => {
  let {
    project,
    projects,
    setProjects,
    store,
    setTrigger
  } = _ref;

  async function activateProject() {
    if (projects.includes(project)) {
      setProjects(proj => proj.filter(p => {
        return p != project;
      }));
      setTrigger(t => t + 1);
    } else {
      setProjects(proj => [...proj, project]);
      await (0, _consolid.loadProjectMetadata)(project, store, (0, _solidClientAuthnBrowser.getDefaultSession)());
      console.log("done");
      setTrigger(t => t + 1);
    }
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Card, {
    style: {
      marginTop: 5,
      marginBottom: 5
    },
    variant: "outlined"
  }, /*#__PURE__*/_react.default.createElement(_core.CardContent, null, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "p"
  }, project), /*#__PURE__*/_react.default.createElement(_core.FormGroup, null, /*#__PURE__*/_react.default.createElement(_core.FormControlLabel, {
    control: /*#__PURE__*/_react.default.createElement(_core.Switch, {
      color: "primary",
      checked: projects.includes(project),
      onChange: e => activateProject()
    }),
    label: "Active"
  })))));
};

exports.default = _default;