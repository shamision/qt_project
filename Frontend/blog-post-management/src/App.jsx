import "./App.css"
import Blog from "./components/Blog"
// import SignupForm from "./components/SignUp"
// import LoginForm from "./components/Login"
// import BlogList from "./components/BlogsList"
// import Sidebar from "./components/SideBar"
function App() {
  return (
    <div className="relative">
      {/* <Sidebar />
      <div className="md:ml-64 ml-0">
        <BlogList />
      </div> */}
      <Blog />
      {/* <LoginForm /> */}

      {/* <SignupForm /> */}
    </div>
  )
}

export default App
