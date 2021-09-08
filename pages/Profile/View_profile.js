import React, { useEffect, useState } from "react";
import Head from "next/head";
import { connect } from "react-redux";
import { updateProfile } from "@/redux/actions/userAction";
import Navbar from "../../container/navbar/newNavbar";
import { Layout, Breadcrumb, Row, Col, Image, Typography, Space } from "antd";
import {PhoneOutlined } from "@ant-design/icons";

const View_profile = ({ updateProfile, user_profile }) => {
  const { Text, Link, Title } = Typography;
  const { Content } = Layout;
  useEffect(() => {
    updateProfile();
  }, []);
  return (
    <div>
      <Head>
        <title>View Profile </title>
      </Head>
      <Layout className="layout">
        <Navbar />
        <Content className="site-layout view_profile_content" style={{ padding: "0 50px" }}>
          <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item>View Profile</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <Row justify="center" align="top">
              <Col span={4} >

                <Image
                  className="profile_image"
                  shape="circle"
                  width={100}
                  height={100}
                  src={"http://127.0.0.1:8000" + user_profile.image}
                />
                </Col>
                
              <Col span={20} >
                <Title level={2}>{user_profile.name}</Title> 
                <Text type="secondary" icon={<PhoneOutlined />}><PhoneOutlined/>{user_profile.phone}</Text>
                <Text type="secondary">{user_profile.address},{user_profile.division}</Text>
              </Col>
              <Col span={18}></Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

//export default View_profile;
const mapStateToProps = (state) => {
  return {
    user_profile: state.user.user_profile,
  };
};

export default connect(mapStateToProps, {
  updateProfile,
})(View_profile);
