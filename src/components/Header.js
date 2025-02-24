import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Tests
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Prime number
            </Nav.Link>
            <Nav.Link as={NavLink} to="/even-odd">
              Even and Odd
            </Nav.Link>
            <Nav.Link as={NavLink} to="/factorial">
              Factorial
            </Nav.Link>
            <Nav.Link as={NavLink} to="/counter">
              Counter
            </Nav.Link>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="To-Do"
                menuVariant="dark"
              >
                <NavDropdown.Item as={NavLink} to="/todo-list">
                  Add To-Do
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/completed-list">
                  Completed List
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
