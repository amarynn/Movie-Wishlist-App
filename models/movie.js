const db = require('../db/db.js')

const Movie = {
    findAll: () => {
        const sql = `SELECT * FROM movies`

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    }
}