import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom'

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

type Props = {
  emailSignInStart: any,
  googleSignInStart: any,
}

const SignIn = ({ emailSignInStart, googleSignInStart }: Props) => {

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailSignInStart({ email, password });
  };

  const handleChange = (event: FormEvent<any>) => {
    const { value, name } = event.currentTarget;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Paper variant="outlined">
      <Box p={3}>
        <form onSubmit={handleSubmit}>
          <Box my={2}>
            <TextField name="email" label="Email" variant="outlined" fullWidth onChange={handleChange} />
          </Box>
          <Box my={2}>
            <TextField type="password" name="password" label="Password" variant="outlined" fullWidth onChange={handleChange} />
          </Box>
          <Box my={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
          </Box>
          <Box my={2}>
            <Button type="button" variant="contained" color="primary" fullWidth onClick={googleSignInStart}>Login</Button>
          </Box>
        </form>
        <Box mt={4} display="flex" justifyContent="space-between">
          <Link to="/">Forgot password</Link>
          <Link to="/register">Register</Link>
        </Box>
      </Box>
    </Paper>
  )
}

export default SignIn