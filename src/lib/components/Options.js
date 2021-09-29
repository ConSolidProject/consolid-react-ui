import React, { useState } from "react";
import {
  Drawer,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ProjectCreation from "./ProjectCreation";
import SignIn from "./SignIn";
import Aggregator from "./Aggregator";

const drawerWidth = 450

const useStyles = makeStyles({
  paper: {
    width: drawerWidth,
    backgroundColor: "bisque"
  },
});

export default (props) => {
  const classes = useStyles();
  const {openOptions, setOpenOptions, trigger, setTrigger, setProjects, projects, store} = props
  const [authOpened, setAuthOpened] = useState(false);
  const [aggregatorOpened, setAggregatorOpened] = useState(false);
  const [myProjectsOpened, setMyProjectsOpened] = useState(false);

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"right"}
          open={openOptions}
          onClose={() => setOpenOptions(!openOptions)}
          classes={{ paper: classes.paper }}
        >
            <div style={{margin: 20}}>
            <Typography variant="h6">Welcome to the LBDserver plugin demo</Typography>
            <hr/>
            <Typography style={{textAlign: "justify"}} variant="body1">The LBDserver project is a research project that studies the organisation of heterogeneous, federated AECO projects. It proposes a data structure for connecting project-specific and contextual data on the Web, and provides the infrastructure for creating a "shopping cart" of GUI plugins for interacting with this data. These plugins can be used standalone as well as be configured alongside with other plugins to enable more fluent visualisation, querying and checking of the project.</Typography>
            <br/>
            <br/>
            <Typography variant="body1">You can visit <a target="_blank" href="https://lbdserver.org">https://lbdserver.org</a> for more information. When citing this research, please refer to one of the following papers: [...]</Typography>
            </div>
            <div>
          <Accordion style={{margin: 5}} expanded={authOpened} onChange={() => setAuthOpened(!authOpened)} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>AUTHENTICATION</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <SignIn trigger={trigger} setTrigger={setTrigger}/>
            </AccordionDetails>
          </Accordion>
          </div><div>
          <Accordion style={{margin: 5}} expanded={aggregatorOpened} onChange={() => setAggregatorOpened(!aggregatorOpened)} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>PROJECT ACTIVATION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Aggregator trigger={trigger} projects={projects} setProjects={setProjects} store={store}/>
            </AccordionDetails>
          </Accordion>
          </div><div>

          <Accordion style={{margin: 5}} expanded={myProjectsOpened} onChange={() => setMyProjectsOpened(!myProjectsOpened)} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>PROJECT CREATION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ProjectCreation trigger={trigger} projects={projects} setProjects={setProjects} store={store}/>
            </AccordionDetails>
          </Accordion>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}


