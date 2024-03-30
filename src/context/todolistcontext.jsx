import { createContext, useContext, useEffect, useState } from "react";

const TodoListContext = createContext();
const getList = localStorage.getItem("List");
const loadedList = JSON.parse(getList) || [];

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(loadedList);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const readList = JSON.stringify(todoList);
    localStorage.setItem("List", readList);
  }, [todoList]);

  const addTodo = (newTodoItem) => {
    const newTodo = {
      id: new Date().getTime(),
      text: newTodoItem,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const newList = todoList.filter((_, index) => index !== id);
    setTodoList(newList);
  };

  const removeCompletedTodo = () => {
    const newList = todoList.filter((todo) => !todo.completed);
    setTodoList(newList);
  };

  const editTodo = (id) => {
    if (!editingText) {
      return;
    }
    const editedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodoList(editedTodos);
    setTodoEditing(null);
    setEditingText("");
  };

  const toggleComplete = (id) => {
    const completedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodoList(completedTodos);
  };

  const contextValue = {
    todoList,
    addTodo,
    removeTodo,
    editTodo,
    toggleComplete,
    todoEditing,
    editingText,
    setTodoEditing,
    setEditingText,
    removeCompletedTodo,
  };

  return (
    <TodoListContext.Provider value={contextValue}>
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoListContext);

export default TodoProvider;
