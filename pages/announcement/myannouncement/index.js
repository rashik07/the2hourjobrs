import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import Link from "next/link";
import Newnavbar from "../../../container/navbar/newNavbar";
import MyAnnouncments from "../../../components/annoucement/MyAnnouncments";
import { Layout, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const { Content } = Layout;

const myannouncement = () => {
  return (
    <>
      <Head>
        <title>My Announcement list</title>
      </Head>
      <Layout>
        <Newnavbar />
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item href="/">
              {" "}
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href="/announcement">Announcement List</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>My Announcements</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <MyAnnouncments />
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default connect()(myannouncement);
