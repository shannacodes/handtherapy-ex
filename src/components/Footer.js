import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerStyle p-3 text-center">
        <Container>© 2023 Hand Exercise Generator App.</Container>
      </div>
      <p></p>
    </footer>
  );
};

export default Footer;
