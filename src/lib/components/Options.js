import React, { useState } from "react";
import {
  Drawer,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ProjectCreation from "./ProjectCreation";
import SignIn from "./SignIn";
import Aggregator from "./Aggregator";
import ModuleFederation from "./ModuleFederation";
import FutureWork from "./FutureWork";
import DataHandling from './DataHandling'
export default (props) => {
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
    drawerWidth,
  } = props;
  const [authOpened, setAuthOpened] = useState(true);
  const [aggregatorOpened, setAggregatorOpened] = useState(false);
  const [myProjectsOpened, setMyProjectsOpened] = useState(false);
  const [configOpened, setConfigOpened] = useState(false);
  const [futureWorkOpened, setFutureWorkOpened] = useState(false)
  const [datahandlingOpened, setDatahandlingOpened] = useState(false)
  const useStyles = makeStyles({
    paper: {
      width: drawerWidth,
      backgroundColor: "bisque",
    },
  });
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"right"}
          open={openOptions}
          onClose={() => setOpenOptions(!openOptions)}
          classes={{ paper: classes.paper }}
        >
          <div style={{ margin: 20 }}>
            <Typography variant="h6">
              Welcome to the LBDserver plugin demo
            </Typography>
            <hr />
            <Typography style={{ textAlign: "justify" }} variant="body1">
              The LBDserver project is an ongoing research project that studies the
              organisation of heterogeneous, federated AECO projects. It
              proposes a data structure for connecting project-specific and
              contextual data on the Web, and provides the infrastructure for
              creating a "shopping cart" of GUI plugins for interacting with
              this data. These plugins can be used standalone as well as be
              configured alongside with other plugins to enable more fluent
              visualisation, querying and checking of the project.
            </Typography>
            <br />
            <Typography style={{ textAlign: "justify" }} variant="body1">
              This application illustrates the main concepts of the LBDserver. It is a rough prototype and only serves demonstration purposes.
            </Typography>
            <br />
            <Typography variant="body1">
              You can visit{" "}
              <a target="_blank" href="https://lbdserver.org">
                https://lbdserver.org
              </a>{" "}
              for more information. When citing this research, please refer to
              one of the following papers: [...]
            </Typography>
          </div>
          <div>
            <Accordion
              style={accStyle}
              expanded={authOpened}
              onChange={() => setAuthOpened(!authOpened)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>AUTHENTICATION</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <SignIn trigger={trigger} setTrigger={setTrigger} />
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              style={accStyle}
              expanded={aggregatorOpened}
              onChange={() => setAggregatorOpened(!aggregatorOpened)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>DEMO PROJECTS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Aggregator
                  trigger={trigger}
                  projects={projects}
                  setProjects={setProjects}
                  store={store}
                  setTrigger={setTrigger}
                />
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              style={accStyle}
              expanded={myProjectsOpened}
              onChange={() => setMyProjectsOpened(!myProjectsOpened)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>MY PROJECTS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ProjectCreation
                  trigger={trigger}
                  projects={projects}
                  setProjects={setProjects}
                  store={store}
                  setTrigger={setTrigger}
                />
              </AccordionDetails>
            </Accordion>
          </div>
          {config ? (
            <div>
              <Accordion
                style={accStyle}
                expanded={configOpened}
                onChange={() => setConfigOpened(!configOpened)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>MODULE FEDERATION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ModuleFederation
                    trigger={trigger}
                    config={config}
                    setConfig={setConfig}
                    setTrigger={setTrigger}
                  />
                </AccordionDetails>
              </Accordion>
            </div>
          ) : (
            <></>
          )}
                    <div>
            <Accordion
              style={accStyle}
              expanded={datahandlingOpened}
              onChange={() => setDatahandlingOpened(!datahandlingOpened)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>DATA HANDLING</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <DataHandling/>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion
              style={accStyle}
              expanded={futureWorkOpened}
              onChange={() => setFutureWorkOpened(!futureWorkOpened)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>FUTURE WORK</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FutureWork/>
              </AccordionDetails>
            </Accordion>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

const accStyle = {
  marginLeft: 10,
  marginRight: 10,
  marginTop: 5,
  marginBottom: 5,
};
