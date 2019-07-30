import React, { useContext } from "react";

import { GlobalContext } from "../GlobalStateProvider";
import Cart from "./Cart";

function Container(props) {
  const { state, dispatch } = useContext(GlobalContext);
  const removeItem = itemIndex =>
    dispatch({ type: "REMOVE_ITEM", index: itemIndex });

  return (
    <Cart
      {...props}
      items={state && state.items ? state.items : props.items}
      onRemove={removeItem}
    />
  );
}

export default Container;
