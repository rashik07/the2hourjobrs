import React from "react";
import AgeList from "../input/AgeList";

const AgeFilter = ({ filter, setFilter, reload }) => {
  function handleChange(value) {
    if (value) {
      value = JSON.parse(value);
      setFilter({ ...filter, age: value });
     
    }
    reload(true);
  }
 
  const onClear = () => {
    filter = _.omit(filter, ["age"]);
    setFilter(filter);
    reload(true);
  };

  return (
    <>
      <h3>Age</h3>
      <AgeList setValue={handleChange} onClear={onClear} />
    </>
  );
};

export default AgeFilter;
