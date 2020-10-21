import React from "react";
import "./App.css";
import { Button, Col, Row, Form } from "react-bootstrap";
import {} from "react-router-dom";
import Navigation from "./Navigation";



function Contact() {
    return (
        <div>
        <Navigation />
        <h2>Fill Out The Form And We Will Contact You Soon</h2>
        <div className="contact">
        <Form>
        <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Name
    </Form.Label>
    <Col sm="5">
      <Form.Control type="Name" placeholder="Name" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="5">
      <Form.Control type="Email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Message
    </Form.Label>
    <Col sm="5">
    <Form.Control as="textarea" rows="3" />
    </Col>
  </Form.Group>
        <div className="submit">
        <Button variant="outline-info">Submit</Button>{' '}
        </div>
</Form>
</div>


    </div>
  );
}

export default Contact;
