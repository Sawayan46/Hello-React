import React from "react";

const ColorfulMessage = (props) => {
  const { color, children, margin } = props;
  const contentStyle = {
    color,
    fontSize: "18px",
    margin
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
