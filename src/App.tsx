import React, { useEffect, useState } from "react";
import Choices from "./components/Choices";
import Towers from "./components/Towers/Towers";

let checker = (arr, target) => target.every((v) => arr.includes(v));

function App() {
  const [choices, setChoices] = useState([]);
  // const [availableTowers, setAvailableTowers] = useState(towers);

  useEffect(() => {
    console.log({ choices });
    // const filteredTowers = availableTowers.filter((tower) => {
    //   const result = checker(tower.combination, choices);
    //   return result;
    // });
    // console.log({ filteredTowers });
  }, [choices]);

  const handleClick = (type, index) => {
    setChoices([...choices, type + index]);
  };

  return (
    <div>
      <Choices handleClick={handleClick} />
      <Towers choices={choices} />
    </div>
  );
}

export default App;
