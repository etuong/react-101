import FourthComponent from "./FourthComponent";

const ThirdComponent = (props) => {
  return (
    <>
      <h4>I am the third component</h4>
      <FourthComponent setColor={props.setColor} />
    </>
  );
};

export default ThirdComponent;
