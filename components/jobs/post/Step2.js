import React from "react";
import StepsParent from "./StepsParent";
import { connect } from "react-redux";
import { Select, Row, Col, Space } from "antd";

const Step2 = ({ postStep, setPostStep, temp_jobpost }) => {
  console.log(temp_jobpost);
  const onSubmit = () => {
    const { min_salary, max_salary, job_description } = temp_jobpost;

    if (!min_salary) {
      alert("You must enter minimum salary");
      return;
    }
    if (max_salary && min_salary >= max_salary) {
      alert("Max salary should be greater than min salary");
      return;
    }
    if (!job_description) {
      alert("You must write description");
      return;
    }

    setPostStep(postStep + 1);
  };
  console.log(temp_jobpost);
  return (
    <>
      <Space direction="vertical" size="large">
        <Row>
          <Col span={24}>
            <StepsParent item="workplace" />
          </Col>
          <br />
          <Col span={24}>
            <StepsParent item="job_location_inside_dhaka" />
          </Col>
          <Col span={24}>
            <StepsParent item="job_location" />
          </Col>
          <Col span={24}>
            <StepsParent item="salary" />
          </Col>
          <Col span={24}>
            <StepsParent item="description" />
          </Col>
        </Row>
      </Space>

      <div className="col-4 mt-4">
        <button
          onClick={() => setPostStep(postStep - 1)}
          className="btn btn-secondary mr-3"
        >
          Prev
        </button>
        <button onClick={onSubmit} className="btn btn-primary">
          Next
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    temp_jobpost: state.job.temp_jobpost,
  };
};

export default connect(mapStateToProps)(Step2);
