import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("This is your token" + store.token);

  const history = useHistory();

  const handleClick = () => {
    actions.createNewUser(email, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    history.push("/private");

  return (
    <div className="text-center mt-5">
      <h1>Signup</h1>

      {store.token && store.token != "" && store.token != undefined ? (
        "You are logged in with this token" + store.token
      ) : (
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button onClick={handleClick}>Login</button>
        </div>
      )}
    </div>
  );
};
