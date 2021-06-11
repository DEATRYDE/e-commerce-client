import React from "react";
import propTypes from "prop-types";

const Input = ({ type, name, placeholder, value, onChange, autoComplete }) => {
  return (
    <div>
      <div className="form-group">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  type: propTypes.string,
  placeholder: propTypes.string,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Input;
