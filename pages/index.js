import Head from "next/head";
import "antd/dist/antd.css";
import Footer from "../container/footer/footer";
import Navbar from "../container/navbar/navbar";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as types from "redux/types";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.INIT_JOB_STATE });
    dispatch({ type: types.INIT_USER_STATE });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </Head>
      <Navbar page="landing_page" />
      <Footer />
    </>
  );
}
