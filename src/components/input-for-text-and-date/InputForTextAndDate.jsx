import React from "react";
import "./InputForTextAndDate.css";
export const InputForTextAndDate = ({
  title,
  required,
  buttonSearch,
  margin,
  buttonCalendar,
  defaultValue,
}) => {
  const [value, setValue] = React.useState(defaultValue ? defaultValue : "");

  return (
    <div className="input-for-block-text" style={{ margin: margin }}>
      <label className="input-for-block-text__label">
        {required && (
          <span className="input-for-block-text__required-flag">*</span>
        )}
        {title}
      </label>

      {buttonCalendar ? (
        <div className="input-for-block-text__block-input">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="input-for-block-text__input"
          />

          <button
            type="button"
            className="input-for-block-text__button-calendar input-for-block-text__button "
          ></button>
        </div>
      ) : (
        <div className="input-for-block-text__block-input">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            className="input-for-block-text__input"
          />

          {buttonSearch && (
            <button
              type="button"
              className="input-for-block-text__button input-for-block-text__button-search"
            ></button>
          )}
        </div>
      )}
    </div>
  );
};
