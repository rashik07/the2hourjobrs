import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  getSelfPostedJobs,
  getAppliedJobsPerson,
} from "@/redux/actions/jobAction";
import { connect, useDispatch } from "react-redux";
import Navbar from "container/navbar/newNavbar";
import JobPostItem from "components/jobs/JobPostItem";
import { Layout, Breadcrumb } from "antd";
import * as types from "@/redux/types";
import { List } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const SelfPostedJobs = ({
  self_posted_jobs,
  getSelfPostedJobs,
  auth,
  user_profile,
}) => {
  const dispatch = useDispatch();
  const { Content } = Layout;
  const [selfpostedjob, setSelfpostedJobs] = useState([]);

  useEffect(() => {
    getSelfPostedJobs(user_profile.id).then((result) => {
      setSelfpostedJobs(result.results);
      console.log(result.results);
    });
    dispatch({ type: types.RESET_TEMP_JOB_STATE });
  }, []);


  const showSelfPostedJobs = (job) => {
    if (selfpostedjob.length > 0) {
      return <JobPostItem key={job.id} job={job} />;
    } else {
      return (
        <h1 style={{ color: "#AEB6BF", marginTop: "20%", marginLeft: "20%" }}>
          You have not posted any jobs
        </h1>
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Self Posted Jobs</title>
      </Head>
      <Layout className="layout">
        <Navbar />

        <Content className="site-layout" style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item href="/">
              {" "}
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/jobs/list">Job List</Breadcrumb.Item>
            <Breadcrumb.Item>Self posted jobs</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <h2 className="ml-3 mt-4">Self Posted Jobs</h2>
            {/* {showSelfPostedJobs()} */}
            <List
              // pagination={{
              //   onChange: (page_no) => {
              //     setPageNo(page_no);
              //   },

              //   pageSize: 100,
              //   defaultCurrent: 1,
              //   // total: totaldata.current,
              // }}
              dataSource={selfpostedjob}
              renderItem={(job) => showSelfPostedJobs(job)}
            />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // self_posted_jobs: Object.values(state.job.self_posted_jobs),
    user_profile: state.user.user_profile,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  getSelfPostedJobs,
  getAppliedJobsPerson,
})(SelfPostedJobs);
