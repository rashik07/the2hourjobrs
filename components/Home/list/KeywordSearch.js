import React, { useState } from "react";
import { Button, Tooltip, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { SetfilterAction } from "../../../redux/actions/jobAction";
import { useRouter } from "next/router";

const KeywordSearch = ({
  filter,
  setFilter,
  getFilteredList,
  setShowFilter,
  reload,
  SetfilterAction,
}) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  function handleChange(e) {
    if (keyword) {
      const new_filter = { ...filter, keyword };
      SetfilterAction(new_filter);
      router.push({
        pathname: "/jobs/list",
        // query: filter,
      });
      // setFilter(new_filter);
      // reload(true);
    }
  }

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
    <Col
      xs={24}
      sm={24}
      md={24}
      lg={24}
      xl={24}
    

      className="search_bar"
    >
      <form className="search_form">
        <input
          // className="form-control mt-2"
          style={{
            width: "100%",
            padding: ".5rem",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            border: "0px solid #000000",
          }}
          placeholder=" What I am looking for"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (keyword) {
                const new_filter = { ...filter, keyword };
                SetfilterAction(new_filter);
                router.push({
                  pathname: "/jobs/list",
                  // query: filter,
                });
                // setFilter(new_filter);
                // reload(true);
              }
              // getFilteredList(filter);
              setShowFilter(true);
            }
          }}
        />

        <Button
          className="search_button"
          icon={<SearchOutlined  />}
          onClick={(e) => {
            //  onKeywordSubmit(e);
            handleChange(e);
            getFilteredList(filter);
            setShowFilter(true);
          }}
        >
          Search
        </Button>
      </form>
      
    </Col>
  );
};

export default connect(null, { SetfilterAction })(KeywordSearch);
