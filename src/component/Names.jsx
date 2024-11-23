/* Components are independent and reusable bits of code. 
They serve the same purpose as JavaScript functions, 
but work in isolation and return HTML */
import { useEffect, useState } from "react";

const Names = () => {
  const [names, setNames] = useState([
    "Eddie",
    "Ciara",
    "Sierra",
    "Daniel",
    "Hose",
    "Joseph",
  ]);

  const handleAddName = () => {
    setNames((prevNames) => [...prevNames, "Ethan"]);
  };

  return (
    <div>
      <h1 className="header">Roster</h1>
      <button onClick={handleAddName}>Click here to add an Ethan!</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Names;
