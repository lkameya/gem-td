import React from "react";
import { Container } from "./styles";

const Gem = ({ type, index, handleClick, choices }) => {
  return (
    <Container
      color={type}
      theme={choices}
      onClick={() => handleClick(type, index)}
    >{`${type}${index}`}</Container>
  );
};

export default Gem;
