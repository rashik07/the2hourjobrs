import React from "react";
import { SetfilterAction } from "../../../redux/actions/jobAction";
import JobCategogy from "../input/JobCategogy";
import { connect } from "react-redux";
import { getJobCategories } from "redux/actions/jobAction";
import { useRouter } from "next/router";
import {  Row, Col, Divider, Button } from "antd";

const JobCategoryFilter = ({
  filter,
  setFilter,
  reload,
  categories,
  SetfilterAction,
}) => {
  const router = useRouter();
  function handleChange(value) {
    if (value) {
      const new_filter = { ...filter, category: JSON.parse(value) };
      SetfilterAction(new_filter);
      router.push({
        pathname: "/jobs/list",
        // query: filter,
      });
      // setFilter(new_filter);
      // reload(true);
    }
  }

  const onClear = () => {
    filter = _.omit(filter, ["category"]);
    setFilter(filter);
    reload(reload);
  };

  return (
    <>
      {categories.map((category) => {
        return category.list.map((subcategory) => {
          return (
            <Col
              span={6}
              onClick={() => {
                handleChange(JSON.stringify(subcategory));
              }}
              style={{ margin: "0rem 0rem" }}
            >
              <p> <li> {subcategory.name}</li></p>
            </Col>
          );
        });
      })}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.job.categories,
  };
};

export default connect(mapStateToProps, { getJobCategories, SetfilterAction })(
  JobCategoryFilter
);
