import React from "react";
import "./Input.css";

const Input = ({ label, ...rest }) => {
  return (
    <>
      {label && (
        <label
          style={{ marginBottom: "4px", display: "inline-block" }}
          htmlFor="input"
        >
          {label}
        </label>
      )}
      <input id="input" className="input" {...rest} />
    </>
  );
};

export default Input;
