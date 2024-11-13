import { ColorContext } from ".";
import { useContext } from "react";

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

export default FourthComponent;
