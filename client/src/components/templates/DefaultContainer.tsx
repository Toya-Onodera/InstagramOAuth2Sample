import React from "react";
import styled from "styled-components";

// My Components
import { Header } from "../organisms/Header";

export const DefaultContainer: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Contents>{children}</Contents>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - var(--header-height));
  background-color: #fafafa;
`;

const Contents = styled.div`
  width: 100%;
  padding: 24px;
  max-width: var(--max-contents-width);
  margin: 0 auto;
`;
