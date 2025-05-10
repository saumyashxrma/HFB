// src/pages/Investment.jsx
import { Container, Card, Row, Col } from "react-bootstrap";

const Investment = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Investment Services</h2>
      
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Mutual Funds</Card.Title>
              <Card.Text>
                Diversified portfolio managed by experts with various risk profiles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Stocks & ETFs</Card.Title>
              <Card.Text>
                Invest in equities and exchange-traded funds with our trading platform.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Bonds</Card.Title>
              <Card.Text>
                Fixed income securities with regular interest payments.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Retirement Plans</Card.Title>
              <Card.Text>
                Long-term savings plans for your retirement needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Gold Investments</Card.Title>
              <Card.Text>
                Invest in digital gold or physical gold with secure storage.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Investment;