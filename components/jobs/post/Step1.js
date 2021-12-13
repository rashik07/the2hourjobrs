import CropImageUploader from "components/CropImageUploader";
import React, { useState } from "react";
import StepsParent from "./StepsParent";
import { connect } from "react-redux";
import { Space, Row, Col, Alert, message } from "antd";

const Step1 = ({ postStep, setPostStep, temp_jobpost }) => {
  const onSubmit = () => {
    if (!temp_jobpost.title) {
      message.warning("You must enter title");
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

      <button onClick={onSubmit} style={{ float: "right" }}>
        Next
      </button>

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
