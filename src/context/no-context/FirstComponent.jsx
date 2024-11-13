import SecondComponent from "./SecondComponent";

const FirstComponent = (props) => {
  return (
    <>
      <h2>I am the first component</h2>
      <SecondComponent setColor={props.setColor} />
    </>
  );
};

export default FirstComponent;
