// import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import logohfb from "../assets/logohfb.png";

// const NavBar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           <img
//             src={logohfb}
//             alt="Hind Funds Bank Logo"
//             width="30"
//             height="30"
//             className="d-inline-block align-top me-2"
//           />
//           HIND FUNDS BANK
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            
//             <NavDropdown title="Accounts" id="accounts-dropdown">
//               <NavDropdown.Item as={Link} to="/manage-accounts">
//                 Manage Accounts
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/fund-transfer">
//                 Fund Transfer
//               </NavDropdown.Item>
//             </NavDropdown>

//             <NavDropdown title="Services" id="services-dropdown">
//               <NavDropdown.Item as={Link} to="/personal-banking">
//               Personal Banking
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/loans">
//                 Loans
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/investments">
//                 Investments
//               </NavDropdown.Item>
//             </NavDropdown>

//             <Nav.Link as={Link} to="/login">Login</Nav.Link>
//             <Nav.Link as={Link} to="/register">Register</Nav.Link>
//             <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;
// src/components/NavBar.jsx
// src/components/NavBar.jsx
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const NavBar = ({ isLoggedIn, onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Hind Funds Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <NavDropdown title="Accounts" id="accounts-dropdown">
                  <NavDropdown.Item as={Link} to="/fund-transfer">Fund Transfer</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/manage-accounts">Manage Accounts</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Services" id="services-dropdown">
                  <NavDropdown.Item as={Link} to="/personal-banking">Personal Banking</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/investment">Investment</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/loan">Loan</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
          {isLoggedIn && (
            <Nav>
              <Nav.Link onClick={onLogout}>Logout</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;