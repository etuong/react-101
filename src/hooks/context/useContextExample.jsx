/**
 * React Context is a way to manage state globally. It is a way to share data between components in a React application without having to pass props down manually at every level of the component tree. React Context provides a way to create a global state that can be accessed by any component within a specific context. This means you can share data directly with the components that need it, regardless of their position in the component tree.
 */
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
