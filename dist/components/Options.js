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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const drawerWidth = 450;
const useStyles = (0, _core.makeStyles)({
  paper: {
    width: drawerWidth,
    backgroundColor: "bisque"
  }
});

var _default = props => {
  const classes = useStyles();
  const {
    openOptions,
    setOpenOptions,
    trigger,
    setTrigger,
    setProjects,
    projects,
    store
  } = props;
  const [authOpened, setAuthOpened] = (0, _react.useState)(false);
  const [aggregatorOpened, setAggregatorOpened] = (0, _react.useState)(false);
  const [myProjectsOpened, setMyProjectsOpened] = (0, _react.useState)(false);
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
  }, "The LBDserver project is a research project that studies the organisation of heterogeneous, federated AECO projects. It proposes a data structure for connecting project-specific and contextual data on the Web, and provides the infrastructure for creating a \"shopping cart\" of GUI plugins for interacting with this data. These plugins can be used standalone as well as be configured alongside with other plugins to enable more fluent visualisation, querying and checking of the project."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body1"
  }, "You can visit ", /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    href: "https://lbdserver.org"
  }, "https://lbdserver.org"), " for more information. When citing this research, please refer to one of the following papers: [...]")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Accordion, {
    style: {
      margin: 5
    },
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
    style: {
      margin: 5
    },
    expanded: aggregatorOpened,
    onChange: () => setAggregatorOpened(!aggregatorOpened)
  }, /*#__PURE__*/_react.default.createElement(_core.AccordionSummary, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, null, "PROJECT ACTIVATION")), /*#__PURE__*/_react.default.createElement(_core.AccordionDetails, null, /*#__PURE__*/_react.default.createElement(_Aggregator.default, {
    trigger: trigger,
    projects: projects,
    setProjects: setProjects,
    store: store
  })))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Accordion, {
    style: {
      margin: 5
    },
    expanded: myProjectsOpened,
    onChange: () => setMyProjectsOpened(!myProjectsOpened)
  }, /*#__PURE__*/_react.default.createElement(_core.AccordionSummary, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, null, "PROJECT CREATION")), /*#__PURE__*/_react.default.createElement(_core.AccordionDetails, null, /*#__PURE__*/_react.default.createElement(_ProjectCreation.default, {
    trigger: trigger,
    projects: projects,
    setProjects: setProjects,
    store: store
  })))))));
};

exports.default = _default;