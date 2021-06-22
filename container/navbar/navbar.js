import React from "react";
import DropdownUserMenu from "../../components/DropdownUserMenu";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const regularOptions = (router, isSignedIn) => {
  return (
    <>
      <NavDropdown title="Jobs" id="basic-nav-dropdown">
        <NavDropdown.Item
          disabled={!isSignedIn}
          onClick={() => router.push("/jobs/post")}
        >
          Post a Job
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => router.push("/jobs/list")}>
          Job list
        </NavDropdown.Item>
        <NavDropdown.Item
          disabled={!isSignedIn}
          onClick={() => router.push("/jobs/saved")}
        >
          Saved Jobs
        </NavDropdown.Item>
        <NavDropdown.Item
          disabled={!isSignedIn}
          onClick={() => router.push("/jobs/applied")}
        >
          Applied Jobs
        </NavDropdown.Item>
        <NavDropdown.Item
          disabled={!isSignedIn}
          onClick={() => router.push("/jobs/self_posted_jobs")}
        >
          My Posted Jobs
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Workers" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={() => router.push("/worker/list")}>
          Worker list
        </NavDropdown.Item>
        <NavDropdown.Item
          disabled={!isSignedIn}
          onClick={() => router.push("/worker/saved")}
        >
          Saved Worker list
        </NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="#link">Products</Nav.Link>
      <NavDropdown title="Announcements" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">
          Create Announcement
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          Announcement list
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">My Announcements</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

const getItems = (isSignedIn, router) => {
  if (isSignedIn) {
    return (
      <>
        <Nav>
          {regularOptions(router, isSignedIn)}
          <DropdownUserMenu router={router} />
        </Nav>
      </>
    );
  }

  return (
    <Nav>
      {regularOptions(router, isSignedIn)}

      <Nav.Link href="#" onClick={() => router.push("/auth/login")}>
        Login
      </Nav.Link>
      <Nav.Link href="#" onClick={() => router.push("/auth/signup")}>
        Sign up
      </Nav.Link>
    </Nav>
  );
};

const CustomNavbar = ({ isSignedIn }) => {
  const router = useRouter();

  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={() => router.push("/")} href="#">
          <img src="/img/logo.png" alt="Logo" height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {getItems(isSignedIn, router)}
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
