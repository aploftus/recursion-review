// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // let's start with just objects, not nested
  // if first char is {, then find the next }, and pass the insides to a "key value parser"
  
  // inside the "key value parser" 
  // calls to a "string" parser, a "number" parser, etc etc
  
  // look at each char
  // store the next char so you can look at it while on curr char
  // be able to skip whitespace when checking next char
  // don't parse char by char, parse by chunk (ie a string starts and ends with quotes)

  // use sep functions for each section of grammar to parse
  // 
};
