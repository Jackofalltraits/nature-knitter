import React,{useState, customShow} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import {Button, Modal} from "react-bootstrap";
import { } from "react-router-dom";

function Customs(){

const [customShow, setCustomShow] = useState(false);
return(
    <div>
<Button variant="outline-success" size="sm" style={{ width: "11.7rem", height: "2rem" }}
 onClick={() => setCustomShow(true)} className="learnbuttons1" >Customize Your Order</Button>{' '}


<Modal
        size="lg"
        show={customShow}
        onHide={() => setCustomShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Customize My Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfKRnVXsaTuANHoRWaeQRxbGICou1DwgGriRnKqGyp9QrFykw/viewform?embedded=true" width="640" height="867" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></Modal.Body>
      </Modal>
      </div>
)}

export default Customs;