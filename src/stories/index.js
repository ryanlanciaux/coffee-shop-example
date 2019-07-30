import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "../components/Button";
import Card from "../components/Card";
import ItemCard from "../components/ItemCard";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Search from "../components/Search";
import Heading from "../components/Heading";
import Header from "../components/Header";
import Loading from "../components/Loading";
import HeaderCart from "../components/HeaderCart";

storiesOf("Button", module).add("default", () => {
  return <Button onClick={action("BUTTON")}>Click this button</Button>;
});

storiesOf("Card", module).add("default", () => {
  return (
    <Card>
      Voluptate ipsum aute aliquip aliqua esse ea. Mollit laborum veniam ad nisi
      et et in ipsum consequat Lorem. Laboris anim enim officia cupidatat
      nostrud proident fugiat Lorem nostrud qui ut sit nisi est. Lorem anim
      culpa enim deserunt incididunt irure commodo ex.
    </Card>
  );
});

storiesOf("ItemCard", module).add("default", () => {
  return (
    <ItemCard
      title="Cappucino"
      imageUrl="https://source.unsplash.com/collection/1215/800x800"
      onAddToCart={action("Add to cart")}
      description="Delicious blend of espresso and milk"
      price={2.5}
    />
  );
});

storiesOf("Cart", module).add("default", () => {
  const items = [
    { title: "Mocha", price: 3.5, quantity: 3 },
    { title: "Latte", price: 2.5, quantity: 1 },
    { title: "Americano", price: 1.99, quantity: 2 }
  ];
  return <Cart items={items} onRemove={action("on remove")} />;
});

storiesOf("Footer", module).add("default", () => {
  return <Footer />;
});

storiesOf("Header", module).add("default", () => {
  return <Header itemCount={3} onCheckout={action("On checkout")} />;
});

storiesOf("Heading", module).add("default", () => {
  return <Heading>This is the heading text</Heading>;
});

storiesOf("Layout", module).add("default", () => {
  return <Layout>Some stuff goes here</Layout>;
});

storiesOf("Search", module).add("default", () => {
  return <Search onEnter={action("SEARCH")} />;
});

storiesOf("Loading", module).add("default", () => {
  return <Loading />;
});

storiesOf("HeaderCart", module).add("default", () => {
  return <HeaderCart />;
});
