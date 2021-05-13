import React, { useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { getAllJobs } from "redux/actions/jobAction";
import JobPostItem from "../JobPostItem";

const JobList = ({ getAllJobs, all_jobs, filtered_jobs, showFilterJobs }) => {
  useEffect(() => {
    getAllJobs();
  }, []);

  if (showFilterJobs) {
    return filtered_jobs.map((job) => {
      return <JobPostItem key={job.id} job={job} />;
    });
  }

  if (all_jobs)
    return all_jobs.map((job) => {
      return <JobPostItem key={job.id} job={job} />;
    });

  return null;
};

const mapStateToProps = (state) => {
  return {
    all_jobs: state.job.all_jobs,
    filtered_jobs: state.job.filtered_jobs,
  };
};

export default connect(mapStateToProps, { getAllJobs })(JobList);
