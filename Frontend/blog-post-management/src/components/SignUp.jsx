import React, { useState } from "react"

const SignupForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
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
            NAME
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            placeholder="Your name"
            className="shadow-lg border md:w-5/6 w-full text-base px-2 py-3 focus:outline-none bg-light rounded-lg"
          />
          <label
            htmlFor="email"
            className="text-left md:text-sm text-lg block m-2 md:ml-12 ml-3"
          >
            EMAIL
          </label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Your email"
            className="shadow-lg border md:w-5/6 w-full text-base px-2 py-3 focus:outline-none bg-light rounded-lg"
          />
          <label
            htmlFor="phone"
            className="text-left block  md:text-sm text-lg m-2 md:ml-12 ml-3"
          >
            PHONE
          </label>
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            type="tel"
            placeholder="Your phone"
            className="shadow-lg border md:w-5/6 w-full text-base px-2 py-3 focus:outline-none bg-light rounded-lg"
          />
          <label
            htmlFor="role"
            className="text-left md:text-sm text-lg block m-2 md:ml-12 ml-3"
          >
            ROLE
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            id="role"
            className=" shadow-lg border md:w-5/6 w-full text-base px-4 py-3 focus:outline-none bg-light rounded-lg"
          >
            <option value="Technician">Technician</option>
            <option value="MarketingManager">Marketing Manager</option>
            <option value="FinancialManager">Financial Manager</option>
          </select>
          <label
            htmlFor="password"
            className="text-left md:text-sm text-lg block text-customDark m-2 md:ml-12 ml-3"
          >
            PASSWORD
          </label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="*********"
            id="password"
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
          <a href="#" className="text-[#111B47] underline">
            Login
          </a>
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  )
}

export default SignupForm
