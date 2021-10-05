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

var _solidClientAuthnBrowser = require("@inrupt/solid-client-authn-browser");

var _uuid = require("uuid");

var _ProjectCard = _interopRequireDefault(require("./ProjectCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = _ref => {
  let {
    trigger,
    projects,
    setProjects,
    store,
    setTrigger
  } = _ref;
  const [aggregator, setAggregator] = (0, _react.useState)("https://pod.lbdserver.org/jeroen/lbd/");
  const [data, setData] = (0, _react.useState)([]);
  const [myProjects, setMyProjects] = (0, _react.useState)([]); // trigger rerender on trigger (i.e. if session changes)

  (0, _react.useEffect)(() => {}, [trigger]);

  async function fetchAggregator(agg, setter) {
    const projects = await (0, _consolid.getProjectsFromAggregator)(agg, (0, _solidClientAuthnBrowser.getDefaultSession)());
    console.log("projects", projects);
    setter(projects);
  }

  async function getMyProjects() {
    const myLbdLocation = await (0, _consolid.getLBDlocation)((0, _solidClientAuthnBrowser.getDefaultSession)().info.webId, (0, _solidClientAuthnBrowser.getDefaultSession)());
    await fetchAggregator(myLbdLocation, setMyProjects);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Container, {
    component: "main"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "Projects can be found via aggregators, which basically contain pointers to existing projects. Aggregators are basically LDP (Linked Data Platform) containers. If you have a dedicated LBDserver project folder configured in your Solid Pod: that is an aggregator. Other aggregators could group projects based on location, typology etc."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "Activate a project from a public aggregator:"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.TextField, {
    id: "aggregatorField",
    label: "aggregator",
    fullWidth: true,
    variant: "outlined",
    value: aggregator,
    onChange: e => setAggregator(e.target.value)
  }), /*#__PURE__*/_react.default.createElement(_core.Button, {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    onClick: async () => {
      await fetchAggregator(aggregator, setData);
    },
    style: {
      marginTop: 20
    }
  }, "GET PROJECTS"), data.map(item => {
    return /*#__PURE__*/_react.default.createElement(_ProjectCard.default, {
      key: item,
      project: item,
      projects: projects,
      store: store,
      setProjects: setProjects,
      setTrigger: setTrigger
    });
  })));
};

exports.default = _default;