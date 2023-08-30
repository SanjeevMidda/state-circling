import "./index.css";
import Circle from "./components/Circle";
import { useState } from "react";

function App() {
  const [newWord, setNewWord] = useState("circle");

  return (
    <div className="App">
      <div className="selectContainer">
        <h1 onClick={() => setNewWord("one")}>one</h1>
        <h1 onClick={() => setNewWord("two")}>two</h1>
        <h1 onClick={() => setNewWord("three")}>three</h1>
        <h1 onClick={() => setNewWord("four")}>four</h1>
        <h1 onClick={() => setNewWord("five")}>five</h1>
      </div>
      <div className="circleContainer">
        <Circle word={newWord} />
        <Circle word={newWord} />
        <Circle word={newWord} />
        <Circle word={newWord} />
        <Circle word={newWord} />
        <Circle word={newWord} />
        <Circle word={newWord} />
        <Circle word={newWord} />
        <Circle word={newWord} />
      </div>
    </div>
  );
}

export default App;
