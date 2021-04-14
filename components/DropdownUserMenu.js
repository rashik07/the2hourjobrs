import React, { Component } from "react";
import Link from "next/link";
import Avatar from "react-avatar";
import { NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { signOut } from "../redux/actions/authAction";

//ref : https://bit.dev/arryombre/ui/allure/navbar-dropdown-user/~code

class DropdownUserMenu extends Component {
  render() {
    return (
      <ul className="mt0 mb0 pr15 pull-right">
        <NavDropdown
          id="user-menu-dropdown"
          className="user-menu"
          title={
            <Avatar
              email={this.props.email}
              name={this.props.name}
              className="mr5"
              size={30}
              round="25px"
              src="https://pbs.twimg.com/media/EuCl5URUUAIenYm.jpg"
            />
          }
        >
          <li className="user-footer text-center">
            <div className="clearfix">
              <div className="btn-group">
                <a href="#" className="btn btn-sm btn-default">
                  <i className="fa fa-user" /> Profile
                </a>
              </div>
              <br />
              <div className="btn-group">
                <a href="#" className="btn btn-sm btn-default">
                  <i className="fa fa-cogs" /> Settings
                </a>
              </div>
              <br />
              <a
                onClick={() => this.props.signOut()}
                className="btn btn-sm btn-danger"
              >
                <i className="fa fa-power-off" /> Logout
              </a>
            </div>
          </li>
        </NavDropdown>
      </ul>
    );
  }
}

DropdownUserMenu.defaultProps = {
  email: "johndoe@example.com",
  name: "John Doe",
};

export default connect(null, { signOut })(DropdownUserMenu);
