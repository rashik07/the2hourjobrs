import React from "react";
import StepsParent from "./StepsParent";
import { connect } from "react-redux";
import { Button, Row, Col, Space, message } from "antd";
import CheckBox from "components/CheckBox";

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
      // console.log(parseInt(min_salary),parseInt(max_salary))
      if (!min_salary) {
        message.warning("You must enter minimum salary");

        return;
      }
      else if (parseInt(min_salary) > parseInt(max_salary)) {
        message.warning("Max salary should be greater than min salary");

        return;
      }
      else {
        return   setPostStep(postStep + 1);;
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
            backgroundColor: "dodgerblue",
            color: "#ffffff",
          }}
        >
          Prev
        </Button>
        <Button
          onClick={onSubmit}
          className="btn btn-primary"
         
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
