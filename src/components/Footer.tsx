// src/components/Footer.tsx
import React from "react";
import { Container, Typography } from "@material-ui/core";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          &copy; 2023 My Website
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
