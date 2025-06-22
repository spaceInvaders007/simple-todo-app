import React, { memo, useCallback, useState } from "react";
import { Todo } from "./TodoContainer";

interface Props {
  handleChangeProps: (id: string) => void;
  deleteTodoProps: (id: string) => void;
  todo: Todo;
  addTag: (id: string, newTag: string) => void;
}

const TodoItem = memo(
  ({ deleteTodoProps, handleChangeProps, todo, addTag }: Props) => {
    const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    const [tag, setTag] = useState<string>("");

    const { completed, id, title, tags } = todo;

    const handleTagChange = useCallback(() => {
      if (tag.trim() === "") return;
      addTag(id, tag.trim());
      setTag("");
    }, []);

    return (
      <li className="todo-item">
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          <button onClick={() => deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : undefined}>{title}</span>
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <input
            value={tag}
            placeholder="Add tag..."
            onChange={(e) => setTag(e.target.value)}
          />
          <button
            onClick={handleTagChange}
            style={{ background: "green", border: "none" }}
          >
            Add Tag
          </button>
        </div>
        <div style={{ marginTop: "5px", display: "flex", flexWrap: "wrap" }}>
          {tags &&
            tags.map((tag, index) => (
              <span
                key={`${tag}${index}`}
                style={{
                  background: "lightgray",
                  padding: "1px 4px",
                  borderRadius: "4px",
                  marginLeft: "3px",
                }}
              >
                {tag}
              </span>
            ))}
        </div>
      </li>
    );
  }
);

export default TodoItem;
