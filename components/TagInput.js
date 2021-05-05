import React from "react";
import { TagsInput } from "react-tag-input-component";

//ref: https://www.npmjs.com/package/react-tag-input-component

const TagInput = ({ value, setValue }) => {
  return (
    <div>
      <TagsInput value={value} onChange={setValue} placeHolder="enter skills" />
      <em>press enter to add new tag</em>
    </div>
  );
};

export default TagInput;
