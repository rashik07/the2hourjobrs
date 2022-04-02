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
  var tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate()+1);

  var next2Date = new Date();
  next2Date.setDate(next2Date.getDate()+2);

  const tomorrow = JSON.stringify({
    show: "Tomorrow",
    date: dateformat(tomorrowDate, "yyyy-mm-dd"),
  });
  const next2 = JSON.stringify({
    show: "Next 2 days",
    date: dateformat(next2Date, "yyyy-mm-dd"),
  });

  return (
    <Select
      className="filtter-items"
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
