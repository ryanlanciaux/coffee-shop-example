import React, { createContext, useReducer } from "react";

const initialState = { items: [] };
export const GlobalContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const oldItem = state.items.find((element) => element.item.id === action.payload.id);
      const quantity = oldItem ? oldItem.quantity + 1 : 1;
      const addIndex = state.items.map((element) => element.item.id).indexOf(action.payload.id);
      const newItem = { ...{ item: action.payload, quantity } };
      const addItems = addIndex >= 0 ? 
        [...state.items.slice(0, addIndex), newItem, ...state.items.slice(addIndex + 1)] : 
        [...state.items, newItem];

      const addState = {
        ...state,
        items: addItems
      };
      return addState;
    case "REMOVE_ITEM":
      const removeState = {
        ...state,
        items: [...state.items.slice(0, action.index), ...state.items.slice(action.index + 1)]
      };
      return removeState;
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
