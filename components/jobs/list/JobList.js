import React, { useEffect, useState, useRef } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import {
  getAllJobs,
  getAllJobs_withoutlogin,
  filterJobs,
} from "redux/actions/jobAction";
import JobPostItem from "../JobPostItem";
import { List, Pagination } from "antd";

const JobList = ({
  getAllJobs,
  getAllJobs_withoutlogin,
  showFilterJobs,
  auth,
  filterJobs,
  pageSize,
  page_no,
  totaldata,
  setPageNo,
  filtered_jobs,
  listreload,
  pageSizeFiltered,
  page_no_filter,
  totaldataFilter,
  setPageNoFilter,
}) => {
  const [all_jobs, setall_jobs] = useState([]);
 
  // const [filtered_jobs, setall_jobs] = useState();

  const [reload, setReload] = useState(false);
  // console.log(pageSize.current);
  useEffect(() => {
    totaldata.current = 0;
    if (auth.isSignedIn) {
      getAllJobs(page_no, pageSize.current).then((result) => {
        totaldata.current = result.count;
        // console.log(result.count);
        setall_jobs(result.results);
      });
  
    } else {
      getAllJobs_withoutlogin(page_no, pageSize.current).then((result) => {
        totaldata.current = result.count;
        setall_jobs(result.results);
      });
    }
  }, [page_no, reload, listreload]);

  console.log(all_jobs);
  const jobPostItem = (job) => {
    return <JobPostItem key={job.id} job={job} loader={setReload} />;
  };

  if (showFilterJobs&&filtered_jobs) {
    
    console.log(filtered_jobs);
    if (filtered_jobs.length > 0) {
     return(
      <>
        <List
          pagination={{
            onChange: (page_no) => {
              setPageNoFilter(page_no);
            },
            current: page_no_filter,
            pageSize: pageSizeFiltered.current,
            defaultCurrent: page_no_filter,
            total: totaldataFilter.current,
          }}
          dataSource={filtered_jobs}
          renderItem={(job) => jobPostItem(job)}
        />
        {/* {jobPostItem1()} */}
      </>);
    } else {
      return (
        <h1 style={{ color: "#AEB6BF", marginTop: "20%", marginLeft: "20%" }}>
          You have no jobs found.
        </h1>
      );
    }
  }

  if (all_jobs) {
    return (
      <>
        <List
          pagination={{
            onChange: (page_no) => {
              setPageNo(page_no);
            },
            current: page_no,
            pageSize: pageSize.current,
            defaultCurrent: page_no,
            total: totaldata.current,
          }}
          dataSource={all_jobs}
          renderItem={(job) => jobPostItem(job)}
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
    // filtered_jobs: state.job.filtered_jobs,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  getAllJobs,
  getAllJobs_withoutlogin,
  filterJobs,
})(JobList);
