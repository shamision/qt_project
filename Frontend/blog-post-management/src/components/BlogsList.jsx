
import React from 'react';
import BlogComponent from './blogComponent/BlogComponent';

const BlogList = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-[#E7ECFF] pt-[50px] pl-[20px]">
      <h1 className="text-4xl font-bold pb-10 text-[#111B47]">List of Blogs</h1>
      <BlogComponent />
      <BlogComponent />
      <BlogComponent />
    </div>
  );
};

export default BlogList;