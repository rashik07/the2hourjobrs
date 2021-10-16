import React, { useEffect, useState } from "react";
import {
  Layout,
  Menu,
  Row,
  Col,
  Popover,
  Image,
  Button,
  Dropdown,
  Select,
} from "antd";
import Link from "next/link";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/authAction";
import { updateProfile } from "@/redux/actions/userAction";
import {
  getAllNotification,
  getAllUnreadNotification,
} from "@/redux/actions/notoficationAction";

import {
  UserOutlined,
  NotificationOutlined,
  NotificationFilled,
} from "@ant-design/icons";

const { Header } = Layout;
const { SubMenu } = Menu;

const getItems = (isSignedIn, signOut, user_profile) => {
  const { Header, Content, Footer } = Layout;

  const image = () => {
    if (user_profile.image === null) {
      return (
        console.log("get image"),
        (
          <Link href="/Profile">
            <a>
              {" "}
              {/* <UserOutlined />  */}
              {"  "}
              {user_profile.username}
            </a>
          </Link>
        )
      );
    }
    return (
      <Link href="/Profile">
        <a>
          {" "}
          {/* <UserOutlined />  */}
          <Image
            preview={false}
            width={35}
            height={35}
            src={"http://127.0.0.1:8000" + user_profile.image}
            style={{ marginTop: "10px", borderRadius: "50%" }}
          />
          {"  "}
          {user_profile.username}
        </a>
      </Link>
    );
  };
  if (isSignedIn) {
    return (
      <>
        {/* {console.log(user_profile.name)} */}
        <Menu.Item key="setting:12">{image()}</Menu.Item>

        <Menu.Item key="setting:13">
          <a
            href="#"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </a>
        </Menu.Item>
      </>
    );
  }
  return (
    <>
      <Menu.Item key="setting:14">
        <Link href="/auth/login" onClick={() => router.push("/auth/login")}>
          Login
        </Link>
      </Menu.Item>
      <Menu.Item key="setting:15">
        <Link href="/auth/signup" onClick={() => router.push("/auth/signup")}>
          Sign up
        </Link>
      </Menu.Item>
    </>
  );
};

const navbar = ({
  isSignedIn,
  signOut,
  allnotificationList,
  unreadnotificationList,
  updateProfile,
  user_profile,
  temp_jobpost,
  getAllNotification,
  getAllUnreadNotification,
}) => {
  const { Option } = Select;
  useEffect(() => {
    getAllNotification();
    getAllUnreadNotification();
  }, []);
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  const notification = (
    <ul
      className="notifi_bar"
      style={{
        backgroundColor: "white",
        overflowY: "scroll",
        height: "200px",
        width: "300px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        
      }}
    >
      {allnotificationList.map((notification, index) => (      
        <li >
          {/* {console.log(notification)} */}
          <Link href={"/jobs/detail/" + notification["description"]} style={{color:"white"}}>
            {notification["verb"]}
          </Link>{" "}
        </li>
      ))}
    </ul>
  );
  useEffect(() => {
    updateProfile();
  }, []);
  // const createPost=()=>{
  //   if (!isSignedIn) {
  //     alert("You must log in to access this feature");
  //     return;
  //   }

  // }

  // console.log(user_profile.name);
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <Row>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <a href="/">
            <div className="logo">
              <img src="/img/logo.png" alt="Logo" height={40} />
            </div>
          </a>
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <Button className="jobpost_btn" >
            <Link href="/jobs/post">Post a Job</Link>
          </Button>
          <Menu
            theme=""
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ float: "right" }}
          >
            {/* <Menu.Item key="setting:1"></Menu.Item> */}
            <SubMenu key="1" title="Jobs">
              <Menu.Item key="setting:2">
                {" "}
                <Link href="/jobs/list">Job list</Link>
              </Menu.Item>
              <Menu.Item key="setting:3">
                {" "}
                <Link href="/jobs/saved">Saved Jobs</Link>
              </Menu.Item>
              <Menu.Item key="setting:4">
                {" "}
                <Link href="/jobs/applied">Applied Jobs</Link>
              </Menu.Item>
              <Menu.Item key="setting:5">
                {" "}
                <Link href="/jobs/my_posts">My Posted Jobs</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="2" title="Workers">
              <Menu.Item key="setting:7">
                <Link href="/worker/list">List</Link>
              </Menu.Item>
              <Menu.Item key="setting:8">
                {" "}
                <Link href="/worker/saved">Saved workers</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="3" title="Announcements">
              <Menu.Item key="setting:9">
                <Link href="/announcement">All Announcements</Link>
              </Menu.Item>
              <Menu.Item key="setting:10">
                {" "}
                <Link href="/announcement/myannouncement">
                  My Announcements
                </Link>
              </Menu.Item>
              <Menu.Item key="setting:11">
                {" "}
                <Link href="/announcement/create">Create Announcement</Link>
              </Menu.Item>
            </SubMenu>
            <Dropdown overlay={notification} placement="bottomLeft">
              <NotificationFilled />
            </Dropdown>

            {getItems(isSignedIn, signOut, user_profile)}
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    user_profile: state.user.user_profile,
    allnotificationList: state.notifications.allnotificationList,
    unreadnotificationList: state.notifications.unreadnotificationList,
  };
};

export default connect(mapStateToProps, {
  updateProfile,
  signOut,
  getAllNotification,
  getAllUnreadNotification,
})(navbar);
