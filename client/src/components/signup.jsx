import React, { useState, useRef } from 'react';
import Auth from '../utils/auth'

function SignUpForm({setShowSignup, setShowLogin}) {

    // const [formData, setFormData] = useState({
    //     username: '',
    //     password: '',
    // });
    const usernameRef = useRef()
    const passwordRef = useRef()

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(usernameRef.current.value);
        console.log(passwordRef.current.value)
        // Handle form submission logic here
        const response = await fetch('http://localhost:5500/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameRef.current.value,
                password: passwordRef.current.value
            })
        })
        if (response.ok) {
            const { user, token} = await response.json();
            console.log(user);
            console.log(token)
            Auth.login(token)
            setShowSignup(false)
        } else {
            console.error('HTTP-Error: ' + response.status);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
                        type="submit"
                    >
                        Sign Up
                    </button>
                    <button
                    onClick={()=> {
                        setShowLogin(true)
                        setShowSignup(false)
                    }}
                        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Go to Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;