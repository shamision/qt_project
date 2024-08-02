/* eslint-disable no-unused-vars */
import React from "react"
import Comment from "./comments/Comment"

const Blog = () => {
  return (
    <div className="flex flex-col items-center md:h-screen h-full bg-[#E7ECFF] pt-[50px] md:pl-[20px] pl-6 pr-6 md:pr-0">
      <h1 className="text-4xl font-bold md:pb-10 pb-0 text-[#111B47]">
        The gift of imperfection
      </h1>
      <p className="md:w-[600px] w-full text-[#111B47]">
        I’ve been honing my AI blogging process for a while myself now. Add to
        that everything I’ve learned from the thousands of customers using
        RightBlogger, I’ve really been able to break down the right (and wrong)
        ways to leverage generative AI, ChatGPT and it’s alternatives, for
        content creation today. This post and video I made for the RightBlogger
        blog serves as an in-depth guide to avoiding the most common pitfalls
        that’ll take these potentially powerful AI tools, and turn them into
        more of a hindrance than help. From developing an over-reliance on AI,
        to bulk publishing, not spending enough time editing your AI first
        drafts, poor prompting, and more—I really spell these mistakes out
        clearly. And this video adds a lot of color to the subject at hand:
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
