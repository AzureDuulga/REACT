import logo from "./logo.svg";
import "./App.css";
import Btn from "./component/button";
import { useState } from "react";

const buttonData = [
  { title: "Nemeh", class: "Primary" },
  { title: "Hasah", class: "Secondary" },
];
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      {buttonData.map((btns) => (
        <Btn title={btns.title} class={btns.class} click={handleClick} />
      ))}
    </div>
  );
}

export default App;
