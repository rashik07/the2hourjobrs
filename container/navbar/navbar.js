import React from "react";
import DropdownUserMenu from "../../components/DropdownUserMenu";
import { connect } from "react-redux";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const getItems = (isSignedIn) => {
  if (isSignedIn) {
    return (
      <>
        <Nav>
          <NavDropdown title="Jobs" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Post a Job</NavDropdown.Item>
            <NavDropdown.Item href="/jobs/list">Job list</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Workers</Nav.Link>
          <Nav.Link href="#link">Products</Nav.Link>
          <NavDropdown title="Announcements" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Create Announcement
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Announcement list
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              My Announcements
            </NavDropdown.Item>
          </NavDropdown>
          <DropdownUserMenu />
        </Nav>
      </>
    );
  }

  return (
    <Nav>
      <Nav.Link href="/auth/login">Login</Nav.Link>
      <Nav.Link href="/auth/signup">Sign up</Nav.Link>
    </Nav>
  );
};

const CustomNavbar = ({ isSignedIn }) => {
  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src="/img/logo.png" alt="Logo" height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {getItems(isSignedIn)}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(CustomNavbar);
