import { useState } from "react";
import { useCookies } from "react-cookie";
// import PropTypes from "prop-types";
import "./Login.scss";

import loginCall from "../../hooks/serverAndDBCalls";

async function loginUser(credentials) {
  // check to see what is being returned
  fetch("http://localhost:8080/api/users/login")
    .then((res) => res.text()) // convert to plain text
    .then((text) => console.log(text)); // then log it out

  return fetch("http://localhost:8080/api/users/login", {
    method: "POST",
    // mode: "cors",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("There has been a problem with your fetch operation:", {
        error,
      });
    });
}
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function onClick(email, password) {
  //   loginCall(email, password);
  // }

  const [cookies, setCookie] = useCookies(["user"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await loginUser({
      email,
      password,
    });
    setCookie("user", userData, {
      path: "/",
    });
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      {cookies.user && <p>{cookies.user}</p>}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">
            {/* <button onClick={() => onClick(email, password)} type="submit"> */}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
