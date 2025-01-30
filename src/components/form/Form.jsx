import React, { useEffect, useState } from "react";
import "./Form.css";
import { InputForTextAndDate } from "../input-for-text-and-date/InputForTextAndDate";
import { InputForBlock } from "../input-for-block/InputForBlock";

export const Form = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const values = [
    "Андрей Пивоваров",
    "Максим Галактионов",
    "Алла Лин",
    "Константин Константинопольский Константинович",
    "Игорь Иванченко",
    "Юлия Эйчаровна",
    "Артём Подпрыгайко-Саппортов",
    "Илья Вазнец",
    "Михаил Вортенов",
    "Наталья Нашевна",
    "Евгения Итамовна",
    "Алиса Киральчук",
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <form className="form">
      <div className={`form__header  ${isScrolled && "form__header_shadow"}`}>
        <div className="form__header-block form__header-block_left ">
          <h3 className="form__title-button">Подзадача</h3>
          <button className="form__button form__button_outline">Создать</button>
        </div>
        <div className="form__header-block form__header-block_right">
          <button type="submit" className="form__button form__button_fill">
            Сохранить
          </button>
          <button type="submit" className="form__button form__button_outline">
            Сохранить и выйти
          </button>
        </div>
      </div>
      <div className="form__body">
        <h2 className="form__title overflow-text ">
          STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто
          некоторые поля остаются редактируемыми для агента если он Caller
        </h2>
        <div className="form__blocks">
          <InputForTextAndDate title="Тема" required={true} />

          <InputForTextAndDate title="Статус" />

          <InputForTextAndDate title="Описание" />
          <InputForTextAndDate title="Продукт" buttonSearch={true} />
          <InputForTextAndDate title="Рабочие заметки" required={true} />
          <InputForTextAndDate title="Приоритет" />
          <InputForBlock title="Ответственный" values={values} />
          <InputForBlock title="Группа" values={["Support Group"]} />
        </div>
        <InputForTextAndDate title="Комментарий" margin=" 16px 16px 0" />
        <InputForBlock
          title="Согласующие"
          margin=" 16px 16px 0"
          values={values}
        />

        <div className="form__blocks">
          <InputForTextAndDate
            title="Когда открыто"
            margin=" 16px 0"
            buttonCalendar={true}
          />

          <InputForTextAndDate
            title="Когда создано"
            margin=" 16px 0"
            defaultValue="22.10.2024"
            buttonCalendar={true}
          />

          <InputForBlock title="Кем открыто" values={["Андрей Пивоваров"]} />
          <InputForBlock title="Кем создано" values={["Андрей Пивоваров"]} />
        </div>
      </div>
    </form>
  );
};
