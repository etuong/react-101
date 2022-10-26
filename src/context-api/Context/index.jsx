import { useState, createContext } from "react";
import FirstComponent from "./FirstComponent";

export const ColorContext = createContext();

function App() {
  const [color, setColor] = useState("black");

  return (
    <ColorContext.Provider value={setColor}>
      <div>
        <h1 style={{ color }}>This is a demo on React Context API</h1>
        <FirstComponent />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
