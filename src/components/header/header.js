import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../assets/LOGO.png";
import { FaSearch } from "react-icons/fa";
import "./header.css";

export const Header = () => {
  return (
    <div
      style={{ position: "absolute", zIndex: 1000, width: "100%" }}
      className="header"
    >
      <Navbar bg="none" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{ marginTop: "7px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="nav-link">
                Sell
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Marketplace
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Community
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Develop
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Recources
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse>
            <Nav className="me-auto head-sec">
              <Nav.Link href="#home" className="nav-link">
                Login
              </Nav.Link>
              <Button className="header-button">Get Started</Button>
              <FaSearch
                style={{ color: "#272D4E", cursor: "pointer" }}
                size={20}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
