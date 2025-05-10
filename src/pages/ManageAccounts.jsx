// src/pages/ManageAccounts.jsx
import { useState } from "react";
import { Container, Card, Button, Form, Row, Col, Alert } from "react-bootstrap";

const ManageAccounts = ({ user }) => {
  const [accounts, setAccounts] = useState(user?.accounts || []);
  const [newAccount, setNewAccount] = useState({
    type: "Savings",
    balance: ""
  });
  const [message, setMessage] = useState("");

  const addAccount = () => {
    if (!newAccount.balance) {
      setMessage("Please enter balance amount");
      return;
    }
    
    const balance = parseFloat(newAccount.balance);
    if (isNaN(balance) || balance < 0) {
      setMessage("Please enter a valid number for balance");
      return;
    }
    
    const accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    
    const account = {
      id: accounts.length + 1,
      type: newAccount.type,
      balance: balance,
      number: accountNumber
    };
    
    setAccounts([...accounts, account]);
    setNewAccount({ type: "Savings", balance: "" });
    setMessage("Account added successfully!");
  };

  const deleteAccount = (accountId) => {
    if (accounts.length <= 1) {
      setMessage("You must have at least one account");
      return;
    }
    
    setAccounts(accounts.filter(account => account.id !== accountId));
    setMessage("Account deleted successfully!");
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Manage Accounts</h2>
      
      {message && <Alert variant={message.includes("success") ? "success" : "danger"}>{message}</Alert>}
      
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card>
            <Card.Header as="h5">Add New Account</Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Account Type</Form.Label>
                      <Form.Select
                        value={newAccount.type}
                        onChange={(e) => setNewAccount({...newAccount, type: e.target.value})}
                      >
                        <option value="Savings">Savings Account</option>
                        <option value="Current">Current Account</option>
                        <option value="Fixed Deposit">Fixed Deposit</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Initial Balance (₹)</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter initial balance"
                        value={newAccount.balance}
                        onChange={(e) => setNewAccount({...newAccount, balance: e.target.value})}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" onClick={addAccount}>
                  Add Account
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col md={8}>
          <h4 className="mb-3">Your Accounts</h4>
          {accounts.map((account) => (
            <Card key={account.id} className="mb-3">
              <Card.Body>
                <Row>
                  <Col>
                    <h5>{account.type} Account</h5>
                    <p className="mb-1">Account Number: {account.number}</p>
                    <p className="mb-0">Balance: ₹{account.balance.toLocaleString()}</p>
                  </Col>
                  <Col xs="auto" className="d-flex align-items-center">
                    <Button 
                      variant="outline-danger" 
                      onClick={() => deleteAccount(account.id)}
                      disabled={accounts.length <= 1}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ManageAccounts;