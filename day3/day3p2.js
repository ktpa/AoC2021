const fs = require("fs");

var contentArr = fs.readFileSync("./data/day3", "utf8").split("\r\n");

// oxygen generator rating
function o2Gen(latestPos, array) {
  var zero = 0;
  var one = 0;
  var temp = [];
  for (i in array) {
    if (array[i].charAt(latestPos) == 0) {
      zero++;
    } else {
      one++;
    }
  }

  if (zero > one) {
    temp = array.filter((_) => {
      return _.charAt(latestPos) != 1;
    });
  } else {
    temp = array.filter((_) => {
      return _.charAt(latestPos) != 0;
    });
  }

  array = temp;

  if (latestPos == array[0].toString().length || array.length == 1) {
    return array;
  }
  return o2Gen(latestPos + 1, array);
}

//CO2 scrubber rating
function co2Gen(latestPos, array) {
  var zero = 0;
  var one = 0;
  var temp = [];
  for (i in array) {
    if (array[i].charAt(latestPos) == 0) {
      zero++;
    } else {
      one++;
    }
  }
  if (one > zero) {
    temp = array.filter((_) => {
      return _.charAt(latestPos) != 1;
    });
  } else if (zero > one) {
    temp = array.filter((_) => {
      return _.charAt(latestPos) != 0;
    });
  } else {
    temp = array.filter((_) => {
      return _.charAt(latestPos) != 1;
    });
  }

  array = temp;
  if (latestPos == array[0].length || array.length == 1) {
    return array;
  }
  return co2Gen(latestPos + 1, array);
}

var o2rating = o2Gen(0, contentArr).toString();
var co2rating = co2Gen(0, contentArr).toString();
o2rating = parseInt(o2rating, 2);
co2rating = parseInt(co2rating, 2);

console.log("O2 rating: " + o2rating);
console.log("CO2 rating: " + co2rating);
console.log(o2rating * co2rating);
