import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button, TextField } from "@mui/material";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    // <button
    //   onClick={() =>
    //     logout({ logoutParams: { returnTo: window.location.origin } })
    //   }
    // >
    //   Log Out
    // </button>
    <Button
      type="submit"
      sx={{ marginTop: 4 }}
      variant="contained"
      color="warning"
      // onClick={handleLogin}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
