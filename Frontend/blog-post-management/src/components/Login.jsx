import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
 
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: '',
        password: '',
      });

      const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://127.0.0.1:8000/api/token/', formData);
          console.log(response.data); 
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
          navigate("/blog-form")
      } catch (error) {
          console.error('Login error:', error); 
      }
  };



  return (
    <div className="w-screen flex justify-center items-center h-screen px-6">
      <div className="md:w-2/5 w-full p-6 shadow-lg bg-[#E7ECFF] rounded-xl">
        <form className="text-center text-[#111B47]" onSubmit={handleSubmit}>
          <h1 className="text-xl block text-center font-semibold mb-6 mt-2">
            LOGIN
          </h1>
          <label
            htmlFor="username"
            className="text-left block text-xs m-2 ml-12"
          >
            USERNAME
          </label>
          <input
            required
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            
            className="shadow-lg border md:w-5/6 w-full text-base px-2 py-3 focus:outline-none bg-light rounded-lg"
          />
          <label
            htmlFor="password"
            className="text-left block text-xs m-2 ml-12"
          >
            PASSWORD
          </label>
          <input
          required
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="shadow-lg border md:w-5/6 w-full text-base px-2 py-3 focus:outline-none rounded-lg"
          />
          <button
            type="submit"
            className="text-xs bg-[#111B47] text-white py-2 w-2/5 rounded-lg m-4"
          >
            LOGIN
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#111B47] underline">
            Signup
          </Link>
        </p>
        {/* {error && <p className="text-red-500 text-center">{error}</p>} */}
      </div>
    </div>
  );
};

export default LoginForm;
