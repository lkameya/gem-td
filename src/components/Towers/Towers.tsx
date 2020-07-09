import React from "react";
import styled from "styled-components";
import { Combinations, Container, Row, TowerName } from "./styles";

const towers = [
  {
    name: "Silver",
    combination: ["B1", "Y1", "D1"],
  },
  {
    name: "Pink Diamond",
    combination: ["D5", "Y3", "D3"],
  },
  {
    name: "Koh-i-noor Diamond",
    combination: ["P1", "P2", "P3", "P4", "P5"],
  },
];

const StyledSpan = styled.span`
  border: 1px solid
    ${(props) => {
      return props.theme.includes(props.children) ? "green" : "transparent";
    }};
`;

const Towers = (props) => {
  return (
    <Container>
      {towers.map((tower) => (
        <Row key={tower.name}>
          <TowerName>{tower.name}</TowerName>
          <Combinations>
            {tower.combination.map((comb) => (
              <StyledSpan theme={props.choices} key={comb}>
                {comb}
              </StyledSpan>
            ))}
          </Combinations>
        </Row>
      ))}
    </Container>
  );
};

export default Towers;
