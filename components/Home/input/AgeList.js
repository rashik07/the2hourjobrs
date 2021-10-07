import React from "react";
import { Select } from "antd";

const AgeList = ({ value, setValue, onClear }) => {
  const { Option } = Select;

  return (
    <Select
      className="filtter-items"
      onChange={setValue}
      onClear={onClear}
      allowClear
      placeholder="Select age range"
    >
      <Option value={JSON.stringify({ max: 20, show: "Below 20 year" })}>
        Below 20 year
      </Option>
      <Option
        value={JSON.stringify({ min: 20, max: 30, show: "20 to 30 years" })}
      >
        20 to 30 years
      </Option>
      <Option
        value={JSON.stringify({ min: 30, max: 40, show: "30 to 40 years" })}
      >
        30 to 40 years
      </Option>
      <Option
        value={JSON.stringify({ min: 40, max: 50, show: "40 to 50 years" })}
      >
        40 to 50 years
      </Option>
      <Option value={JSON.stringify({ min: 50, show: "Over 50 years" })}>
        Over 50 years
      </Option>
    </Select>
  );
};

export default AgeList;
