import * as React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export function ProductCard({ id, img, title, description, price }) {
  return (
    <Link to={`/item/${id}`}>
      <Card className="card" sx={{ width: 305, height: 400 }}>
        <CardActionArea>
          <CardMedia component="img" height="300" image={img} alt="Alfombra" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
