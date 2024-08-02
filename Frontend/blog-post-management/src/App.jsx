import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import SignupForm from "./components/SignUp";
import LoginForm from "./components/Login";
import BlogList from "./components/BlogsList";
import Sidebar from "./components/SideBar";
import BlogForm from "./components/BlogForm";

function App() {
  return (
    <Router>
      <div className="relative">
        <Sidebar />
        <div className="md:ml-64 ml-0">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog-form" element={<BlogForm />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
