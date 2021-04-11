import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { connect } from "react-redux";

import Footer from "../../container/footer/footer";
import Navbar from "../../container/navbar/navbar";
import { signIn } from "../../redux/actions/authAction";

const handleSubmit = (e, username, password, signIn) => {
  e.preventDefault();
  if (username && password) {
    signIn({ username, password });
  }
};

const Login = ({ signIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
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
              onClick={(e) => handleSubmit(e, username, password, signIn)}
            >
              Log in
            </button>
            <Link href="/auth/signup">
              <button
                className="w-50 btn btn-lg fs-6 text-white"
                type="submit"
                style={{ backgroundColor: "#163F66" }}
              >
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

const mapStateToProps = null;

export default connect(mapStateToProps, { signIn })(Login);
