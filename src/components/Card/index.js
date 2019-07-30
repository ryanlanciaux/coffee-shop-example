import React from "react";
import Card from "./Card";

const style = {
  border: "1px solid #AAA",
  maxWidth: 400,
  height: 400,
  padding: 20
};

export default function(props) {
  return <Card style={style} {...props} />;
}
