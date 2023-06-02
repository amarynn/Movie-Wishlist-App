const express = require('express')

// Middlewares
const logger = require('./middlewares/logger.js')
const sessions = require('./middlewares/sessions.js')

// Controllers
const moviesController = require('./controllers/movies_controller.js')
const sessionsController = require('./controllers/sessions_controller.js')
const usersController = require('./controllers/users_controller.js')
const wishlistController = require('./controllers/wishlist_controller.js')

// Start and listen to the server
const app = express()
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on http://localhost:${port}`))

app.use(logger)// Log request info to terminal
app.use(express.static('client')) // Send back SPA
app.use(express.json())
app.use(sessions)

// Controller response to user
app.use('/api/movies', moviesController)
app.use('/api/sessions', sessionsController)
app.use('/api/users', usersController)
app.use('/api/wishlist', wishlistController)

// API routes
app.get('/api/movies', (req, res) => {
    res.json(movie)
})

app.post('/api/movies', (req, res) => {
    const movie = req.body
    moviesList.push(movie)
    res.json({ message: `${movie.name} was successfully added.` })
})

app.put('/api/movies/:id', (req, res) => {
    const movie = req.body
    const movieId = req.params.id
    moviesList[movieId] = movie
    res.json({ message: `${movie.name} was successfully updated.` })
})

app.delete('/api/movies/:id', (req, res) => {
    const movieId = req.params.id
    const movieName = moviesList[movieId].name
    moviesList.splice(movieId, 1)
    res.json({ message: `${movieName} was successfully deleted.` })
})