import React, { useCallback, useMemo, useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  tags?: string[];
  assignedTo?: string;
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
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
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
console.log(todos, 'todos')
  const addTag = useCallback((id: string, newTag: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, tags: [...(todo.tags || []), newTag] }
          : todo
      )
    );
  }, []);

  const assignUser = useCallback((id: string, user: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, user } : todo))
    );
  }, []);

  const pendingTodos = useMemo(
    () => todos.filter((todo) => !todo.completed),
    [todos]
  );

  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed),
    [todos]
  );

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TodosList
          todos={pendingTodos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          title="Pending"
          addTag={addTag}
          assignUser={assignUser}
        />
        <TodosList
          todos={completedTodos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          title="Done"
          addTag={addTag}
          assignUser={assignUser}
        />
      </div>
    </div>
  );
};
export default TodoContainer;
