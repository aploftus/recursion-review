// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return obj + '';
  }
  if (Array.isArray(obj)) {
    return '[' + obj.map(function(element) {
      return stringifyJSON(element);
    }).join(',') + ']';
  }
  if (typeof obj === 'object') {
    var results = [];
    for (key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      } else {
        results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + results.join(',') + '}';
  }
};

console.log(stringifyJSON([8]));