"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.url-search-params.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.search.js");

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _reactRouterDom = require("react-router-dom");

var _core = require("@material-ui/core");

var _solidClientAuthnBrowser = require("@inrupt/solid-client-authn-browser");

var _atoms = require("../atoms");

var _recoil = require("recoil");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function getAuthentication() {
  try {
    if (!(0, _solidClientAuthnBrowser.getDefaultSession)().info.isLoggedIn) {
      const params = new URLSearchParams(window.location.search);
      const solidCode = params.get("code");

      if (solidCode) {
        console.log("checking code param");
        await (0, _solidClientAuthnBrowser.handleIncomingRedirect)();
      } else {
        console.log("checking previous session data");
        await (0, _solidClientAuthnBrowser.handleIncomingRedirect)({
          restorePreviousSession: true
        });
      }
    }

    return (0, _solidClientAuthnBrowser.getDefaultSession)();
  } catch (error) {
    console.log("error", error);
  }
}

var _default = _ref => {
  let {
    trigger,
    setTrigger
  } = _ref;
  const [oidcIssuer, setOidcIssuer] = (0, _react.useState)("http://localhost:5000");
  const [loading, setLoading] = (0, _react.useState)(false); // this function only runs when the component mounts. If the mount is the result of a redirect from a Solid Identity Provider, the Session is verified and extracted, and the user is authenticated.

  (0, _react.useEffect)(() => {
    getAuthentication().then(s => setTrigger(t => t + 1));
    console.log("getDefaultSession()", (0, _solidClientAuthnBrowser.getDefaultSession)());
  }, []); // This function is called when the login button is clicked. If the user logs in as a guest, an unauthenticated solid session is created.

  const onLoginClick = async e => {
    try {
      setLoading(true);

      if (!(0, _solidClientAuthnBrowser.getDefaultSession)().info.isLoggedIn) {
        await (0, _solidClientAuthnBrowser.login)({
          oidcIssuer,
          redirectUrl: window.location.href,
          clientName: "lbdserver"
        });
      }

      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const onLogoutClick = async e => {
    try {
      // await getMyProjects()
      setLoading(true);
      const sess = (0, _solidClientAuthnBrowser.getDefaultSession)();
      await sess.logout();
      const s = await getAuthentication();
      setTrigger(t => t + 1); //   if (session.info.isLoggedIn) {
      //     localStorage.clear();
      //     setSession(new Session());
      //   }

      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Container, {
    component: "main"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    style: {
      textAlign: "justify"
    },
    variant: "body1"
  }, "The LBDserver demo projects can be read and queried publicly. However, in most cases projects will not be open to the public - authentication is required. You can get a federated Web identity at the Solid Identity Provider of your choice. You can also ", /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    href: "https://github.com/solid/community-server"
  }, "set up such Identity Provider yourself"), ". Having a Web Identity and a personalised online data vault (\"Pod\"), you can start creating your own federated LBDserver projects. How cool is that?!"), /*#__PURE__*/_react.default.createElement("br", null), (0, _solidClientAuthnBrowser.getDefaultSession)().info.isLoggedIn ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body1"
  }, "Your are logged in as:"), /*#__PURE__*/_react.default.createElement("a", {
    href: (0, _solidClientAuthnBrowser.getDefaultSession)().info.webId
  }, (0, _solidClientAuthnBrowser.getDefaultSession)().info.webId), /*#__PURE__*/_react.default.createElement(_core.Button, {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    onClick: onLogoutClick,
    style: {
      marginTop: 20
    }
  }, "Sign out")) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: e => e.preventDefault(),
    noValidate: true
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    value: oidcIssuer,
    onChange: e => setOidcIssuer(e.target.value),
    id: "idp",
    label: "Identity Provider",
    name: "idp",
    autoFocus: true
  }), /*#__PURE__*/_react.default.createElement(_core.Button, {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    onClick: onLoginClick
  }, "Sign in")))));
};

exports.default = _default;