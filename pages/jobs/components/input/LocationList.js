import React, { useState, useEffect } from "react";
import { TreeSelect } from "antd";
import { connect } from "react-redux";
import { getLocationList } from "@/redux/actions/jobAction";

const LocationList = ({
  getLocationList,
  location,
  value,
  setValue,
  multiple,
  onClear,
}) => {
  useEffect(() => {
    getLocationList();
  }, []);

  const { TreeNode } = TreeSelect;

  if (location)
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
        {location.map((divison) => {
          return (
            <TreeNode
              value={JSON.stringify({
                id: divison.id,
                name: divison.name,
                type: divison.type,
              })}
              key={JSON.stringify({
                id: divison.id,
                name: divison.name,
                type: divison.type,
              })}
              title={divison.name}
            >
              {divison.districts.map((district) => {
                return (
                  <TreeNode
                    value={JSON.stringify({
                      id: district.id,
                      name: district.name,
                      type: district.type,
                    })}
                    key={JSON.stringify({
                      id: district.id,
                      name: district.name,
                      type: district.type,
                    })}
                    title={district.name}
                  >
                    {district.thana.map((thana) => {
                      return (
                        <TreeNode
                          value={JSON.stringify({
                            id: thana.id,
                            name: thana.name,
                            type: thana.type,
                          })}
                          key={JSON.stringify({
                            id: thana.id,
                            name: thana.name,
                            type: thana.type,
                          })}
                          title={thana.name}
                        />
                      );
                    })}
                  </TreeNode>
                );
              })}
            </TreeNode>
          );
        })}
      </TreeSelect>
    );

  return null;
};

const mapStateToProps = (state) => {
  return {
    location: state.job.location,
  };
};

export default connect(mapStateToProps, { getLocationList })(LocationList);
