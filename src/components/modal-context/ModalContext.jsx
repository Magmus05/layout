import React, { createContext, useContext, useEffect, useState } from "react";
import { ModalWindow } from "../modalWindow/ModalWindow";

const ModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ModalWindow
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
