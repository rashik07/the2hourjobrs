import React, { useEffect } from "react";

const Form = ({ type, placeholder, onChange, alert }) => {
  const inputClass = alert ? "form-control m-2 is-invalid" : "form-control m-2";

  const msg = alert ? <div className="invalid-feedback">{alert}</div> : null;

  return (
    <div className="m-4">
      <input
        type={type}
        className={inputClass}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      {msg}
    </div>
  );
};

export default Form;
