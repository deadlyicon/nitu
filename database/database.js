const pgp = require('pg-promise')()
const database = pgp({database: 'nitu'})

const verifyEmail = adminEmail => {
  const query = `
    SELECT
      salt
    FROM
      admin
    WHERE
      email = $1
  `

  return database.one(query, [adminEmail])
}

const verifyPassword = (email, password) => {
  const query = `
    SELECT
      id
    FROM
      admin
    WHERE
      email = $1 AND password = $2
  `

  return database.one(query, [email, password])
}

const getPosts = () => {
  const query = `
    SELECT
      *
    FROM
      posts
    ORDER BY id DESC
  `

  return database.manyOrNone(query)
}

const createPost = (title, videoUrl, content) => {
  const query = `
    INSERT INTO
      posts (title, video_url, content)
    VALUES ($1, $2, $3)
    RETURNING
      *
  `

  return database.one(query, [title, videoUrl, content])
}

module.exports = {
  verifyEmail,
  verifyPassword,
  getPosts,
  createPost
}
