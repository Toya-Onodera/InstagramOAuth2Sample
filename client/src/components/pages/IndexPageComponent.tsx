import React from "react";

// My Components
import { DefaultContainer } from "../templates/DefaultContainer";
import { SnsLogin } from "../organisms/SnsLogin";

// Hooks
import { useFirebaseHooks } from "../../hooks/useFirebaseHooks";

export const IndexPageComponent: React.VFC = () => {
  const { isLogin, accountSignOut } = useFirebaseHooks();

  return (
    <DefaultContainer>
      <SnsLogin loggedIn={isLogin} accountSignOut={accountSignOut} />
    </DefaultContainer>
  );
};
