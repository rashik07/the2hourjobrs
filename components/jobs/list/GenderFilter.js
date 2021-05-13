import React from "react";
import GenderList from "../input/GenderList";
import _ from "lodash";

const GenderFilter = ({ filter, setFilter }) => {
  function handleChange(value) {
    if (value) {
      setFilter({ ...filter, gender: value });
    }
  }

  const onClear = () => {
    filter = _.omit(filter, ["gender"]);
    setFilter(filter);
  };

  return (
    <div className="border-bottom">
      <div className="mb-3">
        <p>
          <strong>Gender</strong>
        </p>
        <GenderList setValue={handleChange} onClear={onClear} />
      </div>
    </div>
  );
};

export default GenderFilter;
