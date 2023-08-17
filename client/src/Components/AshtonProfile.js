import { Container, Box, Typography, Button } from "@mui/material";
import { Avatar } from "@mui/material";
import React from "react";
import avatar from "../assets/images/test-photo.jpg";
import { Link } from "react-router-dom";

const Profile = ({ picture, name, expertises, interests, description }) => {
  return (
    <div sx={{ bgcolor: "#f5f5f5", minheight: "100vh", width: "100%" }}>
      <section>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          sx={{ p: "16px" }}
        >
          <Box display="flex" gap={4} sx={{ p: 4 }}>
            <Avatar
              src={picture}
              variant="circular"
              alt="avatar"
              sx={{
                width: "150px",
                height: "150px",
                border: "5px solid white",
              }}
            />
          </Box>
          <Typography variant="h5">{name}</Typography>
        </Box>

        <Box display="flex" gap={4}>
          <Box
            display="flex"
            flexDirection="column"
            margin="0 auto"
            maxWidth="1024px"
          >
            <section style={{ padding: "2em" }}>
              <article style={{ paddingBottom: "2em" }}>
                <Typography variant="h4">About Me</Typography>
                <Typography>{description}</Typography>
              </article>

              <article style={{ paddingBottom: "2em" }}>
                <Typography variant="h4">Interests</Typography>
                {interests.map((interest, index) => {
                  return (
                    <Box>
                      <Box key={index}>
                        <Typography>
                          <span style={{ fontWeight: "600" }}>
                            {interest.name_of_subject} -{" "}
                          </span>
                          {interest.subject_description}
                        </Typography>
                        {/* <Typography>{interest.subject_description}</Typography> */}
                      </Box>
                      <br />
                    </Box>
                  );
                })}
              </article>

              <Typography variant="h4" sx={{ mb: "16px" }}>
                Expertise
              </Typography>

              <Box display="flex" flexDirection="column" gap={4}>
                {expertises.length > 0 &&
                  expertises.map((expertise, index) => {
                    return (
                      <Box key={index}>
                        <Typography>
                          <span style={{ fontWeight: "600" }}>
                            {expertise.skillset}{" "}
                          </span>
                          ,{" "}
                          <em>{expertise.years_of_exp} years of experience</em>
                        </Typography>
                        <Typography>{expertise.exp_description}</Typography>
                      </Box>
                    );
                  })}
              </Box>
            </section>
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default Profile;
