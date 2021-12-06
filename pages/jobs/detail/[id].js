import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { getJobDetails ,getJobDetails_withoutlogin} from "@/redux/actions/jobAction";
import JobDetail from "components/jobs/JobDetail";

const JobPostDetail = ({ job, getJobDetails ,getJobDetails_withoutlogin,auth }) => {
  const router = useRouter();

  const { id } = router.query;
  const [hasData, sethasData] = useState(false);

  useEffect(() => {
    if (auth.isSignedIn) {
    if (id) {
      getJobDetails(id);
    }}
    else{
      if (id) {
        getJobDetails_withoutlogin(id);
      }

    }
  }, [router.query.id]);

  useEffect(() => {
    if (id && !_.isEmpty(job)) {
      sethasData(true);
    }
  }, [job]);
 //console.log(job);
 
  if (hasData) {
    return <JobDetail temp_job={job} />;

  }

  return null;
};

const mapStateToProps = (state) => {
  return {
    job: state.job.fetched_job,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { getJobDetails ,getJobDetails_withoutlogin})(JobPostDetail);
