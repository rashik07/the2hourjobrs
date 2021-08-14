import React, { useState, useEffect } from "react";
import { TreeSelect } from "antd";
import { connect } from "react-redux";
import { getDivision } from "redux/actions/userAction";

const DivisionList = ({
  getLocationList,
  getDivision,
  district,
  location,
  value,
  setValue,
  multiple,
  onClear,
  get_division
}) => {
  useEffect(() => {
    getDivision();
  }, []);
console.log(get_division);
  const { TreeNode } = TreeSelect;

  if (get_division)
    return (
      <TreeSelect
        showSearch
        style={{ width: "100%" }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        allowClear
        multiple={multiple}
        onChange={setValue}
        onClear={onClear}
      >
        
             
                  {get_division.map((get_division) => {
                return (
                  <TreeNode
                  value={JSON.stringify({
                    id: get_division.id,
                    name: get_division.name,
                    type: get_division.type,
                    // value: get_district.id,
                  })}
                  key={JSON.stringify({
                    id: get_division.id,
                    name: get_division.name,
                    type: get_division.type,
                  })}
                  title={get_division.name}
                  >
                 
                  </TreeNode>
                );
              })}
          
          
       
      </TreeSelect>
    );

  return null;
};

const mapStateToProps = (state) => {
  return {
    get_division: state.user.get_division,
  };
};

export default connect(mapStateToProps, { getDivision })(DivisionList);
