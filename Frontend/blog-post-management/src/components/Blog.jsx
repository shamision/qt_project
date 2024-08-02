/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import Comment from "./comments/Comment"
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Blog = () => {

  const { id } = useParams();
  console.log(`id: ${id}`);
  const [blog, setBlog] = useState(null);

  try {
        axios.get(`http://localhost:8000/api/retrieve_blog/${id}/`)
        .then(response => {
          setBlog(response.data);
        console.log(response.data);
        })
        
    } catch (error) {
        console.error('Error fetching blog:', error);
    }

    if (!blog) {
      return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center md:h-screen h-full bg-[#E7ECFF] pt-[50px] md:pl-[20px] pl-6 pr-6 md:pr-0">
      <h1 className="text-4xl font-bold md:pb-10 pb-0 text-[#111B47]">
      {blog.title}
      </h1>
      <p className="md:w-[600px] w-full text-[#111B47]">
      {blog.content}
      </p>
      <div className="flex md:gap-48 gap-8">
        <button className="bg-[#111B47] w-[180px] h-[60px] rounded-md text-white mt-[30px]">
          Update
        </button>
        <button className="bg-red-800 w-[180px] h-[60px] rounded-md text-white mt-[30px]">
          delete
        </button>
      </div>
      <hr className="bg-gray-400 md:w-[600px] w-full h-1 mt-5" />
      <button className="bg-[#111B47] w-[180px] h-[60px] rounded-md text-white mt-[30px] ">
        Comment
      </button>
      <Comment />
    </div>
  )
}

export default Blog
