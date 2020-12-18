import React from "react";
import { connect } from "react-redux";

import Layout from "../../layouts/restricted.layout";
import SignIn from "../../components/sign-in/sign-in.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignInPage = ({ emailSignInStart, googleSignInStart }) => (
  <Layout>
    <SignIn
      emailSignInStart={emailSignInStart}
      googleSignInStart={googleSignInStart}
    />
  </Layout>
);

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignInPage);
