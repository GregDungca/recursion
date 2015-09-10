// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (obj === undefined || typeof obj === "function") {

    return null;

  } else if (obj === null) {

    return "null";

  } else if (Array.isArray(obj)) {

    var arrayString = "[";

    obj.forEach(function(item) {
      arrayString += stringifyJSON(item) + ",";
    });

    if (obj.length) {
      arrayString = arrayString.slice(0, -1);
    }

    return arrayString += "]";

  } else if (typeof obj === "object") {

    var objString = "{";
    var validProps = 0;

    for (var prop in obj) {
      if (!(obj[prop] === undefined || typeof obj[prop] === "function")) {
        objString += "\"" + prop + "\":" + stringifyJSON(obj[prop]) + ",";
        validProps++;
      }
    }

    if (validProps) {
      objString = objString.slice(0, -1);
    }

    return objString += "}";

  } else if (typeof obj === "string") {

    return "\"" + obj  + "\"";

  } else {

    return obj.toString();

  }
};



      
