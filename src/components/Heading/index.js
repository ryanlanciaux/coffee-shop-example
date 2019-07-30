import React from "react";

import Heading from "./Heading";

const style = {
  marginTop: 8,
  marginBottom: 8
};

function HeadingIndex(props) {
  return <Heading style={style} {...props} />;
}

export default HeadingIndex;
