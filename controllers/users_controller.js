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
    let currentUser = state.loggedInUser
    if (password === "") {
        User
            .updateNoPass(name, email)
            .then(email => res.json(email))
    } else {
        const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)

        User
            .update(name, email, passwordDigest, currentUser)
            .then(email => res.json(email))
    }
    
})

module.exports = router