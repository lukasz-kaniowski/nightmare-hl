module.exports = {
  login(username, dob, password) {
    return function (nightmare) {
      nightmare
        .goto('https://online.hl.co.uk/my-accounts/login-step-one')
        .type('input[name="username"]', username)
        .type('input[name="DoB"]', dob)
        .click('input[name="submit"]')
        .wait('select')
        .evaluate(p => $.map($('select'), el => $(el).val(p[el.title[10] - 1])), password)
        .click('input[name="submit"]')
        .wait('#main-content')
    }
  },
  getOverallValue() {
    return function (nightmare) {
      nightmare
        .evaluate(() => $('#main-content tr:nth-child(1) strong > a').text().trim())
    }
  }
}
