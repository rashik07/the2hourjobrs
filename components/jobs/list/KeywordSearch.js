import React, { useState, useEffect } from "react";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const KeywordSearch = ({
  filter,
  setFilter,
  getFilteredList,
  setShowFilter,
  reload,
  setreload,
  pageSize,
  page_no,
  totaldata,
  setPageNo,
  setfiltered_data,
  setlistreload,
}) => {
  const [keyword, setKeyword] = useState("");
  const [message, setMessage] = useState("");

  const onKeywordSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      const new_filter = { ...filter, keyword };
      setFilter(new_filter);
      setKeyword("");
    }
  };

  useEffect(() => {
    //  setreload(false);
    if (reload) {
      getFilteredList(filter, page_no, pageSize.current).then((result) => {
        totaldata.current = result.count;
        setfiltered_data(result.results);
        console.log(result);
      });
    }
  }, [page_no, reload, filter]);

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
        placeholder="What I am looking for"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        onKeyPress={(e) => {
          console.log("changing page no to 1");
          setPageNo(1);
          if (e.key === "Enter") {
            e.preventDefault();
            if (keyword) {
              const new_filter = { ...filter, keyword };
              setFilter(new_filter);
              setKeyword("");
            }
            setShowFilter(true);
          }
        }}
      />

      <Button
        className="search_button"
        icon={<SearchOutlined />}
        onClick={(e) => {
          onKeywordSubmit(e);
          // getFilteredList(filter);
          setShowFilter(true);
        }}
      >
        Search
      </Button>
    </form>
  );
};

export default KeywordSearch;
