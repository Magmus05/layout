import React from "react";
import "./SidebarMenu.css";
export const SidebarMenu = ({ menuList }) => {
  return (
    <ul className="sidebar-menu">
      {menuList.map((item, i) => (
        <li key={i} className="sidebar-menu__item">
          <p className="sidebar-menu__text">{item}</p>
        </li>
      ))}
    </ul>
  );
};
