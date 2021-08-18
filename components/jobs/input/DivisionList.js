import React, { useState, useEffect } from "react";
import { TreeSelect ,Select} from "antd";
import { connect } from "react-redux";
import {updateProfile , getDivision } from "redux/actions/userAction";

const DivisionList = ({
  getLocationList,
  getDivision,
  district,
  location,
  value,
  setValue,
  multiple,
  onClear,
  get_division,
  user_profile,updateProfile
}) => {
  useEffect(() => {
    updateProfile();
    getDivision();
  }, []);
console.log(get_division);
  const { TreeNode } = TreeSelect;
  const { Option, OptGroup } = Select;

  if (user_profile)
    return (
      // <Select
      //   showSearch
      //   style={{ width: "100%" }}
      //   // value={value}
      //   dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      //   allowClear
      //   multiple={multiple}
      //   onChange={setValue}
      //   // onChange={(value) => setValue({ division: JSON.parse(value) })}
      //   defaultValue={JSON.stringify(user_profile.division)}
      //   onClear={onClear}
      // >
        
             
      //             {get_division.map((get_division) => {
      //           return (
      //             <Option
      //             value={JSON.stringify({
      //               id: get_division.id,
      //               name: get_division.name,
      //               type: get_division.type,
      //               // value: get_district.id,
      //             })}
      //             key={JSON.stringify({
      //               id: get_division.id,
      //               name: get_division.name,
      //               type: get_division.type,
      //             })}
      //             title={get_division.name}
      //             >
                 
      //             </Option>
      //           );
      //         })}
          
          
       
      // </Select>
      <>
      <Select
      placeholder="Select Category"
      className="mb-3"
      style={{ width: 300 }}
      onChange={setValue}
      // onChange={(value) => setValue({ division: JSON.parse(value) })}
      defaultValue={user_profile.division}
    >
      {/* {get_division.map((get_division) => ( */}
        {/* // <OptGroup
        //   key={get_division.type}
        //   label={`${get_division.type} division`}
        // > */}
          {get_division.map(({ id, name }) => (
            <Option key={id} value={ id }>
              {name}
            </Option>
          ))}
        {/* // </OptGroup>
      // ))} */}
    </Select>
    </>
    );

  return null;
};

const mapStateToProps = (state) => {
  return {
    get_division: state.user.get_division,
    user_profile: state.user.user_profile,
  };
};

export default connect(mapStateToProps, { updateProfile, getDivision })(DivisionList);
