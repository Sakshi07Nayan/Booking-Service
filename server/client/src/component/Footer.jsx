import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Facebook, Twitter, Youtube, Instagram } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="text-uppercase mb-4">Get in Touch</h5>
            <p>Let's Connect and Make Your Vision a Reality. Reach Out Today!</p>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>
              Skin & You Clinic, 115 B Mittal Court, Nariman Point, Mumbai - 21.
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              helpdesk@skinandyou.in
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              +91 99200 33331
            </p>
          </Col>
          <Col md={4}>
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Treatments</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Skin & Faq</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Photogallery</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Blogs</a></li>
              <li><a href="#" className="text-decoration-none text-dark">About us</a></li>
              <li><a href="#" className="text-decoration-none text-dark">How to Prepare for an appointment</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="text-uppercase mb-4">Newsletter</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your Email Address" />
              </Form.Group>
              <Button variant="danger" type="submit">
                SIGN UP
              </Button>
            </Form>
            <h5 className="text-uppercase mt-4 mb-3">Follow Us</h5>
            <div className='d-flex'>
              <a href="#" className="me-2 text-dark"><Facebook size={24} /></a>
              <a href="#" className="me-2 text-dark"><Twitter size={24} /></a>
              <a href="#" className="me-2 text-dark"><Youtube size={24} /></a>
              <a href="#" className="text-dark"><Instagram size={24} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;