import React, { memo } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./TodoContainer";

interface Props {
  handleChangeProps: (id: string) => void;
  deleteTodoProps: (id: string) => void;
  todos: Todo[];
  title: string;
  addTag: (id: string, newTag: string) => void;
}

const TodosList = memo(
  ({ deleteTodoProps, handleChangeProps, todos, title, addTag }: Props) => {
    return (
      <div style={{ width: "48%", marginTop: "20px" }}>
        <h2>{title}</h2>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            addTag={addTag}
          />
        ))}
      </div>
    );
  }
);

export default TodosList;
