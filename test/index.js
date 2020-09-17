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

test('strings', function (t) {
  t.deepEqual(flatten('some string'), 'some string', 'string value at root');
  t.end();
})

test('arrays', function (t) {
  t.deepEqual(flatten({
    personalDetails: {
        firstName: 'Frank',
        lastName: 'Sinatra',
        children: [
            { personalDetails: { firstName: 'Nancy', lastName: 'Sinatra' } },
            { personalDetails: { firstName: 'Tina', lastName: 'Sinatra' } },
            { personalDetails: { firstName: 'Frank', lastName: 'Sinatra' } }
        ]
    }
  }), {
    'personalDetails.firstName': 'Frank',
    'personalDetails.lastName': 'Sinatra',
    'personalDetails.children': [
      {
        'personalDetails.firstName': 'Nancy',
        'personalDetails.lastName': 'Sinatra'
      },
      {
        'personalDetails.firstName': 'Tina',
        'personalDetails.lastName': 'Sinatra'
      },
      {
        'personalDetails.firstName': 'Frank',
        'personalDetails.lastName': 'Sinatra'
      },
    ]
  }, 'flatten objects inside arrays');

  t.deepEqual(flatten({
    latlon: [ -1, -22]
  }, '_'), {
    latlon: [ -1, -22]
  }, 'array with numbers');

  t.deepEqual(flatten({
    personalDetails: {
        firstName: 'Frank',
        lastName: 'Sinatra',
        children: [
            { personalDetails: { firstName: 'Nancy', lastName: 'Sinatra' } },
        ]
    }
  }, '_'), {
    'personalDetails_firstName': 'Frank',
    'personalDetails_lastName': 'Sinatra',
    'personalDetails_children': [
      {
        'personalDetails_firstName': 'Nancy',
        'personalDetails_lastName': 'Sinatra'
      },
    ]
  }, 'custom delimiter');

  t.deepEqual(flatten({
    personalDetails: {
        firstName: 'Frank',
        lastName: 'Sinatra',
        children: [
            { personalDetails: { isRapper: false, name: { firstName: 'Nancy' } } },
        ]
    }
  }), {
    'personalDetails.firstName': 'Frank',
    'personalDetails.lastName': 'Sinatra',
    'personalDetails.children': [
      {
        'personalDetails.isRapper': false,
        'personalDetails.name.firstName': 'Nancy'
      },
    ]
  }, 'with false value');

  t.end();
})
