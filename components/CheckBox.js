import React from "react";
import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;

const CheckBox = ({ value, setValue, options }) => {
  const onChange = (list) => {
    setValue(list);
  };

  return (
    <>
      <CheckboxGroup options={options} value={value} onChange={onChange} />
    </>
  );
};

export default CheckBox;
