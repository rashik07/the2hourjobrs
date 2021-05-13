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
    <div className="border-bottom">
      <div className="mb-3">
        <p>
          <strong>Age</strong>
        </p>
        <AgeList setValue={handleChange} onClear={onClear} />
      </div>
    </div>
  );
};

export default AgeFilter;
