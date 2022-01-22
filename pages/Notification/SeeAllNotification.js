import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import { Steps, Layout, Breadcrumb, Row, Col , Divider} from "antd";
import Navbar from "container/navbar/newNavbar";
import {
  getAllNotification,
  getAllUnreadNotification,
  markasRead,
} from "@/redux/actions/notoficationAction";
import Link from "next/link";

const SeeAllNotification = ({
  allnotificationList,
  getAllNotification,
  getAllUnreadNotification,
  markasRead,
}) => {
    
    console.log(allnotificationList)
  const { Content } = Layout;
  const notificationRead = (id) => {
    console.log("notification reading:" + id);
    markasRead(id);
  };
  const notification = (
    <Row
      style={{
        backgroundColor: "white",
      
        height: "auto",
     
        width: "500px",
        padding: "15px",
      }}
    >
      <h1 style={{ weight: "bold" }}>Notifications</h1>
    
      <Divider />

      {allnotificationList.map((notification, index) => (
        <Row span={24} className="notifi_bar">
          <Link
            href={{ pathname: '/jobs/detail/', query: { id: notification["description"]} }}
          >
          <a onClick={(e) => notificationRead(notification["id"])}>
            {notification["unread"] ? (
                <p style={{backgroundColor: "skyblue"}}>{notification["verb"]}</p>
            ) : (
              <p>{notification["verb"]}</p>
            )}
          </a>
          </Link>
        </Row>
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
        <Content className="site-layout" style={{ padding: "45px 345px" }}>
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
  markasRead,
})(SeeAllNotification);

//export default SeeAllNotification;
