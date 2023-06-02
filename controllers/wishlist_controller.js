const express = require('express')
const router = express.Router()

const Wishlist = require('../models/wishlist.js')

router.post('/:id', (req, res) => {
    const movieId = req.params.id
    let currentUserId = req.session.userId

    Wishlist
        .addNew(movieId, currentUserId)
})

module.exports = router 