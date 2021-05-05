import Head from "next/head";
import React, { useState, useEffect } from "react";

import Navbar from "../../container/navbar/navbar";
import JobList from "./components/list/JobList";
import KeywordSearch from "./components/list/KeywordSearch";
import SelectedFilter from "./components/list/SelectedFilter";
import LocationFilter from "./components/list/LocationFilter";
import PostTimeFilter from "./components/list/PostTimeFilter";
import DeadlineFilter from "./components/list/DeadlineFilter";
import GenderFilter from "./components/list/GenderFilter";
import EmploymentStatusFilter from "./components/list/EmploymentStatusFilter";
import JobCategoryFilter from "./components/list/JobCategoryFilter";
import JobIndustryFilter from "./components/list/JobIndustryFilter";
import ExperienceFilter from "./components/list/ExperienceFilter";
import AgeFilter from "./components/list/AgeFilter";

const Jobs = () => {
  const [filter, setFilter] = useState({});
  const [showFilterJobs, setShowFilterJobs] = useState(false);

  useEffect(() => {
    if (_.isEmpty(filter)) {
      setShowFilterJobs(false);
    }
  }, [filter]);

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
            <JobCategoryFilter filter={filter} setFilter={setFilter} />
            {/* <JobIndustryFilter filter={filter} setFilter={setFilter} /> */}
            <LocationFilter filter={filter} setFilter={setFilter} />
            <PostTimeFilter filter={filter} setFilter={setFilter} />
            <DeadlineFilter filter={filter} setFilter={setFilter} />
            <GenderFilter filter={filter} setFilter={setFilter} />
            <EmploymentStatusFilter filter={filter} setFilter={setFilter} />
            <ExperienceFilter filter={filter} setFilter={setFilter} />
            <AgeFilter filter={filter} setFilter={setFilter} />
          </div>
          {/*2nd part*/}
          <div className="col-9 bg-white rounded border ">
            <KeywordSearch filter={filter} setFilter={setFilter} />
            <SelectedFilter
              filter={filter}
              setFilter={setFilter}
              setShowFilterJobs={setShowFilterJobs}
            />
            <JobList filter={filter} showFilterJobs={showFilterJobs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
