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
  {
    name: "Malachite",
    combination: ["E1", "G1", "Q1"],
    points: 0,
  },
  {
    name: "Uranium-238",
    combination: ["Y5", "B3", "E2"],
    points: 0,
  },
  {
    name: "Asteriated Ruby",
    combination: ["R2", "R1", "P1"],
    points: 0,
  },
  {
    name: "Bloodstone",
    combination: ["R5", "Q4", "P3"],
    points: 0,
  },
  {
    name: "The Crown Prince	",
    combination: ["R1", "R2", "R3", "R4", "R5"],
    points: 0,
  },
  {
    name: "Jade",
    combination: ["G3", "E3", "B2"],
    points: 0,
  },
  {
    name: "Diamond Cullinan",
    combination: ["D1", "D2", "D3", "D4", "D5"],
    points: 0,
  },
  {
    name: "Quartz",
    combination: ["G4", "R3", "P2"],
    points: 0,
  },
  {
    name: "Golden Jubilee	",
    combination: ["Y1", "Y2", "Y3", "Y4", "Y5"],
    points: 0,
  },
  {
    name: "Gold",
    combination: ["P5", "P4", "D2"],
    points: 0,
  },
  {
    name: "Dark Emerald",
    combination: ["G5", "B4", "Y2"],
    points: 0,
  },
  {
    name: "Paraiba Tourmaline",
    combination: ["Q5", "E4", "G2"],
    points: 0,
  },
  {
    name: "Sapphire Star Of Adam",
    combination: ["G1", "G2", "G3", "G4", "G5"],
    points: 0,
  },
  {
    name: "Deepsea Pearl",
    combination: ["Q4", "D4", "E2"],
    points: 0,
  },
  {
    name: "Chrysoberyl Cat's Eye	",
    combination: ["E5", "D4", "Q3"],
    points: 0,
  },
  {
    name: "Yellow Saphire",
    combination: ["B5", "R4", "Y4"],
    points: 0,
  },
  {
    name: "Carmen-Lucia",
    combination: ["E1", "E2", "E3", "E4", "E5"],
    points: 0,
  },
  {
    name: "Star Sapphire	",
    combination: ["B1", "B2", "B3", "B4", "B5"],
    points: 0,
  },
  {
    name: "Agate",
    combination: ["G5", "E5", "Q5"],
    points: 0,
  },
  {
    name: "Obsidian",
    combination: ["D5", "B5", "Y5"],
    points: 0,
  },
  {
    name: "Fantastic Miss Shrimp",
    combination: ["G5", "R5", "B5"],
    points: 0,
  },
  {
    name: "The Burning Stone",
    combination: ["R5", "R4", "P5", "P4"],
    points: 0,
  },
  {
    name: "Yaphets Stone",
    combination: ["B5", "G5", "B4", "G4"],
    points: 0,
  },
  {
    name: "Ensnare Pedal",
    combination: ["Y3", "D2"],
    points: 0,
  },
  {
    name: "Gale Pedal",
    combination: ["G3", "E2"],
    points: 0,
  },
  {
    name: "Torrent Pedal",
    combination: ["B3", "Q2"],
    points: 0,
  },
  {
    name: "Howl Pedal",
    combination: ["P3", "R2"],
    points: 0,
  },
  {
    name: "Acid Pedal",
    combination: ["Q3", "Y2"],
    points: 0,
  },
  {
    name: "Paralysis Pedal",
    combination: ["R3", "G2"],
    points: 0,
  },
  {
    name: "Terrorize Pedal",
    combination: ["D3", "P2"],
    points: 0,
  },
  {
    name: "Decrepify Pedal",
    combination: ["E3", "B2"],
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
