import React, { useState, useEffect } from "react";
import { TreeSelect } from "antd";
import { connect } from "react-redux";
import { getDistrict } from "redux/actions/userAction";

const DistrictList = ({
  getLocationList,
  getDistrict,
  district,
  location,
  value,
  setValue,
  multiple,
  onClear,
  get_district
}) => {
  useEffect(() => {
    getDistrict();
  }, []);
console.log(get_district);
  const { TreeNode } = TreeSelect;

  if (get_district)
    return (
      <TreeSelect
        showSearch
        style={{ width: "100%" }}
        // value={value}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        allowClear
        multiple={multiple}
        onChange={setValue}
        onClear={onClear}
      >
        
             
                  {get_district.map((get_district) => {
                return (
                  <TreeNode
                  value={JSON.stringify({
                    id: get_district.id,
                    name: get_district.name,
                    type: get_district.type,
                    // value: get_district.id,
                  })}
                  key={JSON.stringify({
                    id: get_district.id,
                    name: get_district.name,
                    type: get_district.type,
                  })}
                  title={get_district.name}
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
    get_district: state.user.get_district,
  };
};

export default connect(mapStateToProps, { getDistrict })(DistrictList);
