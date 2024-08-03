import React, { useEffect, useState } from "react";
import Comment from "./comments/Comment";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/retrieve_blog/${id}/`);
        setBlog(response.data);
        setFormData({ title: response.data.title, content: response.data.content });
      } catch (err) {
        setError('Error fetching blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const accessToken = localStorage.getItem('access_token');
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.put(`http://localhost:8000/api/blogs/${id}/`, formData,
        {
          headers: {
              Authorization: `Bearer ${accessToken}`,
          },
      }
      );
      setBlog(response.data);
      setIsEditing(false);
    } catch (err) {
      setError('Error updating blog');
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.delete(`http://localhost:8000/api/blogs/${id}/`,
        {
          headers: {
              Authorization: `Bearer ${accessToken}`,
          },
      }
      );
     console.log(response.data);
      navigate("/")
    } catch (err) {
      setError('Error updating blog');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center md:h-screen h-full bg-[#E7ECFF] pt-[50px] md:pl-[20px] pl-6 pr-6 md:pr-0">
      {isEditing ? (
        <form onSubmit={handleFormSubmit} className="w-full max-w-md">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
              Content
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <h1 className="text-4xl font-bold md:pb-10 pb-0 text-[#111B47]">
            {blog?.title || 'No Title'}
          </h1>
          <p className="md:w-[600px] w-full text-[#111B47]">
            {blog?.content || 'No Content'}
          </p>
          <div className="flex md:gap-48 gap-8">
            <button onClick={handleEditClick} className="bg-[#111B47] w-[180px] h-[60px] rounded-md text-white mt-[30px]">
              Update
            </button>
            <button onClick={handleDelete} className="bg-red-800 w-[180px] h-[60px] rounded-md text-white mt-[30px]">
              Delete
            </button>
          </div>
        </>
      )}
      <hr className="bg-gray-400 md:w-[600px] w-full h-1 mt-5" />
      {/* <button className="bg-[#111B47] w-[180px] h-[60px] rounded-md text-white mt-[30px]">
        Comment
      </button> */}
      {/* <Comment /> */}
    </div>
  );
};

export default Blog;
