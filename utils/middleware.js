const errorHandler = (error, req, res, next) => {
  console.error(error.message)
  if (error.name === 'CastError'){
    return res.status(400).send({ error: 'malformatted id' })
  }
  if (error.name === 'ValidationError'){
    const firstError = Object.values(error.errors)[0].message
    return res.status(400).json({ error: firstError })
  }
  next()
}

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

const requestLogger = (req, res, next) => {
  console.log('Method: ', req.method)
  console.log('Path:  ', req.path)
  console.log('Body:  ', req.body)
  console.log('---', )
  next()
}

module.exports = {
  errorHandler,
  unknownEndpoint,
  requestLogger,
}