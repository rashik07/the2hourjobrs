import Navbar from "container/navbar/navbar";
import React, { useState, useEffect } from "react";

import { Steps } from "antd";
import Head from "next/head";
import Step1 from "components/jobs/post/Step1";
import Step2 from "components/jobs/post/Step2";
import Step3 from "components/jobs/post/Step3";
import Step4 from "components/jobs/post/Step4";
import { getEducation, getJobCategories } from "@/redux/actions/jobAction";
import { connect } from "react-redux";

const JobCreateUpdate = ({ getJobCategories, getEducation, editJob }) => {
  const { Step } = Steps;

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.1/antd.min.css"
        />
      </Head>
      <div className="container mt-4">
        <Steps size="medium" current={postStep}>
          <Step title="Primary Information" />
          <Step title="More Job Information" />
          <Step title="Candidates Requirements" />
          <Step title="Preview" />
        </Steps>
        {renderInputForms()}
      </div>
    </>
  );
};

export default connect(null, {
  getJobCategories,
  getEducation,
})(JobCreateUpdate);
