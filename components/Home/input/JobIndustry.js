import React, { useEffect } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { getIndustries } from "redux/actions/jobAction";

const JobIndustry = ({ industries, getIndustries, setValue, onClear }) => {
  const { Option } = Select;

  useEffect(() => {
    getIndustries();
  }, []);

  return (
    <Select
      placeholder="Select Industry"
      className="mb-3"
      style={{ width: 200 }}
      onChange={setValue}
      onClear={onClear}
      allowClear
    >
      {industries.map(({ id, name }) => {
        return (
          <Option key={id} value={JSON.stringify({ id, name })}>
            {name}
          </Option>
        );
      })}
    </Select>
  );
};

const mapStateToProps = (state) => {
  return {
    industries: state.job.industries,
  };
};

export default connect(mapStateToProps, { getIndustries })(JobIndustry);
