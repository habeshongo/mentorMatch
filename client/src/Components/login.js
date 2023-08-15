import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button, TextField } from "@mui/material";

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
    <Button
      type="submit"
      sx={{ marginTop: 4 }}
      variant="contained"
      color="warning"
      onClick={handleLogin}
    >
      Log In
    </Button>
    // <button
    //   onClick={() => {
    //     handleLogin();
    //   }}
    // >
    //   Log In
    // </button>
  );
};

export default LoginButton;
