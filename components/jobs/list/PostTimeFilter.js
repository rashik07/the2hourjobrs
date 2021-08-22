import React from "react";
import PostTimeList from "../input/PostTimeList";

const PostTimeFilter = ({ filter, setFilter }) => {
  function handleChange(value) {
    if (value) {
      value = JSON.parse(value);
      setFilter({ ...filter, postedDate: value });
    }
  }

  const onClear = () => {
    filter = _.omit(filter, ["postedDate"]);
    setFilter(filter);
  };

  return (
    <>
      <h3>Posted with in</h3>
      <PostTimeList setValue={handleChange} onClear={onClear} />
    </>
  );
};

export default PostTimeFilter;
