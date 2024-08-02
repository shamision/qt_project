import React from "react"

const Comment = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between justify-center">
        <div className="flex flex-col gap-3">
          <p>Hello everyone, how are you ?</p>
          <p>31/07/2024</p>
        </div>
        <button className="bg-gray-700 w-[100px] h-[40px] rounded-md text-white mt-[30px]">
          Update
        </button>
        <button className="bg-red-950 w-[100px] h-[40px] rounded-md text-white mt-[30px]">
          Delete
        </button>
      </div>
      <hr className="bg-gray-400 md:w-[600px] w-full h-1 mt-5" />
    </div>
  )
}

export default Comment
