import React, { useState } from "react";
import StepsParent from "./StepsParent";
import { connect } from "react-redux";
import {  Row, Col, message,Button } from "antd";

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
  console.log(temp_jobpost.employment_status.length);
  console.log(temp_jobpost);
  return (
    <>
      <br />

      <StepsParent item="title" />

      {/* <StepsParent item="image">
        <CropImageUploader limit={1} uploadImage={setImage} />
      </StepsParent> */}

      <Row>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <StepsParent item="vacancy" />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} id="jobpost_category">
          <StepsParent item="category" />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <StepsParent item="deadline" />
        </Col>
      </Row>

      <StepsParent item="skills" />

      <br />

      <StepsParent item="employment_status" />

      <br />

      <Button onClick={onSubmit} style={{ float: "right" , backgroundColor:"#389e0d" , color:"#ffffff" }}  >
        Next
      </Button>

      <br />
      <br />
      <br />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    temp_jobpost: state.job.temp_jobpost,
  };
};

export default connect(mapStateToProps)(Step1);
