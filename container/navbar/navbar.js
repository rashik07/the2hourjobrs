import React from "react";
import DropdownUserMenu from "../../components/DropdownUserMenu";
import { connect } from "react-redux";

// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// const getItems = (isSignedIn) => {
//   if (isSignedIn) {
//     return (
//       <>
//         <Nav>
//           <NavDropdown title="Jobs" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Post a Job</NavDropdown.Item>
//             <NavDropdown.Item href="/jobs/list">Job list</NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link href="#link">Workers</Nav.Link>
//           <Nav.Link href="#link">Products</Nav.Link>
//           <NavDropdown title="Announcements" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">
//               Create Announcement
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">
//               Announcement list
//             </NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">
//               My Announcements
//             </NavDropdown.Item>
//           </NavDropdown>
//           <DropdownUserMenu />
//         </Nav>
//       </>
//     );
//   }

//   return (
//     <Nav>
//       <Nav.Link href="/auth/login">Login</Nav.Link>
//       <Nav.Link href="/auth/signup">Sign up</Nav.Link>
//     </Nav>
//   );
// };

// const CustomNavbar = ({ isSignedIn }) => {
//   return (
//     <div className="container">
//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="/">
//           <img src="/img/logo.png" alt="Logo" height={50} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse className="justify-content-end">
//           {getItems(isSignedIn)}
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// };

const getItems = (isSignedIn) => {
  if (isSignedIn) {
    return (
      <>
        <SubMenu key="Jobs" title="Jobs">
          <Menu.ItemGroup>
            <Menu.Item key="setting:1">
              <a href="#action/3.1">Post a Job</a>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <a href="/jobs/list">Job list</a>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <Menu.Item key="1">
          <a href="#link">Workers</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="#link">Products</a>
        </Menu.Item>

        <SubMenu key="Announcements" title="Announcements">
          <Menu.ItemGroup>
            <Menu.Item key="setting:1">
              <a href="/announcment/create">Create Announcement</a>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <a href="/announcment">Announcement list</a>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <a href="/jobs/list">My Announcements</a>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </>
    );
  }

  return (
    <>
      <Menu.Item key="1">
        <a href="/auth/login">Login</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="/auth/signup">Sign up</a>
      </Menu.Item>
    </>
  );
};

const CustomNavbar = ({ isSignedIn }) => {
  return (
    <Header className="header">
      <Row>
        <Col span={6}>
          <img src="/img/logo.png" alt="Logo" height={50} />
        </Col>
        <Col span={15}>
          <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
            {getItems(isSignedIn)}
          </Menu>
        </Col>
        <Col span={3}>
          <Menu mode="horizontal">
            <DropdownUserMenu />
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(CustomNavbar);
