import React, { useState } from "react";
import Todo from "../../component/todo";
import AddTodo from "../../component/addToDo";

// Exercise: Create a ToDo app

const Exercise = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Prepare lesson plan", isCompleted: false },
    { id: 2, task: "Bring snacks", isCompleted: true },
    { id: 3, task: "Walk Happy", isCompleted: false },
  ]);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleCompletion = (selectedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === selectedTodo.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, isCompleted: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const incompleteTasksCount = todos.reduce(
    (count, todo) => (todo.isCompleted ? count : count + 1),
    0
  );

  return (
    <React.Fragment>
      <h1>You have {incompleteTasksCount} task(s) left to do!</h1>
      <AddTodo addNewTodo={addTodo} />
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <Todo
                index={index + 1}
                todo={todo}
                handleDelete={handleDelete}
                handleDone={toggleCompletion}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Exercise;
