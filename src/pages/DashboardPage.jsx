// src/pages/DashboardPage.jsx
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DashboardPage = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Container className="py-4">
      <h2 className="mb-4">Welcome, {user?.name}</h2>
      
      <Row>
        {/* Account Overview */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header as="h5">Account Overview</Card.Header>
            <Card.Body>
              {user?.accounts?.map(account => (
                <div key={account.id} className="mb-3">
                  <h6>{account.type} Account</h6>
                  <p>Account Number: {account.number}</p>
                  <p>Balance: ₹{account.balance.toLocaleString()}</p>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        
        {/* Recent Transactions */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header as="h5">Recent Transactions</Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                {user?.transactions?.map(txn => (
                  <li key={txn.id} className="mb-2">
                    <div className="d-flex justify-content-between">
                      <span>{txn.description}</span>
                      <span className={txn.amount < 0 ? "text-danger" : "text-success"}>
                        {txn.amount < 0 ? "-" : "+"}₹{Math.abs(txn.amount).toLocaleString()}
                      </span>
                    </div>
                    <small className="text-muted">{txn.date}</small>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Quick Actions */}
      <Card className="mb-4">
        <Card.Header as="h5">Quick Actions</Card.Header>
        <Card.Body>
          <Button variant="primary" className="me-2" onClick={() => navigate("/fund-transfer")}>
            Transfer Funds
          </Button>
          <Button variant="success" className="me-2" onClick={() => navigate("/manage-accounts")}>
            Manage Accounts
          </Button>
          <Button variant="info" onClick={() => navigate("/personal-banking")}>
            Personal Banking
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DashboardPage;