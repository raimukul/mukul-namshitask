import React from "react";
import Logo from "../components/assets/square-image-svgrepo-com.svg";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { MdOutlineSupportAgent, MdAddShoppingCart } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Navbar className="header-bg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Ptopia 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">
                Contact Us
                <MdOutlineSupportAgent />{" "}
              </Nav.Link>
              <Nav.Link href="/cart">
                Cart <MdAddShoppingCart />
              </Nav.Link>
              <Nav.Link href="/">
                <FaUserAlt /> My Account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
