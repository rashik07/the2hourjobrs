import React, { useState } from "react";

const KeywordSearch = ({ filter, setFilter }) => {
  const [keyword, setKeyword] = useState("");

  const onKeywordSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      const new_filter = { ...filter, keyword };
      setFilter(new_filter);
      setKeyword("");
    }
  };

  return (
    <form className="row input-group m-3 mr-4">
      <input
        className="form-control mt-2"
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
      />
      <button
        className="btn mt-2 button-home"
        onClick={(e) => onKeywordSubmit(e)}
      >
        Keyword Filter
      </button>
    </form>
  );
};

export default KeywordSearch;
