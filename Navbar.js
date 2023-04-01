import "./NavbarStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import React from "react";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm" collapseOnSelect>
        <Navbar.Brand
          className="justify-content-between"
          style={{ paddingLeft: "2rem" }}
        >
          <Link className="link" to="/">
            <b>
              <span>R</span>amadas <span>F</span>urniture <span>P</span>oint
            </b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Nav className="mr-auto mx-5">
            <Link className="nav-link" to="/">
              <b>Home</b>
            </Link>
            <Link className="nav-link" to="/products">
              <b>Products</b>
            </Link>
            <Link className="nav-link" to="/about">
              <b>About Us</b>
            </Link>
            <Link className="nav-link" to="/contact">
              <b>Contact Us</b>
            </Link>
          </Nav>
          <Nav className="mx-5">
            <a
              className="nav-link"
              href="https://wa.me/+918978331333"
              target="_blank"
            >
              <FaWhatsapp color="white" size="1.5rem" />
            </a>
            <a
              className="nav-link"
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ramadasfurniturepoint@gmail.com"
              target="_blank"
            >
              <TfiEmail color="white" size="1.5rem" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
