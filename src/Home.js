import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Row } from "react-bootstrap";
import Scarf1 from "./Assets/scarf1.JPG";
import Scarf2 from "./Assets/scarf2.JPG";
import Scarf3 from "./Assets/scarf3.JPG";
import Logo from "./Assets/nklogo.png";

import {Button} from "react-bootstrap";
import { } from "react-router-dom";
import Navigation from './Navigation';
function Home() {
  return (
    <div className="home">
    <Navigation/>

<Row>
<div className="homespace">    
    <img alt="" style={{ width: "32rem", height: "15rem" }} src={Logo} ></img>
    </div>
    <div className="homeproducts">
    <a href="Products">
    <Button variant="outline-success" size="sm" style={{ width: "12rem", height: "2rem" }}>
      <b>Shop Products</b>
    </Button>
    </a>
    </div>
    </Row>
  
      <div className="caro">
        <Carousel>
          <Carousel.Item>
            <img
              className="scarfa"
              src={Scarf1}
              width={800}
              height={500}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="scarfb"
              src={Scarf2}
              width={800}
              height={500}
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="scarfc"
              src={Scarf3}
              width={800}
              height={500}
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
