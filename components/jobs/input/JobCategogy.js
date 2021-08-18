import React, { useEffect } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { getJobCategories } from "redux/actions/jobAction";

const JobCategogy = ({ getJobCategories, categories, setValue, onClear,multiple ,value}) => {
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

  return (
    <Select
      placeholder="Select Category"
      className="mb-3"
      showSearch
        style={{ width: "100%" }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        allowClear
        mode="multiple"
        onChange={setValue}
        onClear={onClear}
    >
      {getOptions(categories)}
    </Select>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.job.categories,
  };
};

export default connect(mapStateToProps, { getJobCategories })(JobCategogy);
