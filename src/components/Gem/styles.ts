import styled from "styled-components";

export const Container = styled.span`
  border-radius: 50%;
  background-color: ${(props) =>
    props.color === "B"
      ? "blue"
      : props.color === "Y"
      ? "orange"
      : props.color === "Q"
      ? "pink"
      : props.color === "R"
      ? "red"
      : props.color === "E"
      ? "purple"
      : props.color === "G"
      ? "green"
      : props.color === "D"
      ? "gold"
      : "brown"};
  color: white;
  padding: 10px;
  margin: 2px;
  width: 100px;
  font-weight: 300;
  cursor: pointer;
`;
