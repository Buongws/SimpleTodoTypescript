import React from "react";
import "../App.css";
import { TodoType } from "../types/Todo.types";

type Props = {
  todo: TodoType;
  index: number;
  handleCompleted: (id: number) => void;
  handleDelete: (id: number) => void;
};

const todoStyle = {
  textDecoration: "line-through",
};

const Todo = ({ todo, index, handleCompleted, handleDelete }: Props) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.title}
      <div>
        <button onClick={() => handleCompleted(index)}>
          {todo.completed ? "Completed" : "Incompleted"}
        </button>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
