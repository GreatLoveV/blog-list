const dummy = (blogs) => {
  console.log(blogs)
  return 1
}

const totalLikes = (blogs) => {
  const sumLikes = blogs.reduce((sum, blog) => sum + blog.likes, 0)
  return sumLikes
}

const favoriteBlog = (blogs) => {
  if(blogs.length === 0) return null
  let largestLikes = blogs[0]
  blogs.forEach(blog => {
    if (blog.likes >= largestLikes.likes){
      largestLikes = blog
    }
  })
  return largestLikes
}





module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}