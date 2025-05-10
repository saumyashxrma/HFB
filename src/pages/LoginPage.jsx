// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      if (username && password) {
        // Mock user data
        const user = {
          id: 1,
          name: "Saumya",
          email: "Saumya@gmail.com",
          accounts: [
            { id: 1, type: "Savings", balance: 50000, number: "1234567890" },
            { id: 2, type: "Current", balance: 120000, number: "0987654321" }
          ],
          transactions: [
            { id: 1, description: "Abhigyan", amount: 20000, date: "2025-11-05" },
            { id: 2, description: "Salary Credit", amount: 5000, date: "2024-01-27" },
            { id: 3, description: "Electricity Bill", amount: -150, date: "2024-01-25" }
          ]
        };
        onLogin(user);
        navigate("/dashboard");
      } else {
        setError("Please enter both username and password");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login to Hind Funds Bank</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </Form.Group>
          
          <Button 
            variant="primary" 
            type="submit" 
            className="w-100 mb-3"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form>
        
        <div className="text-center mt-4">
          <p>Don't have an account? <Button variant="link" onClick={() => navigate("/register")}>Register here</Button></p>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;