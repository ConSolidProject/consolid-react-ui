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
          As this is just a demo app, there is still a whole lot of work to do here. Just some ideas you might want to collaborate in:
        </Typography>
        <ul>
          <li>Create new/better plugins for visualisation, checking, querying etc.</li>
          <li>Develop a template for plugins built using Angular, Vue or another front-end framework </li>
          <li>A plugin store / configuration builder</li>
          <li>Develop backend services to automate and streamline information exchange.</li>
          <li>...</li>
          </ul>
        <Typography style={{ textAlign: "justify" }} variant="body1">
          If you're interested, please contact me at jeroen.werbrouck [ at ] ugent.be
        </Typography>
      </Container>
    </React.Fragment>
  );
};