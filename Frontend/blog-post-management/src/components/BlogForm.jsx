
import React from 'react';

const BlogForm = () => {
    return (
        <div className="flex flex-col items-center h-screen bg-white pt-[50px] pl-[20px]">
            <h1 className="text-3xl font-bold pb-10 text-[#111B47]">Blog Form</h1>
            <div className="w-[700px] h-[500px] bg-[#E7ECFF] mt-[10px] rounded-[10px] px-6 mb-10">
                <div className="mt-[50px]">
                    <p className="text-[#111B47] items-start">Blog Title</p>
                    <div className=" mt-[10px] flex justify-center gap-5">
                        <input
                            type="text"
                            placeholder="Enter the name of the blog"
                            className="focus:outline-none shadow-inner rounded h-8 w-[300px] p-5 text-[#505F98]"
                            required
                        />
                    </div>
                </div>
                <div className="mt-[20px]">
                    <p className="text-[#111B47] items-start">Blog</p>
                    <div className=" mt-[10px] flex justify-center gap-5">
                        <input
                            type="text"
                            placeholder="Enter the blog"
                            className="focus:outline-none shadow-inner rounded h-40 w-[300px] p-5 text-[#505F98]"
                            required
                        />
                    </div>
                </div>
                <button className="bg-[#111B47] w-[180px] h-[60px] rounded-md text-white mt-[60px]">
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default BlogForm;