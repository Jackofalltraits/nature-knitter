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

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSedZmdASemQ_-xZlKebnW_aTgMwHdN8784eejI9Kxzr7VNF8A/viewform?embedded=true" width="640" height="1305" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

    </div>
  );
}

export default Home;
