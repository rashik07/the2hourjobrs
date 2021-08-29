import CropImageUploader from "components/CropImageUploader";
import React, { useState } from "react";
import StepsParent from "./StepsParent";
import { connect } from "react-redux";
import { Space } from "antd";

const Step1 = ({ postStep, setPostStep, temp_jobpost }) => {
  const onSubmit = () => {
    if (!temp_jobpost.title) {
      alert("You must enter title");
      return;
    }
    if (!temp_jobpost.category) {
      alert("You must select category");
      return;
    }
    if (!temp_jobpost.deadline) {
      alert("You must select Application deadline");
      return;
    }
    if (temp_jobpost.employmentStatus === []) {
      alert("You must select Employment Status");
      return;
    }

    setPostStep(postStep + 1);
  };

  const [image, setImage] = useState([]);

  return (
    <>
      <br />
      <StepsParent item="title" />
      {/* <StepsParent item="image">
        <CropImageUploader limit={1} uploadImage={setImage} />
      </StepsParent> */}
      <Space size="large">
        <StepsParent item="vacancy" />
        <StepsParent item="category" />
        <StepsParent item="deadline" />
      </Space>
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
