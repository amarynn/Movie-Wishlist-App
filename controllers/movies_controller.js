const express = require('express')
const router = express.Router()

const Movies = require('../models/movie.js') // Model

// Routes
router.get('/', (req, res) => {
    Movies
        .findAll()
        .then(movies => res.json(movies))
})

router.post('/', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink

    Movies
        .create(title, description, imageLink)
        .then(movies => res.json(movies))
})

router.delete('/:id', (req, res) => {
    const movieId = req.params.id

    Movies
        .delete(movieId)
        .then(movies => res.json(movies))
})

router.post('/:id', (req, res) => {
    const movieId = req.params.id
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink

    Movies
        .update(movieId, title, description, imageLink)
        .then(movies => res.json(movies))
})

// ability to edit movies needs more discussion

module.exports = router