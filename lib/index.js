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

    let result = {};
    del = del || ".";

    iterateObject(obj, (value, key) => {
        typpy(value, Object)
            ? iterateObject(
                  flattenObject(value, del)
                , (flatValue, xkey) => result[key + del + xkey] = flatValue
              )
            : result[key] = obj[key]
            ;
    });

    return result;
};
