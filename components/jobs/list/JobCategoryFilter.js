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
    <>
      <h3>Category</h3>
      <JobCategogy setValue={handleChange} onClear={onClear} />
    </>
  );
};

export default JobCategoryFilter;
