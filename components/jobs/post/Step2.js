import React from "react";
import StepsParent from "./StepsParent";
import { connect } from "react-redux";
import { Button, Row, Col, Space, message } from "antd";

const Step2 = ({ postStep, setPostStep, temp_jobpost }) => {
  console.log(temp_jobpost);
  const onSubmit = () => {
    const {
      min_salary,
      max_salary,
      job_description,
      negotiable,
      job_location,
    } = temp_jobpost;

    if (job_location.length == 0) {
      message.warning("You must select Job location");
      return;
    }
    if (!negotiable) {
      if (!min_salary) {
        message.warning("You must enter minimum salary");

        return;
      }
      if (min_salary > max_salary) {
        message.warning("Max salary should be greater than min salary");

        return;
      }
    }
    if (!job_description) {
      message.warning("You must write description");

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

      <div style={{ float: "right" }}>
        <Button
          onClick={() => setPostStep(postStep - 1)}
          className="btn btn-secondary mr-3"
          style={{
            marginRight: "10px",
            backgroundColor: "#f5222d",
            color: "#ffffff",
          }}
        >
          Prev
        </Button>
        <Button
          onClick={onSubmit}
          className="btn btn-primary"
          style={{
            
            backgroundColor: "#389e0d",
            color: "#ffffff",
          }}
        >
          Next
        </Button>
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
