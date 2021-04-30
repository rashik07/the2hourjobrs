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
    <div className="border-bottom">
      <div className="mb-3">
        <p>
          <strong>Employment Status</strong>
        </p>
        <EmploymentStatusList setValue={handleChange} onClear={onClear} />
      </div>
    </div>
  );
};

export default EmploymentStatusFilter;
