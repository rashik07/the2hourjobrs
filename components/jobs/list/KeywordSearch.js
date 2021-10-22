import React, { useState } from "react";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const KeywordSearch = ({
  filter,
  setFilter,
  getFilteredList,
  setShowFilter,
  reload,
}) => {
  const [keyword, setKeyword] = useState("");

  const onKeywordSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      const new_filter = { ...filter, keyword };
      setFilter(new_filter);
      setKeyword("");
    }
  };
  if (reload) {
    getFilteredList(filter);
  }

  return (
    <form style={{ display: "flex", width: "100%" }}>
      <input
        // className="form-control mt-2"
        style={{
          width: "90%",
          padding: ".5rem",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
          border: "1px solid #000000",
        }}
        placeholder="Type and hit Enter"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
      />

      <Button
      className="search_button"
      
        icon={<SearchOutlined />}
        onClick={(e) => {
          onKeywordSubmit(e);
          getFilteredList(filter);
          setShowFilter(true);
        }}
      >
        Search
      </Button>
    </form>
  );
};

export default KeywordSearch;
