import React from "react";
import "./Sidebar.css";
import { SidebarMenu } from "../sidebar-menu/SidebarMenu";
import { InputSearch } from "../input-search/InputSearch";
export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__items">
        <div className="sidebar__item sidebar__item_bar"></div>
        <div className="sidebar__item sidebar__item_star"></div>
      </div>
      <div className="sidebar__search">
        <InputSearch
          buttonSearchClass="input-search__button_filter"
          placeholderText="Поиск по меню"
          marginRight="0"
          width='208px'
        />
        <div className="sidebar__pin"></div>
     
      </div>
      <SidebarMenu
        menuList={[
          "Моя работа",
          "Структура портала",
          "Личное расписание",
          "Отсутствие на рабочем месте",
          "Портфель услуг",
          "Дашборды",
          "Доски задач",
          "Обращения",
          "События",
          "Инциденты",
          "Проблемы",
          "Настройка каталогов",
          "Запросы на обслуживание",
     
        ]}
      />
    </aside>
  );
};
