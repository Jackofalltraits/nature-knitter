import React from 'react';
import './App.css';
import { Row, Col, Button, Card } from "react-bootstrap";
import {  } from "react-router-dom";
import Navigation from './Navigation';

import Blanket1 from './Assets/blanket1.jpg'
import Blanket2 from './Assets/blanket2.jpg'
import Blanket3 from './Assets/blanket3.png'
import Blanket4 from './Assets/blanket4.jpg'
import Blanket5 from './Assets/blanket5.jpg'

function Blankets() {
  return (
    <div>
      <Navigation/>
    <h1><b>Blankets</b></h1> 

<Row>
    <div className="divscarf1">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Blanket1}
            />
            <Card.Body>
              <Card.Title><b>ITEM B1</b></Card.Title>
              <Card.Text>
               Perfect for cuddling up by the fire.
              </Card.Text>
              
              
            </Card.Body>
          </Card>
        </div>

        <div className="divscarf2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Blanket2}
            />
            <Card.Body>
              <Card.Title><b>ITEM B2</b></Card.Title>
              <Card.Text>
                Keep warm and cozy every night.
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
              src={Blanket3}
            />
            <Card.Body>
              <Card.Title><b>ITEM B3</b></Card.Title>
              <Card.Text>
                A lighter touch to keep you warm.
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
              src={Blanket4}
            />
            <Card.Body>
              <Card.Title><b>ITEM B4</b></Card.Title>
              <Card.Text>
                 soft, long, and beautiful for every occasion.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>

        <div className="divscarf5">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Blanket5}
            />
            <Card.Body>
              <Card.Title><b>ITEM B5</b></Card.Title>
              <Card.Text>
                Shop are soft, long, and beautiful scarves to keep your neck
                warm!
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
        </Row>   

    </div>
  );
}

export default Blankets;
