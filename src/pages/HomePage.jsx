import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-white text-center">
        <Container>
          <h1>Welcome to HIND FUNDS BANK</h1>
          <p>Your trusted partner in financial growth</p>
          <Button variant="primary" size="lg" className="m-2">
            <Link to="/register" className="text-white">Open an Account</Link>
          </Button>
          <Button variant="outline-light" size="lg" className="m-2">
            Learn More
          </Button>
        </Container>
      </section>

      <section className="core-services py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Our Services</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="src/assets/personalbanking.jpg" />
                <Card.Body>
                  <Card.Title>Personal Banking</Card.Title>
                  <Card.Text>
                    Enjoy a wide range of personal banking products and services.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="src/assets/loans.jpg" />
                <Card.Body>
                  <Card.Title>Loans</Card.Title>
                  <Card.Text>
                    Get the right loan for your needs, whether personal, home, or car loan.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="src/assets/investment.jpg" />
                <Card.Body>
                  <Card.Title>Investments</Card.Title>
                  <Card.Text>
                    Explore a variety of investment opportunities to grow your wealth.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials py-5 bg-dark text-white">
        <Container>
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <Carousel>
            <Carousel.Item>
              <p>"Hind Funds Bank helped me secure a home loan with ease. Highly recommend!"</p>
              <footer>- Madhuhan Shekhar, Satisfied Customer</footer>
            </Carousel.Item>
            <Carousel.Item>
              <p>"Fantastic service, fast and reliable banking solutions!"</p>
              <footer>- Saumya Sharma, Happy Client</footer>
            </Carousel.Item>
            <Carousel.Item>
              <p>"The investment opportunities offered by Hind Funds Bank have been life-changing."</p>
              <footer>- Abhigyan Sharma, Investor</footer>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
