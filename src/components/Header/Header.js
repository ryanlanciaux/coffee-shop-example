import React from "react";
import { Flex, Box } from "rebass";

import HeaderCart from "../HeaderCart";

function Header({ onCheckout, itemCount }) {
  return (
    <Flex flexDirection={["column", "row"]}>
      <Box width={[1, 1 / 2]}>
        <img src="/logo.png" alt="Awesome coffee shop" />
      </Box>
      <Flex
        width={[1, 1 / 2]}
        justifyContent={["flex-start", "flex-end"]}
        alignItems="center"
      >
        <HeaderCart onClick={onCheckout} itemCount={itemCount} />
      </Flex>
    </Flex>
  );
}

export default Header;
