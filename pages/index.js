import Head from "next/head";
import "antd/dist/antd.css";
import Footer from "../container/footer/footer";
// import Newnavbar from "../container/navbar/navbar";
import Navbar from "../container/navbar/newNavbar";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as types from "redux/types";

import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.INIT_JOB_STATE });
    dispatch({ type: types.INIT_USER_STATE });
  }, []);

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Layout>
        <Navbar />
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          ></div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
}
