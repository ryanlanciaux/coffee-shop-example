import React from "react";
import { Button as BassButton } from "rebass";

function Button({ onClick, children, ...props }) {
  return (
    <BassButton onClick={onClick} {...props}>
      {children}
    </BassButton>
  );
}

export default Button;
