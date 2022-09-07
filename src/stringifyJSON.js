// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // If object
  if (typeof obj === 'object') {
    if (obj === null) {
      return String(obj);
    } else if (Array.isArray(obj)) {
      var returnStr = '[';
      obj.forEach(function(element) {
        var returnValue = stringifyJSON(element);
        if (typeof returnValue === 'undefined') {
          returnValue = String(null);
        }
        returnStr = returnStr + returnValue + ',';
      });
      if (returnStr[returnStr.length - 1] === ',') {
        returnStr = returnStr.slice(0, returnStr.length - 1);
      }
      returnStr = returnStr + ']';
      return returnStr;
    } else {
      var returnStr = '{';
      for (var key in obj) {
        var returnValue = stringifyJSON(obj[key]);
        if (returnValue === undefined) {
          continue;
        }
        returnStr = returnStr + '\"' + key + '\":' + returnValue + ',';
      }
      if (returnStr[returnStr.length - 1] === ',') {
        returnStr = returnStr.slice(0, returnStr.length - 1);
      }
      returnStr = returnStr + '}';
      return returnStr;
    }
  }
  if (typeof obj === 'function' || typeof obj === 'undefined') {
    return undefined;
  }
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }
  return String(obj);
};