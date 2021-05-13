import React from "react";
import ExperienceList from "../input/ExperienceList";

const ExperienceFilter = ({ filter, setFilter }) => {
  function handleChange(value) {
    if (value) {
      value = JSON.parse(value);
      setFilter({ ...filter, experience: value });
    }
  }

  const onClear = () => {
    filter = _.omit(filter, ["experience"]);
    setFilter(filter);
  };
  
  return (
    <div className="border-bottom">
      <div className="mb-3">
        <p>
          <strong>Experience</strong>
        </p>
        <ExperienceList setValue={handleChange} onClear={onClear} />
      </div>
    </div>
  );
};

export default ExperienceFilter;
