import React from "react";

const AddTodo = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value);
    e.target.name.value = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Add Todo</h3>
        <input placeholder="Name" name="name" />

        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddTodo;