import React from "react";
import "./InputForTextAndDate.css";
export const InputForTextAndDate = ({
  title,
  required,
  buttonSearch,
  margin,
  buttonCalendar,
}) => {
  const [selectedDate, setSelectedDate] = React.useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
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
            value={selectedDate}
            readOnly
            className="input-for-block-text__input"
          />

          {/* <button
            type="button"
            onClick={openDataPicker}
            className="input-for-block-text__button-calendar input-for-block-text__button "
          ></button> */}
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="inpit-date"
            style={{
              position: "relative",
              opacity: "0",
              background: "url(./images/calendar.svg) no-repeat center",
              cursor: "pointer",
              width: "25px",
              height: "32px",
              fontSize: "20px",
              outline: "none",
              color: "transparent" /* Убирает текст */,

            }}
          />
        </div>
      ) : (
        <div className="input-for-block-text__block-input">
          <input type="text" className="input-for-block-text__input" />

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
