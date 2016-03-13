"use strict";
const Firebase = require('firebase');
const Querybase = require('../dist/querybase');
const QuerybaseQuery = Querybase.QuerybaseQuery;

/**
 * Detects a QuerybaseQuery
 * @param {QuerybaseQuery} query The possible QuerybaseQuery
 */
function isQuerybaseQuery(query) {
  const type = Object.getPrototypeOf(query);
  return type === QuerybaseQuery.prototype;
}

/**
 * Detects a Querybase ref
 * @param {Querybase} ref The possible Querybase ref
 */
function isQuerybaseRef(ref) {
  const type = Object.getPrototypeOf(ref);
  return type === Querybase.prototype;  
}

/**
 * Detects a function
 * @param {Function} fn The possible function
 */
function isFunction(fn) {
  const functionType = typeof function() {};
  const currentType = typeof fn;
  return currentType === functionType;
}

/**
 * Detects a Firebase ref
 * @param {Firebase} ref The possible Firebase ref
 */
function isFirebaseRef(ref) {
  return isFunction(ref.on);
}

/**
 * Detects a FirebaseQUery
 * @param {FirebaseQUery} query The possible FirebaseQUery
 */
function isFirebaseQuery(query) {
  return isFunction(query.startAt);
}

/**
 * Stringifies two objects and compares them as values
 * @param {string} obj1 First object to compare
 * @param {string} obj2 Second object to compare
 */
function compareObjects(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

module.exports.isFunction = isFunction;
module.exports.isFirebaseRef = isFirebaseRef;
module.exports.isFirebaseQuery = isFirebaseQuery;
module.exports.isQuerybaseRef = isQuerybaseRef;
module.exports.isQuerybaseQuery = isQuerybaseQuery;
module.exports.compareObjects = compareObjects;