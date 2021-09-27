import React, { useEffect, useState } from "react";
import { Layout, Menu, Row, Col, Popover, Image } from "antd";
import Link from "next/link";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/authAction";
import { updateProfile } from "@/redux/actions/userAction";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { SubMenu } = Menu;

const getItems = (isSignedIn, signOut, user_profile) => {
  const { Header, Content, Footer } = Layout;
  const image=() => {
  if (user_profile.image === null) {
    return (
      console.log("get image"),
      <Link href="/Profile">
        <a >
          {" "}
          {/* <UserOutlined />  */}
         
          {"  "}
          
          {user_profile.name}
        </a>
      </Link>
    );
     
  }
  return (
    console.log("get image"),
    <Link href="/Profile">
      <a >
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
        
        {user_profile.name}
      </a>
    </Link>
  );
  }
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

const navbar = ({ isSignedIn, signOut, updateProfile, user_profile }) => {
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
          <div className="logo">
            <img src="/img/logo.png" alt="Logo" height={40} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <Menu
            theme=""
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ float: "right" }}
          >
            <SubMenu key="1" title="Jobs">
              <Menu.Item key="setting:1">
                <Link href="/jobs/post">Post a Job</Link>
              </Menu.Item>
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
  };
};

export default connect(mapStateToProps, { updateProfile, signOut })(navbar);
