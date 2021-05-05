import React, { useEffect } from "react";
import { TreeSelect } from "antd";
import { connect } from "react-redux";
import { getEducation } from "@/redux/actions/jobAction";

const EducationField = ({ getEducation, education, value, setValue }) => {
  const { TreeNode } = TreeSelect;

  const onChange = (value) => {
    const newValue = [];

    value.forEach((val) => {
      if (typeof val === "number") newValue.push(val);
    });

    setValue(newValue);
  };

  useEffect(() => {
    getEducation();
  }, []);

  return (
    <TreeSelect
      showSearch
      style={{ width: "100%" }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
    >
      {education.map((parent) => {
        return (
          <TreeNode value={parent.name} key={parent.name} title={parent.name}>
            {parent.child.map((child) => {
              return (
                <TreeNode key={child.id} value={child.id} title={child.name} />
              );
            })}
          </TreeNode>
        );
      })}
    </TreeSelect>
  );
};

const mapStateToProps = (state) => {
  return {
    education: state.job.education,
  };
};

export default connect(mapStateToProps, { getEducation })(EducationField);
