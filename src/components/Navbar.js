import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from './styles/styles'

const Navbar = ({ title }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar style={{ justifyContent: "center" }}>
        <Link className={classes.navlink} to="/">
          <Typography align="center" variant="h3">
            {title}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
