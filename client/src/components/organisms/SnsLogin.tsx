import React from "react";
import styled from "styled-components";

// My Components
import { TwitterLoginButton } from "../molecules/TwitterLoginButton";

export const SnsLogin: React.VFC = () => {
  return (
    <Wrapper>
      <Title>ログイン</Title>

      <LoginButtons>
        <TwitterLoginButton />
      </LoginButtons>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Title = styled.h3``;

const LoginButtons = styled.div``;
