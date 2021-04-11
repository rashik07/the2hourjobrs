import Head from "next/head";
import { useEffect } from "react";
import { signIn, signOut } from "./../redux/actions/authAction";
import { useDispatch } from "react-redux";
import Footer from "../container/footer/footer";
import Navbar from "../container/navbar/navbar";

import SmoothRender from "react-smooth-render";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </Head>
      <SmoothRender timing={350}>
        <Navbar page="landing_page" />
        <Footer />
      </SmoothRender>
    </>
  );
}
