import React from "react";
import styled from "styled-components";

export const Header: React.VFC = () => {
  return (
    <Wrapper>
      <Contents />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  background-color: #424242;
`;

const Contents = styled.div`
  width: 100%;
  max-width: var(--max-contents-width);
  margin: 0 auto;
  background: aliceblue;
`;
