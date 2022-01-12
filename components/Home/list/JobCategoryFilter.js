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

  if (loading) {
    return <Skeleton active />;
  } else {
    return (
      <>
        <p style={{ color: "black", marginTop: "15px" , fontWeight: "bold" }}>Skill base</p>
        <Row>
        
        {categories.map((category) => {
          // console.log(category);
          // return <h1>jdnvjdkj</h1>
          if (category.type === "Skilled") {
            return category.list.map((subcategory) => {
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
                  <a>{subcategory.name}</a>
                </Col>
              );
            });
          }
        })}
      </Row>
      <p style={{ color: "black", marginTop: "15px",fontWeight: "bold" }}>Funcational Base</p>
      <Row>
        {categories.map((category) => {
          // console.log(category);

          if (category.type === "Funcational") {
            return category.list.map((subcategory) => {
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
                  <a>{subcategory.name}</a>
                </Col>
              );
            });
          }
        })}
        </Row>
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
