import React from "react";
import Footer from "../../container/footer/footer";
import Navbar from "../../container/navbar/navbar";
import Head from "next/head";
import Link from "next/link";

import SmoothRender from "react-smooth-render";

const signup = () => {
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <SmoothRender timing={350}>
        <Navbar />
        <main className="form-signin text-center  mb-5">
          <form>
            <h1>Signup</h1>
            <div className="m-4 ">
              <label htmlFor="inputEmail " className="fs-6 fw-normal">
                Email address:
              </label>
              <input
                type="email"
                className="form-control m-2"
                placeholder="Email address"
                required
                autofocus
              />
            </div>
            <div className="m-4">
              <label htmlFor="inputPassword" className="fs-6 fw-normal">
                Password:
              </label>
              <input
                type="password"
                className="form-control m-2"
                placeholder="Password"
                required
              />
            </div>
            <div className="m-4">
              <label htmlFor="inputPassword" className="fs-6 fw-normal">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control m-2"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div
              className="d-grid gap-2 d-flex  justify-content-center"
              style={{ height: "50px" }}
            >
              <button
                className="w-50 btn btn-lg fs-6 text-white"
                type="submit"
                style={{ backgroundColor: "#163F66" }}
              >
                Sign Up
              </button>
            </div>
            <Link href="/auth/login">
              <button type="button" className="btn btn-secondary mt-3">
                Back to Log in
              </button>
            </Link>
          </form>
        </main>
        <Footer />
      </SmoothRender>
    </>
  );
};

export default signup;
