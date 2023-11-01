// src/components/Header.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Button color="inherit" component={RouterLink} to="/">
            My Website
          </Button>
        </Typography>
        <Button color="inherit" component={RouterLink} to="/list">
          list
        </Button>
        <Button color="inherit" component={RouterLink} to="/cart">
          cart
        </Button>
        <Button color="inherit" component={RouterLink} to="/login">
          login
        </Button>
        <Button color="inherit" component={RouterLink} to="/sign">
          sign
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
