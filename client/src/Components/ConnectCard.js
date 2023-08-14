import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ConnectCard = ({ imageSrc, title, onConfirm, onHide, onDelete }) => {
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

        <Link to="/profile">
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

        <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
          <Button variant="contained" color="error" onClick={onDelete}>
            Delete
          </Button>

          <Link to="/message">
            <Button variant="outlined" color="secondary" onClick={onHide}>
              Message
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConnectCard;
