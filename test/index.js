'use strict'

const test = require('tape');
const flatten = require('../lib');

test('flatten', function (t) {

  t.end();
})

test('separator', function (t) {
  t.deepEqual(flatten({
      name: {
          first: 'Johnny'
        , last: 'B.'
      }
    , age: 20
  }), {
    'name.first': 'Johnny',
    'name.last': 'B.',
    age: 20
  }, 'default separator');

  t.deepEqual(flatten({
      name: {
          first: "Johnny"
        , last: "B."
      }
    , age: 20
  }, '_'), {
    'name_first': 'Johnny',
    'name_last': 'B.',
    age: 20
  }, 'custom separator');

  t.deepEqual(flatten({
      name: {
          first: 'Johnny'
        , last: 'B.'
        , more: {
          nickname: 'Job'
        }
      }
    , age: 20
  }, '_'), {
    'name_first': 'Johnny',
    'name_last': 'B.',
    'name_more_nickname': 'Job',
    age: 20
  }, 'deeper objects');

  t.deepEqual(flatten({
      name: {
          first: "Johnny"
        , last: "B."
      }
    , age: 20
  }, "_"), {
    name_first: 'Johnny',
    name_last: 'B.',
    age: 20
  });
  t.end();
})
