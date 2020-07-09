import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Choices from "./components/Choices";
import Towers from "./components/Towers/Towers";

const data = [
  {
    name: "Silver",
    combination: ["B1", "Y1", "D1"],
    points: 0,
  },
  {
    name: "Pink Diamond",
    combination: ["D5", "Y3", "D3"],
    points: 0,
  },
  {
    name: "Koh-i-noor Diamond",
    combination: ["P1", "P2", "P3", "P4", "P5"],
    points: 0,
  },
];

const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const [choices, setChoices] = useState([]);
  const [towers, setTowers] = useState(data);

  useEffect(() => {
    console.log("RODEI");
    const orderedByPoints = towers.sort((a, b) => b.points - a.points);
    setTowers(orderedByPoints);
  }, [choices, towers]);

  const handleClick = (type, index) => {
    if (choices.length < 5 && !choices.includes(type + index)) {
      setChoices([...choices, type + index]);
      // const towerIndex = towers.findIndex((x) => x.name === type + index);
      // const tower = towers.find(x => x.name === type+index);
      // setTowers(newValues);
    }
    if (choices.includes(type + index)) {
      setChoices((prev) => prev.filter((x) => x !== type + index));
    }
  };

  return (
    <Container>
      <Choices handleClick={handleClick} choices={choices} />
      <Towers towers={towers} choices={choices} />
    </Container>
  );
}

export default App;
