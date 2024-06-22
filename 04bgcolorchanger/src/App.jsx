import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <div className="outer-container" style={{ backgroundColor: color }}>
      <div className="inner-container">
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "orange", color: "white" }}
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => setColor("black")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App
