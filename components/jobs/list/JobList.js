import React, { useEffect, useState } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { getAllJobs, getAllJobs_withoutlogin } from "redux/actions/jobAction";
import JobPostItem from "../JobPostItem";
import { List, Pagination } from "antd";

const JobList = ({
  getAllJobs,
  getAllJobs_withoutlogin,
  filtered_jobs,
  showFilterJobs,
  auth,
}) => {
  const [all_jobs, setall_jobs] = useState();
  useEffect(() => {
    if (auth.isSignedIn) {
      getAllJobs().then((result) => {
        setall_jobs(result);
      });
    } else {
      getAllJobs_withoutlogin().then((result) => {
        setall_jobs(result);
      });
    }
  }, []);
  const jobPostItem1 = () => {
    if (all_jobs) {
      return all_jobs.reverse().map((job) => {
        return (
          <List.Item>
            {" "}
            <JobPostItem key={job.id} job={job} />{" "}
          </List.Item>
        );
      });
    }
  };
  const jobPostItem = (job) => {
    if (all_jobs) {
      
        return (
         
            <JobPostItem key={job.id} job={job} />
       
        );
  
    }
  };

  if (showFilterJobs) {
    return filtered_jobs.reverse().map((job) => {
      return <JobPostItem key={job.id} job={job} />;
    });
  }

  if (all_jobs) {
    return (
      <>
        <List
          // onChange={jobPostItem}
          pagination={{
            onChange: (all_jobs) => {
              console.log(all_jobs);
            },
            pageSize: 3,
            defaultCurrent: 1,
            total: all_jobs.length,
            pageSize: 5,
          }}
          dataSource={all_jobs.reverse()}
          renderItem={((job)=>jobPostItem(job))}
   
      
        />
          {/* {jobPostItem1()} */}
          
     
      </>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    // all_jobs: Object.values(state.job.all_jobs),
    filtered_jobs: state.job.filtered_jobs,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  getAllJobs,
  getAllJobs_withoutlogin,
})(JobList);
