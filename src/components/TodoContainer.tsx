import React, { useCallback, useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: uuidv4(),
      title: "Setup development environment",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Deploy to live server",
      completed: false,
    },
  ]);

  const handleChange = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }, []);

  const delTodo = useCallback((id: string) => {
    setTodos((prevTodos) => [
      ...prevTodos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  }, []);

  const addTodoItem = useCallback((title: string) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </div>
  );
};
export default TodoContainer;
