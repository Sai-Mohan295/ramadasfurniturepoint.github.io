import React from "react";
import { Card, Button } from "react-bootstrap";
import FurLogo from "./FurLogo.png";
import "./products.css";

const Products = () => {
  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="row">
        <div className="col-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={FurLogo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">9999</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={FurLogo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">6999</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={FurLogo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">3999</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={FurLogo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">4999</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;
