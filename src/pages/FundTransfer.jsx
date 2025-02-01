import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FundTransfer.css"; 

const FundTransfer = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fromAccount: "",
    toAccount: "",
    amount: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fromAccount || !formData.toAccount || !formData.amount) {
      setMessage("Please fill in all fields.");
      return;
    }
    
    setMessage("Transfer Successful! 🎉");
    
    setTimeout(() => {
      navigate("/accounts");
    }, 2000);
  };

  return (
    <Container className="fund-transfer-container">
      <h2 className="text-center">Fund Transfer</h2>
      
      {message && <Alert variant="success">{message}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fromAccount">
          <Form.Label>From Account</Form.Label>
          <Form.Control
            type="text"
            name="fromAccount"
            placeholder="Enter your account number"
            value={formData.fromAccount}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="toAccount">
          <Form.Label>To Account</Form.Label>
          <Form.Control
            type="text"
            name="toAccount"
            placeholder="Enter recipient’s account number"
            value={formData.toAccount}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="success" type="submit" className="mt-3">
          Transfer Funds
        </Button>
      </Form>
    </Container>
  );
};

export default FundTransfer;
