import React, { useEffect,useCallback, useContext, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Layout} from "antd";
import Navbar from "../../container/navbar/newNavbar";
import { signIn, googleLogin } from "redux/actions/authAction";
import { GoogleLogin } from 'react-google-login';
import GoogleButton from 'react-google-button';
import { useHistory } from 'react-router-dom';
// import { facebookProvider } from "config/authMethods";
// import socialMediaAuth from "service/auth";


const handleSubmit = (e, username, password, signIn, router) => {
  e.preventDefault();
  if (signIn({ username, password }) === true) router.back();
};

const Login = ({ signIn, isSignedIn, googleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const router = useRouter();
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  
  useEffect(() => {
    if (isSignedIn) router.replace("/jobs/list");
  });
  const { Content } = Layout;
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const HOME_URL = '/';
  const REACT_APP_GOOGLE_CLIENT_ID = '961548394079-b0mfvhnvg76i0ie9j6lkhcrij992dc76.apps.googleusercontent.com';
  const REACT_APP_GOOGLE_CLIENT_SECRET = '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';

  const REACT_APP_BASE_BACKEND_URL = 'http://localhost:8000';

  //const { setUser } = useContext(UserContext);
  const responseGoogle = (response) =>{
    console.log("response google");
    console.log(response);
    googleLogin(response.accessToken);
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
          <form>
            <h1>Login</h1>
            <div className="m-4 ">
              <label htmlFor="inputEmail " className="fs-6 fw-normal">
                Email / Username:
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="m-4">
              <label htmlFor="inputPassword" className="fs-6 fw-normal">
                Password:
              </label>
              <input
                type={hidePassword ? "password" : "text"}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div data-v-e52648b8 className="right">
              <div
                data-v-58ebcdf7
                className="d-none d-md-block forgot-password pb-10 mb-5"
                data-v-e52648b8
              >
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div className="d-grid gap-2 d-flex " style={{ height: "50px" }}>
              <button
                className="w-50 btn btn-lg btn-success fs-6 mr-3"
                onClick={(e) =>
                  handleSubmit(e, username, password, signIn, router)
                }
              >
                Log in
              </button>
              
              <GoogleLogin
                    clientId={REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Join with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
              <Link href="/auth/signup">
                <button
                  className="w-50 btn btn-lg fs-6 text-white"
                  type="submit"
                  style={{ backgroundColor: "#163F66" }}
                >
                  Sign Up
                </button>
              </Link>
              {/* <button onClick={() => handleOnClick(facebookProvider)}>facebook</button> */}
            </div>
          </form>
        </main>
      </Layout>
      
      
    </>
    
  );
};


const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, googleLogin })(Login);
