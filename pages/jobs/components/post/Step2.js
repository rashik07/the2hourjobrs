import React from "react";
import StepsParent from "./StepsParent";
import { connect } from "react-redux";

const Step2 = ({ postStep, setPostStep, temp_jobpost }) => {
  const onSubmit = () => {
    const { min_salary, max_salary, description } = temp_jobpost;

    if (!min_salary) {
      alert("You must enter minimum salary");
      return;
    }
    if (max_salary && min_salary >= max_salary) {
      alert("Max salary should be greater than min salary");
      return;
    }
    if (!description) {
      alert("You must write description");
      return;
    }

    setPostStep(postStep + 1);
  };

  return (
    <>
      <StepsParent item="workplace" />
      <StepsParent item="job_location_inside_dhaka" />
      <StepsParent item="job_location" />
      <StepsParent item="salary" />
      <StepsParent item="description" />
      <div className="col-4 mt-4">
        <button
          onClick={() => setPostStep(postStep - 1)}
          className="btn btn-secondary mr-3"
        >
          Prev
        </button>
        <button onClick={onSubmit} className="btn btn-primary">
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

export default connect(mapStateToProps)(Step2);
