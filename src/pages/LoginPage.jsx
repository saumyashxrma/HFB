import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { loginUser } from "../services/authService";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials!");
    }
  };

  // Handle Forgot Password
  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Mock reset password action (Replace with API later)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === credentials.email);

    if (userExists) {
      setResetMessage("A password reset link has been sent to your email.");
      setError("");
    } else {
      setError("No account found with this email.");
      setResetMessage("");
    }
  };

  return (
    <Container className="mt-4">
      <h2>{forgotPassword ? "Forgot Password" : "Login"}</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {resetMessage && <Alert variant="success">{resetMessage}</Alert>}

      <Form onSubmit={forgotPassword ? handleForgotPassword : handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {!forgotPassword && (
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
        )}

        <Button variant="primary" type="submit" className="w-100">
          {forgotPassword ? "Reset Password" : "Login"}
        </Button>
      </Form>

      {/* Forgot Password & Register Links */}
      <div className="mt-3 text-center">
        {!forgotPassword ? (
          <>
            <p>
              <Button variant="link" onClick={() => setForgotPassword(true)}>
                Forgot Password?
              </Button>
            </p>
            <p>
              New user? <Link to="/register">Register here</Link>
            </p>
          </>
        ) : (
          <p>
            <Button variant="link" onClick={() => setForgotPassword(false)}>
              Back to Login
            </Button>
          </p>
        )}
      </div>
    </Container>
  );
};

export default LoginPage;
