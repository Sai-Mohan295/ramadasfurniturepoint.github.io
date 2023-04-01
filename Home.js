import React from "react";
import furlogo from "./FurLogo.png";
import ramadas2 from "./ramadas2.avif";
import { Button } from "react-bootstrap";
import ramadasshop from "./ramadasshop.jpg";

const Home = () => {
  return (
    <div className="container-fluid">
      <h1>RAMADAS FURNITURE POINT</h1>
      <h2>A House of world class furniture</h2>
      <h5>Vepagunta, Visakhapatnam</h5>

      <img
        style={{ borderRadius: "10px" }}
        src={ramadasshop}
        alt="logo"
        width="300px"
        height="240px"
      />
      <img
        src={furlogo}
        alt="logo"
        width="230px"
        height="180px"
        style={{ marginLeft: "15px" }}
      />
      <img
        style={{ borderRadius: "10px", marginLeft: "15px" }}
        src={ramadas2}
        alt="logo"
        width="340px"
        height="240px"
      />
      <p
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 0 10px 1px gray",
        }}
      >
        <b>7-268, Varalakshmi Nagar, Vepagunta, Visakhapatnam</b>{" "}
      </p>
      <a
        className="nav-link"
        href="https://wa.me/+918978331333"
        target="_blank"
        rel="noreferrer"
      >
        <Button
          style={{ marginLeft: "-30px", marginBottom: "10rem" }}
          variant="success"
        >
          Whatsapp Chat
        </Button>
      </a>
    </div>
  );
};

export default Home;
