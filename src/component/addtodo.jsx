const AddTodo = ({ addNewTodo }) => {
  const handleAddTodo = (event) => {
    const todoValue = event.target.value.trim();

    if (!todoValue) {
      return;
    }

    addNewTodo(todoValue);
    event.target.value = "";
  };

  return (
    <>
      <input type="text" id="todo-value" placeholder="To Do" onChange={handleAddTodo} />
      <button type="button" onClick={handleAddTodo}>
        Add New ToDo
      </button>
    </>
  );
};


export default AddTodo;
