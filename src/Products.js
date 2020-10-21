import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Row} from "react-bootstrap";
import { } from "react-router-dom";
import Navigation from "./Navigation";
import Customs from './Customs.js'

import Scarves from "./Assets/scarves.jpg";
import Beanies from "./Assets/beanies.jpg";
import Blankets from "./Assets/blankets.jpg";
import Magnets from "./Assets/magnet.jpg";
import Khandi from "./Assets/khandi.jpg";
import Coasters from "./Assets/coasters.jpeg";
import Jewelry from "./Assets/jewelry.jpg";


function Products() {
  return (
    <div>
      <Navigation />
        <div className="products">
      <Row>
          <div className="innerspace">
            <h1>
              <b>Shop Our Products</b>
            </h1>
          </div>
             
              <Customs/>
        </Row>

        <div className="knits">
          <h1>Knits</h1>
        </div>
      </div>
      <Row>
        <div className="divrow1">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              style={{ width: "20rem", height: "22rem" }}
              variant="top"
              src={Scarves}
            />
            <Card.Body>
              <Card.Title>Scarves</Card.Title>
              <Card.Text>
                Shop are soft, long, and beautiful scarves to keep your neck
                warm!
              </Card.Text>
              <a href="Scarves">
              <Button variant="outline-danger">Shop Scarves</Button>
              </a>
            </Card.Body>
          </Card>
        </div>

        <div className="divrow2">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              style={{ width: "20rem", height: "22rem" }}
              variant="top"
              src={Beanies}
            />
            <Card.Body>
              <Card.Title>Beanies</Card.Title>
              <Card.Text>
                Shop our cute and fuzzy beanies. Do your head a favor, keep it
                warm!
              </Card.Text>
              <a href="Beanies">
              <Button variant="outline-danger">Shop Beanies</Button>{" "}
           </a>
            </Card.Body>
          </Card>
        </div>

        <div className="divrow3">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              style={{ width: "20 rem", height: "22rem" }}
              variant="top"
              src={Blankets}
            />
            <Card.Body>
              <Card.Title>Blankets</Card.Title>
              <Card.Text>
                Shop our long and soft blankets. Get cozy this season!
              </Card.Text>
              <a href="Blankets">
              <Button variant="outline-danger">Shop Blankets</Button>{" "}
            </a>
            </Card.Body>
          </Card>
        </div>
      </Row>
      <div className="lineHorizontal"></div>

      <div className="beeds">
        <h1>Beeds</h1>
      </div>

      <Row>
        <div className="divrow4">
          <Card style={{ width: "16rem" }}>
            <Card.Img
              style={{ width: "16rem", height: "20rem" }}
              variant="top"
              src={Coasters}
            />
            <Card.Body>
              <Card.Title>Coasters</Card.Title>
              <Card.Text>
                Check out our new hand crafted beverage coasters! get new and trendy designs. 
              </Card.Text>
              <a href="Coasters">
              <Button variant="outline-danger">Shop Coasters</Button>{" "}
            </a>
            </Card.Body>
          </Card>
        </div>

        <div className="divrow5">
          <Card style={{ width: "16rem" }}>
            <Card.Img
              style={{ width: "16rem", height: "20rem" }}
              variant="top"
              src={Magnets}
            />
            <Card.Body>
              <Card.Title>Magnets</Card.Title>
              <Card.Text>
                Wondering what's pulling you toward this section? Check out our new line of magnets!
              </Card.Text>
              <a href="Magnets">
              <Button variant="outline-danger">Shop Magnets</Button>{" "}
           </a>
            </Card.Body>
          </Card>
        </div>

        <div className="divrow6">
          <Card style={{ width: "16rem" }}>
            <Card.Img
              style={{ width: "16rem", height: "20rem" }}
              variant="top"
              src={Jewelry}
            />
            <Card.Body>
              <Card.Title>Jewelry</Card.Title>
              <Card.Text>
                Shop our wide selection of earings, necklaces, and bracelets.
              </Card.Text>
              <a href="Jewelry">
              <Button variant="outline-danger">Shop Jewelry</Button>{" "}
            </a>
            </Card.Body>
          </Card>
        </div>

        <div className="divrow7">
          <Card style={{ width: "16rem" }}>
            <Card.Img
              style={{ width: "16rem", height: "20rem" }}
              variant="top"
              src={Khandi}
            />
            <Card.Body>
              <Card.Title>Rave Kandi</Card.Title>
              <Card.Text>
                At last! The time has come to show your true self through our wide selection of kandi!
              </Card.Text>
              <a href="Kandi">
              <Button variant="outline-danger">Shop Kandi</Button>{" "}
           </a>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </div>
  );
}

export default Products;
