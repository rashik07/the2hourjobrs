import React from "react";
import EmploymentStatusList from "../input/EmploymentStatusList";

const EmploymentStatusFilter = ({ filter, setFilter }) => {
  function handleChange(value) {
    if (value) {
      setFilter({ ...filter, employmentStatus: value });
    }
  }

  const onClear = () => {
    filter = _.omit(filter, ["employmentStatus"]);
    setFilter(filter);
  };

  return (
    <>
      <h3>Employment Status</h3>
      <EmploymentStatusList setValue={handleChange} onClear={onClear} />
    </>
  );
};

export default EmploymentStatusFilter;
