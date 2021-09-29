"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openOptions = exports.trigger = exports.selectionId = exports.selectedElements = exports.activeResources = exports.projects = exports.session = exports.store = void 0;

var _react = _interopRequireDefault(require("react"));

var _recoil = require("recoil");

var _solidClientAuthnBrowser = require("@inrupt/solid-client-authn-browser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  v4
} = require('uuid');

const N3 = require("n3");

const store = (0, _recoil.atom)({
  key: "store",
  default: new N3.Store()
});
exports.store = store;
const openOptions = (0, _recoil.atom)({
  key: "openOptions",
  default: true
});
exports.openOptions = openOptions;
const session = (0, _recoil.atom)({
  key: "session",
  default: new _solidClientAuthnBrowser.Session()
});
exports.session = session;
const projects = (0, _recoil.atom)({
  key: "projects",
  default: []
});
exports.projects = projects;
const activeResources = (0, _recoil.atom)({
  key: "activeResources",
  default: []
});
exports.activeResources = activeResources;
const selectedElements = (0, _recoil.atom)({
  key: "selectedElements",
  default: []
});
exports.selectedElements = selectedElements;
const selectionId = (0, _recoil.atom)({
  key: "selectionId",
  default: ""
});
exports.selectionId = selectionId;
const trigger = (0, _recoil.atom)({
  key: "trigger",
  default: 1
});
exports.trigger = trigger;