import React, { useEffect } from "react";
import Head from "next/head";
import { getSavedJobs } from "@/redux/actions/jobAction";
import { connect } from "react-redux";
import Navbar from "container/navbar/navbar";
import JobPostItem from "components/jobs/JobPostItem";

const SavedJobs = ({ saved_jobs, getSavedJobs }) => {
  useEffect(() => {
    getSavedJobs();
  }, []);

  const showSavedJobs = () => {
    if (saved_jobs.length)
      return saved_jobs.map((job) => {
        return <JobPostItem key={job.id} job={job} />;
      });

    return (
      <h1 style={{ color: "#AEB6BF", marginTop: "20%", marginLeft: "20%" }}>
        You have no saved jobs
      </h1>
    );
  };

  return (
    <div>
      <Head>
        <title>Saved Jobs</title>
      </Head>
      <Navbar />
      <div className="container main-body">{showSavedJobs()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saved_jobs: Object.values(state.job.saved_jobs),
  };
};

export default connect(mapStateToProps, { getSavedJobs })(SavedJobs);
