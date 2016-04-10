const flatten = require("../lib");

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
