// HeroSection.js
import React from "react";
import NavBar from "./Navbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ConnectCard from "./ConnectCard";
import pic from "../assets/images/test-photo.jpg";
import { getConnections } from "../services/api";

import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, useMutation } from "@tanstack/react-query";

const ConnectionsSection = () => {
  const { user, isLoading: isAuthLoading } = useAuth0();

  console.log(user, `user @ connections component`);
  // Queries
  const { data, isLoading, isError } = useQuery({
    queryKey: ["connections"],
    queryFn: () => getConnections(user),
    enabled: !!user,
  });

  return (
    <>
      <NavBar />
      <Container>
        <div>
          <Typography variant="h4" component="h1">
            Mentors
          </Typography>
        </div>

        <div className="view-mentor">
          <div>
            <Typography variant="subtitle1" color="textSecondary">
              MentorMatch mentors can be found below. Click on a mentor to view
              their profile.
            </Typography>
          </div>
          <Grid container spacing={3} alignItems="center">
            {!isLoading &&
              data.connections.map((connection) => {
                return (
                  <Grid item xs={3}>
                    <ConnectCard
                      imageSrc={connection.picture}
                      title={`${connection.first_name} ${connection.last_name}`}
                      id={connection.id}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default ConnectionsSection;
