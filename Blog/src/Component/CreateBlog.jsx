import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateBlog() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createBlog", { title, author, content })
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">📝 Create a New Blog</h2>
        <form onSubmit={Submit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Title:</label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="text"
              placeholder="Enter blog title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Author:</label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="text"
              placeholder="Enter author name"
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Content:</label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="5"
              placeholder="Write your blog content here..."
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-105 shadow-md"
            type="submit"
          >
            🚀 Publish Blog
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog
