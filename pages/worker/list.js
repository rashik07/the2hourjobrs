import { filterWorkers } from "@/redux/actions/userAction";
import GenderFilter from "components/jobs/list/GenderFilter";
import JobIndustryFilter from "components/jobs/list/JobIndustryFilter";
import KeywordSearch from "components/jobs/list/KeywordSearch";
import LocationFilter from "components/jobs/list/LocationFilter";
import SelectedFilter from "components/jobs/list/SelectedFilter";
import WorkerList from "components/worker/list/WorkerList";
import Navbar from "container/navbar/navbar";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Workers = ({ filterWorkers }) => {
  const [filter, setFilter] = useState({});
  const [showFilterWorker, setShowFilterWorker] = useState(false);

  useEffect(() => {
    if (_.isEmpty(filter)) {
      setShowFilterWorker(false);
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
        <title>Workers list</title>
      </Head>
      <Navbar />
      <div className="container main-body">
        <div className="row my-5">
          {/*1st part*/}
          <div className="col-3">
            <h3 className="m-sm-bottom">Filter By</h3>
            {/* <JobIndustryFilter filter={filter} setFilter={setFilter} /> */}
            <LocationFilter filter={filter} setFilter={setFilter} />
            <GenderFilter filter={filter} setFilter={setFilter} />
          </div>
          {/*2nd part*/}
          <div className="col-9 bg-white rounded border">
            <KeywordSearch filter={filter} setFilter={setFilter} />
            <SelectedFilter
              filter={filter}
              setFilter={setFilter}
              setShowFilter={setShowFilterWorker}
              getFilteredList={filterWorkers}
            />
            <WorkerList showFilterWorkers={showFilterWorker} />
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { filterWorkers })(Workers);
