"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _ChevronLeft = _interopRequireDefault(require("@material-ui/icons/ChevronLeft"));

var _ProjectCreation = _interopRequireDefault(require("./ProjectCreation"));

var _SignIn = _interopRequireDefault(require("./SignIn"));

var _Aggregator = _interopRequireDefault(require("./Aggregator"));

var _ModuleFederation = _interopRequireDefault(require("./ModuleFederation"));

var _FutureWork = _interopRequireDefault(require("./FutureWork"));

var _DataHandling = _interopRequireDefault(require("./DataHandling"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = props => {
  const {
    openOptions,
    setOpenOptions,
    trigger,
    setTrigger,
    setProjects,
    projects,
    store,
    config,
    setConfig,
    drawerWidth
  } = props;
  const [authOpened, setAuthOpened] = (0, _react.useState)(true);
  const [aggregatorOpened, setAggregatorOpened] = (0, _react.useState)(false);
  const [myProjectsOpened, setMyProjectsOpened] = (0, _react.useState)(false);
  const [configOpened, setConfigOpened] = (0, _react.useState)(false);
  const [futureWorkOpened, setFutureWorkOpened] = (0, _react.useState)(false);
  const [datahandlingOpened, setDatahandlingOpened] = (0, _react.useState)(false);
  const useStyles = (0, _core.makeStyles)({
    paper: {
      width: drawerWidth,
      backgroundColor: "bisque"
    }
  });
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Drawer, {
    anchor: "right",
    open: openOptions,
    onClose: () => setOpenOptions(!openOptions),
    classes: {
      paper: classes.paper
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h6"
  }, "Welcome to the LBDserver plugin demo"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "The LBDserver project is an ongoing research project that studies the organisation of heterogeneous, federated AECO projects. It proposes a data structure for connecting project-specific and contextual data on the Web, and provides the infrastructure for creating a \"shopping cart\" of GUI plugins for interacting with this data. These plugins can be used standalone as well as be configured alongside with other plugins to enable more fluent visualisation, querying and checking of the project."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "This application illustrates the main concepts of the LBDserver. It is a rough prototype and only serves demonstration purposes."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body1"
  }, "You can visit", " ", /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    href: "https://lbdserver.org"
  }, "https://lbdserver.org"), " ", "for more information. When citing this research, please refer to one of the following papers: [...]")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Accordion, {
    style: accStyle,
    expanded: authOpened,
    onChange: () => setAuthOpened(!authOpened)
  }, /*#__PURE__*/_react.default.createElement(_core.AccordionSummary, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, null, "AUTHENTICATION")), /*#__PURE__*/_react.default.createElement(_core.AccordionDetails, null, /*#__PURE__*/_react.default.createElement(_SignIn.default, {
    trigger: trigger,
    setTrigger: setTrigger
  })))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Accordion, {
    style: accStyle,
    expanded: aggregatorOpened,
    onChange: () => setAggregatorOpened(!aggregatorOpened)
  }, /*#__PURE__*/_react.default.createElement(_core.AccordionSummary, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, null, "DEMO PROJECTS")), /*#__PURE__*/_react.default.createElement(_core.AccordionDetails, null, /*#__PURE__*/_react.default.createElement(_Aggregator.default, {
    trigger: trigger,
    projects: projects,
    setProjects: setProjects,
    store: store,
    setTrigger: setTrigger
  })))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Accordion, {
    style: accStyle,
    expanded: myProjectsOpened,
    onChange: () => setMyProjectsOpened(!myProjectsOpened)
  }, /*#__PURE__*/_react.default.createElement(_core.AccordionSummary, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, null, "MY PROJECTS")), /*#__PURE__*/_react.default.createElement(_core.AccordionDetails, null, /*#__PURE__*/_react.default.createElement(_ProjectCreation.default, {
    trigger: trigger,
    projects: projects,
    setProjects: setProjects,
    store: store,
    setTrigger: setTrigger
  })))), config ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Accordion, {
    style: accStyle,
    expanded: configOpened,
    onChange: () => setConfigOpened(!configOpened)
  }, /*#__PURE__*/_react.default.createElement(_core.AccordionSummary, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, null, "MODULE FEDERATION")), /*#__PURE__*/_react.default.createElement(_core.AccordionDetails, null, /*#__PURE__*/_react.default.createElement(_ModuleFederation.default, {
    trigger: trigger,
    config: config,
    setConfig: setConfig,
    setTrigger: setTrigger
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Accordion, {
    style: accStyle,
    expanded: datahandlingOpened,
    onChange: () => setDatahandlingOpened(!datahandlingOpened)
  }, /*#__PURE__*/_react.default.createElement(_core.AccordionSummary, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, null, "DATA HANDLING")), /*#__PURE__*/_react.default.createElement(_core.AccordionDetails, null, /*#__PURE__*/_react.default.createElement(_DataHandling.default, null)))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Accordion, {
    style: accStyle,
    expanded: futureWorkOpened,
    onChange: () => setFutureWorkOpened(!futureWorkOpened)
  }, /*#__PURE__*/_react.default.createElement(_core.AccordionSummary, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, null, "FUTURE WORK")), /*#__PURE__*/_react.default.createElement(_core.AccordionDetails, null, /*#__PURE__*/_react.default.createElement(_FutureWork.default, null)))))));
};

exports.default = _default;
const accStyle = {
  marginLeft: 10,
  marginRight: 10,
  marginTop: 5,
  marginBottom: 5
};