import logo from "./logo.svg";
import "./App.css";
import Btn from "./component/button";
import { useState } from "react";

const buttonData = [
  { title: "Нэмэх", class: "Primary" },
  { title: "Хасах", class: "Secondary" },
];
function App() {
  const [count, setCount] = useState(0);
  const handleClick = (title) => {
    if (title === "Нэмэх") {
      setCount(count + 1);
    } else setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      {buttonData.map((btns) => (
        <Btn
          title={btns.title}
          class={btns.class}
          click={() => {
            handleClick(btns.title);
          }}
        />
      ))}
    </div>
  );
}

export default App;
