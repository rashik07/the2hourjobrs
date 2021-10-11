import React, { useState } from "react";
import { Button, Tooltip,Col } from "antd";
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
    <Col span={18}>
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
        style={{
          height: "auto",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
          background: "#773EA9",
          color: "white",
          borderColor: "#000000",
        }}
        icon={<SearchOutlined />}
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


export default connect(null, { SetfilterAction })(
  KeywordSearch
);

