import React from 'react';
import './App.css';
import { Row, Col, Button, Card } from "react-bootstrap";
import {  } from "react-router-dom";
import Navigation from './Navigation';

import Magnet1 from './Assets/magnet1.jpg'
import Magnet2 from './Assets/magnet2.webp'
import Magnet3 from './Assets/magnet3.jpg'
import Magnet4 from './Assets/magnet4.jpg'

function Magnets() {
  return (
    <div>
      <Navigation/>
    <h1><b>Magnets</b></h1> 

<Row>
    <div className="divscarf1">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Magnet1}
            />
            <Card.Body>
              <Card.Title><b>ITEM M1</b></Card.Title>
              <Card.Text>
                show state pride.
              </Card.Text>
              
              
            </Card.Body>
          </Card>
        </div>

        <div className="divscarf2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Magnet2}
            />
            <Card.Body>
              <Card.Title><b>ITEM M2</b></Card.Title>
              <Card.Text>
                as fun to display and play with.
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
              src={Magnet3}
            />
            <Card.Body>
              <Card.Title><b>ITEM M3</b></Card.Title>
              <Card.Text>
                get your chomp on.
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
              src={Magnet4}
            />
            <Card.Body>
              <Card.Title><b>ITEM M4</b></Card.Title>
              <Card.Text>
                Time to spell magnets. 
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>

        
        </Row>   

    </div>
  );
}

export default Magnets;
