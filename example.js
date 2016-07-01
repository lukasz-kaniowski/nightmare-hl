var Nightmare = require('nightmare')
const nightmare = new Nightmare()
const hl = require('./index.js')

const password = 'yourPassword'
const username = 'yourUsername'
const dateOfBirth = '220480'

nightmare
  .use(hl.login(username, dob, password))
  .use(hl.getOverallValue())
  .end()
  .then(result => console.log(result))
