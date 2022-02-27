import React, { useEffect, useCallback, useContext, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Form, Input, Button, Checkbox, message } from "antd";
import Navbar from "../../container/navbar/newNavbar";
import { signIn, googleLogin, facebookLogin } from "redux/actions/authAction";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import GoogleButton from "react-google-button";
import { useHistory } from "react-router-dom";
// import { facebookProvider } from "config/authMethods";
// import socialMediaAuth from "service/auth";

const handleSubmit = (username, password, signIn, router) => {
  // e.preventDefault();
  if (signIn({ username, password }) === true) {
    router.back();
  }
};

const Login = ({
  signIn,
  isSignedIn,
  social_auth,
  googleLogin,
  facebookLogin,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [hidePassword, setHidePassword] = useState(true);

  const router = useRouter();
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  useEffect(() => {
    if (social_auth) router.replace("/Profile");
    else if (isSignedIn) router.replace("/jobs/list");
  });
  const { Content } = Layout;
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const REACT_APP_GOOGLE_CLIENT_ID =
    "961548394079-b0mfvhnvg76i0ie9j6lkhcrij992dc76.apps.googleusercontent.com";
  const REACT_APP_FACEBOOK_CLIENT_ID = "3184283581802188";

  //const { setUser } = useContext(UserContext);
  const responseGoogle = (response) => {
    console.log("response google");
    console.log(response);
    googleLogin(response.accessToken);
  };
  const responseFacebook = (response) => {
    console.log("response facebook");
    console.log(response.accessToken);
    facebookLogin(response.accessToken);
  };
  const onFinish = () => {
    handleSubmit(username, password, signIn, router);
    // message.success("Submit success!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Layout className="layout">
        <Navbar />
        <main className="form-signin text-center ">
          <Form
            // form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1>Login</h1>
            <div className="m-4 ">
              <Form.Item
                name="username"
                label="Username"
                rules={[{ required: true }]}
              >
                <Input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className="m-4">
         
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true }]}
              >
                <Input.Password
                  // type={hidePassword ? "password" : "text"}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
            </div>
            <div data-v-e52648b8 className="right">
              <div
                data-v-58ebcdf7
                className="d-none d-md-block forgot-password pb-10 mb-3"
                data-v-e52648b8
              >
                <Link href="/auth/Forgot_password">Forgot password?</Link>
              </div>
            </div>
            <div>
              <div
                style={{
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Form.Item style={{ marginRight: "10px" }}>
                  <Button htmlType="submit" style={{ borderRadius: "5px"}}>Log in</Button>
                </Form.Item>

                <Link href="/auth/signup">
                  <Button type="submit" style={{ backgroundColor: "#163F66",borderRadius: "5px" }}>
                    Sign Up
                  </Button>
                </Link>
                {/* <button onClick={() => handleOnClick(facebookProvider)}>facebook</button> */}
              </div>
              <div
                className="d-grid gap-2 d-flex social_media_btn"
                style={{ height: "50px", marginTop: "10px" }}
              >
                <GoogleLogin
                  clientId={REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Join with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  style={{ width: "194px" }}
                />

                <FacebookLogin
                  appId={REACT_APP_FACEBOOK_CLIENT_ID}
                  fields="name,email,picture"
                  scope="public_profile,email"
                  buttonText="Join with Facebook"
                  callback={responseFacebook}
                  version="3.1"
                />
              </div>
            </div>
          </Form>
        </main>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    social_auth: state.auth.social_auth,
  };
};

export default connect(mapStateToProps, { signIn, googleLogin, facebookLogin })(
  Login
);
