import React, { useRef } from "react";
import { Flex } from "rebass";
import "./Search.css";
import Button from "../Button";

function handleEnter(e, callback) {
  if (e.key === "Enter" || e.keyCode === 13) {
    callback(e.target.value);
    e.target.value = "";
  }

  return;
}

function Search({ onEnter, ...rest }) {
  const input = useRef();
  return (
    <div className="Search">
      <label for="product-search">Find product</label>
      <input
        ref={input}
        name="product-search"
        type="text"
        onKeyUp={e => {
          handleEnter(e, onEnter);
        }}
      />
      <Button
        onClick={() => {
          onEnter(input.current.value);
          input.current.value = "";
        }}
      >
        Go
      </Button>
    </div>
  );
}

export default Search;
