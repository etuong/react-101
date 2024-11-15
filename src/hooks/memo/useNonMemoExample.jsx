// The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
// In this example, we have an expensive function, expensiveCalculation(), that runs on every render.
// Remember, React re-renders the whole component every time a state changes!
// When changing the count or adding a todo, you will notice a delay in execution.

import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = expensiveCalculation(count);

  const addTodo = () => {
    setTodos(t => [...t, "New Todo"]);
  };

  return (
    <>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </>
  );
};

const expensiveCalculation = (num) => {
  console.log("I am being called!")
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default Example;
