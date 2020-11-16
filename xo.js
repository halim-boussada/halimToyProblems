// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  var str = str.toLowerCase();
  var x = 0;
  var o = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x += 1;
    } else if (str[i] === "o") {
      o += 1;
    }
  }
  if (x === o) {
    return true;
  }
  return false;
}

// ES6

var xo = function (str) {
  var arr = str.split("");
  var x = 0,
    o = 0,
    r = false;
  arr.map((e) => {
    e === "o" ? o++ : e === "x" ? x++ : null;
  });
  x === o ? (r = true) : null;
  return r;
};
