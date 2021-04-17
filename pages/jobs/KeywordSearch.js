import React, { useState } from "react";

const KeywordSearch = ({ filter, setFilter }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <form className="d-flex m-3">
      <input
        className="form-control me-2 mt-2"
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        className="btn mt-2 button-home"
        onClick={(e) => {
          e.preventDefault();
          const new_filter = { ...filter, keyword };
          setFilter(new_filter);
        }}
      >
        Search
      </button>
    </form>
  );
};

export default KeywordSearch;
