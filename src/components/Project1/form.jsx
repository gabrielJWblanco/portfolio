import React, { useState } from "react";
import { useTodoContext } from "../context/todolistcontext";

export default function Form() {
  const { addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");

  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!todoItem){
      return;
    }
    addTodo(todoItem);
    setTodoItem("")

  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-container">
        <input
        type="text"
        placeholder="Add a Todo"
        name="text"
        value={todoItem}
        onChange={handleChange}
        className="form-input"
      />
      <button type="submit" className="form-button">Add Todo</button>
      </div>
      
    </form>
  );
}
