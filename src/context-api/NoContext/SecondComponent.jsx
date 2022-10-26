import ThirdComponent from "./ThirdComponent";

const SecondComponent = (props) => {
  return (
    <>
      <h3>I am the second component</h3>
      <ThirdComponent setColor={props.setColor} />
    </>
  );
};

export default SecondComponent;
