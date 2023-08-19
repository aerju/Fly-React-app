import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <p className="text-center">
          &copy; Copy rights 2023 . All rights reserved.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
