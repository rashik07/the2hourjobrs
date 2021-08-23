import React, { useState, useEffect } from "react";
import { TreeSelect } from "antd";
import { connect } from "react-redux";
import { getThana } from "redux/actions/userAction";

const ThanaList = ({
  getLocationList,
  getThana,
  district,
  location,
  value,
  setValue,
  multiple,
  onClear,
  get_thana
}) => {
  useEffect(() => {
    getThana();
  }, []);
console.log(get_thana);
  const { TreeNode } = TreeSelect;

  if (get_thana)
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
        
             
                  {get_thana.map((get_thana) => {
                return (
                  <TreeNode
                  
                  value={JSON.stringify({
                    id: get_thana.id,
                    name: get_thana.name,
                    type: get_thana.type,
                    // value: get_district.id,
                  })}
                  key={JSON.stringify({
                    id: get_thana.id,
                    name: get_thana.name,
                    type: get_thana.type,
                  })}
                  title={get_thana.name}
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
    get_thana: state.user.get_thana,
  };
};

export default connect(mapStateToProps, { getThana })(ThanaList);
