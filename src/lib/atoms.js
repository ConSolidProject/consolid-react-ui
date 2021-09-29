import React from 'react'
import {atom, atomFamily, selectorFamily} from 'recoil'
import {Session} from "@inrupt/solid-client-authn-browser"
const {v4} = require('uuid')
const N3 = require("n3");

const store = atom({
    key: "store", 
    default: new N3.Store()
})

const openOptions = atom({
    key: "openOptions",
    default: true
})

const session = atom({
    key: "session",
    default: new Session()
})

const projects = atom({
    key: "projects",
    default: []
})

const activeResources = atom({
    key: "activeResources",
    default: []
})

const selectedElements = atom({
    key: "selectedElements",
    default: []
})

const selectionId = atom({
    key: "selectionId",
    default: ""
})

const trigger = atom({
    key: "trigger",
    default: 1
})

export {store, session, projects, activeResources, selectedElements, selectionId, trigger, openOptions}