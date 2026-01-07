const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (req, res) => {
  const fetchedNotes = await Blog.find({})
  res.json(fetchedNotes)
})

blogsRouter.post('/', async (req, res) => {
  const body = req.body

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  })
  const savedNote = await blog.save()
  res.status(201).json(savedNote)
})


blogsRouter.put('/:id', async (req, res) => {
  const{ title, author, url, likes } = req.body
  const blog = await Blog.findById(req.params.id)
  if (!blog) {
    return res.status(404).end()
  }
  blog.title = title
  blog.author = author
  blog.url = url
  blog.likes = likes

  const updatedBlog = await blog.save()
  res.status(200).json(updatedBlog)
})


blogsRouter.delete('/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id)
  res.status(204).end()
})


module.exports = blogsRouter