
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState({
        title: '',
        content: '',
    });

    const handleBlogChange = (e) => {
        setBlogData({
            ...blogData,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        const accessToken = localStorage.getItem('access_token');
        try {
            const response = await axios.post('http://localhost:8000/api/post/', blogData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log('Blog post successful', response.data);
            setBlogData({
                title: '',
                content: '',
        })
            navigate("/")
        } catch (error) {
            console.error('Blog post error:', error);
        }
    };
    return (
        <div className="flex flex-col items-center h-screen bg-white pt-[50px] pl-[20px]">
            <h1 className="text-3xl font-bold pb-10 text-[#111B47]">Blog Form</h1>
            <form onSubmit={handleBlogSubmit} className="w-[700px] h-[500px] bg-[#E7ECFF] mt-[10px] rounded-[10px] px-6 mb-10">
                <div className="mt-[50px]">
                    <p className="text-[#111B47] items-start">Blog Title</p>
                    <div className=" mt-[10px] flex justify-center gap-5">
                        <input
                            type="text"
                            name="title"
                   
                    value={blogData.title}
                    onChange={handleBlogChange}
                            placeholder="Enter the name of the blog title"
                            className="focus:outline-none shadow-inner rounded h-8 w-[300px] p-5 text-[#505F98]"
                            required
                        />
                    </div>
                </div>
                <div className="mt-[20px]">
                    <p className="text-[#111B47] items-start">Blog</p>
                    <div className=" mt-[10px] flex justify-center gap-5">
                        <textarea
                            type="text"
                            name="content"
                            value={blogData.content}
                    onChange={handleBlogChange}
                            placeholder="Enter the blog content"
                            className="focus:outline-none shadow-inner rounded h-40 w-[300px] p-5 text-[#505F98]"
                            required
                        />
                    </div>
                </div>
                <button type='submit' className="bg-[#111B47] w-[180px] h-[60px] rounded-md text-white mt-[60px]">
                    Post Blog
                </button>
            </form>
        </div>
    );
};

export default BlogForm;