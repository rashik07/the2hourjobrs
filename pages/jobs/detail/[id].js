import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { getJob } from "@/redux/actions/jobAction";
import JobDetail from "components/jobs/JobDetail";

const JobPostDetail = ({ job, getJob }) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getJob(id);
  }, []);

  return <JobDetail temp_jobpost={job} />;
};

const mapStateToProps = (state) => {
  return {
    job: state.job.fetched_job,
  };
};

export default connect(mapStateToProps, { getJob })(JobPostDetail);
