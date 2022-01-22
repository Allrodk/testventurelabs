import React from "react";
import { Real, Zipcode, Numbers, Phone, CPF } from "../../utils/Masks";

const Input = ({ mask, inputMaskChange, ...rest }) => {
  function handleChange(text) {
    let value = "";
    if (mask === "Zipcode") {
      value = Zipcode(text);
      inputMaskChange(value);
    }
    if (mask === "Real") {
      value = Real(text);
      inputMaskChange(value);
    }
    if (mask === "Numbers") {
      value = Numbers(text);
      inputMaskChange(value);
    }
    if (mask === "Phone") {
      value = Phone(text);
      inputMaskChange(value);
    }
    if (mask === "CPF") {
      value = CPF(text);
      inputMaskChange(value);
    }
  }

  return (
    <div>
      <input onChange={(text) => handleChange(text)} {...rest} />
    </div>
  );
};

export default Input;
