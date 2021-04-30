import React from "react";
import JobIndustry from "../input/JobIndustry";

const JobIndustryFilter = ({ filter, setFilter }) => {
  function handleChange(value) {
    if (value) {
      const new_filter = { ...filter, industry: JSON.parse(value) };
      setFilter(new_filter);
    }
  }

  const onClear = () => {
    filter = _.omit(filter, ["industry"]);
    setFilter(filter);
  };

  return (
    <div className="border-bottom">
      <p>
        <strong>Industry</strong>
      </p>
      <JobIndustry setValue={handleChange} onClear={onClear} />
    </div>
  );
};

export default JobIndustryFilter;
