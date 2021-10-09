import React from "react";
import PostTimeList from "../input/PostTimeList";

const PostTimeFilter = ({ filter, setFilter, reload }) => {
  function handleChange(value) {
    if (value) {
      value = JSON.parse(value);
      setFilter({ ...filter, postedDate: value });
    }
    reload(true);
  }

  const onClear = () => {
    filter = _.omit(filter, ["postedDate"]);
    setFilter(filter);
    reload(true);
  };

  return (
    <>
      <h3>Posted with in</h3>
      <PostTimeList setValue={handleChange} onClear={onClear} />
    </>
  );
};

export default PostTimeFilter;
