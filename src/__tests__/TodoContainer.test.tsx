import React from "react"
import TodoContainer from "../components/TodoContainer";
import {render, fireEvent, screen, within} from '@testing-library/react'

test("add a todo", () => {
  render(<TodoContainer />);
  const input = screen.getByPlaceholderText("Add todo...")
  const button = screen.getByDisplayValue("Submit")

  fireEvent.change(input, {target:{value: "Install elastic"}})
  fireEvent.click(button)

  expect(screen.getByText("Install elastic")).toBeInTheDocument()
});

test("add a tag", () => {
    render(<TodoContainer/>)
    const input = screen.getAllByPlaceholderText("Add tag...")
    const button = screen.getAllByText("Add Tag")

    fireEvent.change(input[0], {target:{value:"Important"}})
    fireEvent.click(button[0])

    expect(screen.getByText("Important")).toBeInTheDocument()
})

test("delete a todo", () => {
    render(<TodoContainer/>)

    const todoText = screen.getByText("Deploy to live server")
    const todoItem = todoText.closest("li")!

    const button = within(todoItem).getByText("Delete")

    fireEvent.click(button)
    expect(todoText).not.toBeInTheDocument()
})