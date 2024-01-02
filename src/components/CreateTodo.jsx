import { useState } from "react";

export default function CreateTodo({ getTodos, setToken }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postTodo = async (id) => {
    await fetch(`https://todos-tracker-0fee.onrender.com/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });
    setTitle("");
    setDescription("");
    getTodos();
  };

  const signOutUser = () => {
    setToken(null);
  };

  return (
    <div>
      <input
        style={{
          margin: 10,
          padding: 10,
          borderRadius: "5px",
          textAlign: "center",
          width: "20rem",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 200,
          fontSize: "20px",
          background: "#D2E0FB",
        }}
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <br />
      <br />
      <input
        style={{
          margin: 10,
          padding: 10,
          borderRadius: "5px",
          textAlign: "center",
          width: "20rem",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 200,
          fontSize: "20px",
          background: "#D2E0FB",
        }}
        type="text"
        value={description}
        placeholder="Enter Description"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <br />
      <br />
      <button
        style={{ background: "#E9B824", margin: 10, padding: 10 }}
        onClick={postTodo}
      >
        Add Todo
      </button>
      <button onClick={signOutUser}>Sign Out</button>
    </div>
  );
}
