import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import SignIn from '../../components/sign-in/sign-in.component';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

const SignInPage = ({ emailSignInStart, googleSignInStart }) => (
  <Container maxWidth="xs">
    <Box height="100vh" display="flex" flexDirection="column">
      <Box>Logo</Box>
      <SignIn emailSignInStart={emailSignInStart} googleSignInStart={googleSignInStart} />
    </Box>
  </Container>
);

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignInPage);
