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
    const imgLink = req.body.imageLink

    Movies
        .create(title, description, imgLink)
        .then(movies => res.json(movies))
})