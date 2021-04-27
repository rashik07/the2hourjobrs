import React, { useState, useEffect } from "react";
import { InputTags } from "react-bootstrap-tagsinput";
// import "react-bootstrap-tagsinput/dist/index.css";
import _ from "lodash";

const SelectedFilter = ({ filter, setFilter }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    // FOR ADDING ITEMS

    const newState = [];
    if (filter.category) {
      newState.push(filter.category.name);
    }
    if (filter.industry) {
      newState.push(filter.industry.name);
    }
    if (filter.keyword) {
      newState.push(filter.keyword);
    }

    if (JSON.stringify(state) !== JSON.stringify(newState)) {
      setState(newState);
    }
  }, [filter]);

  useEffect(() => {
    // FOR REMOVING ITEMS

    if (filter.category && !state.includes(filter.category.name)) {
      setFilter(_.omit(filter, ["category"]));
    } else if (filter.industry && !state.includes(filter.industry.name)) {
      setFilter(_.omit(filter, ["industry"]));
    } else if (filter.keyword && !state.includes(filter.keyword)) {
      setFilter(_.omit(filter, ["keyword"]));
    }
  }, [state]);

  return (
    <>
      <div style={{ margin: 15, paddingLeft: 15 }}>
        <div className="input-group row">
          <InputTags
            onChange={() => {}}
            values={state}
            onTags={(value) => setState(value.values)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            data-testid="button-clearAll"
            onClick={() => {
              setFilter({});
            }}
          >
            X
          </button>
          <button className="btn button-home ml-2">Search</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SelectedFilter;
