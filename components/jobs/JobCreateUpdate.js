import Navbar from "container/navbar/newNavbar";
import React, { useState, useEffect } from "react";
import { Steps, Layout, Breadcrumb, Row, Col } from "antd";
import Head from "next/head";
import Step1 from "components/jobs/post/Step1";
import Step2 from "components/jobs/post/Step2";
import Step3 from "components/jobs/post/Step3";
import Step4 from "components/jobs/post/Step4";
import { getEducation, getJobCategories } from "@/redux/actions/jobAction";
import { connect } from "react-redux";
import { HomeOutlined } from "@ant-design/icons";

const JobCreateUpdate = ({ getJobCategories, getEducation, editJob }) => {
  const { Step } = Steps;
  const { Content } = Layout;
  useEffect(() => {
    getJobCategories();
    getEducation();
  }, []);
  const [postStep, setPostStep] = useState(0);
  const renderInputForms = () => {
    switch (postStep) {
      case 0:
        return <Step1 postStep={postStep} setPostStep={setPostStep} />;

      case 1:
        return <Step2 postStep={postStep} setPostStep={setPostStep} />;

      case 2:
        return <Step3 postStep={postStep} setPostStep={setPostStep} />;

      case 3:
        return (
          <Step4
            editJob={editJob}
            postStep={postStep}
            setPostStep={setPostStep}
          />
        );

      default:
        break;
    }
  };

  return (
    <>
      <Navbar />
      <Head>
        <title>Post a job</title>
      </Head>
      <Layout>
        <Navbar />
        <Content className="site-layout">
          <Breadcrumb className="breadcrumb_main">
            <Breadcrumb.Item href="/">
              {" "}
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/jobs/list">Job List</Breadcrumb.Item>
            <Breadcrumb.Item>Job Post</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: "45px 50px" }}
          >
            <Steps
              size="medium"
              current={postStep}
              style={{ alignItems: "end" }}
              className="stepJobPostPc"
            >
              <Step title="Primary Information" />
              <Step title="More Job Information" />
              <Step title="Candidates Requirements" />
              <Step title="Preview" />
            </Steps>
            <Steps
              size="medium"
              current={postStep}
              className="stepJobPostMobile"
              direction="vertical"
            >
              <Step title="Primary Information" />
              <Step title="More Job Information" />
              <Step title="Candidates Requirements" />
              <Step title="Preview" />
            </Steps>
            {renderInputForms()}
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default connect(null, {
  getJobCategories,
  getEducation,
})(JobCreateUpdate);
