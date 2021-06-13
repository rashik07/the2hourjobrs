import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import _ from "lodash";

import { getJobForUpdate } from "@/redux/actions/jobAction";
import JobCreateUpdate from "components/jobs/JobCreateUpdate";

const UpdateJobPost = ({ job, getJobForUpdate }) => {
  const router = useRouter();

  const [hasData, sethasData] = useState(false);
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getJobForUpdate(id);
    }
  }, [router.query.id]);

  useEffect(() => {
    if (id && !_.isEmpty(job)) {
      sethasData(true);
    }
  }, [job]);

  if (hasData) {
    console.log(job);
    return <JobCreateUpdate editJob={job} />;
  }

  return <h1>{id}</h1>;
};

const mapStateToProps = (state) => {
  return {
    job: state.job.temp_jobpost,
  };
};

export default connect(mapStateToProps, { getJobForUpdate })(UpdateJobPost);
