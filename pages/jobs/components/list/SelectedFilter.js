import React, { useState, useEffect } from "react";
// import { InputTags } from "react-bootstrap-tagsinput";
// import "react-bootstrap-tagsinput/dist/index.css";
import { Tag } from "antd";

import _ from "lodash";

const SelectedFilter = ({ filter, setFilter }) => {
  const [state, setState] = useState([]);

  console.log(filter);

  useEffect(() => {
    /* FOR ADDING ITEMS
       newState.push(The Item you want to show); */

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
    if (filter.location) {
      newState.push(filter.location.name);
    }
    if (filter.postedDate) {
      newState.push(`Posted: ${filter.postedDate.show}`);
    }
    if (filter.deadline) {
      newState.push(`Deadline: ${filter.deadline.show}`);
    }
    if (filter.gender) {
      newState.push(filter.gender);
    }
    if (filter.employmentStatus) {
      newState.push(filter.employmentStatus);
    }
    if (filter.experience) {
      newState.push(`Experience: ${filter.experience.show}`);
    }
    if (filter.age) {
      newState.push(`Age: ${filter.age.show}`);
    }

    if (JSON.stringify(state) !== JSON.stringify(newState)) {
      setState(newState);
    }
  }, [filter]);

  useEffect(() => {
    /* FOR REMOVING ITEMS
       if (filter.object && !state.includes(filter.object.Item_which_is_shown)) {
         setFilter(_.omit(filter, ["object"]));
    }*/

    const cleanUpFilter = (object, include_query) => {
      if (filter[object] && !state.includes(include_query)) {
        setFilter(_.omit(filter, [object]));
      }
    };

    try {
      cleanUpFilter("category", filter.category.name);
    } catch (error) {}

    try {
      cleanUpFilter("industry", filter.industry.name);
    } catch (error) {}

    try {
      cleanUpFilter("postedDate", `Posted: ${filter.postedDate.show}`);
    } catch (error) {}

    try {
      cleanUpFilter("experience", `Experience: ${filter.experience.show}`);
    } catch (error) {}

    try {
      cleanUpFilter("age", `Age: ${filter.age.show}`);
    } catch (error) {}

    try {
      cleanUpFilter("deadline", `Deadline: ${filter.deadline.show}`);
    } catch (error) {}

    try {
      cleanUpFilter("location", filter.location.name);
    } catch (error) {}

    cleanUpFilter("keyword", filter.keyword);
    cleanUpFilter("gender", filter.gender);
    cleanUpFilter("employmentStatus", filter.employmentStatus);

    // if (filter.category && !state.includes(filter.category.name)) {
    //   setFilter(_.omit(filter, ["category"]));
    // } else if (filter.industry && !state.includes(filter.industry.name)) {
    //   setFilter(_.omit(filter, ["industry"]));
    // } else if (filter.keyword && !state.includes(filter.keyword)) {
    //   setFilter(_.omit(filter, ["keyword"]));
    // } else if (
    //   filter.postedDate &&
    //   !state.includes(`Posted: ${filter.postedDate.show}`)
    // ) {
    //   setFilter(_.omit(filter, ["postedDate"]));
    // } else if (
    //   filter.deadline &&
    //   !state.includes(`Deadline: ${filter.deadline.show}`)
    // ) {
    //   setFilter(_.omit(filter, ["deadline"]));
    // } else if (filter.location && !state.includes(filter.location.name)) {
    //   setFilter(_.omit(filter, ["location"]));
    // } else if (filter.gender && !state.includes(filter.gender)) {
    //   setFilter(_.omit(filter, ["gender"]));
    // } else if (
    //   filter.employmentStatus &&
    //   !state.includes(filter.employmentStatus)
    // ) {
    //   setFilter(_.omit(filter, ["employmentStatus"]));
    // }
  }, [state]);

  const onTagClose = (removedTag) => {
    console.log(removedTag);
    const tags = state.filter((tag) => tag !== removedTag);
    setState(tags);
  };

  return (
    <>
      <div style={{ margin: 15, paddingLeft: 15 }}>
        {state.length ? (
          <div className="input-group row">
            {/* <InputTags
            onChange={() => {}}
            values={state}
            onTags={(value) => {
              setState(value.values);
            }}
          /> */}
            <>
              {state.map((item) => {
                return (
                  <Tag key={item} closable onClose={() => onTagClose(item)}>
                    {item}
                  </Tag>
                );
              })}
            </>
            <button
              className="btn btn-outline-secondary mt-2"
              type="button"
              data-testid="button-clearAll"
              onClick={() => {
                setFilter({});
              }}
            >
              X
            </button>
            <button className="btn button-home ml-2 mt-2">Search</button>
          </div>
        ) : null}
      </div>
      <hr />
    </>
  );
};

export default SelectedFilter;
