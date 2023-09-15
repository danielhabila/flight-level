import { createContext, useState } from "react";

export const ModalContext = createContext();

function ModalContextProvider(props) {
  const [open, setOpen] = useState(false);

  const value = {
    open,
    setOpen,
  };

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
