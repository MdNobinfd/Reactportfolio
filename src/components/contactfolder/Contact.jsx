import React from "react";
import "./contact.css";
import ScrollToTop from "react-scroll-to-top";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import Headingreuseable from "../../rootreusable/Headingreuseable";
import contact1 from "../../assets/contact1.png";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <Container>
          <Row className="contact_heading justify-content-center text-center">
            <Col lg={5}>
              <Headingreuseable headsub="CONTACT" headtitle="Contact With Me" />
              <ScrollToTop smooth />
            </Col>
          </Row>
          <div className="fotter_contact">
            <Row>
              <Col lg={5}>
                <div className="contact_left">
                  <div className="contact_left_img">
                    <img src={contact1} alt="" />
                  </div>
                  <div className="contact_left_content">
                    <h3>Nevine Acotanza</h3>
                    <h6>Chief Operating Officer</h6>
                    <p>
                      I am available for freelance work. Connect with me via and
                      call in to my account.
                    </p>
                    <span className="d-block">
                      Phone:<a href="#">+8801749094255</a>
                    </span>
                    <span className="d-block">
                      Email:<a href="#">mdnobin.fdr@gmail.com</a>
                    </span>
                  </div>
                  <div className="contact_left_icon">
                    <h6>FIND WITH ME</h6>
                    <a href="#">
                      <FiFacebook />
                    </a>
                    <a href="#">
                      <FiLinkedin />
                    </a>
                    <a href="#">
                      <FiInstagram />
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={{ span: 6, offset: 1 }}>
                <div className="contact_right">
                  <Form>
                    <Row className="mb-3">
                      <Col lg={6}>
                        <Form.Group controlId="formGridText">
                          <Form.Label>YOUR NAME</Form.Label>
                          <Form.Control type="text" required />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group controlId="formGridText">
                          <Form.Label>PHONE NUMBER</Form.Label>
                          <Form.Control type="text" required />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>SUBJECT</Form.Label>
                      <Form.Control required />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" style={{ height: '200px' }} />
                    </Form.Group>
                    <Button type="submit">
                      SEND MESSAGE
                      <span>
                        <FaArrowRight />
                      </span>
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
          <div className="fotter_border"></div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
