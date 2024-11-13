import { createContext, useContext, useState } from "react";

export const ColorContext = createContext();

const FirstComponent = () => {
  return (
    <>
      <h2>I am the first component</h2>
      <SecondComponent />
    </>
  );
};

const SecondComponent = () => {
  return (
    <>
      <h3>I am the second component</h3>
      <ThirdComponent />
    </>
  );
};

const ThirdComponent = () => {
  return (
    <>
      <h4>I am the third component</h4>
      <FourthComponent />
    </>
  );
};

const FourthComponent = (props) => {
  const setColor = useContext(ColorContext);

  return (
    <>
      <h5>
        I am the fourth component and will set the color using Context API
      </h5>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
    </>
  );
};

function WithContextExample() {
  const [color, setColor] = useState("black");

  return (
    <ColorContext.Provider value={setColor}>
      <div>
        <h2 style={{ color }}>This is a demo on React Context API</h2>
        <FirstComponent />
      </div>
    </ColorContext.Provider>
  );
}

export default WithContextExample;
