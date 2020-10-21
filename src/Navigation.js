import React, {useState, render, setShow, show} from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { Badge, Nav, Navbar, Button, Modal, Row, Col, Toast } from "react-bootstrap";
import Logo from "./Assets/nklogo.png";
import Cart from "./Assets/cart.png";
import Facebook from "./Assets/facebook.png";
import Insta from "./Assets/insta.png";
//import Patrion from "./Assets/patrion.png";
import Products from "./Products.js"


function Navigation() {
  return (
    <div>
      <div id="nav">
        <BrowserRouter>
          <Navbar className="color-nav" variant="light">
            <a href="/">
              <img
                alt=""
                style={{ width: "6rem", height: "2.8rem" }}
                src={Logo}
              ></img>
            </a>
            <Nav>
              <div className="prodbutt">
                <a href='products'>
                  <Button variant="light"  style={{ width: "6rem", height: "2.8rem" }}>Products</Button>
                  </a>
              </div>
            </Nav>
            <div class="divider" />

            <Nav>
              <div className="contactbutt">
              <a href='contactus'>
                  <Button variant="light" style={{ width: "6.5rem", height: "2.8rem" }}>Contact Us</Button>
                </a>
              </div>
            </Nav>

            <Nav>
              <div className="aboutbutt">
              <a href='about'>
                  <Button variant="light" style={{ width: "6rem", height: "2.8rem" }}>About</Button>
                </a>
              </div>
            </Nav>

            <Nav>
            <div className="cartbutt">
              <a href='checkout'>
          <Button variant="light" style={{ width: "7.8rem" , height: "2.8rem"}}>
                Checkout 
                </Button>
                </a>
              </div>     
            </Nav>

            <Nav>
              <div className="face">
              <a href="https://www.facebook.com/NatureKnitter" roundedCircle>
                <img
                  alt=""
                  style={{ width: "3rem", height: "2.8rem" }}
                  src={Facebook}
                ></img></a>
              </div>
              <div className="insta">
                <a href="https://www.instagram.com/nature.knitterr/?hl=en">
                <img
                  alt=""
                  style={{ width: "3rem", height: "2.8rem" }}
                  src={Insta}
                ></img></a>
              </div>
              {/* <div className="patrion">
                <a href="https://www.patreon.com/?utm_source=mi_google&utm_campaign=prospecting_brand_Brand_LAL_Patreon_Nameplate_Exact&utm_term=patreon&utm_medium=cpc&utm_content=467371055949&gclid=CjwKCAjw2dD7BRASEiwAWCtCb0P-LLr6_JGnhIkkr6a4I-ev0rfiYmfm2HImt1DvOagotGxf4bhH2RoCXtwQAvD_BwE">
                <img
                  alt=""
                  style={{ width: "4.6rem", height: "2.8rem" }}
                  src={Patrion}
                ></img>
                </a>
              </div> */}
            </Nav>
          </Navbar>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Navigation;
