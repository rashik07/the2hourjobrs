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
    <div className="border-bottom">
      <div className="mb-3">
        <p>
          <strong>Posted with in</strong>
        </p>
        <PostTimeList setValue={handleChange} onClear={onClear} />
      </div>
    </div>
  );
};

export default PostTimeFilter;
