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

export default FourthComponent;
