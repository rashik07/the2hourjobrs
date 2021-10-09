import React from "react";
import { Select } from "antd";

const EmploymentStatusList = ({ value, setValue, onClear }) => {
  const { Option } = Select;

  return (
    <Select
      className="filtter-items"
      onChange={setValue}
      onClear={onClear}
      allowClear
      placeholder="Select employement status"
    >
      <Option value="Full Time">Full Time</Option>
      <Option value="Part Time">Part Time</Option>
      <Option value="Contractual">Contractual</Option>
      <Option value="Internship">Internship</Option>
      <Option value="Freelance">Freelance</Option>
    </Select>
  );
};

export default EmploymentStatusList;
