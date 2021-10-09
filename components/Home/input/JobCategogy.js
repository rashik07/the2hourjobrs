import React, { useEffect } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { getJobCategories } from "redux/actions/jobAction";

const JobCategogy = ({
  getJobCategories,
  categories,
  setValue,
  onClear,
  multiple,
  value,
}) => {
  const { Option, OptGroup } = Select;

  useEffect(() => {
    getJobCategories();
  }, []);

  const getOptions = (categories) => {
    if (categories)
      return categories.map((subCategory) => (
        <OptGroup
          key={subCategory.type}
          label={`${subCategory.type} Categories`}
        >
          {subCategory.list.map(({ id, name }) => (
            <Option key={id} value={JSON.stringify({ id, name })}>
              {name}
            </Option>
          ))}
        </OptGroup>
      ));
  };
  const getOptionss = (categories) => {
    if (categories)
      return categories.map((subCategory) => <h2>{subCategory.name}</h2>);
  };

  return (
    <>
      {categories.map((category) => {
        return category.list.map((subcategory) => {
          return (
            <div
              onClick={() => {
                // setValue(subcategory);
              }}
            >
              <h5>{subcategory.name}</h5>
            </div>
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

export default connect(mapStateToProps, { getJobCategories })(JobCategogy);
