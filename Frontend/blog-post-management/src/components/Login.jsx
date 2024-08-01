import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-screen flex justify-center items-center h-screen">
      <div className="w-2/5 p-6 shadow-lg bg-[#E7ECFF] rounded-xl">
        <form className="text-center text-[#111B47]" onSubmit={handleSubmit}>
          <h1 className="text-xl block text-center font-semibold mb-6 mt-2">LOGIN</h1>
          <label htmlFor="username" className="text-left block text-xs m-2 ml-12">USERNAME</label>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            placeholder="Your username"
            className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"
          />
          <label htmlFor="password" className="text-left block text-xs m-2 ml-12">PASSWORD</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="*********"
            id="password"
            name="password"
            className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none rounded-lg"
          />
          <button
            type="submit"
            className="text-xs bg-[#111B47] text-white py-2 w-2/5 rounded-lg m-4"
          >
            LOGIN
          </button>
        </form>
        <p>Don't have an account? <a href="#" className="text-[#111B47] underline">Signup</a></p>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
