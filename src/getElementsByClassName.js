// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, classElements) {

  if (typeof classElements === 'undefined') {
    var classElements = [];
  }

  if (typeof node === 'undefined') {
    var node = document.body;
  }

  if (node.classList) {
    if (node.classList.contains(className)) {
      classElements.push(node);
    }
  }

  if (node.childNodes.length > 0) {
    node.childNodes.forEach(childNode => {
      return getElementsByClassName(className, childNode, classElements);
    });
  }

  return classElements;
};
