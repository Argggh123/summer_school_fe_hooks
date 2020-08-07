import React from 'react';

import './FormInput.css';

const FormInput = ({ name, label, value, handler, meta, type = 'text' }) => {
  const getErrorPlaceholder = () => {
    return meta.error
      ? <p className="form-input__error-text">{meta.error}</p>
      : null;
  };

  return (
    <div className="form-input form-input--column">
      <p className="form-input__label">
        {label}
      </p>
      <input
        className="form-input__input"
        name={name}
        value={value}
        onChange={handler}
        type={type}
        id={name}
      />
      {meta.touched ? getErrorPlaceholder() : null}
    </div>
  );
};

export default FormInput;
