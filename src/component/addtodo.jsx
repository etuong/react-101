const AddTodo = (props) => {
  const addTodo = () => {
    const field = document.getElementById("todoValue");
    if (!field.value) {
      alert("Please Add Todo Text");
      return;
    }
    props.addNewTodo(field.value);
    field.value = "";
  };

  return (
    <div>
      <input
        type="text"
        id="todoValue"
        placeholder="To Do"
      />
      <button
        onClick={addTodo}
        type="button"
      >
        Add New ToDo
      </button>
    </div>
  );
};

export default AddTodo;
