import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../container/navbar/newNavbar";
import { Layout, Breadcrumb, Row, Col, Typography, Divider } from "antd";
import Topsection from "components/Viewprofile/Topsection";
import Sidesection from "components/Viewprofile/Sidesection";
import Mainsection from "components/Viewprofile/Mainsection";

const View_profile = () => {
  const { Text, Link, Title } = Typography;
  const { Content } = Layout;

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
          </Breadcrumb>
          <div className="site-layout-background">
            <Topsection />
            <Divider />
            <Row justify="left" align="top">
              <Col span={5} >
                <Sidesection />
              </Col>
              <Col span={19} style={{borderLeft: "1px solid #F0F0F0", padding: "0px 10px" }}>
                <Mainsection/>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default View_profile;

