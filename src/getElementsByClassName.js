// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  var results = [];

  var parse = function(element) {
    
    for (var i = 0; i < element.classList.length; i++) {
      if (className === element.classList[i]) {
        results.push(element);
      }
    }

    if (element.children.length) {
      for (var j = 0; j < element.children.length; j++) {
        parse(element.children[j]);
      }
    } else {
      return;
    }
  };

  parse(document.body);

  // var body = document.body;
  // var childNodes = document.body.childNodes;
  // console.log("targetClassName" === childNodes[3].classList[0]);

  return results;
};
