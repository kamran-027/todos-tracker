import "./Todos.css";

export default function Todos({ todos, getTodos }) {
  const markTodo = async (id) => {
    await fetch(`http://localhost:3000/completed`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    getTodos();
  };

  const todoTextStyleObj = {
    background: "#3887BE",
    borderRadius: "5px",
    padding: "5px",
    boxShadow: "3px 3px 1px #38419D",
    textAlign: "center",
    width: "15rem",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 200,
  };

  return (
    <div style={{ marginLeft: 80 }}>
      {todos.map((todo, id) => {
        return (
          <div
            key={id}
            style={{
              border: "1px solid #38419D",
              background: "#200E3A",
              padding: "1rem",
              margin: "1rem",
              borderRadius: "10px",
              width: "20rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={todoTextStyleObj}>{todo.title}</h1>
            <h2 style={todoTextStyleObj}>{todo.description}</h2>
            <button className="todoEditBtn" onClick={() => markTodo(todo._id)}>
              {todo.completed ? "Done" : "Mark as done"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
