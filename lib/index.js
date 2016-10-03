"use strict";

const iterateObject = require("iterate-object")
    , typpy = require("typpy")
    ;

/**
 * flattenObject
 * Converts nested objects in flatten ones.
 *
 * @name flattenObject
 * @function
 * @param {Object} obj The object that should be converted.
 * @param {String} del The delimiter string (default: ".").
 * @return {Object} Flatten object
 */
module.exports = function flattenObject (obj, del) {
    if (typpy(obj, String)) return obj;
    let result = {};
    del = del || ".";

    iterateObject(obj, (value, key) => {
        if (typpy(value, Object)) {
          iterateObject(
                flattenObject(value, del)
              , (flatValue, xkey) => { result[key + del + xkey] = flatValue; }
            );
        } else if (typpy(value, Array)) {
          result[key] = value.map(item => flattenObject(item, del));
        } else {
          result[key] = obj[key];
        }
    });

    return result;
};
