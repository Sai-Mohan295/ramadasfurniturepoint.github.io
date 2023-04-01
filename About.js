import React from "react";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./products.css";
import CustomerFeedback from "./CustomerFeedback";

const About = () => {
  return (
    <div className="container">
      <h1>Customer Feedback❤️</h1>
      <div className="row justify-content-center ">
        {CustomerFeedback.map((eachFeedback) => {
          const { name, comment } = eachFeedback;
          return (
            <div className="col-3">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Title>
                    5
                    <FaStar color="orange" size="20px" />
                    <FaStar color="orange" size="20px" />
                    <FaStar color="orange" size="20px" />
                    <FaStar color="orange" size="20px" />
                    <FaStar color="orange" size="20px" />
                  </Card.Title>
                  <Card.Text
                    style={{
                      backgroundColor: "lightblue",
                      padding: "1rem",
                      borderRadius: "10px",
                    }}
                  >
                    {comment}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
