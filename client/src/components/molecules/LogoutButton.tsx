import React from "react";
import styled from "styled-components";

// Icons
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

type Props = {
  accountSignOut: () => Promise<void>;
};

export const LogoutButton: React.VFC<Props> = React.memo(
  ({ accountSignOut }) => {
    return (
      <Wrapper>
        <Button onClick={accountSignOut}>
          <ExitToAppIcon fontSize="small" />
          <ButtonText>Sign Out</ButtonText>
        </Button>
      </Wrapper>
    );
  },
);

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
  background-color: #95a5a6;
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
  font-weight: 500;
  user-select: none;
`;
