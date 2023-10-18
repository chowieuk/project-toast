import React from "react";

import RadioButton from "../RadioButton";

function ToastVariantRadioButton({ value, ...rest }) {
  const id = `variant-${value}`;

  return <RadioButton id={id} name="variant" value={value} {...rest} />;
}

export default ToastVariantRadioButton;
