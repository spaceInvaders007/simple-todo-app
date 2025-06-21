import React, { useState } from "react";

interface Props {
  addTodoProps: (title: string) => void;
}

const InputTodo = ({ addTodoProps }: Props) => {
  const [title, setTitle] = useState<string>("");

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addTodoProps(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  );
};
export default InputTodo;
