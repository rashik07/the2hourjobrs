import React from "react";
import EmploymentStatusList from "../input/EmploymentStatusList";

const EmploymentStatusFilter = ({ filter, setFilter, reload }) => {
  function handleChange(value) {
    if (value) {
      setFilter({ ...filter, employmentStatus: value });
    }
    reload(true);
  }

  const onClear = () => {
    filter = _.omit(filter, ["employmentStatus"]);
    setFilter(filter);
    reload(true);
  };

  return (
    <>
      <h3>Employment Status</h3>
      <EmploymentStatusList setValue={handleChange} onClear={onClear} />
    </>
  );
};

export default EmploymentStatusFilter;
