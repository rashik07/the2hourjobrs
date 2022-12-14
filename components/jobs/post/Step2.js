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

    if (job_location.length == 0 || job_location == "") {
      message.warning("You must select Job location");
      return;
    }
    {
      console.log(job_location);
    }
    if (!negotiable) {
      // console.log(parseInt(min_salary),parseInt(max_salary))
      if (!min_salary) {
        message.warning("You must enter minimum salary");

        return;
      } else if (parseInt(min_salary) > parseInt(max_salary)) {
        message.warning("Max salary should be greater than min salary");

        return;
      } else {
        return setPostStep(postStep + 1);
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
      <br />
      <Row>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 5, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          xl={{ span: 5, offset: 0 }}
        >
          <img
            src="../../../img/banner_jobpost2.jpg"
            style={{ width: "100%" }}
          />
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 12 , offset: 1}}
          lg={{ span: 12 , offset: 1}}
          xl={{ span: 12, offset:  1}}
        >
          <StepsParent item="workplace"/>

          <StepsParent item="job_location" />

          <StepsParent item="salary" />

          <StepsParent item="description" />

          <div>
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
            <Button onClick={onSubmit} className="btn btn-primary">
              Next
            </Button>
          </div>
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
          xl={{ span: 5, offset: 1 }}
        >
          <img
            src="../../../img/banner_jobpost.jpg"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    temp_jobpost: state.job.temp_jobpost,
  };
};

export default connect(mapStateToProps)(Step2);
