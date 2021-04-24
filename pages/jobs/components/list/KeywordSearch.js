import React, { useState } from "react";

const KeywordSearch = ({ filter, setFilter }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <form className="d-flex m-3 row">
      <input
        className="form-control mr-2 mt-2 col-9"
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        className="btn mt-2 button-home"
        onClick={(e) => {
          e.preventDefault();
          console.log(keyword);
          const new_filter = { ...filter, keyword };
          setFilter(new_filter);
        }}
      >
        Keyword Filter
      </button>
    </form>
  );
};

export default KeywordSearch;
