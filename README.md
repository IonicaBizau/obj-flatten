
# obj-flatten [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/obj-flatten.svg)](https://www.npmjs.com/package/obj-flatten) [![Downloads](https://img.shields.io/npm/dt/obj-flatten.svg)](https://www.npmjs.com/package/obj-flatten) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

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
```

## :memo: Documentation


### `flattenObject(obj, del)`
Converts nested objects in flatten ones.

#### Params
- **Object** `obj`: The object that should be converted.
- **String** `del`: The delimiter string (default: ".").

#### Return
- **Object** Flatten object



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :sparkles: Related

 - [`obj-unflatten`](https://github.com/IonicaBizau/obj-unflatten) – Convert flatten objects in nested ones.



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
