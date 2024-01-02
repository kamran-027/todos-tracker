import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import "./App.css";

function App({ setToken }) {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const todosJSON = await fetch(
      `https://todos-tracker-0fee.onrender.com/todos`,
      {
        headers: {
          Authorization: `${sessionStorage.getItem("token")}`,
        },
      }
    );
    const todos = await todosJSON.json();
    setTodos(todos.todos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1 style={{ fontFamily: "'Pathway Extreme', sans-serif" }}>
        Track your Todos 📒
      </h1>

      <CreateTodo getTodos={getTodos} setToken={setToken} />
      <Todos todos={todos} getTodos={getTodos} />
    </div>
  );
}

export default App;
