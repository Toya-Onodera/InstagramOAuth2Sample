import React from "react";
import styled from "styled-components";

// My Components
import { TwitterLoginButton } from "../molecules/TwitterLoginButton";
import { InstagramLoginButton } from "../molecules/InstagramLoginButton";
import { LogoutButton } from "../molecules/LogoutButton";

type Props = {
  loggedIn: boolean;
  accountSignOut: () => Promise<void>;
};

export const SnsLogin: React.FC<Props> = React.memo(
  ({ loggedIn, accountSignOut }) => {
    return loggedIn ? (
      <Wrapper>
        <Title>ログアウト</Title>
        <LogoutButton accountSignOut={accountSignOut} />
      </Wrapper>
    ) : (
      <Wrapper>
        <Title>ログイン</Title>
        <LoginButtons>
          <TwitterLoginButton />
          <InstagramLoginButton />
        </LoginButtons>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div``;

const Title = styled.h3``;

const LoginButtons = styled.div``;
