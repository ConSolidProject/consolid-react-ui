import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  Session,
  handleIncomingRedirect,
  getDefaultSession,
  login,
} from "@inrupt/solid-client-authn-browser";

async function getAuthentication() {
  try {
    if (!getDefaultSession().info.isLoggedIn) {
      const params = new URLSearchParams(window.location.search);
      const solidCode = params.get("code");
      if (solidCode) {
        console.log("checking code param");
        await handleIncomingRedirect();
      } else {
        console.log("checking previous session data");
        await handleIncomingRedirect({ restorePreviousSession: true });
      }
    }
    return getDefaultSession();
  } catch (error) {
    console.log(`error`, error);
  }
}

export default ({trigger, setTrigger}) => {
  const [oidcIssuer, setOidcIssuer] = useState("https://pod.lbdserver.org");
  const [loading, setLoading] = useState(false);
  // this function only runs when the component mounts. If the mount is the result of a redirect from a Solid Identity Provider, the Session is verified and extracted, and the user is authenticated.
  useEffect(() => {
    getAuthentication().then((s) => setTrigger((t) => t + 1));
  }, []);

  // This function is called when the login button is clicked. If the user logs in as a guest, an unauthenticated solid session is created.
  const onLoginClick = async (e) => {
    try {
      setLoading(true);
      if (!getDefaultSession().info.isLoggedIn) {
        await login({
          oidcIssuer,
          redirectUrl: window.location.href,
          clientName: "lbdserver",
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const onLogoutClick = async (e) => {
    try {
      // await getMyProjects()
      setLoading(true);
      const sess = getDefaultSession();
      await sess.logout();
      const s = await getAuthentication();
      setTrigger((t) => t + 1);
      //   if (session.info.isLoggedIn) {
      //     localStorage.clear();
      //     setSession(new Session());
      //   }
      setLoading(false);
    } catch (error) {
      console.log(`error`, error);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
        <Container component="main">
        <Typography style={{textAlign: "justify"}} variant="body1">The LBDserver demo projects can be read and queried publicly. However, in most cases projects will not be open to the public - authentication is required. You can get a federated Web identity at the Solid Identity Provider of your choice. You can also <a target="_blank" href="https://github.com/solid/community-server">set up such Identity Provider yourself</a>. Having a Web Identity and a personalised online data vault ("Pod"), you can start creating your own federated LBDserver projects.</Typography>
        <br/>
          {getDefaultSession().info.isLoggedIn ? (
            <div>
              <Typography variant="body1">Your are logged in as:</Typography>
              <a href={getDefaultSession().info.webId}>
                {getDefaultSession().info.webId}
              </a>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={onLogoutClick}
                style={{marginTop: 20}}
              >
                Sign out
              </Button>
            </div>
          ) : (
            <div>
              <form onSubmit={(e) => e.preventDefault()} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={oidcIssuer}
                  onChange={(e) => setOidcIssuer(e.target.value)}
                  id="idp"
                  label="Identity Provider"
                  name="idp"
                  autoFocus
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={onLoginClick}
                >
                  Sign in
                </Button>
              </form>
            </div>
          )}
        </Container>
    </React.Fragment>
  );
}
