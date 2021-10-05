import React, { useState, useEffect } from "react";
import {
  getProjectsFromAggregator,
  loadProjectMetadata,
  createProject,
  getLBDlocation,
} from "consolid";
import {
  TextField,
  Button,
  Switch,
  Typography,
  CardContent,
  Card,
  FormGroup,
  FormControlLabel,
  Container,
} from "@material-ui/core";
import { JSONViewer } from "react-json-editor-viewer";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";

export default ({ config, setConfig, trigger, setTrigger }) => {
  const [data, setData] = useState(config);
  const [remoteConfigUrl, setRemoteConfigUrl] = useState(
    "http://localhost:5000/jeroen/public/remoteConfig1.json"
  );

  // function onConfigChange(key, value, parent, data) {

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
    const s = getDefaultSession();
    const conf = await s.fetch(remoteConfigUrl);
    const newConf = await conf.json();
    setData(() => newConf);
    setConfig(() => newConf);
  }

  return (
    <React.Fragment>
      <Container component="main">
        <Typography style={{ textAlign: "justify" }} variant="body1">
          As you know by now, LBDserver projects are federated aggregations of heterogeneous datasets. Such datasets can be either RDF-based or non-RDF. RDF datasets can be easily connected on a sub-document level, as they natively rely on URIs as resource identifiers. Other datasets require some more work to lift internal identifiers to a "higher" context. To do this, we roughly depart from a federated version of the ICDD specification (ISO 21597), using "Linkelements" that connect identifiers and their corresponding documents to abstract representations of a certain concept ("artefacts"). The more documents connect their representations of an object to this "artefact", the richer it becomes semantically. Individual stakeholders can indicate equality between their local artefacts and those of other stakeholders using an owl:sameAs pointer, effectively declaring aliases that allow to query the federated project while still maintaining a local "artefact registry".
        </Typography>
        <br/>
        <Typography style={{ textAlign: "justify" }} variant="body1">
          When something is selected in an LBDserver module, a selectionset is made including the "original" artefact and its aliases in the project. This selection set is shared with other modules in the configuration, which can then use it to identify which linkelements (documents and identifiers) are relevant to them to display. For example, a glTF viewer module will only be interested in those link elements associated with a document with mime type "model/gltf+json".
        </Typography>
      </Container>
    </React.Fragment>
  );
};
