import React from 'react';
import './App.css';
import { Row } from "react-bootstrap";
import {  } from "react-router-dom";
import Navigation from './Navigation';
import Scarf1 from "./Assets/scarf1.JPG";
import Coaster5 from './Assets/coaster5.jpg';
import Blanket4 from './Assets/blanket4.jpg';

function About() {
  return (
    <div>
      <Navigation/>
    <h1>this is the about page</h1> 
    <div className="abouttext"> 
    <h3>Nature Knitter wants to supply you with all your knit and craft needs. Every product we sell is made from hand! We have everyting from scarfs to blankets to beanies to even jewelry! </h3>       
    </div>
    <Row>
      <img src={Coaster5} style={{ width: "26rem", height: "25rem", paddingLeft: "10%"  }} alt=""/>
      <img src={Scarf1} style={{ width: "26rem", height: "25rem", paddingLeft: "10%" }} alt=""/>
      <img src={Blanket4} style={{ width: "26rem", height: "26rem", paddingLeft: "10%"}} alt=""/>

    </Row>
    </div>
  );
}

export default About;
