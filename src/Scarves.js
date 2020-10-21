import React from 'react';
import './App.css';
import { Row, Col, Button, Card } from "react-bootstrap";
import {  } from "react-router-dom";
import Navigation from './Navigation';

import OrangeScarf from './Assets/orangescarf.jpg'
import BlackScarf from './Assets/blackscarf.jpeg'
import BrownScarf from './Assets/brownscarf.jpg'
import BlueScarf from './Assets/bluescarf.jpg'
import GreyScarf from './Assets/greyscarf.jpg'

function Scarves() {
  return (
    <div>
      <Navigation/>
    <h1><b>Scarves</b></h1> 

<Row>
    <div className="divscarf1">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={OrangeScarf}
            />
            <Card.Body>
              <Card.Title><b>ITEM S1</b></Card.Title>
              <Card.Text>
                This light soft scarf is perfect for every winter breeze!
              </Card.Text>
              
              
            </Card.Body>
          </Card>
        </div>

        <div className="divscarf2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={GreyScarf}
            />
            <Card.Body>
              <Card.Title><b>ITEM S2</b></Card.Title>
              <Card.Text>
                THis scarf is long and fluffy and reminds everyone of a perfect fall day
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
              src={BlackScarf}
            />
            <Card.Body>
              <Card.Title><b>ITEM S3</b></Card.Title>
              <Card.Text>
                Your neck is about to relax from this super soft scarf.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
            </Row>

<Row>
        <div className="divscarf4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={BlueScarf}
            />
            <Card.Body>
              <Card.Title><b>ITEM S4</b></Card.Title>
              <Card.Text>
                Large than life. Match your dedication with this great scarf.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>

        <div className="divscarf5">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={BrownScarf}
            />
            <Card.Body>
              <Card.Title><b>ITEM S5</b></Card.Title>
              <Card.Text>
                The new addition to quick knit.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        </Row>   

    </div>
  );
}

export default Scarves;
