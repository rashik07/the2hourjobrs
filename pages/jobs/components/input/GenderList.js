import React from "react";
import { Select } from "antd";

const GenderList = ({ value, setValue, onClear }) => {
  const { Option } = Select;

  return (
    <Select
      style={{ width: 200 }}
      onChange={setValue}
      onClear={onClear}
      allowClear
      placeholder="Select gender"
    >
      <Option value="Male">Male</Option>
      <Option value="Female">Female</Option>
      <Option value="Others">Others</Option>
    </Select>
  );
};

export default GenderList;
