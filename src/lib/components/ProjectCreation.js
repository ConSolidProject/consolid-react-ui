import React, { useState, useEffect } from "react";
import {
  getProjectsFromAggregator,
  loadProjectMetadata,
  createProject,
  getLBDlocation,
  checkInvites,
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
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { v4 } from "uuid";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ProjectCard from "./ProjectCard";

export default ({ store, projects, setProjects, trigger, setTrigger }) => {
  const [aggregator, setAggregator] = useState(
    "http://localhost:5000/jeroen/lbd/"
  );
  const [myProjects, setMyProjects] = useState([]);
  const [stakeholders, setStakeholders] = useState("https://pod.lbdserver.org/pieter/profile/card#me; https://pod.lbdserver.org/jakob/profile/card#me");
  const [invites, setInvites] = useState([]);
  // trigger rerender on trigger (i.e. if session changes)
  useEffect(() => {}, [trigger]);
  // useEffect(() => checkInvites(session).then((e) => setInvites(e)), []);

  async function fetchAggregator(agg, setter) {
    const projects = await getProjectsFromAggregator(agg, getDefaultSession());
    console.log(`projects`, projects);
    setter(projects);
  }

  async function onProjectCreate() {
    const st = stakeholders.split(";").map(el => {
      return el.replace(/\s+/g, '')
    })
    st.push(getDefaultSession().info.webId)

    await createProject(
      v4(),
      st,
      getDefaultSession()
    );
    await getMyProjects();
  }

  async function getMyProjects() {
    const myLbdLocation = await getLBDlocation(
      getDefaultSession().info.webId,
      getDefaultSession()
    );
    await fetchAggregator(myLbdLocation, setMyProjects);
  }
  return (
    <React.Fragment>
      <Container component="main">
        {getDefaultSession().info.isLoggedIn ? (
          <div>
            <div>
              <Typography style={{ textAlign: "justify" }} variant="body1">
                Your projects are saved in a subdirectory of your POD "/lbd/"
                (Linked Building Data). If you already host some projects, you
                can activate them here.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={async () => getMyProjects()}
                style={{ marginTop: 5, marginBottom: 5 }}
              >
                Get my projects
              </Button>
              {myProjects.map((item) => {
                return (
                  <ProjectCard
                    key={item}
                    project={item}
                    projects={projects}
                    setProjects={setProjects}
                    store={store}
                    setTrigger={setTrigger}
                  />
                );
              })}
            </div>
            <div>
              <br />
              <Typography style={{ textAlign: "justify" }} variant="body1">
                Otherwise, you may create a project. If you want to invite others to your project, you may add their webIds below.{" "}
              </Typography>
              <br />
              <TextField
              id="standard-multiline-flexible"
              label="Stakeholders (separate by ';')"
              multiline
              fullWidth
              rowsMax={10}
              value={stakeholders.toString()}
              onChange={(e) => setStakeholders(e.target.value)}
              style={{ marginTop: 10, marginBottom: 10 }}
            />{" "}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => onProjectCreate()}
              >
                Create new project
              </Button>
              {/* <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Item>Stakaholder WebID:</Item>
                </Grid>
                <Grid item xs={7}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={2}>
              </Grid>
              <IconButton
                    style={{
                      position: "absolute",
                      right: (drawerOpened && drawerWidth) || 0,
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => setStakeholders(st => [...st, e.target.value])}
                  >
                    {drawerOpened ? <></> : <AddCircleOutlineIcon />}
                  </IconButton>{" "}
                </Grid> */}
            </div>
            <div>
              <br />
              <Typography style={{ textAlign: "justify" }} variant="body1">
                Or join a project for which you were invited for collaboration:
              </Typography>
              {invites ? <div></div> : <></>}
              <br />
            </div>
          </div>
        ) : (
          <div>
            <Typography style={{ textAlign: "justify" }} variant="body1">
              Register/Log in to create your own project.
            </Typography>
          </div>
        )}
      </Container>
    </React.Fragment>
  );
};
