import React from "react";
import "./InputForBlock.css";
export const InputForBlock = ({ title, values, margin }) => {
  return (
    <div className="input-for-block" style={{ margin: margin }}>
      <label className="input-for-block__label">{title}</label>
      <div className="input-for-block__block">
        <div className="input-for-block__tags">
          {values.length > 0 && (
            <button
              type="button"
              className="input-for-block__tags-clear"
            ></button>
          )}
          {values.map((item, i) => (
            <span key={i} className="input-for-block__tag">
              {item}
              {values.length > 1 && (
                <button
                  type="button"
                  className="input-for-block__remove-tag"
                  aria-label="Удалить"
                ></button>
              )}
            </span>
          ))}
        </div>
        <button
          type="button"
          className=" input-for-block__button input-for-block__button_plus"
        ></button>
        <button
          type="button"
          className="input-for-block__button input-for-block__button_search"
        ></button>
      </div>
    </div>
  );
};
