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
