import React from "react";
import "./ModalWindow.css";
import { useModal } from "../modal-context/ModalContext";
import { InputForTextAndDate } from "../input-for-text-and-date/InputForTextAndDate";
import { InputForBlock } from "../input-for-block/InputForBlock";

export const ModalWindow = ({ isOpen }) => {
  const { closeModal } = useModal();
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
  if (isOpen)
    return (
      <div className="overlay" onClick={() => closeModal()}>
        <div className="modal">
          <form className="modal__form">
            <div className="modal__form-header">
              <div className="form__header-block form__header-block_left ">
                <h3 className="form__title-button">Подзадача</h3>
              </div>
              <div className="form__header-block form__header-block_right">
                <button
                  type="submit"
                  className="form__button form__button_fill"
                >
                  Сохранить
                </button>
                <button
                  type="button"
                  className="form__button form__button_outline"
                  onClick={() => closeModal()}
                >
                  Отменить
                </button>
              </div>
            </div>
            <div className="modal__form-body">
              <h2 className="modal__form-title overflow-text ">Новая запись</h2>
              <InputForTextAndDate
                defaultValue="На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"
                title="Тема"
                required={true}
              />
              <InputForTextAndDate defaultValue="Новая" title="Статус" />

              <InputForTextAndDate title="Описание" />
              <InputForTextAndDate
                defaultValue="Platform"
                title="Продукт"
                buttonSearch={true}
              />

              <InputForTextAndDate
                title="Рабочие заметки"
                defaultValue="Проверить ACL id=172830402014193655"
                required={true}
              />

              <InputForTextAndDate title="Приоритет" defaultValue="Средний" />

              <InputForBlock
                title="Ответственный"
                values={["Константин Константинопольский"]}
              />
              <InputForBlock title="Группа" values={["Support Group"]} />
              <InputForTextAndDate title="Комментарии" />
              <InputForBlock title="Согласующие" values={values} />
              <InputForTextAndDate
                title="Когда открыто"
                buttonCalendar={true}
              />

              <InputForTextAndDate
                title="Когда создано"
                defaultValue="22.10.2024"
                buttonCalendar={true}
              />
              <InputForBlock
                title="Кем открыто"
                values={["Андрей Пивоваров"]}
              />
              <InputForBlock
                title="Кем создано"
                values={["Андрей Пивоваров"]}
              />
            </div>
          </form>
        </div>
      </div>
    );
};
