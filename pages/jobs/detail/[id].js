import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { getJob } from "@/redux/actions/jobAction";
import JobDetail from "components/jobs/JobDetail";

const JobPostDetail = ({ job, getJob }) => {
  const router = useRouter();

  const { id } = router.query;
  const [hasData, sethasData] = useState(false);

  useEffect(() => {
    if (id) {
      getJob(id);
    }
  }, [router.query.id]);

  useEffect(() => {
    if (id && !_.isEmpty(job)) {
      sethasData(true);
    }
  }, [job]);
 
 
  if (hasData) {
    return <JobDetail temp_jobpost={job} />;

  }

  return null;
};

const mapStateToProps = (state) => {
  return {
    job: state.job.fetched_job,
  };
};

export default connect(mapStateToProps, { getJob })(JobPostDetail);
