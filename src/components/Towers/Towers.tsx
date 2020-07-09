import React from "react";
import Tower from "../Tower";
import { Container } from "./styles";

const Towers = (props) => {
  return (
    <Container>
      {props.towers.map((tower) => (
        <Tower tower={tower} choices={props.choices} key={tower.name} />
      ))}
    </Container>
  );
};

export default Towers;
