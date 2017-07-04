const bcrypt = require('bcrypt')
const database = require('../database/database')

module.exports = authenticate = adminData => {
  return database.getSalt(adminData.email)
    .then(admin => {
      const password = bcrypt.hashSync(adminData.password, admin.salt)

      return database.verifyPassword(adminData.email, password)
    })
    .catch(error => {
      console.error('There was an error logging admin in', error)
    })
}
