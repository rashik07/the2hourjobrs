import React, { useEffect } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import Newnavbar from "../../container/navbar/newNavbar";
import AllAnnouncements from "../../components/annoucement/AllAnnouncements";
import { Layout, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const { Content } = Layout;

const announcement = () => {
  return (
    <>
      <Head>
        <title>Announcement list</title>
      </Head>
      <Layout>
        <Newnavbar />
        <Content className="site-layout">
          <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item href="/">
              {" "}
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Announcement List</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <AllAnnouncements />
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default connect()(announcement);
