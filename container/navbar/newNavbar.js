import React, { useEffect, useState } from "react";
import { Layout, Menu, Row, Col, Image, Button, Dropdown, Select } from "antd";
import Link from "next/link";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/authAction";
import { updateProfile } from "@/redux/actions/userAction";
import {
  getAllNotification,
  getAllUnreadNotification,
} from "@/redux/actions/notoficationAction";
import { UserOutlined, NotificationFilled } from "@ant-design/icons";

const { Header } = Layout;
const { SubMenu } = Menu;

const getItems = (isSignedIn, signOut, user_profile) => {
  const { Header, Content, Footer } = Layout;
  // console.log(user_profile);

  const image = () => {
    if (!user_profile.image) {
      return (
        <Link href="/Profile">
          <a>
            <UserOutlined />

            {user_profile.username}
          </a>
        </Link>
      );
    }
    return (
      <Link href="/Profile">
        <a>
          <Image
            preview={false}
            width={35}
            height={35}
            src={user_profile.image}
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
          <Link href="/jobs/list">
            <a
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </a>
          </Link>
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
    updateProfile();
  }, []);
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  const notification = (
    <Row
      style={{
        backgroundColor: "white",
        overflowY: "scroll",
        height: "200px",
        width: "400px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        padding: "5px",
      }}
    >
      <h1 style={{ weight: "bold" }}>Notifications</h1>
      <Link href={"/Notification/SeeAllNotification"}>See All</Link>
      {/* {console.log(allnotificationList)} */}

      {allnotificationList.length == 0 ? (
        <h5>You have no notification here</h5>
      ) : (
        allnotificationList.map(
          (notification, index) => (
            // console.log("ase notification"),
            (
              <Col span={24} className="notifi_bar">
                <Link
                  href={"/jobs/detail/" + notification["description"]}
                  style={{ color: "white" }}
                >
                  {notification["verb"]}
                </Link>{" "}
              </Col>
            )
          )
        )
      )}
    </Row>
  );

  const createPost=()=>{
    if (!isSignedIn) {
      alert("You must log in to access this feature");
    } 
  }
  


  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>

      <a href="/">
        <div className="logo" style={{ float: "left" }}>
          <img src="/img/logo.png" alt="Logo" height={40} />
        </div>
      </a>
    
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ backgroundColor: "#95D5D2", width: "85%", marginLeft: "27%" }}
      >
        <Button className="jobpost_btn"  disabled={!isSignedIn}>
          <Link href="/jobs/post">Post a Job</Link>
        </Button>
      
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

        <SubMenu key="2" title="Employees">
          <Menu.Item key="setting:7">
            <Link href="/worker/list">List</Link>
          </Menu.Item>
          <Menu.Item key="setting:8">
            {" "}
            <Link href="/worker/saved">Saved employees</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="3" title="Announcements">
          <Menu.Item key="setting:9">
            <Link href="/announcement">All Announcements</Link>
          </Menu.Item>
          <Menu.Item key="setting:10">
            {" "}
            <Link href="/announcement/myannouncement">My Announcements</Link>
          </Menu.Item>
          <Menu.Item key="setting:11">
            {" "}
            <Link href="/announcement/create">Create Announcement</Link>
          </Menu.Item>
        </SubMenu>
        <Dropdown
          className="notificationIcon"
          overlay={notification}
          placement="bottomLeft"
        >
          <NotificationFilled />
        </Dropdown>

        {getItems(isSignedIn, signOut, user_profile)}
      </Menu>
      {/* </Col>
      </Row> */}
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
