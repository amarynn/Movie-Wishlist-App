const db = require('../db/db.js')

const Wishlist = {
    addNew: (movieId, currentUserId) => {
        const sql = `
            INSERT INTO wishlisted(user_id, movie_id)
            VALUES($1, $2)
        `

        return db.query(sql, [currentUserId, movieId])
    }
}

module.exports = Wishlist