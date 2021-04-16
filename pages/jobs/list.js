import Head from "next/head";
import React from "react";
import Navbar from "../../container/navbar/navbar";
import JobCategogy from "./JobCategogy";
import JobIndustry from "./JobIndustry";
import SelectedFilter from "./SelectedFilter";
const JobList = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.1/antd.min.css"
        />
        <title>Job list</title>
      </Head>
      <Navbar />
      <div className="container main-body">
        <div className="row my-5">
          {/*1st part*/}
          <div className="col-3">
            <h3 className="m-sm-bottom">Filter By</h3>
            <JobCategogy />
            <JobIndustry />
          </div>
          {/*2nd part*/}
          <div className="col-9 bg-white rounded border ">
            <div className="d-flex m-3">
              <input
                className="form-control me-2 mt-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn mt-2 button-home" type="submit">
                Search
              </button>
            </div>
            <SelectedFilter />
            <div className="row d-flex align-items-center border m-3 rounded">
              <div className="col-3">
                <img
                  src="https://previews.123rf.com/images/roxanabalint/roxanabalint1312/roxanabalint131200148/24476498-demo-grunge-rubber-stamp-on-white.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="col-6 text-muted fs-6">
                <h4 className=" text-dark">
                  <strong className="title-home">
                    Support Engineer, WordPress
                  </strong>
                  <br />
                </h4>
                <h5 className=" text-dark">
                  <strong>TheICTHub</strong>
                  <br />
                </h5>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  Mirpur <br />
                </p>
                <p>
                  <i className="fas fa-book-open" />
                  It doesn`t matter where you went to college or what your CGPA
                  was as long as you are smart, ...
                  <br />
                </p>
                <p>
                  <i className="fas fa-briefcase" />1 to 3 year(s)
                </p>
              </div>
              <div className="col-3 btn-group-vertical">
                <a href="#" className="btn button-home rounded">
                  Apply
                </a>
                <a href="#" className="btn button-home mt-2 rounded">
                  Details
                </a>
                <a href="#" className="btn button-home mt-2 rounded">
                  Save Job
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobList;
