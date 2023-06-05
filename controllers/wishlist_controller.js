const express = require('express')
const router = express.Router()

const Wishlist = require('../models/wishlist.js')

router.post('/:id', (req, res) => {
    const movieId = req.params.id
    let currentUserId = req.session.userId

    Wishlist
        .addNew(movieId, currentUserId)
})

router.get("/", (req, res) => {
    let currentUserId = req.session.userId

    Wishlist
        .findAllForUser(currentUserId)
        .then(movies => res.json(movies))
})

router.delete('/:id', (req, res) => {
    const movieId = req.params.id
    let currentUserId = req.session.userId

    Wishlist
        .removeItem(movieId, currentUserId)
        .then(movies => res.json(movies))
})

module.exports = router 