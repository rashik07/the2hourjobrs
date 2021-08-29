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
    <>
      <h3>Experience</h3>
      <ExperienceList setValue={handleChange} onClear={onClear} />
    </>
  );
};

export default ExperienceFilter;
