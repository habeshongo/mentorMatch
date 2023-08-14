import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { getProfile } from "../services/api";

import { useQuery } from "@tanstack/react-query";
import AshtonProfile from "./AshtonProfile";

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
      {data && user && data.user && !isLoading && (
        <div>
          <img src={data.user.picture} alt={data.user.name} />
          <h2>{data.user.name}</h2>
          <p>{data.user.email}</p>
          <AshtonProfile
            expertises={data.user.mentorProfile}
            interests={data.user.menteeProfile}
            name={`${data.user.first_name} ${data.user.last_name}`}
            description={data.user.profile_description}
            picture={data.user.picture}
          />
        </div>
      )}
    </>
  );
};

export default Profile;
