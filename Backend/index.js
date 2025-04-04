const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const BlogModel = require ('./models/blogs')


const app = express ()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/Blog-system")

app.get('/', (req ,res) =>{
    BlogModel.find({})
    .then(blogs => res.json(blogs))
    .catch(err => res.json(err))
})

app.get('/getBlog/:id', (req , res) =>{
    const id = req.params.id;
    BlogModel.findById({_id:id})
    .then(blogs => res.json(blogs))
    .catch(err => res.json(err))
})

app.put('/updateBlog/:id', (req ,res) => {
    const id = req.params.id;
    BlogModel.findByIdAndUpdate({_id: id},{
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    })
    .then(blogs => res.json(blogs))
    .catch(err => res.json(err))
})

app.delete('/deleteBlog/:id', (req , res) =>{
    const id = req.params.id;
    BlogModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/createBlog", (req , res) =>{
    BlogModel.create(req.body)
    .then(blogs => res.json(blogs))
    .catch(err => res.json(err))
})


app.listen (3001, () => {
    console.log("Server is Running")
})