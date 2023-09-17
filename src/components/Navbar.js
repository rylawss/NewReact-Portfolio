import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiFillPhone } from "react-icons/ai";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Home/Projects";
import Contact from "./Contact/contact";

function NavBar(props) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <button
                onClick={() => {
                  updateExpanded(false);
                  props.setScreen(<Home />);
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </button>
            </Nav.Item>
            <Nav.Item>
              <button
                onClick={() => {
                  updateExpanded(false);
                  props.setScreen(<Projects />);
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Projects
              </button>
            </Nav.Item>
            <Nav.Item>
              <button
                onClick={() => {
                  updateExpanded(false);
                  props.setScreen(<About />);
                }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </button>
            </Nav.Item>

            <Nav.Item>
              <button
                as={Link}
                to="/contact me"
                onClick={() => {
                  updateExpanded(false);
                  props.setScreen(<Contact />);
                }}
              >
                <AiFillPhone style={{ marginBottom: "2px" }} /> Contact Me
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
