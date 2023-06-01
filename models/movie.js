const db = require('../db/db.js')

const Movie = {
    findAll: () => {
        const sql = `SELECT * FROM movies`

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    },
    create: (title, description, imgLink) => {
        const sql = `
            INSERT INTO movies(title, description, img_link)
            VALUES($1, $2, $3)
            RETURNING *
        `

        return db
            .query(sql, [title, description, imgLink])
            .then(dbRes => dbRes.rows[0])
    }
}