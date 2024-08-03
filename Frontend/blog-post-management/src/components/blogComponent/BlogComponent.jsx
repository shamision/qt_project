import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogComponent = () => {

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/blogs/');
        setBlogs(response.data);
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};
useEffect(() => {
  fetchBlogs();
}, []);
  return (

    <div>
      {blogs.map((blog,index) => (
      <Link to={`/blog/${blog.id}`} key={blog.id} className="h-[150px] md:w-[800px] w-full bg-white rounded-2xl flex justify-between items-center md:px-10 py-10 px-2  shadow-lg mb-5">
      
      <div>
        <h1 className="font-bold text-[#111B47]">{blog.title}</h1>
        <p className="text-[#111B47]">{blog.content}</p>
      </div>
      <p className="text-[#111B47]">{blog.author}</p>
    </Link>
     ))}
    </div>
    
  )
}

export default BlogComponent
