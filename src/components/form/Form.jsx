import React, { useEffect, useRef, useState } from "react";
import "./Form.css";
import { InpulForText } from "../inpul-for-text/InpulForText";
import { InputForBlock } from "../input-for-block/InputForBlock";
export const Form = () => {
  const formRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const formElement = formRef.current;

    const handleScroll = () => {
      setIsScrolled(formElement.scrollTop > 0);
    };

    formElement.addEventListener("scroll", handleScroll);

    return () => {
      formElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <form ref={formRef} className="form">
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

      <h2 className="form__title overflow-text ">
        STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые
        поля остаются редактируемыми для агента если он Caller
      </h2>

      <div className="form__blocks">
        <InpulForText title="Тема" required={true} />

        <InpulForText title="Статус" />

        <InpulForText title="Описание" />
        <InpulForText title="Продукт" buttonSearch={true} />
        <InpulForText title="Рабочие заметки" required={true} />
        <InpulForText title="Приоритет" />
        <InputForBlock
          title="Ответственный"
          values={["Константин Константинопольский"]}
        />
        <InputForBlock title="Группа" values={["Support Group"]} />
      </div>
      <InpulForText title="Комментарий" margin=" 16px 16px 0" />
      <InputForBlock
        title="Согласующие"
        margin=" 16px 16px 0"
        values={[
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
        ]}
      />

<div className="form__blocks"></div>
    </form>
  );
};
