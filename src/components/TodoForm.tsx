import React, { useState } from "react";
import "../App.css";

type Props = {
  handleOnsubMit: (value: string) => void;
};

const TodoForm = ({ handleOnsubMit }: Props) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnsubMit(value);
          setValue("");
        }}
      >
        <input
          className="todo"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default TodoForm;
