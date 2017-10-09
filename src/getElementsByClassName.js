// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  
  var searchNodes = function(node) {
    if (node) {
      if (node.classList && node.classList.contains(className)) {
        results.push(node);
      }
      if (node.hasChildNodes()) {
        node.childNodes.forEach(searchNodes);
      }
    }
  };
  
  searchNodes(document.body);
  return results;

};
