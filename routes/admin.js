const express = require('express')
const authenticate = require('./authenticate')
const database = require('../database/database')
const router = express.Router()

router.get('/', (req, res) => {
  if (!req.session.user)
    res.redirect('/admin/login')
  else
    res.render('admin/admin')
})

router.get('/login', (req, res) => {
  res.render('admin/login')
})

router.post('/login', (req, res) => {
  const adminData = {
    email: req.body.email,
    password: req.body.password
  }

  authenticate(adminData)
    .then(verifiedAdmin => {
      if (!verifiedAdmin) {
        res.redirect('/admin/login')
      }
      else {
        req.session.user = verifiedAdmin.id
        res.redirect('/admin')
      }
    })
    .catch(error => {
      console.error('server error:1', error)
      res.redirect('/admin/login')
    })
})

router.get('/logout', (req, res) => {
  req.session.user = null
  res.redirect('/')
})

router.get('/posts', (req, res) => {
  if (!req.session.user)
    res.redirect('/admin/login')
  else
    database.getPosts()
      .then(posts => {
        res.render('admin/posts', { posts: posts })
      })
      .catch(error => {
        console.error('server error:2', error)
      })
})

router.get('/new', (req, res) => {
  if (!req.session.user)
    res.redirect('/admin/login')
  else
    res.render('admin/new')
})

router.post('/new', (req, res) => {
  const { title, videoUrl, content } = req.body

  database.createPost(title, videoUrl, content)
    .then(result => {
      res.redirect('/admin/posts')
    })
    .catch(error => {
      console.log('server error:3', error)
      res.redirect('/admin')
    })
})

module.exports = router
