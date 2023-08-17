import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import EditProfileForm from "./EditProfileForm";
import { Button, TextField } from "@mui/material";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <Button
      type="submit"
      sx={{ marginTop: 2, backgroundColor: "#42b72a" }}
      variant="contained"
      color="success"
      onClick={handleSignUp}
    >
      Create New Account
    </Button>
    // <button className="button__sign-up"
    //   Sign Up
    // </button>
  );
};
