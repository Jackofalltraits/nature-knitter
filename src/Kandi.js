import React from 'react';
import './App.css';
import { Row, Col, Button, Card } from "react-bootstrap";
import {  } from "react-router-dom";
import Navigation from './Navigation';

import Kandi1 from './Assets/kandi1.jpg'
import Kandi2 from './Assets/kandi2.jpg'
import Kandi3 from './Assets/kandi3.jpg'

function Kandi() {
  return (
    <div>
      <Navigation/>
    <h1><b>Rave Kandi</b></h1> 

<Row>
    <div className="divscarf1">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Kandi1}
            />
            <Card.Body>
              <Card.Title><b>ITEM K1</b></Card.Title>
              <Card.Text>
                Show off positive vibes.
              </Card.Text>
              
              
            </Card.Body>
          </Card>
        </div>

        <div className="divscarf2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Kandi2}
            />
            <Card.Body>
              <Card.Title><b>ITEM K2</b></Card.Title>
              <Card.Text>
                Light and fun for the wrist.
              </Card.Text>
              <Row>
              
              </Row>
            </Card.Body>
          </Card>
        </div>


        <div className="divscarf3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Kandi3}
            />
            <Card.Body>
              <Card.Title><b>ITEM K3</b></Card.Title>
              <Card.Text>
                Simple and colorful for any occasion. 
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
            </Row>

    </div>
  );
}

export default Kandi;
