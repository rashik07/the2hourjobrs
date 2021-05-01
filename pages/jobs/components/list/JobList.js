import React, { useEffect } from "react";
import { getAllJobs } from "@/redux/actions/jobAction";
import { connect } from "react-redux";
import JobPostItem from "../JobPostItem";

const JobList = ({ getAllJobs, all_jobs }) => {
  useEffect(() => {
    getAllJobs();
  }, []);

  return all_jobs.map((job) => {
    return <JobPostItem key={job.id} job={job} />;
  });
};

const mapStateToProps = (state) => {
  return {
    all_jobs: state.job.all_jobs,
  };
};

export default connect(mapStateToProps, { getAllJobs })(JobList);
