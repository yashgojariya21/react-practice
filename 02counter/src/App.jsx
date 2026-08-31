import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(10);

  const addValue = () => {
    const count = value + 1;
    setValue(count);
  };

  const removeValue = () => {
    const count = value - 1;
    if(value > 0) {
      setValue(count)
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>Count is {value}</h3>

      <button onClick={addValue} className="button">+ 1</button>
      <button onClick={removeValue} className="button">- 1</button>
    </>
  );
}

export default App;
