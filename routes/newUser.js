const database = require('../database/database')

const newUser = (newUserData, req, res) => {
  database.findAdmin(newUserData.email)
    .then(userFound => {
      if (!userFound) {
        database.createUser(newUserData)
          .then(user => {
            const profileData = {
              firstName: newUserData.firstName,
              lastName: newUserData.lastName,
              userId: user.id,
            }
          })
      }
      else {
        res.redirect('/login')
      }
    })
}

module.exports = newUser
