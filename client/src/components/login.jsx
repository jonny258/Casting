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
    <Modal
      showModal={true}
      handleClose={handleClose}
      title={"Log in to Stream Z"}
    >
      <form className="bg-gray-900 p-8 rounded-lg space-y-6">
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="bg-gray-800 text-white border border-purple-600 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-purple-800"
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            ref={usernameRef}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-gray-800 text-white border border-purple-600 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:border-purple-800"
            id="password"
            type="password"
            placeholder="********"
            name="password"
            ref={passwordRef}
          />
          <a
            href="#"
            className="inline-block align-baseline font-bold text-sm text-purple-600 hover:text-purple-800"
          >
            Trouble logging in?
          </a>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-purple-600 w-full hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Log In
          </button>
        </div>
        <div className="text-center mt-4">
          <p className="text-white">
            Don’t have an account?{" "}
            <a
              className="text-purple-600 hover:text-purple-800"
              onClick={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
            >
              Sign up
            </a>
          </p>
        </div>
      </form>
    </Modal>
  );
}

export default LoginForm;
