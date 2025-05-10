// src/pages/Loan.jsx
import { useState } from "react";
import { Container, Card, Row, Col, Button, Modal, Form, Alert } from "react-bootstrap";

const Loan = () => {
  const loanProducts = [
    {
      id: 1,
      name: "Home Loan",
      description: "Buy your dream home with our competitive interest rates",
      interest: "8.5%",
      maxAmount: "₹2 Crores"
    },
    {
      id: 2,
      name: "Personal Loan",
      description: "Meet your personal needs with quick approval",
      interest: "11.5%",
      maxAmount: "₹10 Lakhs"
    },
    {
      id: 3,
      name: "Car Loan",
      description: "Drive your dream car with our flexible repayment options",
      interest: "9.0%",
      maxAmount: "₹30 Lakhs"
    },
    {
      id: 4,
      name: "Education Loan",
      description: "Invest in your future with our education financing",
      interest: "8.0%",
      maxAmount: "₹50 Lakhs"
    }
  ];

  // State for modal and form
  const [showModal, setShowModal] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    tenure: "",
    income: "",
    submitted: false
  });
  const [applicationStatus, setApplicationStatus] = useState({});

  const handleShowModal = (loan) => {
    setSelectedLoan(loan);
    setFormData({
      name: "",
      email: "",
      phone: "",
      amount: "",
      tenure: "",
      income: "",
      submitted: false
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLoan(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Loan Application Submitted:", {
      loanType: selectedLoan.name,
      ...formData
    });
    
    // Mark as submitted
    setFormData({ ...formData, submitted: true });
    
    // Update application status for this loan
    setApplicationStatus({
      ...applicationStatus,
      [selectedLoan.id]: "under-verification"
    });
    
    // Close modal after 2 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Loan Products</h2>
      
      <Row>
        {loanProducts.map(loan => (
          <Col md={6} key={loan.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{loan.name}</Card.Title>
                <Card.Text>{loan.description}</Card.Text>
                <div className="mb-3">
                  <p className="mb-1"><strong>Interest Rate:</strong> {loan.interest}</p>
                  <p className="mb-0"><strong>Max Amount:</strong> {loan.maxAmount}</p>
                </div>
                {applicationStatus[loan.id] === "under-verification" ? (
                  <Button variant="secondary" disabled>
                    Under Verification
                  </Button>
                ) : (
                  <Button 
                    variant="primary" 
                    onClick={() => handleShowModal(loan)}
                  >
                    Apply Now
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Application Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedLoan?.name} Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!formData.submitted ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Loan Amount (₹)</Form.Label>
                <Form.Control
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                  min="10000"
                  max={selectedLoan?.name === "Home Loan" ? 200000000 : 
                      selectedLoan?.name === "Car Loan" ? 3000000 :
                      selectedLoan?.name === "Education Loan" ? 5000000 : 1000000}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Preferred Tenure (years)</Form.Label>
                <Form.Control
                  type="number"
                  name="tenure"
                  value={formData.tenure}
                  onChange={handleInputChange}
                  required
                  min="1"
                  max="30"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Annual Income (₹)</Form.Label>
                <Form.Control
                  type="number"
                  name="income"
                  value={formData.income}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Submit Application
              </Button>
            </Form>
          ) : (
            <Alert variant="success" className="text-center">
              <h4>Thank You!</h4>
              <p>Your {selectedLoan?.name} application has been submitted successfully.</p>
              <p>Our team will verify your details and contact you shortly.</p>
            </Alert>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Loan;