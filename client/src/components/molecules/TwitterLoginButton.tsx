import React, { useCallback } from "react";
import styled from "styled-components";
import { signInWithRedirect, TwitterAuthProvider } from "firebase/auth";

// Icons
import Twitter from "@mui/icons-material/Twitter";

// Firebase
import { useFirebaseHooks } from "../../hooks/useFirebaseHooks";

export const TwitterLoginButton: React.VFC = () => {
  const { auth } = useFirebaseHooks();

  const twitterLogin = useCallback(async () => {
    const provider = new TwitterAuthProvider();
    await signInWithRedirect(auth, provider);
  }, [auth]);

  return (
    <Wrapper onClick={twitterLogin}>
      <Button>
        <Twitter fontSize="small" />
        <ButtonText>Sign in Instagram</ButtonText>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  width: 100%;
  max-width: 220px;
  min-height: 40px;
  padding: 8px 16px;
  align-items: center;
  line-height: normal;
  background-color: #1da1f2;
  border-radius: 2px;
  color: #ffffff;
  font-size: 14px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  cursor: pointer;

  &:active {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonText = styled.span`
  margin-left: 16px;
  font-family: Roboto, serif;
  font-weight: 500;
  user-select: none;
`;
