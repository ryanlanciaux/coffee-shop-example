import React, { createContext, useReducer } from "react";

const initialState = { items: [] };
export const GlobalContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const newState = {
        ...state,
        items: [...state.items, { ...action.payload }]
      };
      return newState;
    default:
      throw new Error();
  }
}

function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalStateProvider;
