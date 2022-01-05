import React, { useEffect, useState } from "react";
import { SetfilterAction } from "../../../redux/actions/jobAction";
// import JobCategogy from "../input/JobCategogy";
import { connect } from "react-redux";
import { getJobCategories } from "redux/actions/jobAction";
import { useRouter } from "next/router";
import { Row, Col, Divider, Button, Skeleton } from "antd";
import actions from "redux-form/lib/actions";
import { CaretRightOutlined } from "@ant-design/icons";

const JobCategoryFilter = ({
  filter,
  setFilter,
  reload,
  // categories,
  SetfilterAction,
  getJobCategories,
}) => {
  const [categories, setcategories] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    getJobCategories().then((result) => {
      console.log(result);
      setcategories(result);
      setloading(false);
    });
  }, []);
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
  if (loading) {
    return <Skeleton active />;
  } else {
    return (
      <>
        {categories.map((category) => {
          return category.list.reverse().map((subcategory) => {
            return (
              <Col
                xs={24}
                sm={24}
                md={6}
                lg={6}
                xl={6}
                onClick={() => {
                  handleChange(JSON.stringify(subcategory));
                }}
                style={{ margin: "0rem 0rem" }}
                className="home_category"
              >
                <CaretRightOutlined style={{ color: "#6db784" }} />{" "}
                {console.log(subcategory.name)}
                <a>{subcategory.name}</a>
              </Col>
            );
          });
        })}
      </>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    // categories: state.job.categories,
  };
};

export default connect(mapStateToProps, { getJobCategories, SetfilterAction })(
  JobCategoryFilter
);
