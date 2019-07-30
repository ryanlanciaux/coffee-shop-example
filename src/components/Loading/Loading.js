import React from "react";
import LoadingAnimation from "react-spinners/BarLoader";

function Loading() {
  return (
    <LoadingAnimation
      sizeUnit={"px"}
      size={150}
      color={"#123abc"}
      loading={true}
    />
  );
}

export default Loading;
