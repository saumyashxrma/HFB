import React, { useState } from "react";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";

const ManageAccounts = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: "Savings Account", balance: "₹50,000" },
    { id: 2, name: "Current Account", balance: "₹1,20,000" }
  ]);
  
  const [newAccountName, setNewAccountName] = useState("");

  const addAccount = () => {
    if (!newAccountName) return;
    const newAccount = {
      id: accounts.length + 1,
      name: newAccountName,
      balance: "₹0"  
    };
    setAccounts([...accounts, newAccount]);
    setNewAccountName("");
  };

  const deleteAccount = (accountId) => {
    setAccounts(accounts.filter(account => account.id !== accountId));
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Manage Your Accounts</h2>

      <Card className="mb-4 p-3">
        <h5>Add a New Account</h5>
        <Form>
          <Row>
            <Col md={8}>
              <Form.Control
                type="text"
                placeholder="Enter account name"
                value={newAccountName}
                onChange={(e) => setNewAccountName(e.target.value)}
              />
            </Col>
            <Col md={4}>
              <Button variant="primary" onClick={addAccount}>Add Account</Button>
            </Col>
          </Row>
        </Form>
      </Card>

      {accounts.map((account) => (
        <Card key={account.id} className="mb-3">
          <Card.Body>
            <Row>
              <Col>
                <h5>{account.name}</h5>
                <p>Balance: {account.balance}</p>
              </Col>
              <Col className="text-end">
                <Button variant="danger" onClick={() => deleteAccount(account.id)}>Delete</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ManageAccounts;
