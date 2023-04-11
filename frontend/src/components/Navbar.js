import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import logo from "../images/logo.png";

const Navbar = ({ onLogoClick }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#2026d6" }}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            aria-label="website logo"
            onClick={onLogoClick}
          >
            <img
              src={logo}
              alt="website logo"
              style={{
                width: "32px",
                height: "32px",
              }}
            ></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
            ResFast
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Saved Resumes</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
