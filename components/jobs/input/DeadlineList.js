import React from "react";
import { Select } from "antd";
import dateformat from "dateformat";

const DeadlineList = ({ value, setValue, onClear }) => {
  const { Option } = Select;

  const date = new Date();
  const today = JSON.stringify({
    show: "Today",
    date: dateformat(date, "yyyy-mm-dd"),
  });

  const tomorrow = JSON.stringify({
    show: "Tomorrow",
    date: dateformat(date + 1, "yyyy-mm-dd"),
  });
  const next2 = JSON.stringify({
    show: "Next 2 days",
    date: dateformat(date + 2, "yyyy-mm-dd"),
  });

  return (
    <Select
      style={{ width: 200 }}
      onChange={setValue}
      onClear={onClear}
      allowClear
      placeholder="Select deadline"
    >
      <Option value={today}>Today</Option>
      <Option value={tomorrow}>Tomorrow</Option>
      <Option value={next2}>Next 2 days</Option>
    </Select>
  );
};

export default DeadlineList;
