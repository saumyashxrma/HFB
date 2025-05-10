// src/pages/FundTransfer.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import "./FundTransfer.css";

const FundTransfer = ({ user }) => {
  const [formData, setFormData] = useState({
    fromAccount: "",
    toAccount: "",
    amount: "",
    remarks: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fromAccount || !formData.toAccount || !formData.amount) {
      setMessage("Please fill in all required fields.");
      return;
    }
    
    if (parseFloat(formData.amount) <= 0) {
      setMessage("Amount must be greater than zero.");
      return;
    }
    
    // In a real app, we would call an API here
    setMessage("Transfer successful! Redirecting to dashboard...");
    
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Fund Transfer</h2>
      
      {message && (
        <Alert variant={message.includes("success") ? "success" : "danger"}>
          {message}
        </Alert>
      )}

      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>From Account</Form.Label>
              <Form.Select
                name="fromAccount"
                value={formData.fromAccount}
                onChange={handleChange}
                required
              >
                <option value="">Select your account</option>
                {user?.accounts?.map(account => (
                  <option key={account.id} value={account.number}>
                    {account.type} - {account.number} (₹{account.balance.toLocaleString()})
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>To Account Number</Form.Label>
              <Form.Control
                type="text"
                name="toAccount"
                placeholder="Enter recipient's account number"
                value={formData.toAccount}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount (₹)</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                placeholder="Enter amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Remarks (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="remarks"
                placeholder="Add remarks if any"
                value={formData.remarks}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Transfer Now
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FundTransfer;