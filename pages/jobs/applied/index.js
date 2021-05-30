import React, { useEffect } from "react";
import Head from "next/head";
import { getAppliedJobs } from "@/redux/actions/jobAction";
import { connect } from "react-redux";
import Navbar from "container/navbar/navbar";
import JobPostItem from "components/jobs/JobPostItem";

const AppliedJobs = ({ applied_jobs, getAppliedJobs }) => {
  useEffect(() => {
    getAppliedJobs();
  }, []);

  const showAppliedJobs = () => {
    if (applied_jobs.length)
      return applied_jobs.map((job) => {
        return <JobPostItem key={job.id} job={job} />;
      });

    return (
      <h1 style={{ color: "#AEB6BF", marginTop: "20%", marginLeft: "20%" }}>
        You have no applied jobs
      </h1>
    );
  };

  return (
    <div>
      <Head>
        <title>Applied Jobs</title>
      </Head>
      <Navbar />
      <div className="container main-body">{showAppliedJobs()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    applied_jobs: Object.values(state.job.applied_jobs),
  };
};

export default connect(mapStateToProps, { getAppliedJobs })(AppliedJobs);
