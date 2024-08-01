import { useState } from 'react'
import './App.css'
import BlogList from './components/BlogsList';
import Sidebar from './components/SideBar';
import BlogForm from './components/BlogForm';
import Blog from './components/Blog';
import SignupForm from './components/SignUp';
import LoginForm from './components/Login';

function App() {
  return (
    <div className="relative">
      {/* <Sidebar />
      <div className="ml-64">
        <BlogList />
      </div> */}
      <LoginForm />
    </div>
  );
}

export default App;
