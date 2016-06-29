const Nightmare = require('nightmare')

class NightmareHl {

  constructor (username, dob, password, nightmareOptions) {
    this.username = username
    this.dob = dob
    this.password = password
    this.nightmareOptions = nightmareOptions || {}
  }

  scrape () {
    return new Nightmare(this.nighmareOptions)
      .goto('https://online.hl.co.uk/my-accounts/login-step-one')
      .type('input[name="username"]', this.username)
      .type('input[name="DoB"]', this.dob)
      .click('input[name="submit"]')
      .wait('select')
      .evaluate(p => $.map($('select'), el => $(el).val(p[el.title[10] - 1])), this.password)
      .click('input[name="submit"]')
      .wait('#main-content')
      .evaluate(() => $('#main-content tr:nth-child(1) strong > a').text().trim())
      .end()
      .catch(error => console.error('Search failed:', error))
  }
}

module.exports = NightmareHl
