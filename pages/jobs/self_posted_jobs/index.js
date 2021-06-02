import React, { useEffect } from "react";
import Head from "next/head";
import { getSelfPostedJobs } from "@/redux/actions/jobAction";
import { connect } from "react-redux";
import Navbar from "container/navbar/navbar";
import JobPostItem from "components/jobs/JobPostItem";

const SelfPostedJobs = ({ self_posted_jobs, getSelfPostedJobs }) => {
  useEffect(() => {
    getSelfPostedJobs();
  }, []);

  const showSelfPostedJobs = () => {
    if (self_posted_jobs.length)
      return self_posted_jobs.map((job) => {
        return <JobPostItem key={job.id} job={job} />;
      });

    return (
      <h1 style={{ color: "#AEB6BF", marginTop: "20%", marginLeft: "20%" }}>
        You have not posted any jobs
      </h1>
    );
  };

  return (
    <div>
      <Head>
        <title>Saved Jobs</title>
      </Head>
      <Navbar />

      <div className="container main-body">
        <h2 className="ml-3 mt-4">Self Posted Jobs</h2>
        {showSelfPostedJobs()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    self_posted_jobs: Object.values(state.job.self_posted_jobs),
  };
};

export default connect(mapStateToProps, { getSelfPostedJobs })(SelfPostedJobs);
