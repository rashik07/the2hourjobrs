import React from "react";
import AgeList from "../input/AgeList";

const AgeFilter = ({ filter, setFilter }) => {
  function handleChange(value) {
    if (value) {
      value = JSON.parse(value);
      setFilter({ ...filter, age: value });
    }
  }

  const onClear = () => {
    filter = _.omit(filter, ["age"]);
    setFilter(filter);
  };

  return (
    <>
      <h3>Age</h3>
      <AgeList setValue={handleChange} onClear={onClear} />
    </>
  );
};

export default AgeFilter;
