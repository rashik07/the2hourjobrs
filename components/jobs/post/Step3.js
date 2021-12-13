import React from "react";
import StepsParent from "./StepsParent";
import { connect } from "react-redux";
import { Select, Row, Col, Space, message } from "antd";

const Step3 = ({ postStep, setPostStep, temp_jobpost }) => {
  const onSubmit = () => {
    const { min_experience, max_experience, min_age, max_age, education } =
      temp_jobpost;
    if (education.length == 0) {
      message.warning("You must select education");
      return;
    }
    if (!min_experience && !max_experience) {
      if (min_experience >= max_experience) {
        alert("Max experience should be greater than Min experience");
        return;
      }
    }

    if (!min_age && !max_age) {
      if (min_age >= max_age) {
        alert("Max age should be greater than Min age");
        return;
      }
    }

    setPostStep(postStep + 1);
  };

  return (
    <>
      <StepsParent item="education" />
      <StepsParent item="gender" />
      <StepsParent item="age" />

      <StepsParent item="experience" />
      <div style={{ float: "right" }}>
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
