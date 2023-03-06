import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITAL_STATE = {
  darkMode: false,
};
export const DarkModeContext = createContext(INITAL_STATE);
export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
