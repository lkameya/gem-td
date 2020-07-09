import styled from "styled-components";

const colorize = (type) => {
  let color = "";
  switch (type) {
    case "B":
      color = "#0069c0";
      break;
    case "Y":
      color = "#ffa726";
      break;
    case "Q":
      color = "#f06292";
      break;
    case "R":
      color = "#ba000d";
      break;
    case "E":
      color = "#8e24aa";
      break;
    case "G":
      color = "#087f23";
      break;
    case "D":
      color = "#fbc02d";
      break;
    default:
      color = "#6d4c41";
  }

  return color;
};

export const Container = styled.div`
  outline: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222;

  ${(props) =>
    props.theme.includes(props.children) &&
    `background-color: ${colorize(
      props.children.toString().split("")[0]
    )};color: white`};

  border: 2px solid ${(props) => colorize(props.color)};

  padding: 10px;
  margin: 2px;
  width: 18px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
`;
