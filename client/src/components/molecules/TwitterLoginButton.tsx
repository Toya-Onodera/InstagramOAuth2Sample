import React from "react";
import { TwitterAuthProvider } from "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Firebase
import { auth } from "../../firebase";

const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/",
  signInOptions: [TwitterAuthProvider.PROVIDER_ID],
};

export const TwitterLoginButton: React.VFC = () => {
  return <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfig} />;
};
