import React from 'react';
import './App.css';
import { Row, Col, Button, Card } from "react-bootstrap";
import {  } from "react-router-dom";
import Navigation from './Navigation';


import Jewel1 from './Assets/jewel1.jpg'
import Jewel3 from './Assets/jewel3.jpg'
import Jewel4 from './Assets/jewel4.jpg'

function Jewelry() {
  return (
    <div>
      <Navigation/>
    <h1><b>Jewelry</b></h1> 

<Row>
    <div className="divscarf1">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Jewel1}
            />
            <Card.Body>
              <Card.Title><b>ITEM J1</b></Card.Title>
              <Card.Text>
                small golden brass. 
              </Card.Text>
              
              
            </Card.Body>
          </Card>
        </div>


        
        <div className="divscarf3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Jewel3}
            />
            <Card.Body>
              <Card.Title><b>ITEM J2</b></Card.Title>
              <Card.Text>
                A quick and cheep option for a ring.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
          
        <div className="divscarf4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Jewel4}
            />
            <Card.Body>
              <Card.Title><b>ITEM J3</b></Card.Title>
              <Card.Text>
                show off your favorite person with this lovely neck piece.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>

        
        </Row>   

    </div>
  );
}

export default Jewelry;
