import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      // authorizationParams: {
      //   screen_hint: "signup",
      // },
    });
  };

  return (
    <button
      onClick={() => {
        handleLogin();
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;
