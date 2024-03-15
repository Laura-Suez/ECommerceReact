import * as React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import CartWidget from "../common/CartWidget";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <FaHome size={30} />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mis alfombras
          </Typography>
          <Link to="/category/personajes">
            <Button color="inherit">Personajes</Button>
          </Link>
          <Link to="/category/animales">
            <Button color="inherit">Animales</Button>
          </Link>
          <Link to="/category/geometricas">
            <Button color="inherit">Geometricas</Button>
          </Link>
          <Link to="/cart">
            <Button color="inherit">
              <CartWidget />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
