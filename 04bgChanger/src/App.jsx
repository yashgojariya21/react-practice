import { useState } from "react";
import { ChangeBg } from "./components/ChangeBg";

const color = [
  { name: "White", color: "white" },
  { name: "Red", color: "red" },
  { name: "Green", color: "green" },
  { name: "Yellow", color: "yellow" },
  { name: "Pink", color: "pink" },
  { name: "Blue", color: "blue" },
  { name: "Orange", color: "orange" },
];

function App() {
  const [current, setCurrent] = useState("pink");

  return (
    <>
      <div
        class="w-full h-screen bg-sky-300"
        style={{ backgroundColor: current }}
      >
        <ChangeBg colors={color} setCurrent={setCurrent} />
      </div>
    </>
  );
}

export default App;
