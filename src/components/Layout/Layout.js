import React from "react";
import { Flex } from "rebass";

import Header from "../Header";
import Footer from "../Footer";

function Layout({ children, onToggleCart, showCart }) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      style={{ height: "100%", minHeight: "95vh" }}
    >
      <Header onCheckout={onToggleCart} showCart={showCart} />
      <Flex flex={1}>{children}</Flex>
      <Footer />
    </Flex>
  );
}

export default Layout;
