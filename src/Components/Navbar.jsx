import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarItem = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">News</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className=" d-flex   justify-content-around"
            style={{ width: "140px" }}
          >
            <Nav.Item>
              {" "}
              <Link to="/" className="Links__items">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/Contact" className="Links__items">
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarItem;
