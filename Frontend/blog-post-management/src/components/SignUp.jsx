import React, { useState } from 'react';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
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
          <h1 className="text-xl block text-center font-semibold mb-6 mt-2">SIGNUP</h1>
          <label htmlFor="name" className="text-left block text-xs m-2 ml-12">NAME</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            placeholder="Your name"
            className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"
          />
          <label htmlFor="email" className="text-left text-xs block m-2 ml-12">EMAIL</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Your email"
            className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"
          />
          <label htmlFor="phone" className="text-left block  text-xs m-2 ml-12">PHONE</label>
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            type="tel"
            placeholder="Your phone"
            className="shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"
          />
          <label htmlFor="role" className="text-left text-xs block m-2 ml-12">ROLE</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            id="role"
            className=" shadow-lg border w-5/6 text-base px-2 py-1 focus:outline-none bg-light rounded-lg"
          >
            <option value="Technician">Technician</option>
            <option value="MarketingManager">Marketing Manager</option>
            <option value="FinancialManager">Financial Manager</option>
          </select>
          <label htmlFor="password" className="text-left text-xs block text-customDark m-2 ml-12">PASSWORD</label>
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
            SIGNUP
          </button>
        </form>
        <p>You have an account? <a href="#" className='text-[#111B47] underline'>Login</a></p>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default SignupForm;
