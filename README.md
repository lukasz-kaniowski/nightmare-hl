# nightmare-hl

> Nightmare scrapper for http://www.hl.co.uk/

Let you scrape value of your HL portfolio

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i nightmare-hl --save
```

## Usage

```js
const NightmareHl = require('nightmare-hl');
const password = 'yourPassword'
const username = 'yourUsername'
const dateOfBirth = '220480'

new NightmareHl(username, dateOfBirth, password)
  .scrape()
  .then(sum => console.log(sum))
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/lukasz-kaniowski/nightmare-hl/issues)

## Author

**lukasz.kaniowski@gmail.com**

## License

Copyright © 2016 [lukasz.kaniowski@gmail.com]()
Licensed under the MIT license.
