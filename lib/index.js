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
 * @param {Object} obj The object that should be converted
 * @return {Object} Flatten object
 */
module.exports = function flattenObject (obj) {

    let result = {};

    iterateObject(obj, (value, key) => {
        typpy(value, Object)
            ? iterateObject(
                  flattenObject(value)
                , (flatValue, xkey) => result[key + "." + xkey] = flatValue
              )
            : result[key] = obj[key]
            ;
    });

    return result;
};
