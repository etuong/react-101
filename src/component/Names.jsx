/* Components are independent and reusable bits of code. 
They serve the same purpose as JavaScript functions, 
but work in isolation and return HTML */
import { useEffect, useState } from "react";

const Names = () => {
  useEffect(() => { }, []);

  const [names, setNames] = useState([
    "Eddie",
    "Ciara",
    "Sierra",
    "Daniel",
    "Hose",
    "Joseph",
  ]);

  const addEthan = (e) => {
    setNames((prevNames) => [...prevNames, "Ethan"]);
  };

  return (
    <div>
      <h1 className="header">Roster</h1>
      <button onClick={addEthan}>Click here to add an Ethan!</button>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Names;
