import React from "react";
import styled from "styled-components";

// Hooks
import { useFirebaseHooks } from "../../hooks/useFirebaseHooks";

export const Header: React.VFC = () => {
  const { displayName } = useFirebaseHooks();

  return (
    <Wrapper>
      <Contents>
        <AccountName>ようこそ「{displayName}」さん</AccountName>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  background-color: #424242;
`;

const Contents = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: var(--max-contents-width);
  margin: 0 auto;
  align-items: center;
`;

const AccountName = styled.span`
  color: #fafafa;
`;
