import React from "react";
import Link from "next/link";

const Navbar = ({ page }) => {
  let nav_buttons = "";
  if (page === "landing_page") {
    nav_buttons = (
      <div className="col-md-3 text-end">
        <Link href="/auth/login">
          <button type="button" className="btn btn-outline-primary me-2 mr-3">
            Login
          </button>
        </Link>
        <Link href="/auth/signup">
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </Link>
      </div>
    );
  } else if (page === "other_page") {
    nav_buttons = <div className="col-md-3 text-end"></div>;
  }

  return (
    <header>
      <nav className="navbar navbar-dark bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <a>
              <img src="/img/logo.png" alt="Logo" height={50} />
            </a>
          </Link>
          {nav_buttons}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
