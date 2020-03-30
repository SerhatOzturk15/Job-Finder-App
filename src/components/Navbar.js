import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: "center" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          <Typography align="center" variant="h3">
            Job Finder App
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
