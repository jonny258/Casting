import React, { useState, useRef } from "react";
import Auth from "../utils/auth";
import Modal from "../helpers/modal";

function LoginForm({ setShowSignup, setShowLogin, handleClose }) {
  // const [formData, setFormData] = useState({
  //     username: '',
  //     password: '',
  // });
  const usernameRef = useRef();
  const passwordRef = useRef();

  // const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
    // Handle form submission logic here
    const response = await fetch("http://localhost:5500/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    if (response.ok) {
      const { user, token } = await response.json();
      console.log(user);
      console.log(token);
      Auth.login(token);
      setShowLogin(false);
    } else {
      console.error("HTTP-Error: " + response.status);
    }
  };

  return (
    <Modal showModal={true} handleClose={handleClose} title={"Login"}>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1>Login</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            ref={usernameRef}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            name="password"
            ref={passwordRef}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Login
          </button>
          <button
            onClick={() => {
              // event.preventDefault()
              setShowSignup(true);
              setShowLogin(false);
            }}
            className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go to Sign Up
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default LoginForm;
