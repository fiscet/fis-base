import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import SignIn from '../../components/sign-in/sign-in.component';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

type Props = {
  emailSignInStart: any,
  googleSignInStart: any,
}

const SignInPage = ({ emailSignInStart, googleSignInStart }: Props) => (
  <Container maxWidth="xs">
    <Box height="100vh" display="flex" flexDirection="column">
      <Box>Logo</Box>
      <SignIn emailSignInStart={emailSignInStart} googleSignInStart={googleSignInStart} />
    </Box>
  </Container>
);

const mapDispatchToProps = (dispatch: Function) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignInPage);
