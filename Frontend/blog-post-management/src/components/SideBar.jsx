import React from 'react';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col z-50">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Blog Post
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="my-2">
            <a href="#" className="block p-2 rounded hover:bg-gray-700">Home</a>
          </li>
          <li className="my-2">
            <a href="#" className="block p-2 rounded hover:bg-gray-700">About</a>
          </li>
          <li className="my-2">
            <a href="#" className="block p-2 rounded hover:bg-gray-700">Services</a>
          </li>
          <li className="my-2">
            <a href="#" className="block p-2 rounded hover:bg-gray-700">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <a href="#" className="block p-2 rounded hover:bg-gray-700">Logout</a>
      </div>
    </div>
  );
};

export default Sidebar;
