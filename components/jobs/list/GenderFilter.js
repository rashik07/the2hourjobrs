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
    <>
      <h3>Gender</h3>
      <GenderList setValue={handleChange} onClear={onClear} />
    </>
  );
};

export default GenderFilter;
