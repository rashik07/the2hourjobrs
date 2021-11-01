import React from "react";
import StepsParent from "./StepsParent";
import { connect } from "react-redux";

const Step3 = ({ postStep, setPostStep, temp_jobpost }) => {
  const onSubmit = () => {
    const { min_experience, max_experience, min_age, max_age } = temp_jobpost;

    if (min_experience && max_experience) {
      if (min_experience >= max_experience)
        alert("Max experience should be greater than Min experience");
    }

    if (min_age && max_age) {
      if (min_age >= max_age) alert("Max age should be greater than Min age");
    }

    setPostStep(postStep + 1);
  };

  return (
    <>
      <StepsParent item="education" />
      <StepsParent item="gender" />
      <StepsParent item="age" />
      
      <StepsParent item="experience" />
      <div style={{float: "right"}}>
        <button
          onClick={() => setPostStep(postStep - 1)}
          className="btn btn-secondary mr-3"
        >
          Prev
        </button>
        <button onClick={onSubmit} className="btn btn-primary mr-3">
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

export default connect(mapStateToProps)(Step3);
