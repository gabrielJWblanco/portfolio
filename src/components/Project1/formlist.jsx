import React from "react";

import { useTodoContext } from "../context/todolistcontext";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { IoIosCheckmark } from "react-icons/io";

export default function FormList() {
  const {
    todoList,
    removeTodo,
    editTodo,
    toggleComplete,
    todoEditing,
    editingText,
    setEditingText,
    setTodoEditing,
    removeCompletedTodo,
  } = useTodoContext();

  

  return (
    <>
      <h3 className="title">Todo List</h3>
      <ul className="list">
        {todoList.map((todo, index) => (
          <li
            key={todo.id}
            className={todo.completed ? "todo-list complete" : "todo-list"}
          >
            <div>
              <input
              type="checkbox"
              onChange={() => toggleComplete(todo.id)}
              checked={todo.completed}
              className="todo-checkbox"
            />
            {todoEditing === todo.id ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
                value={editingText}
                placeholder="Edit the todo here..."
                className="todo-input-edit"
              />
            ) : (
              <div className="todo-text">{todo.text}</div>
            )}
            </div>
            
            <div className="todo-icons">
              <RiCloseCircleLine
              onClick={() => removeTodo(index)}
              className="todo-delete"
            />
            {todoEditing === todo.id ? (
              <IoIosCheckmark
                onClick={() => editTodo(todo.id)}
                className="todo-edit-submit"
              />
            ) : (
              <TiEdit
                onClick={() => setTodoEditing(todo.id)}
                className="todo-edit"
              />
            )}
            </div>
            
          </li>
        ))}
      </ul>
      <div className="hide-checkbox">
        <input type="checkbox" onChange={() => removeCompletedTodo()} />
        <p>Hide completed right now</p>
      </div>
    </>
  );
}
