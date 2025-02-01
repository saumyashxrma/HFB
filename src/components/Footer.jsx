import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';  
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <p>© 2025 Hind Funds Bank. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
