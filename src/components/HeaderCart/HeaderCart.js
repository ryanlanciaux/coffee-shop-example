import React, { useContext } from "react";
import { Flex } from "rebass";

import image from "./cart.png";
import Button from "../Button";

import { GlobalContext } from "../GlobalStateProvider";

function HeaderCart({ itemCount, onClick }) {
  const { state } = useContext(GlobalContext);
  const itemLength = state && state.items && state.items.length;

  return (
    <Button bg="#EDEDED" color="#333" onClick={onClick}>
      <Flex alignItems="center">
        <img src={image} width={64} height="auto" alt="" />

        <span>Checkout ({itemLength || 0} items)</span>
      </Flex>
    </Button>
  );
}

export default HeaderCart;
