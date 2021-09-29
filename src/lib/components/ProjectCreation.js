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
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { v4 } from "uuid";
import ProjectCard from './ProjectCard'

export default ({store, projects, setProjects, trigger}) => {
  const [aggregator, setAggregator] = useState(
    "http://localhost:5000/jeroen/lbd/"
  );
  const [myProjects, setMyProjects] = useState([]);

  // trigger rerender on trigger (i.e. if session changes)
  useEffect(() => {}, [trigger]);

  async function fetchAggregator(agg, setter) {
    const projects = await getProjectsFromAggregator(agg, getDefaultSession());
    console.log(`projects`, projects);
    setter(projects);
  }

  async function onProjectCreate() {
    await createProject(
      v4(),
      [getDefaultSession().info.webId],
      getDefaultSession()
    );
    await getMyProjects()
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
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={async () => getMyProjects()}
              style={{marginTop: 5, marginBottom: 5}}
              >
              Get my projects
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => onProjectCreate()}
            >
              Create new project
            </Button>
            {myProjects.map((item) => {
          return <ProjectCard key={item} project={item} projects={projects} setProjects={setProjects} store={store}/>;
        })}
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
