import React from "react";
import { Select } from "antd";
import dateformat from "dateformat";

const PostTimeList = ({ value, setValue, onClear }) => {
  const { Option } = Select;

  const date = new Date();
  const today = JSON.stringify({
    show: "Today",
    date: dateformat(date, "yyyy-mm-dd"),
  });
  const last2 = JSON.stringify({
    show: "Last 2 days",
    date: dateformat(date - 2, "yyyy-mm-dd"),
  });
  const last3 = JSON.stringify({
    show: "Last 3 days",
    date: dateformat(date - 3, "yyyy-mm-dd"),
  });

  return (
    <Select
      style={{ width: 200 }}
      onChange={setValue}
      onClear={onClear}
      allowClear
      placeholder="Select posted time"
    >
      <Option value={today}>Today</Option>
      <Option value={last2}>Last 2 days</Option>
      <Option value={last3}>Last 3 days</Option>
    </Select>
  );
};

export default PostTimeList;
