import React, { useRef, useEffect, useState } from "react";
import "./Search.css";
import Button from "../Button";
import { Flex, Box } from "rebass";

function handleEnter(e, callback) {
  if (e.key === "Enter" || e.keyCode === 13) {
    callback(e.target.value);
    e.target.value = "";
  }

  return;
}

function Search({ onEnter, ...rest }) {
  const [hasText, setHasText] = useState();
  const input = useRef();

  return (
    <div className="Search" {...rest}>
      <Flex className="labelWrapper">
        <Box width={1 / 2}>
          <label htmlFor="product-search">Find product</label>
        </Box>
        <Flex width={1 / 2} justifyContent="flex-end">
          {hasText && (
            <Button
              onClick={() => {
                setHasText(false);
                input.current.value = "";
              }}
              className="clear"
            >
              Clear
            </Button>
          )}
        </Flex>
      </Flex>

      <input
        ref={input}
        name="product-search"
        type="text"
        onKeyUp={e => {
          handleEnter(e, onEnter);
          setHasText(false);
        }}
        onChange={e => {
          if (e.target.value && e.target.value.length > 0) {
            setHasText(true);
            return;
          }

          if (hasText === true) {
            setHasText(false);
          }
        }}
      />
      <Button
        onClick={() => {
          onEnter(input.current.value);
          setHasText(false);
          input.current.value = "";
        }}
      >
        Go
      </Button>
    </div>
  );
}

export default Search;
