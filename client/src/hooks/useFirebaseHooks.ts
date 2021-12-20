import {
  onAuthStateChanged,
  signInWithCustomToken,
  signOut,
} from "firebase/auth";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// eslint-disable-next-line
import { app, auth } from "../firebase";

export const useFirebaseHooks = () => {
  // const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);

  const instagramToken = useMemo(() => {
    return (
      location && new URLSearchParams(location.search).get("instagram_token")
    );
  }, [location]);

  const accountSignOut = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // パラメータに instagramToken が存在する場合、Firebase にログインを行う
  useEffect(() => {
    instagramToken &&
      (async () => {
        await signInWithCustomToken(auth, instagramToken);
        navigate("/", { replace: true });
      })();
  }, [auth, instagramToken, history]);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  const displayName = useMemo(() => {
    return auth.currentUser ? `${auth.currentUser.displayName}` : null;
  }, [auth.currentUser]);

  return {
    auth,
    isLogin,
    displayName,
    accountSignOut,
  };
};
