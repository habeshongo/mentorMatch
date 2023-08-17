import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ConnectCard = ({ imageSrc, title, onHide, id }) => {
  console.log(id, `id @ connect card`);
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={imageSrc}
        alt="Card Image"
      />
      <CardContent>
        <p
          //   variant="h6"
          //   component="h2"
          style={{
            display: "block",
            margin: "0 auto",
            color: "black",
            paddingBottom: "0.5em",
          }}
        >
          {title}
        </p>

        <Link to={`/profile/${id}`}>
          <Button
            variant="outlined"
            onClick={onHide}
            style={{
              backgroundColor: "#ff9c00",
              color: "#ffffff",
              border: "none",
              width: "100%",
            }}
            alignContent="stretch"
          >
            Profile
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ConnectCard;
