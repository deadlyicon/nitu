const express = require('express')
const database = require('../database/database')
const router = express.Router()

router.get('/', (req, res) => {
  Promise.all([
    database.getPosts(),
    database.getParagraphs()
  ])
  .then(data => {
    res.render('index', {
      posts: data[0],
      paragraphs: data[1],
      latestPost: data[0][0]
    })
  })
  .catch(error => {
    console.log('error getting posts', error)
  })
})

module.exports = router
