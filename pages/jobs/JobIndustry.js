import React, { useEffect } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { getIndustries } from "../../redux/actions/jobAction";

const JobIndustry = ({ industries, getIndustries }) => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  useEffect(() => {
    getIndustries();
  }, []);

  return (
    <div className="border-bottom">
      <p>
        <strong>Industry</strong>
        <i className="ms-auto fas fa-chevron-down" />
      </p>
      <Select
        placeholder="Select Industry"
        allowClear
        className="mb-3"
        style={{ width: 200 }}
        onChange={handleChange}
      >
        {industries.map(({ id, name }) => {
          return (
            <Option key={id} value={id}>
              {name}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    industries: state.job.industries,
  };
};

export default connect(mapStateToProps, { getIndustries })(JobIndustry);
