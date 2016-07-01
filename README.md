# nightmare-hl

> [Nightmare](http://www.nightmarejs.org/) plugin for scrapping http://www.hl.co.uk/

Let you scrape value of your HL portfolio

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i nightmare-hl --save
```

## Usage

```js
const hl = require('nightmare-hl')
const nightmare = new Nightmare()

const password = 'yourPassword'
const username = 'yourUsername'
const dateOfBirth = '220480'

nightmare
  .use(hl.login(username, dob, password))
  .use(hl.getOverallValue())
  .end()
  .then(result => console.log(result))
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/lukasz-kaniowski/nightmare-hl/issues)

## Author

**lukasz.kaniowski@gmail.com**

## License

Copyright © 2016 [lukasz.kaniowski@gmail.com]()
Licensed under the MIT license.
