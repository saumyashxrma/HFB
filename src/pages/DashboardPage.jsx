import React, { useState, useEffect } from "react";
import { getAccounts } from "../services/api"; // API for fetching account details
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const DashboardPage = () => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getAccounts().then((response) => {
      setAccounts(response.data);
    });

    setTransactions([
      { id: 1, description: "Amazon Purchase", amount: -200, date: "2024-01-28" },
      { id: 2, description: "Salary Credit", amount: 5000, date: "2024-01-27" },
      { id: 3, description: "Electricity Bill", amount: -150, date: "2024-01-25" }
    ]);
  }, []);

  return (
    <Container>
      <h2 className="my-4">Dashboard</h2>
      <Row>
        {/* Account Overview Section */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Account Overview</Card.Title>
              {accounts.length > 0 ? (
                accounts.map((account) => (
                  <Card.Text key={account.id}>
                    <strong>{account.name}</strong>: ₹{account.balance}
                  </Card.Text>
                ))
              ) : (
                <p>No accounts found.</p>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Recent Transactions Section */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Recent Transactions</Card.Title>
              <ul>
                {transactions.map((txn) => (
                  <li key={txn.id}>
                    {txn.date} - {txn.description}: ₹{txn.amount}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Quick Actions</Card.Title>
              <Button variant="primary" className="m-2">Transfer Funds</Button>
              <Button variant="success" className="m-2">Pay Bills</Button>
              <Button variant="warning" className="m-2">Download Statement</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
