import React from 'react';
import './App.css';
import { Row, Col, Button, Card } from "react-bootstrap";
import {  } from "react-router-dom";
import Navigation from './Navigation';

import Hat1 from './Assets/hat1.jpg'
import Hat2 from './Assets/hat2.jpg'
import Hat3 from './Assets/hat3.jpg'
import Hat4 from './Assets/hat4.jpg'

function Beanies() {
  return (
    <div>
      <Navigation/>
    <h1><b>Beanies</b></h1> 

<Row>
    <div className="divscarf1">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Hat1}
            />
            <Card.Body>
              <Card.Title><b>ITEM H1</b></Card.Title>
              <Card.Text>
                Keep your face and brain warm with this smart look
              </Card.Text>
              
              
            </Card.Body>
          </Card>
        </div>

        <div className="divscarf2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Hat2}
            />
            <Card.Body>
              <Card.Title><b>ITEM H2</b></Card.Title>
              <Card.Text>
                A thick beanie for all the hard winter nights.
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
              src={Hat3}
            />
            <Card.Body>
              <Card.Title><b>ITEM H3</b></Card.Title>
              <Card.Text>
                A thin stich for the lighter day.
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
              src={Hat4}
            />
            <Card.Body>
              <Card.Title><b>ITEM H4</b></Card.Title>
              <Card.Text>
                The perfect addition to winter outfit.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
</Row>
    </div>
  );
}

export default Beanies;

