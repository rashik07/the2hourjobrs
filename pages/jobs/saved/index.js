import React, { useEffect } from "react";
import Head from "next/head";
import { getSavedJobs } from "@/redux/actions/jobAction";
import { connect } from "react-redux";
import Navbar from "container/navbar/newNavbar";
import JobPostItem from "components/jobs/JobPostItem";
import { useRouter } from "next/router";
import { Layout ,Breadcrumb} from "antd";

const SavedJobs = ({ saved_jobs, getSavedJobs, isSignedIn }) => {
  const router = useRouter();
  const { Content } = Layout;
  useEffect(() => {
    if (!isSignedIn) {
      router.push("/auth/login");
    }

    getSavedJobs();
  }, []);

  const showSavedJobs = () => {
    if (saved_jobs.length)
      return saved_jobs.map((job) => {
        return <JobPostItem key={job.id} job={job} />;
      });

    return (
      <h1 style={{ color: "#AEB6BF", marginTop: "20%", marginLeft: "20%" }}>
        You have no saved jobs
      </h1>
    );
  };

  return (
    <div>
      <Head>
        <title>Saved Jobs</title>
      </Head>
      <Layout className="layout">
        <Navbar />
        <Content className="site-layout">
        <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Job</Breadcrumb.Item>
            <Breadcrumb.Item>Save Jobs</Breadcrumb.Item>
          </Breadcrumb>
        <div className="site-layout-background">
        <div className="container main-body">{showSavedJobs()}</div>
        </div>
        </Content>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saved_jobs: Object.values(state.job.saved_jobs),
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { getSavedJobs })(SavedJobs);
