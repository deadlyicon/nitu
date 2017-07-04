const express = require('express')
const router = express.Router()
const database = require('../database/database')
const actions = require('./userActions')

router.get('/', actions.loggedIn, (req, res) => {
  res.render('home')
})

router.get('/settings', actions.loggedIn, (req, res) => {
  database.getProfile(req.session.user)
    .then(profile => {
      res.render('settings', { profile: profile })
    })
})

// router.post('/settings', (req, res) => {
//   const profileData = {
//     userId: req.sessions.user,
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: 
//   }
// })

module.exports = router
