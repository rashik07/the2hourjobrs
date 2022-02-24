import React, { useState } from "react";
import StepsParent from "./StepsParent";
import { connect } from "react-redux";
import { Row, Col, message, Button } from "antd";

const Step1 = ({ postStep, setPostStep, temp_jobpost }) => {
  const onSubmit = () => {
    if (!temp_jobpost.title) {
      message.warning('You must enter "what am i looking for?"');
      return;
    }

    if (!temp_jobpost.category) {
      message.warning("You must select category");
      return;
    }

    if (!temp_jobpost.deadline) {
      message.warning("You must select Application deadline");
      return;
    }

    if (temp_jobpost.employment_status.length == 0) {
      message.warning("You must select Employment Status");
      return;
    }

    setPostStep(postStep + 1);
  };

  const [image, setImage] = useState([]);
  // console.log(temp_jobpost.employment_status.length);
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
          <StepsParent item="title" />

          <StepsParent item="vacancy" />

          <StepsParent item="category" />

          <StepsParent item="deadline" />

          <StepsParent item="skills" />

          <StepsParent item="employment_status" />

          <Button onClick={onSubmit} style={{ marginTop: "10px" }}>
            Next
          </Button>
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

export default connect(mapStateToProps)(Step1);
