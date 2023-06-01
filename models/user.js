const db = require('../db/db')

const User = {
    findById: id => {
        const sql = `
            SELECT * FROM users
            WHERE id = $1
        `

        return db   
            .query(sql, [id])
            .then(dbRes => dbRes.rows[0].email)
    },

    findByEmail:  email => {
        const sql = `
            SELECT * FROM users
            WHERE email =  $1
        `

        return db
            .query(sql, [email])
            .then(dbRes => dbRes.rows[0])
    },

    create: (name, email, passwordDigest) => {
        const sql = `
            INSERT INTO users(name, email, password_digest)
            VALUES ($1, $2, $3)
            RETURNING *
        `
        return db
        .query(sql, [name, email, passwordDigest])
        .then(dbRes => dbRes.rows[0].email)
    },

    update: (name, email, passwordDigest, currentUser) => {
        const sql = `
            UPDATE users SET name = $1, email = $2, password_digest = $3 WHERE email = %4
        `
        return db
        .query(sql, [name, email, passwordDigest, currentUser])
        .then(dbRes => dbRes.rows[0].email)
    }
}

module.exports = User