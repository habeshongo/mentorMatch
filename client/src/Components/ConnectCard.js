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
        <Typography variant="h6" component="h2">
          {title}
        </Typography>

        <Link to={`/profile/${id}`}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onHide}
            style={{
              backgroundColor: "#808080",
              color: "#ffffff",
              border: "none",
            }}
          >
            Profile
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ConnectCard;
