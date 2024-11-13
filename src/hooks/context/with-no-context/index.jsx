import { useState } from "react";

const FirstComponent = (props) => {
  return (
    <>
      <h2>I am the first component</h2>
      <SecondComponent setColor={props.setColor} />
    </>
  );
};

const SecondComponent = (props) => {
  return (
    <>
      <h3>I am the second component</h3>
      <ThirdComponent setColor={props.setColor} />
    </>
  );
};

const ThirdComponent = (props) => {
  return (
    <>
      <h4>I am the third component</h4>
      <FourthComponent setColor={props.setColor} />
    </>
  );
};

const FourthComponent = (props) => {
  return (
    <>
      <h5>
        I am the fourth component and will set the color using prop drilling
      </h5>
      <input type="text" onChange={(e) => props.setColor(e.target.value)} />
    </>
  );
};

function WithNoContextExample() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <h2 style={{ color }}>End result will be the same but the management of properties (prop drilling) will be difficult</h2>
      <FirstComponent setColor={setColor} />
    </div>
  );
}

export default WithNoContextExample;
