import React from "react";
import { Container } from "./styles";

const Gem = ({ type, index, handleClick }) => {
  return (
    <Container
      color={type}
      onClick={() => handleClick(type, index)}
    >{`${type}${index}`}</Container>
  );
};

export default Gem;
