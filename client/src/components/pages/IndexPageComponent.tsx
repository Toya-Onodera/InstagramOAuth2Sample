import React from "react";

// My Components
import { DefaultContainer } from "../templates/DefaultContainer";
import { SnsLogin } from "../organisms/SnsLogin";

export const IndexPageComponent: React.VFC = () => {
  return (
    <DefaultContainer>
      <SnsLogin />
    </DefaultContainer>
  );
};
