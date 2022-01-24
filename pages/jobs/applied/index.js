import React, { useEffect, useState } from "react";
import Head from "next/head";
import { getAppliedJobs } from "@/redux/actions/jobAction";
import { connect } from "react-redux";
import Navbar from "container/navbar/newNavbar";
import JobPostItem from "components/jobs/JobPostItem";
import { Layout, Breadcrumb } from "antd";

const AppliedJobs = ({ applied_jobs, getAppliedJobs }) => {
  const { Content } = Layout;
  const [reload, setReload] = useState(false);
  useEffect(() => {
    getAppliedJobs();
  }, [reload]);

  const showAppliedJobs = () => {
    if (applied_jobs.length)
      return applied_jobs.map((job) => {
        return <JobPostItem key={job.id} job={job} loader={setReload}/>;
      });

    return (
      <h1 style={{ color: "#AEB6BF", marginTop: "20%", marginLeft: "20%" }}>
        You have no applied jobs
      </h1>
    );
  };

  return (
    <div>
      <Head>
        <title>Applied Jobs</title>
      </Head>
      <Layout className="layout">
        <Navbar />
        <Content className="site-layout">
          <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Job</Breadcrumb.Item>
            <Breadcrumb.Item>Applied Jobs</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <div className="container main-body">{showAppliedJobs()}</div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    applied_jobs: Object.values(state.job.applied_jobs),
  };
};

export default connect(mapStateToProps, { getAppliedJobs })(AppliedJobs);