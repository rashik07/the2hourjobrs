import React, { useEffect } from "react";
import { TreeSelect,Select } from "antd";
import { connect } from "react-redux";
import { getEducation } from "redux/actions/jobAction";

const EducationField = ({ getEducation, education, value, setValue }) => {
  const { TreeNode } = TreeSelect;
  const { Option, OptGroup } = Select;
//   const onChange = (value) => {
//     const newValue = [];

//     value.forEach((val) => {
//       if (typeof val === "number") newValue.push(val);
//     });

//     setValue(newValue);
//   };

  useEffect(() => {
    getEducation();
  }, []);
  const getOptions = (education) => {
    if (education)
      return education.map((parent) => (
        <OptGroup
          key={parent.id}
          label={`${parent.name} Categories`}
        >
          {parent.child.map(({ id, name }) => (
            <Option key={id} value={JSON.stringify({ id, name })}>
              {name}
            </Option>
          ))}
        </OptGroup>
      ));
  };
  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder="Please select"
      allowClear
     
      onChange={setValue}
    >
      
      {getOptions(education)}
    
      
    </Select>
  );
};

const mapStateToProps = (state) => {
  return {
    education: state.job.education,
  };
};

export default connect(mapStateToProps, { getEducation })(EducationField);
