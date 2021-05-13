import React from "react";
import DeadlineList from "../input/DeadlineList";
import _ from "lodash";

const DeadlineFilter = ({ filter, setFilter }) => {
  function handleChange(value) {
    if (value) {
      value = JSON.parse(value);
      setFilter({ ...filter, deadline: value });
    }
  }

  const onClear = () => {
    filter = _.omit(filter, ["deadline"]);
    setFilter(filter);
  };

  return (
    <div className="border-bottom">
      <div className="mb-3">
        <p>
          <strong>Deadline in</strong>
        </p>
        <DeadlineList setValue={handleChange} onClear={onClear} />
      </div>
    </div>
  );
};

export default DeadlineFilter;
