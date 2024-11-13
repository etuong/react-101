import { useState } from "react";
import FirstComponent from "./FirstComponent";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <h1 style={{ color }}>This is a demo on React Context API</h1>
      <FirstComponent setColor={setColor} />
    </div>
  );
}

export default App;
