import React from "react";
import "./InpulForText.css";
export const InpulForText = ({ title, required, buttonSearch , margin,}) => {
  return (
    <div className="input-for-block-text" style={{margin: margin}}>
      <label className="input-for-block-text__label">
        {required && (
          <span className="input-for-block-text__required-flag">*</span>
        )}
        {title}
      </label>
      <div className="input-for-block-text__block-input">
        <input type="text" className="input-for-block-text__input" />

        {buttonSearch && (
          <button type="button" className="input-for-block-text__button"></button>
        )}
      </div>
    </div>
  );
};
