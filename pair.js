// this function will work odd of students if you are going to use it for even remove the push line
function pairGeneratorByHalim(students, sprint) {
  // also the number of sprints should not surpass 16 because it will be repeated if so
  if (sprint > 16) {
    return false;
  }
  students.push("alone");
  var arr = [];
  var double = students.concat(students);
  // create "decalage" by the number of sprits
  for (var i = 0; i < students.length; i++) {
    arr[i] = double[i + sprint];
  }
  var pairs = "";
  // just add the pairs
  for (var i = 0; i < students.length; i = i + 2) {
    pairs = pairs + " , " + arr[i] + " and " + arr[i + 1];
  }
  return pairs;
}
