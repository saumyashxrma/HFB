// src/pages/PersonalBanking.jsx
import { Container, Card, Row, Col } from "react-bootstrap";

const PersonalBanking = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Personal Banking Services</h2>
      
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Savings Accounts</Card.Title>
              <Card.Text>
                High interest savings accounts with flexible withdrawal options.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Fixed Deposits</Card.Title>
              <Card.Text>
                Secure investments with guaranteed returns and various tenure options.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Recurring Deposits</Card.Title>
              <Card.Text>
                Build savings with regular monthly deposits and earn attractive interest.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Debit Cards</Card.Title>
              <Card.Text>
                Convenient access to your funds with our secure debit cards.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Online Banking</Card.Title>
              <Card.Text>
                Manage your accounts anytime, anywhere with our secure online banking.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalBanking;