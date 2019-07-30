import React, { useContext } from "react";
import { Flex } from "rebass";

import image from "./cart.png";
import Button from "../Button";

import { GlobalContext } from "../GlobalStateProvider";

function HeaderCart({ itemCount, onClick, showCart }) {
  const { state } = useContext(GlobalContext);
  const itemTotal = state && state.items && state.items.reduce((acc, next) => next.quantity + acc, 0);

  return (
    <Button bg="#EDEDED" color="#333" onClick={onClick}>
      <Flex alignItems="center">
        <img src={image} width={64} height="auto" alt="" />

        <span>{showCart ? "Back to Shop" : `Checkout (${itemTotal || 0} items)`}</span>
      </Flex>
    </Button>
  );
}

export default HeaderCart;
