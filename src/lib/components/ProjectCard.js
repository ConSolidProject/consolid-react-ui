import React, { useState, useEffect } from "react";
import {
  loadProjectMetadata
} from "consolid";
import {
  Switch,
  Typography,
  CardContent,
  Card,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";

export default ({ project, projects, setProjects, store }) => {
 
    async function activateProject() {
      if (projects.includes(project)) {
        setProjects((proj) =>
          proj.filter((p) => {
            return p != proj;
          })
        );
      } else {
        setProjects((proj) => [...proj, project]);
        await loadProjectMetadata(project, store, getDefaultSession());
        console.log("done");
      }
    }
  
    return (
      <div>
        <Card style={{ marginTop: 5, marginBottom: 5 }} variant="outlined">
          <CardContent>
            <Typography component="p">{project}</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={projects.includes(project)}
                    onChange={(e) => activateProject()}
                  />
                }
                label="Active"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </div>
    );
  };
  