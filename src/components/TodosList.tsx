import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./TodoContainer";

interface Props {
  todos: Todo[];
  handleChangeProps: (id: string) => void;
  deleteTodoProps: (id: string) => void;
  title: string;
}

const TodosList = ({
  deleteTodoProps,
  handleChangeProps,
  todos,
  title,
}: Props) => {
  return (
    <div style={{ marginTop: "20px", width: "45%" }}>
      <h2>{title}</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </div>
  );
};

export default TodosList;
