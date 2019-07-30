import React from "react";
import { Flex } from "rebass";

import image from "./cart.png";
import Button from "../Button";

function HeaderCart({ itemCount, onClick }) {
  return (
    <Button bg="#EDEDED" color="#333" onClick={onClick}>
      <Flex alignItems="center">
        <img src={image} width={64} height="auto" alt="" />

        <span>Checkout ({itemCount || 0} items)</span>
      </Flex>
    </Button>
  );
}

export default HeaderCart;
