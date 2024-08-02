import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !event.target.closest(".menu-toggle")
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <div className="fixed hidden top-0 left-0 h-full w-64 bg-gray-800 text-white md:flex flex-col z-50">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Blog Post
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="my-2">
              <Link to="/" className="block p-2 rounded hover:bg-gray-700">
                Blog List
              </Link>
            </li>
            <li className="my-2">
              <Link to="/blog-form" className="block p-2 rounded hover:bg-gray-700">
                Create Blog
              </Link>
            </li>
            <li className="my-2">
              <Link to="/signup" className="block p-2 rounded hover:bg-gray-700">
                Sign Up
              </Link>
            </li>
            <li className="my-2">
              <Link to="/login" className="block p-2 rounded hover:bg-gray-700">
                Log In
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">
            Logout
          </a>
        </div>
      </div>

      <div
        className="md:hidden block fixed top-5 left-4 menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={36}
          height={36}
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
        </svg>
      </div>

      {menuOpen && (
        <div className="absolute left-0 w-screen bg-[#E7ECFF] opacity-90 h-screen mt-12"></div>
      )}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={ref}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-black w-1/2 h-full mt-14 rounded-r-3xl fixed left-0 top-0"
          >
            <ul className="space-y-6 px-4 py-20">
              <li className="bg-white opacity-100 h-8 w-full text-black text-base text-center flex justify-center items-center rounded-xl">
                <Link to="/">Blog List</Link>
              </li>
              <li className="bg-white opacity-100 h-8 w-full text-black text-base text-center flex justify-center items-center rounded-xl">
                <Link to="/blog-form">Create Blog</Link>
              </li>
              <li className="bg-white opacity-100 h-8 w-full text-black text-base text-center flex justify-center items-center rounded-xl">
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className="bg-white opacity-100 h-8 w-full text-black text-base text-center flex justify-center items-center rounded-xl">
                <Link to="/login">Log In</Link>
              </li>
              <li className="bg-white opacity-100 h-8 w-full text-black text-base text-center flex justify-center items-center rounded-xl">
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
