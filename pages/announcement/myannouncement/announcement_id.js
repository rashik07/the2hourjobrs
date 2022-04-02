import React, { useEffect } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../../container/footer/footer";
import Newnavbar from "../../../container/navbar/newNavbar";
import EditAnnouncement from "../../../components/annoucement/EditAnnouncement";
import { getSpecificAnnouncement } from "../../../redux/actions/announcementAction";
import { useRouter } from "next/router";
import { HomeOutlined } from "@ant-design/icons";


import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

const editAnnouncement = ({ getSpecificAnnouncement, announcement }) => {
  const router = useRouter();
  const { announcement_id } = router.query;
  useEffect(() => {
    getSpecificAnnouncement(announcement_id);
  }, []);

  return (
    <>
      <Head>
        <title>Edit </title>
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
              <Link href="/announcement">Announcement</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href="/announcement/myannouncement">My Announcements</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item >{announcement.title} edit</Breadcrumb.Item>
           
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <EditAnnouncement announcement={announcement} />
          </div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};
const mapStateToProps = (state) => {
  return { announcement: state.announcement.singleAnnouncement };
};

export default connect(mapStateToProps, { getSpecificAnnouncement })(
  editAnnouncement
);
