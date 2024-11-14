import React from "react";

const Todo = (props) => {
  return (
    <React.Fragment>
      <td>{props.index} </td>
      <td >
        <input
          type="checkbox"
          defaultChecked={props.todo.isDone}
          onChange={() => props.handleDone(props.todo)}
        />
      </td>
      <td className={props.todo.isDone ? "strike-through" : ""}>
        {props.todo.task}
      </td>
      <td>
        <button onClick={() => props.handleDelete(props.todo.id)}>
          Delete
        </button>
      </td>
    </React.Fragment>
  );
};

export default Todo;
