import React from "react";
import { connect } from "react-redux";

import Layout from "../../layouts/restricted.layout";
import SignUp from "../../components/sign-up/sing-up.component";

import { signUpStart } from "../../redux/user/user.actions";

const SignUpPage = ({ signUpStart }) => {
  return (
    <Layout>
      <SignUp signUpStart={signUpStart} />
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUpPage);
