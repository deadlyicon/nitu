const express = require('express')
const bcrypt = require('bcrypt')
const database = require('../database/database')

const router = express.Router()

// verifies admin session
// should this live in a diff file?
const isLoggedIn = (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/admin/login')
  }
  else {
    next()
  }
}

// avoids rendering login page if already logged in
// this is only used for /login, should it live there?

// naw, just put it in the one place you're using it, if it's not shared. 
// I think you can move `isLoggedIn` and `loggedIn` into one middleware
const loggedIn = (req, res, next) => {
  if (!req.session.user) {
    next()
  }
  else {
    res.redirect('/admin')
  }
}

router.get('/', isLoggedIn, (req, res) => {
  res.render('admin/admin')
})

router.get('/posts', isLoggedIn, (req, res, next) => {
  database.getPosts()
    .then(posts => {
      res.render('admin/posts', { posts: posts })
    })
    .catch(next)
})

router.get('/new', isLoggedIn, (req, res) => {
  res.render('admin/new')
})

router.post('/new', (req, res, next) => {
  const { title, videoUrl, content } = req.body

  database.createPost(title, videoUrl, content)
    .then(post => {
      res.redirect('/admin/posts/'+post.id)
    })
    .catch(next)
})

router.get('/login', (req, res) => {
  if (req.session.user) {
    res.redirect('/admin')
  } else {
    res.render('admin/login')
  }
})

router.post('/login', (req, res, next) => {
  const { email, password } = req.body

  database.verifyEmail(email)
    .then(adminSalt => {
      const hashedPassword = bcrypt.hashSync(password, adminSalt.salt)
      return database.verifyPassword(email, hashedPassword)
    })
    .then(admin => {
      req.session.user = admin.id
      console.log('logging user in -before redirect-', req.session.user)
      res.redirect('/admin')
    })
    .catch(next)
})

router.get('/logout', (req, res) => {
  req.session.user = null
  res.redirect('/')
})

module.exports = router
