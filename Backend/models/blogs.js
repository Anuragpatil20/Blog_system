const mongoose = require ('mongoose')

const BlogSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String

})

const BlogModel = mongoose.model("blogs", BlogSchema)
module.exports = BlogModel