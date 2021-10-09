import React from "react";
import ExperienceList from "../input/ExperienceList";

const ExperienceFilter = ({ filter, setFilter, reload }) => {
  function handleChange(value) {
    if (value) {
      value = JSON.parse(value);
      setFilter({ ...filter, experience: value });
      reload(true);
    }
  }

  const onClear = () => {
    filter = _.omit(filter, ["experience"]);
    setFilter(filter);
    reload(true);
  };

  return (
    <>
      <h3>Experience</h3>
      <ExperienceList setValue={handleChange} onClear={onClear} />
    </>
  );
};

export default ExperienceFilter;
