import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(result => setBlogs(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteBlog/${id}`)
      .then(res => {
        console.log(res);
        setBlogs(blogs.filter(blog => blog._id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Create New Blog Button */}
      <div className="flex justify-end mb-6">
        <a
          href='/create'
          className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-green-500 transition duration-300"
        >
          Create New Blog
        </a>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white hover:bg-gray-400 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="p-5">
              <h2 className="text-2xl font-bold font-mono mb-3 text-gray-800">#{blog.title}#</h2>
              <p className="text-sm font-bold text-black mb-2">Author: <span className="font-medium text-red-500">{blog.author}</span></p>
              <p className="text-gray-700 mb-4">{blog.content}</p>
              <div className="flex justify-between items-center">
                <a
                  href={`/update/${blog._id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-blue-500 transition duration-300"
                >
                  Edit
                </a>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-red-500 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
