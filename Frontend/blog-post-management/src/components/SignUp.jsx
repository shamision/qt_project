import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const SignupForm = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        axios.post("http://127.0.0.1:8000/api/register/",formData)
            .then((response) => {

                console.log('User registered:', response.data);

                navigate('/login');
            })
            .catch((error) => {

                console.error('Error registering user:', error);
                setProcessing(false)
            });
    }


        return (
            <div className="w-screen flex justify-center items-center min-h-screen px-6 overflow-auto">
                <div className="md:w-2/5 w-full p-6 shadow-lg bg-[#E7ECFF] rounded-xl">
                    <form className="text-center text-[#111B47]" onSubmit={handleSubmit}>
                        <h1 className="text-lg block text-center font-semibold mb-6 mt-2">
                            SIGNUP
                        </h1>
                        <label
                            htmlFor="name"
                            className="text-left block md:text-sm text-lg m-2 md:ml-12 ml-3"
                        >
                            First_name
                        </label>
                        <input
                            required
                            value={formData.first_name}
                            onChange={handleChange}
                            name="first_name"
                            type="text"
                            placeholder="First name"
                            className="shadow-lg border md:w-5/6 w-full text-base px-2 py-3 focus:outline-none bg-light rounded-lg"
                        />
                        <label
                            htmlFor="email"
                            className="text-left md:text-sm text-lg block m-2 md:ml-12 ml-3"
                        >
                            last_name
                        </label>
                        <input
                            required
                            value={formData.last_name}
                            onChange={handleChange}
                            name="last_name"
                            type="text"
                            placeholder="Last name"
                            className="shadow-lg border md:w-5/6 w-full text-base px-2 py-3 focus:outline-none bg-light rounded-lg"
                        />
                        <label
                            htmlFor="phone"
                            className="text-left block  md:text-sm text-lg m-2 md:ml-12 ml-3"
                        >
                            username
                        </label>
                        <input
                            required
                            value={formData.username}
                            onChange={handleChange}
                            name="username"
                            type="text"
                            placeholder="Username"
                            className="shadow-lg border md:w-5/6 w-full text-base px-2 py-3 focus:outline-none bg-light rounded-lg"
                        />
                        <label
                            htmlFor="role"
                            className="text-left md:text-sm text-lg block m-2 md:ml-12 ml-3"
                        >
                            email
                        </label>
                        <input
                            required
                            value={formData.email}
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="Your email"
                            className="shadow-lg border md:w-5/6 w-full text-base px-2 py-3 focus:outline-none bg-light rounded-lg"
                        />
                        <label
                            htmlFor="password"
                            className="text-left md:text-sm text-lg block text-customDark m-2 md:ml-12 ml-3"
                        >
                            Password
                        </label>
                        <input
                            required
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="*********"
                            name="password"
                            className="shadow-lg border md:w-5/6 w-full text-base px-2 py-3 focus:outline-none rounded-lg"
                        />
                        <button
                            type="submit"
                            className="md:text-sm text-lg bg-[#111B47] text-white py-2 w-2/5 rounded-lg m-4"
                        >
                            SIGNUP
                        </button>
                    </form>
                    <p>
                        You have an account?{" "}
                        <Link to="/login" className="text-[#111B47] underline">
                            Login
                        </Link>
                    </p>
                    {/* {error && <p className="text-red-500 text-center">{error}</p>} */}
                </div>
            </div>
        );
    };

    export default SignupForm;
