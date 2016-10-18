
# obj-flatten

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/obj-flatten.svg)](https://www.npmjs.com/package/obj-flatten) [![Downloads](https://img.shields.io/npm/dt/obj-flatten.svg)](https://www.npmjs.com/package/obj-flatten) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Convert nested objects in flatten ones.

## :cloud: Installation

```sh
$ npm i --save obj-flatten
```


## :clipboard: Example



```js
const flatten = require("obj-flatten");

console.log(flatten({
    name: {
        first: "Johnny"
      , last: "B."
    }
  , age: 20
}));
// => { 'name.first': 'Johnny', 'name.last': 'B.', age: 20 }

console.log(flatten({
    name: {
        first: "Johnny"
      , last: "B."
    }
  , age: 20
}, "_"));
// => { name_first: 'Johnny', name_last: 'B.', age: 20 }

console.log(flatten({
  personalDetails: {
      firstName: 'Frank',
      lastName: 'Sinatra',
      children: [
          { personalDetails: { firstName: 'Nancy', lastName: 'Sinatra' } },
          { personalDetails: { firstName: 'Tina', lastName: 'Sinatra' } },
          { personalDetails: { firstName: 'Frank', lastName: 'Sinatra' } }
      ]
  }
}));
// => { 'personalDetails.firstName': 'Frank',
//      'personalDetails.lastName': 'Sinatra',
//      'personalDetails.children':
//       [ { 'personalDetails.firstName': 'Nancy',
//           'personalDetails.lastName': 'Sinatra' },
//         { 'personalDetails.firstName': 'Tina',
//           'personalDetails.lastName': 'Sinatra' },
//         { 'personalDetails.firstName': 'Frank',
//           'personalDetails.lastName': 'Sinatra' } ] }
```

## :memo: Documentation


### `flattenObject(obj, del)`
Converts nested objects into flattened ones.
For properties with array values, each array element is flattened in turn.

#### Params
- **Object** `obj`: The object that should be converted.
- **String** `del`: The delimiter string (default: ".").

#### Return
- **Object** Flattened object



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`vigour-util`](https://github.com/vigour-io/util) (by Vigour.io)—Utils from vigour

## :sparkles: Related

 - [`obj-unflatten`](https://github.com/IonicaBizau/obj-unflatten#readme)—Convert flatten objects in nested ones.



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
