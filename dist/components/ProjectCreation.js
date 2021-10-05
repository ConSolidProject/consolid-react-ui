"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireWildcard(require("react"));

var _consolid = require("consolid");

var _core = require("@material-ui/core");

var _solidClientAuthnBrowser = require("@inrupt/solid-client-authn-browser");

var _uuid = require("uuid");

var _AddCircleOutline = _interopRequireDefault(require("@material-ui/icons/AddCircleOutline"));

var _ProjectCard = _interopRequireDefault(require("./ProjectCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = _ref => {
  let {
    store,
    projects,
    setProjects,
    trigger,
    setTrigger
  } = _ref;
  const [aggregator, setAggregator] = (0, _react.useState)("http://localhost:5000/jeroen/lbd/");
  const [myProjects, setMyProjects] = (0, _react.useState)([]);
  const [stakeholders, setStakeholders] = (0, _react.useState)("https://pod.lbdserver.org/pieter/profile/card#me; https://pod.lbdserver.org/jakob/profile/card#me");
  const [invites, setInvites] = (0, _react.useState)([]); // trigger rerender on trigger (i.e. if session changes)

  (0, _react.useEffect)(() => {}, [trigger]); // useEffect(() => checkInvites(session).then((e) => setInvites(e)), []);

  async function fetchAggregator(agg, setter) {
    const projects = await (0, _consolid.getProjectsFromAggregator)(agg, (0, _solidClientAuthnBrowser.getDefaultSession)());
    console.log("projects", projects);
    setter(projects);
  }

  async function onProjectCreate() {
    const st = stakeholders.split(";").map(el => {
      return el.replace(/\s+/g, '');
    });
    st.push((0, _solidClientAuthnBrowser.getDefaultSession)().info.webId);
    await (0, _consolid.createProject)((0, _uuid.v4)(), st, (0, _solidClientAuthnBrowser.getDefaultSession)());
    await getMyProjects();
  }

  async function getMyProjects() {
    const myLbdLocation = await (0, _consolid.getLBDlocation)((0, _solidClientAuthnBrowser.getDefaultSession)().info.webId, (0, _solidClientAuthnBrowser.getDefaultSession)());
    await fetchAggregator(myLbdLocation, setMyProjects);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Container, {
    component: "main"
  }, (0, _solidClientAuthnBrowser.getDefaultSession)().info.isLoggedIn ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "Your projects are saved in a subdirectory of your POD \"/lbd/\" (Linked Building Data). If you already host some projects, you can activate them here."), /*#__PURE__*/_react.default.createElement(_core.Button, {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    onClick: async () => getMyProjects(),
    style: {
      marginTop: 5,
      marginBottom: 5
    }
  }, "Get my projects"), myProjects.map(item => {
    return /*#__PURE__*/_react.default.createElement(_ProjectCard.default, {
      key: item,
      project: item,
      projects: projects,
      setProjects: setProjects,
      store: store,
      setTrigger: setTrigger
    });
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "Otherwise, you may create a project. If you want to invite others to your project, you may add their webIds below.", " "), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.TextField, {
    id: "standard-multiline-flexible",
    label: "Stakeholders (separate by ';')",
    multiline: true,
    fullWidth: true,
    rowsMax: 10,
    value: stakeholders.toString(),
    onChange: e => setStakeholders(e.target.value),
    style: {
      marginTop: 10,
      marginBottom: 10
    }
  }), " ", /*#__PURE__*/_react.default.createElement(_core.Button, {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    onClick: () => onProjectCreate()
  }, "Create new project")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "Or join a project for which you were invited for collaboration:"), invites ? /*#__PURE__*/_react.default.createElement("div", null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement("br", null))) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "Register/Log in to create your own project."))));
};

exports.default = _default;