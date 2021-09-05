import React from "react";
import DeadlineList from "../input/DeadlineList";
import _ from "lodash";

const DeadlineFilter = ({ filter, setFilter, reload }) => {
  function handleChange(value) {
    if (value) {
      value = JSON.parse(value);
      setFilter({ ...filter, deadline: value });
      reload(true);
    }
  }

  const onClear = () => {
    filter = _.omit(filter, ["deadline"]);
    setFilter(filter);
    reload(true);
  };

  return (
    <>
      <h3>Deadline in</h3>
      <DeadlineList setValue={handleChange} onClear={onClear} />
    </>
  );
};

export default DeadlineFilter;
