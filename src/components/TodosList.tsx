import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./TodoContainer";

interface Props {
  handleChangeProps: (id: string) => void;
  deleteTodoProps: (id: string) => void;
  todos: Todo[];
}

const TodosList = ({ deleteTodoProps, handleChangeProps, todos }: Props) => {
  return (
    <div>
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
