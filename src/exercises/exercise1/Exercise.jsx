import { useState } from "react";

// Exercise: Create a textfield and a dropdown where users can type or select to change the background color of a div.box

const Exercise = () => {
  const [selectedColor, setSelectedColor] = useState("red");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <form>
      <label>
        Enter color: {'\u00A0'}
        <input
          type="text"
          value={selectedColor}
          onChange={handleColorChange}
        />
      </label>

      <p>Or select a color:</p>

      <select value={selectedColor} onChange={handleColorChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
        <option value="black">Black</option>
      </select>

      <div
        className="box"
        style={{
          height: '100px',
          width: '200px',
          background: selectedColor,
          marginTop: '10px',
        }}
      />
    </form>
  );
};

export default Exercise;
