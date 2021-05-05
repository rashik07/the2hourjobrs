import React from "react";

const sidebar = () => {
  return (
    <div
      className="d-flex flex-column p-3 text-white bg-dark"
      style={{ minHeight: "100%" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none  border-bottom"
      >
        <span className="fs-4">My Profile</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="../../Profile/Profile_info" className="nav-link active">
            <i className="fas fa-users" />
            Personal Info
          </a>
        </li>
        <li>
          <a
            href="../../Profile/Career_application"
            className="nav-link text-white"
          >
            <i className="fas fa-tools" />
            Career &amp; Application
          </a>
        </li>
        <li>
          <a href="../../Profile/Education" className="nav-link text-white">
            <i className="fas fa-university" />
            Education
          </a>
        </li>
        <li>
          <a href="../../Profile/Employment" className="nav-link text-white">
            <i className="fas fa-laptop-house" />
            Employment
          </a>
        </li>
        <li>
          <a href="../../Profile/Portfolio" className="nav-link text-white">
            <i className="fas fa-border-none" />
            Portfolio
          </a>
        </li>
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none  border-bottom"
        >
          <span className="fs-4">My Profile View</span>
        </a>
        <hr />
        <li>
          <a href="../../Profile/Setting" className="nav-link text-white">
            <i className="fas fa-cogs" />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default sidebar;
