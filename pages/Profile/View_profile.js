import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../container/navbar/newNavbar";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Typography,
  Divider,
  Button,
} from "antd";
import Topsection from "components/Viewprofile/Topsection";
import Sidesection from "components/Viewprofile/Sidesection";
import Mainsection from "components/Viewprofile/Mainsection";

const View_profile = ({
  user_profile,
  view_education,
  view_employment,
  view_project,
  view_single_training,
  view_single_qualification,
  auth,
}) => {
  const { Text, Link, Title } = Typography;
  const { Content } = Layout;
  const editProfileButton = () => {
    if (user_profile.id===auth.id) {
      return (
        <a href={"/Profile"} target="_blank">
          <Button
            type="primary"
            style={{
              float: "right",
              backgroundColor: "#f5222d",
              border: "1px solid #ffffff",
              color: "#ffffff",
            }}
          >
            Edit My Profile
          </Button>
        </a>
      );
    } else {
      return " ";
    }
  };

  return (
    <div>
      <Head>
        <title>View Profile </title>
      </Head>
      <Layout className="layout">
        <Navbar />
        <Content
          className="site-layout view_profile_content"
          style={{ padding: "0 50px" }}
        >
          <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item>Profile</Breadcrumb.Item>
            <Breadcrumb.Item>View Profile</Breadcrumb.Item>
            {editProfileButton()}
          </Breadcrumb>

          <div className="site-layout-background site-layout-background-view-profile">
            <Topsection user_profile={user_profile} />
            <Divider />
            <Row justify="left" align="top">
              <Col span={6}>
                <Sidesection user_profile={user_profile} />
              </Col>
              <Col
                span={18}
                style={{ borderLeft: "1px solid #F0F0F0", padding: "0px 10px" }}
              >
                <Mainsection
                  user_profile={user_profile}
                  view_employment={view_employment}
                  view_education={view_education}
                  view_single_training={view_single_training}
                  view_single_qualification={view_single_qualification}
                  view_project={view_project}
                />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default View_profile;
