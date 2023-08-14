import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { getProfile } from "../services/api";
import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

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
    <>
      {isAuthenticated && !isLoading && (
        <div>
          <img src={data.user?.picture} alt={data?.user.name} />
          <h2>{data.user?.name}</h2>
          <p>{data.user.email}</p>
        </div>
      )}
      <Link to="/edit">Edit Profile</Link>
    </>
  );
};

export default Profile;
