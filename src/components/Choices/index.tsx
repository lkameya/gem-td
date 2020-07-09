import React from "react";
import Gem from "../Gem";
import { Container, TypeContainer } from "./styles";

const types = ["B", "Y", "Q", "R", "E", "P", "G", "D"];

const Choices = (props) => {
  return (
    <Container>
      {types.map((type) => (
        <TypeContainer color={type} key={type}>
          {Array.from(Array(5), (_, i) => i + 1).map((index) => (
            <Gem
              key={type + index}
              type={type}
              index={index}
              choices={props.choices}
              handleClick={() => props.handleClick(type, index)}
            />
          ))}
        </TypeContainer>
      ))}
    </Container>
  );
};

export default Choices;
