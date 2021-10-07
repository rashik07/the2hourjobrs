import React, { useEffect } from "react";
import { TreeSelect ,Select,OptGroup} from "antd";
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
      
        <OptGroup
          key={education.id}
         
        >
          {education.map((parent) => {
        return (
          <Option value={parent.name} key={parent.name} >
            {parent.name}
          </Option>
        );
      })}
        </OptGroup>
    
      
    </Select>
  );
};

const mapStateToProps = (state) => {
  return {
    education: state.job.education,
  };
};

export default connect(mapStateToProps, { getEducation })(EducationField);
