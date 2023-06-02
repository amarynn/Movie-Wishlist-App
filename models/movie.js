const db = require('../db/db.js')

const Movies = {
    findAll: () => {
        const sql = `SELECT * FROM movies order by id`

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
    },
    update:(id, title, description, imgLink) => {
        const sql = `
        UPDATE movies SET title = $1, description = $2, img_link = $3 where id=$4
            RETURNING *
        `
       return db.query(sql, [title, description, imgLink, id])
        .then(dbRes => dbRes.rows[0])
    },
    delete: (id) => {
        const sql = `DELETE FROM movies WHERE id = $1`

        return db.query(sql, [id])
    }
}

module.exports = Movies