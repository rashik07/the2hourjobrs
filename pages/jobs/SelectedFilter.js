import React from "react";
import { Select } from "antd";

const SelectedFilter = () => {
  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: "96%" }}
      defaultValue={["a10", "c12"]}
      className="ml-3"
      open={false}
    ></Select>
  );
};

export default SelectedFilter;
