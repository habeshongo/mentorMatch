import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import NavBar from "./Navbar";
// import "./sidebar.css";
import { getProfile } from "../services/api";

import { useQuery } from "@tanstack/react-query";
import AshtonProfile from "./AshtonProfile";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading: isAuthLoading } = useAuth0();

  // Queries
  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(user),
    enabled: !!user,
  });

  if (isAuthLoading) {
    return <div>Loading ...</div>;
  }

  return (
    data &&
    user &&
    data.user &&
    !isLoading && (
      <div style={{ minHeight: "100vh" }}>
        <NavBar />

        <div style={{ alignSelf: "center" }}>
          <AshtonProfile
            expertises={data.user.mentorProfile}
            interests={data.user.menteeProfile}
            name={`${data.user.first_name} ${data.user.last_name}`}
            description={data.user.profile_description}
            picture={data.user.picture}
          />
        </div>
      </div>
    )
  );
};

export default Profile;
