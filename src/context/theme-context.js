import React, { useReducer } from "react";

const initialState = {
  headerHeight: 0,
  modelSearch: false,
  headerAdvertorial: false,
};

const ThemeContext = React.createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "headerHeight":
      return { ...state, headerHeight: action.payload };
    case "headerAdvertorial":
      return { ...state, headerAdvertorial: action.payload };
    case 'modelSearch':
      return { ...state, modelSearch: action.payload }
    default:
      throw new Error();
  }
};

const useThemeReducer = () => {
  return useReducer(reducer, initialState, undefined);
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useThemeReducer();
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
