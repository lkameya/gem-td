import React from "react";
import styled from "styled-components";
import { Combinations, Row, TowerName } from "./styles";

const StyledSpan = styled.span`
  color: ${(props) => {
    return props.theme.includes(props.children) ? "#00701a" : "black";
  }};
  font-weight: ${(props) => {
    return props.theme.includes(props.children) ? "900" : "300";
  }};
  margin-left: 5px;
`;

const showTower = (tower, choices) => {
  console.log({ tower });
  const choicesLeft = 5 - choices.length;
  const countNotMatch = tower.combination.filter((x) => !choices.includes(x))
    .length;
  const possibleToBuild = choicesLeft - countNotMatch >= 0;
  console.log({ possibleToBuild });
  return possibleToBuild;
};

const Tower = ({ tower, choices }) => {
  return (
    showTower(tower, choices) && (
      <Row key={tower.name}>
        <TowerName>{tower.name}</TowerName>
        <Combinations>
          {tower.combination.map((comb) => (
            <StyledSpan theme={choices} key={comb}>
              {comb}
            </StyledSpan>
          ))}
        </Combinations>
      </Row>
    )
  );
};

export default Tower;
