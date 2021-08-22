import React from "react";
import { Select } from "antd";

const ExperienceList = ({ value, setValue, onClear }) => {
  const { Option } = Select;

  return (
    <Select
      className="filtter-items"
      onChange={setValue}
      onClear={onClear}
      allowClear
      placeholder="Select experience range"
    >
      <Option value={JSON.stringify({ max: 1, show: "Below 1 year" })}>
        Below 1 year
      </Option>
      <Option value={JSON.stringify({ min: 1, max: 3, show: "1 to 3 years" })}>
        1 to 3 years
      </Option>
      <Option value={JSON.stringify({ min: 3, max: 5, show: "3 to 5 years" })}>
        3 to 5 years
      </Option>
      <Option
        value={JSON.stringify({ min: 5, max: 10, show: "5 to 10 years" })}
      >
        5 to 10 years
      </Option>
      <Option value={JSON.stringify({ min: 10, show: "Over 10 years" })}>
        Over 10 years
      </Option>
    </Select>
  );
};

export default ExperienceList;
