import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Layout, Button, Form, Input } from "antd";

import Navbar from "../../container/navbar/newNavbar";
import { signIn } from "redux/actions/authAction";

const handleSubmit = (e, username, password, signIn, router) => {
  e.preventDefault();
  if (signIn({ username, password }) === true) router.back();

  // if (username && password) {
  // }
};

const Login = ({ signIn, isSignedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) router.replace("/");
  });
  const { Content } = Layout;
  const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Layout className="layout">
        <Navbar />
        <Content
          className="site-layout view_profile_content"
          style={{ padding: "0 50px" }}
        >
          <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <h1>Login</h1>

            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                type="text"
                className="form-control"
                on
                Change={(e) => setUsername(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                type={hidePassword ? "password" : "text"}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <div data-v-e52648b8 className="right">
              <div
                data-v-58ebcdf7
                className="d-none d-md-block forgot-password pb-10 mb-5"
                data-v-e52648b8
              >
                <a href="#">Forgot password?</a>
              </div>
            </div>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                onClick={(e) =>
                  handleSubmit(e, username, password, signIn, router)
                }
              >
                Log in
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Link href="/auth/signup">
                <Button
                  type="primary"
                  block
                  style={{ backgroundColor: "#163F66" }}
                >
                  Sign Up
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn })(Login);
