import CropImageUploader from "components/CropImageUploader";
import React, { useState } from "react";
import StepsParent from "./StepsParent";
import { connect } from "react-redux";

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
      <StepsParent item="title" />
      {/* <StepsParent item="image">
        <CropImageUploader limit={1} uploadImage={setImage} />
      </StepsParent> */}
      <StepsParent item="vacancy" />
      <StepsParent item="category" />
      <StepsParent item="skills" />
      <StepsParent item="employment_status" />
      <StepsParent item="deadline" />
      <div className="col-4 mt-4">
        <button onClick={onSubmit} className="btn btn-primary">
          Next
        </button>
      </div>
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
