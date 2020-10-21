import React from 'react';
import './App.css';
import { Row, Col, Button, Card } from "react-bootstrap";
import {  } from "react-router-dom";
import Navigation from './Navigation';

import Coaster1 from './Assets/coaster1.jpg'
import Coaster2 from './Assets/coaster2.jpg'
import Coaster3 from './Assets/coaster3.jpg'
import Coaster4 from './Assets/coaster4.jpg'
import Coaster5 from './Assets/coaster5.jpg'
import Coaster6 from './Assets/coaster6.jpg'


function Coasters() {
  return (
    <div>
      <Navigation/>
    <h1><b>Coasters</b></h1> 

<Row>
    <div className="divscarf1">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Coaster1}
            />
            <Card.Body>
              <Card.Title><b>ITEM C1</b></Card.Title>
              <Card.Text>
                Stylish and snazzy. 
              </Card.Text>
              
              
            </Card.Body>
          </Card>
        </div>

        <div className="divscarf2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Coaster2}
            />
            <Card.Body>
              <Card.Title><b>ITEM C2</b></Card.Title>
              <Card.Text>
                old school function and fashion.
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
              src={Coaster3}
            />
            <Card.Body>
              <Card.Title><b>ITEM C3</b></Card.Title>
              <Card.Text>
                A modern take on a classic coaster.
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
              src={Coaster4}
            />
            <Card.Body>
              <Card.Title><b>ITEM C4</b></Card.Title>
              <Card.Text>
                Keep that drink in nature with these coasters.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>

        <div className="divscarf5">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Coaster5}
            />
            <Card.Body>
              <Card.Title><b>ITEM C5</b></Card.Title>
              <Card.Text>
                Another great look at wooden coasters.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>

        <div className="divscarf5">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem", height: "22rem" }}
              variant="top"
              src={Coaster6}
            />
            <Card.Body>
              <Card.Title> <b>ITEM C5</b></Card.Title>
              <Card.Text>
                Clean and thin modern coasters.
              </Card.Text>
             
            </Card.Body>
          </Card>
        </div>
        </Row>   

    </div>
  );
}

export default Coasters;
