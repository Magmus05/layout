import React from "react";
import "./Header.css";
import logo from "@assets/images/logo.svg";
import { InputSearch } from "../input-search/InputSearch";
import { NameBlockForHeader } from "../name-block-for-header/NameBlockForHeader";
import { GearWheel } from "../gear-wheel/GearWheel";
export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" className="header__logo" />
      <div className="header__menu"></div>
      
      <div className="header__right-block">
        <InputSearch
          buttonSearchClass="input-search__button_search"
          placeholderText="Поиск"
          marginRight="16px"
          width='296px'
        />
        <NameBlockForHeader />
        <GearWheel />
      </div>
    </header>
  );
};
