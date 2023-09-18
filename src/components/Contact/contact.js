// import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Particle from "../Particle";
import { useState } from "react";

import Tilt from "react-parallax-tilt";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmitForm = (event) => {
    alert("form submitted");
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setFullName("");
    setDepartment("");
  };
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Contact <strong className="purple">ME</strong>
            </h1>
          </Col>
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            className="about-img circular-image"
          ></Col>
          <Form type="input" onSubmit={handleSubmitForm} value={fullName}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <button className="btn btn-dark">Submit</button>
          </Form>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
