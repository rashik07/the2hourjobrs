import React, { useEffect } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { getJobCategories } from "../../redux/actions/jobAction";

const JobCategogy = ({ getJobCategories, categories }) => {
  const { Option, OptGroup } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  useEffect(() => {
    getJobCategories();
  }, []);

  const getOptions = (categories) => {
    return categories.map((subCategory) => (
      <OptGroup key={subCategory.type} label={`${subCategory.type} Categories`}>
        {subCategory.list.map(({ id, name }) => (
          <Option key={id} value={id}>
            {name}
          </Option>
        ))}
      </OptGroup>
    ));
  };

  return (
    <div className="border-bottom">
      <p>
        <strong>Category</strong>
        <i className="ms-auto fas fa-chevron-down" />
      </p>
      <Select className="mb-3" style={{ width: 200 }} onChange={handleChange}>
        <Option>Select Category</Option>
        {getOptions(categories)}
      </Select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.job.categories,
  };
};

export default connect(mapStateToProps, { getJobCategories })(JobCategogy);
