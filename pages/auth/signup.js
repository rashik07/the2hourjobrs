import React, { useState, useEffect } from "react";
import Footer from "../../container/footer/footer";
import Navbar from "../../container/navbar/newNavbar";
import Head from "next/head";
import Link from "next/link";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import * as types from "redux/types";
import Form from "../../components/Form";
import { signUp } from "redux/actions/authAction";
import { Layout, Button, Input } from "antd";
// import { facebookProvider } from "config/authMethods";
// import socialMediaAuth from "service/auth";

const Signup = (props) => {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  
  const dispatch = useDispatch();
  let start = 0;

  useEffect(() => {
    dispatch({ type: types.RESET_SIGN_UP });
  }, [start]);

  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    props.signUp({ name, username, email, phone, password }, router);
    console.log(name, username, email, phone, password );
  };
  

  return (
    <>
      <Head>
        <title>Sign up</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Layout className="layout">
      <Navbar />
      <main className="form-signin text-center mb-5">
        <form>
          <h1>Signup</h1>
          <Form
            type="text"
            placeholder="Username"
            onChange={setUsername}
            alert={props.username}
          />
          <Form
            type="text"
            placeholder="Full name"
            onChange={setName}
            alert={props.name}
          />
          <Form
            type="email"
            placeholder="Email address"
            onChange={setEmail}
            alert={props.email}
          />
          <Form
            type="phone"
            placeholder="Phone"
            onChange={setPhone}
            alert={props.phone}
          />
          <Form
            type="password"
            placeholder="Password"
            onChange={setPassword}
            alert={props.password}
          />
          <div
            className="d-grid gap-2 d-flex  justify-content-center"
            style={{ height: "50px" }}
          >
            <button
              onClick={onSubmit}
              className="w-50 btn btn-lg fs-6 text-white"
              type="submit"
              style={{ backgroundColor: "#163F66" }}
            >
              Sign Up
            </button>
            {/* <button onClick={() => handleOnClick(facebookProvider)}>facebook</button> */}
          </div>
          <Link href="/auth/login">
            <button type="button" className="btn btn-secondary mt-3">
              Back to Log in
            </button>
          </Link>
        </form>
      </main>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    name: state.auth.name,
    email: state.auth.email,
    phone: state.auth.phone,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, { signUp })(Signup);
