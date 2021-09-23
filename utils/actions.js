import { connection, Blog } from "./connection";


// get all blogs
export const getBlogs = async () => await Blog.find({}) 

// get a single blog
export const getBlog = async (id) => await Blog.findById(id)

// create a new blog
export const createBlog = async (newBlog) =>  await Blog.create(newBlog)

// update a blog
export const updateBlog = async (id, updatedBlog) => await Blog.findByIdAndUpdate(id, updatedBlog, {new: true})

// delete a blog
export const destroyBlog = async (id) => await Blog.findByIdAndRemove(id)