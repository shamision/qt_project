import BlogComponent from "./blogComponent/BlogComponent"

const BlogList = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-[#E7ECFF] md:pt-[50px] pt-12 md:pl-[20px] pl-6 pr-6 w-full">
      <h1 className="text-4xl font-bold pb-10 text-[#111B47]">List of Blogs</h1>
      <BlogComponent />
    </div>
  )
}

export default BlogList
