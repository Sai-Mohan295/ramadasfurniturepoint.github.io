import React from "react";
import { Card, Button } from "react-bootstrap";
import FurLogo from "./FurLogo.png";

const Contact = () => {
  return (
    <div className="container-fluid" style={{ justifyContent: "center" }}>
      <div className="row justify-content-center">
        <h3>Paid Home Delivery Available🎉</h3>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={FurLogo} />
          <Card.Body>
            <Card.Title>Location :</Card.Title>
            <Card.Text>
              7-268, Varalakshmi Nagar, Vepagunta, Visakhapatnam
            </Card.Text>
            <a
              className="nav-link"
              href="https://wa.me/+918978331333"
              target="_blank"
            >
              <Button style={{ marginLeft: "-30px" }} variant="success">
                Whatsapp Chat
              </Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
