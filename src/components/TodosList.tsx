import React, { memo } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./TodoContainer";

interface Props {
  handleChangeProps: (id: string) => void;
  deleteTodoProps: (id: string) => void;
  todos: Todo[];
  title: string;
}

const TodosList = memo(
  ({ deleteTodoProps, handleChangeProps, todos, title }: Props) => {
    return (
      <div style={{ width: "48%", marginTop: "20px" }}>
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
  }
);

export default TodosList;
