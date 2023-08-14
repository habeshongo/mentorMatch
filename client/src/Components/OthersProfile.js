import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfileById } from "../services/api";
import { Container, Box, Typography, Button } from "@mui/material";
import { Avatar } from "@mui/material";
import avatar from "../assets/images/test-photo.jpg";
import { Link } from "react-router-dom";
import AshtonProfile from "./AshtonProfile";

const OthersProfile = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getProfileById(id),
  });

  return (
    <div>
      {isLoading ? <div>Loading...</div> : <div></div>}
      <div className="section">
        <Box>
          <Button color="secondary" variant="contained" alignSelf="end">
            Connect
          </Button>
        </Box>
        {data && !isLoading && (
          <AshtonProfile
            expertises={data.user.mentorProfile}
            interests={data.user.menteeProfile}
            name={`${data.user.first_name} ${data.user.last_name}`}
            description={data.user.profile_description}
            picture={data.user.picture}
          />
        )}
      </div>
    </div>
  );
};

export default OthersProfile;
