import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import grey from "@material-ui/core/colors/grey";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import FisTextfield from "../fis-textfied/fis-textfield.component";
import Link from "../link/router-link.component";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: grey[50],
  },
  btFacebook: {
    color: "#ffffff",
    backgroundColor: "#3b5998",
    "&:hover": {
      backgroundColor: "#0069d9",
    },
  },
  btGoogle: {
    color: "#ffffff",
    backgroundColor: "#e05449",
  },
}));

const SignInComponent = ({ emailSignInStart, googleSignInStart }) => {
  const classes = useStyles();

  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart({ email, password });
  };

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Box p={3}>
        <form onSubmit={handleSubmit}>
          <Box my={2}>
            <FisTextfield
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
          </Box>
          <Box my={2}>
            <FisTextfield
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
          </Box>
          <Box my={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login with Email
            </Button>
          </Box>

          <Box my={2} textAlign="center">
            - Or -
          </Box>

          <Box my={2}>
            <Button
              type="button"
              variant="contained"
              className={classes.btGoogle}
              fullWidth
              onClick={googleSignInStart}
            >
              Login with Google
            </Button>
          </Box>
          <Box my={2}>
            <Button
              type="button"
              variant="contained"
              className={classes.btFacebook}
              fullWidth
              onClick={() => {
                alert("To be implemented");
              }}
            >
              Login with Facebook
            </Button>
          </Box>
        </form>
        <hr />
        <Box mt={4} display="flex" justifyContent="space-between">
          <Link to="/">
            Forgot password
          </Link>
          <span>|</span>
          <Link to="/register">New user? Register</Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default SignInComponent;
