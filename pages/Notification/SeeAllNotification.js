import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import { Steps, Layout, Breadcrumb, Row, Col } from "antd";
import Navbar from "container/navbar/newNavbar";
import {
  getAllNotification,
  getAllUnreadNotification,
} from "@/redux/actions/notoficationAction";
import Link from "next/link";

const SeeAllNotification = ({
  allnotificationList,
  getAllNotification,
  getAllUnreadNotification,
}) => {
  const { Content } = Layout;
  const notification = (
    <Row>
         <h1 style={{weight: "bold"}}>All Notifications</h1>
      {allnotificationList.map((notification, index) => (
        <Col span={24} className="notifi_bar">
          <Link
            href={"/jobs/detail/" + notification["description"]}
            // style={{ color: "white" }}
          >
            {notification["verb"]}
          </Link>{" "}
        </Col>
      ))}
    </Row>
  );

  return (
    <div>
      <Navbar />
      <Head>
        <title>All Notifications</title>
      </Head>
      <Layout>
        <Navbar />
        <Content className="site-layout" style={{ padding: "45px 400px" }}>
          <div
            className="site-layout-background"
            style={{ padding: "15px 40px" }}
          >
            {notification}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allnotificationList: state.notifications.allnotificationList,
    unreadnotificationList: state.notifications.unreadnotificationList,
  };
};

export default connect(mapStateToProps, {
  getAllNotification,
  getAllUnreadNotification,
})(SeeAllNotification);

//export default SeeAllNotification;
