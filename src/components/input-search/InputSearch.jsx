import React from "react";
import "./InputSearch.css";

export const InputSearch = ({
  buttonSearchClass,
  placeholderText,
  marginRight,
  width
}) => {
  const [value, setValue] = React.useState("");

  const onCahgeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <label className="input-search" style={{ marginRight: marginRight, width: width}}>
      <input
        value={value}
        onChange={(e) => onCahgeInput(e)}
        className="input-search__input"
        placeholder={placeholderText}
      />

      <button className={`input-search__button ${buttonSearchClass}`}></button>
    </label>
  );
};
