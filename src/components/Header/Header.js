import React from "react";
import { Flex, Box } from "rebass";

import Search from "../Search";

function Header() {
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
        <Search />
      </Flex>
    </Flex>
  );
}

export default Header;
