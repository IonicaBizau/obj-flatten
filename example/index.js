const flatten = require("../lib");

console.log(flatten({
    name: {
        first: "Johnny"
      , last: "B."
    }
  , age: 20
}));
// { 'name.first': 'Johnny', 'name.last': 'B.', age: 20 }
