import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
	const opts = {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			"email": email,
			"password": password
		})
	}
	fetch('https://3000-violetapint-jwtexercise-z266d0sq1oq.ws-eu47.gitpod.io/token', opts)
	.then(resp => {
		if(resp.status === 200) return resp.json();
		else(alert("There has been some error"))
	})
	.then()
	.catch(error =>{
		console.error("There was an error!!!", error)
	})
  }

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      <div>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};
