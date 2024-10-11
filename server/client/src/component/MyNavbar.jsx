import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../App.css'; // Import the custom CSS for hover effects
import logo from '../assets/images (1).jpg'; // Assuming you have this logo

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      {/* Navbar Brand (Logo) */}
      <Navbar.Brand href="#">
        <img src={logo} alt="logo" className="img-fluid" style={{ height: '60px' }} />
      </Navbar.Brand>

      {/* Navbar toggler for mobile view */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className="px-3">HOME</Nav.Link>

          {/* TREATMENT Dropdown */}
          <NavDropdown title="TREATMENT" id="treatmentDropdown" className="px-3">
            <NavDropdown.Item href="/">Face Treatment</NavDropdown.Item>
            <NavDropdown.Item href="/">Body Treatment</NavDropdown.Item>
            <NavDropdown.Item href="/">Hair Treatment</NavDropdown.Item>
          </NavDropdown>

          {/* TREATMENT BY CONCERN Dropdown */}
          <NavDropdown title="TREATMENT BY CONCERN" id="concernDropdown" className="px-3">
            <NavDropdown.Item href="/">Skin Problem</NavDropdown.Item>
            <NavDropdown.Item href="/">Nails Problem</NavDropdown.Item>
            <NavDropdown.Item href="/">Hair Root Problem</NavDropdown.Item>
            <NavDropdown.Item href="/">Body Slimming</NavDropdown.Item>
          </NavDropdown>

          {/* MEDIA Dropdown */}
          <NavDropdown title="MEDIA" id="mediaDropdown" className="px-3">
            <NavDropdown.Item href="/">Articles</NavDropdown.Item>
            <NavDropdown.Item href="/">Blog</NavDropdown.Item>
            <NavDropdown.Item href="/">Gallery</NavDropdown.Item>
          </NavDropdown>

          {/* CONTACT */}
          <Nav.Link href="/" className="px-3">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
