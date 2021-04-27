import React, { useEffect } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { getJobCategories } from "@/redux/actions/jobAction";

const JobCategogy = ({ getJobCategories, categories, filter, setFilter }) => {
  const { Option, OptGroup } = Select;

  function handleChange(value) {
    const new_filter = { ...filter, category: JSON.parse(value) };
    setFilter(new_filter);
  }

  useEffect(() => {
    getJobCategories();
  }, []);

  const getOptions = (categories) => {
    return categories.map((subCategory) => (
      <OptGroup key={subCategory.type} label={`${subCategory.type} Categories`}>
        {subCategory.list.map(({ id, name }) => (
          <Option key={id} value={JSON.stringify({ id, name })}>
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
      </p>
      <Select
        placeholder="Select Category"
        className="mb-3"
        style={{ width: 200 }}
        onChange={handleChange}
      >
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
