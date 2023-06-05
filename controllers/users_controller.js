const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/user")

router.post("/", (req, res) => {
    const { name, email, password } = req.body
    const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)

    User
        .create(name, email, passwordDigest)
        .then(email => res.json(email))
})

router.post("/update", (req, res) => {
    const { name, email, password } = req.body
    let currentUserId = req.session.userId
    if (password === "") {
        User
            .updateNoPass(name, email, currentUserId)
            .then(email => res.json(email))
    } else {
        const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)

        User
            .update(name, email, passwordDigest, currentUserId)
            .then(email => res.json(email))
    }
    
})

router.get('/', (req, res) => {
    const userId = req.session.userId
    if (userId) {
        User
            .findById(userId)
            .then(email => {
                User
                    .findByEmail(email)
                    .then(user => {
                        res.json({email: user.email, name: user.name})
                    })
            })
            
    } else {
        res.json({})
    }
})

module.exports = router