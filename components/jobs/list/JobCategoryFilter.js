import React from "react";
import JobCategogy from "../input/JobCategogy";

const JobCategoryFilter = ({ filter, setFilter }) => {
  function handleChange(value) {
    if (value) {
      const new_filter = { ...filter, category: JSON.parse(value) };
      setFilter(new_filter);
    }
  }

  const onClear = () => {
    filter = _.omit(filter, ["category"]);
    setFilter(filter);
  };

  return (
    <div className="border-bottom">
      <p>
        <strong>Category</strong>
      </p>
      <JobCategogy setValue={handleChange} onClear={onClear} />
    </div>
  );
};

export default JobCategoryFilter;
