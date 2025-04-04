import React from "react";
import * as SC from "./CheckBox.styled";
const CheckBox = ({ label, isActive, onChange }) => {
  return (
    <SC.CheckBoxContainer>
      <SC.CheckBoxStyle checked={isActive} onChange={onChange} />
      {label}
    </SC.CheckBoxContainer>
  );
};

export default CheckBox;
