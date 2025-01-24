import React from "react";
import "./InputForDate.css";
export const InputForDate = ({ title, required, margin,}) => {
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

        
          <button type="button" className="input-for-block-text__button"></button>
        
      </div>
    </div>
  );
};
