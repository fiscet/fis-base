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
}));

const SignUpComponent = ({ signUpStart }) => {
  const classes = useStyles();

  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Box p={3}>
        <form onSubmit={handleSubmit}>
          <Box my={2}>
            <FisTextfield
              name="displayName"
              label="Your name"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
          </Box>
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
            <FisTextfield
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
          </Box>
          <Box my={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Box>
        </form>
        <hr />
        <Box my={2} textAlign="center">
        <Link to="/login">Already registered? Login</Link>
      </Box>
      </Box>
    </Paper>
  );
};

export default SignUpComponent;
