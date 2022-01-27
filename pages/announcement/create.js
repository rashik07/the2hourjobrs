import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJobCategories } from "../../redux/actions/jobAction";
import Head from "next/head";
import Link from "next/link";
import Newnavbar from "../../container/navbar/newNavbar";
import AnnouncementCreateForm from "../../components/annoucement/AnnouncementCreateForm";
import { HomeOutlined } from "@ant-design/icons";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

const JobCategogy = ({ categories }) => {
  return (
    <>
      {/* <Head>
        <title>Job list</title>
      </Head>
      <Navbar />
      <div className="container main-body">
        <AnnouncementCreateForm />
      </div> */}
      <Head>
        <title>Announcement list</title>
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
            <Breadcrumb.Item>Create</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <AnnouncementCreateForm />
          </div>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.job.categories,
  };
};

export default connect(mapStateToProps, { getJobCategories })(JobCategogy);
