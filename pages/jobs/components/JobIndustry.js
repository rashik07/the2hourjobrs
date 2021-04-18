import React, { useEffect } from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { getIndustries } from "@/redux/actions/jobAction";

const JobIndustry = ({ industries, getIndustries, filter, setFilter }) => {
  const { Option } = Select;

  function handleChange(value) {
    const new_filter = { ...filter, industry: JSON.parse(value) };
    setFilter(new_filter);
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
        className="mb-3"
        style={{ width: 200 }}
        onChange={handleChange}
      >
        {industries.map(({ id, name }) => {
          return (
            <Option key={id} value={JSON.stringify({ id, name })}>
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
