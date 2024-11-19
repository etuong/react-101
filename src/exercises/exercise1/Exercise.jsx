import { useState } from "react";

// Exercise: Create a textfield and a dropdown where users can type or select to change the background color of a div.box

const Exercise = (props) => {
  const [color, setColor] = useState("red");

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <form>
      <label>
        Enter your color: {'\u00A0'}
        <input
          type="text"
          value={color}
          onChange={handleChange}
        />
      </label>
      <br />
      <p>Too lazy to type? Select a color here</p>
      <select value={color} onChange={handleChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
        <option value="black">Black</option>
      </select>
      <div className="box" style={{ marginTop: '10px', height: '100px', width: '200px', background: color }}></div>
    </form>
  );
};

export default Exercise;
