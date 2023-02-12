import { useState, useEffect } from "react";
import { useCallback } from "react";
import Todo from "./components/Todo";
import "./App.css";
import Loader from "./components/Loader";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState([]);

  interface Todo {
    title: string;
    id: number;
    completed: boolean;
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((respone) => respone.json())
      .then((res) => setTodos(res.slice(0, 10)))
      .catch((err) => setError(err));
  }, []);

  const handleCompleted = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index: number) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const handleOnsubMit = (value: string) => {
    setTodos([
      ...todos,
      { title: value, id: todos.length + 1, completed: false },
    ]);
  };

  return (
    <div className="App">
      <div>
        {todos.length > 0 ? (
          todos.map((todo: Todo, index: number) => (
            <Todo
              handleDelete={handleDelete}
              handleCompleted={handleCompleted}
              key={index}
              todo={todo}
              index={index}
            />
          ))
        ) : (
          <Loader />
        )}
        <TodoForm handleOnsubMit={handleOnsubMit} />
      </div>
    </div>
  );
}

export default App;
