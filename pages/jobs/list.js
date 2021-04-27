import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../../container/navbar/navbar";
import JobCategogy from "./components/list/JobCategogy";
import JobIndustry from "./components/list/JobIndustry";
import JobList from "./components/list/JobList";
import KeywordSearch from "./components/list/KeywordSearch";
import SelectedFilter from "./components/list/SelectedFilter";
const Jobs = () => {
  const [filter, setFilter] = useState({});

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.1/antd.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <title>Job list</title>
      </Head>
      <Navbar />
      <div className="container main-body">
        <div className="row my-5">
          {/*1st part*/}
          <div className="col-3">
            <h3 className="m-sm-bottom">Filter By</h3>
            <JobCategogy filter={filter} setFilter={setFilter} />
            <JobIndustry filter={filter} setFilter={setFilter} />
          </div>
          {/*2nd part*/}
          <div className="col-9 bg-white rounded border ">
            <KeywordSearch filter={filter} setFilter={setFilter} />
            <SelectedFilter filter={filter} setFilter={setFilter} />
            <JobList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
