import React from 'react';

function RadioButton( {id, name, value, ...rest}) {
  return (
    <label htmlFor={id}>
    <input
      id={id}
      type="radio"
      name={name}
      value={value}
      {...rest}
    />
    {value}
  </label>
  )
}

export default RadioButton;
