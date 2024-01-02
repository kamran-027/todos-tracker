import React, { useState } from "react";

const SignIn = ({ setToken }) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const signInUser = async () => {
    const respJSON = await fetch(
      `https://todos-tracker-0fee.onrender.com/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userDetails: userDetails,
        }),
      }
    );
    const token = await respJSON.json();
    !token.err
      ? sessionStorage.setItem("token", token.token)
      : sessionStorage.removeItem("token");
    setToken(token.token);
    setUserDetails({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1 style={{ fontFamily: "'Pathway Extreme', sans-serif" }}>Todos 📒</h1>
      {/* <form> */}

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
        placeholder="Enter Username"
        value={userDetails.username}
        onChange={(e) =>
          setUserDetails({ ...userDetails, username: e.target.value })
        }
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
        type="password"
        autoComplete="on"
        value={userDetails.password}
        placeholder="Enter Password"
        onChange={(e) =>
          setUserDetails({ ...userDetails, password: e.target.value })
        }
      ></input>
      <br />
      <br />
      <button
        style={{ background: "#E9B824", margin: 10, padding: 10 }}
        onClick={signInUser}
      >
        Sign In
      </button>
      {/* </form> */}
    </div>
  );
};

export default SignIn;
