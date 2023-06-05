const db = require('../db/db.js')

const Wishlist = {
    addNew: (movieId, currentUserId) => {
        const sql = `
            INSERT INTO wishlisted(user_id, movie_id)
            VALUES($1, $2)
        `

        return db.query(sql, [currentUserId, movieId])
    },

    findAllForUser: (currentUserId) => {
        const sql = `SELECT * FROM wishlisted INNER JOIN movies ON wishlisted.movie_id = movies.id WHERE user_id = $1`

        return db
            .query(sql, [currentUserId])
            .then(dbRes => dbRes.rows)
    },

    removeItem: (movieId, userId) => {
        const sql = `DELETE FROM wishlisted WHERE movie_id = $1 AND user_id = $2`

        return db.query(sql, [movieId, userId])
    }
}

module.exports = Wishlist